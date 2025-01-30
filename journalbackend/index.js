import express from 'express';
import { writeJournalEntry, getJournalEntries, getJournalEntry } from './aws/dynamodb.js';
import cors from 'cors'
import multer from 'multer'
import { getRedisClient } from './redis.js';
import { getPhotosForJournalEntry, uploadPhoto } from './aws/s3.js';
import DateUtil from '../shared/utils/DateUtil.js'

const app = express();
const PORT = process.env.PORT || 8000; // Use .env port or 8000 for local development
const HOSTNAME = '0.0.0.0'; // Allow all incoming requests in production

const storage = multer.memoryStorage()
const upload = multer({ storage })

app.use(cors({
    origin: '*'
}))

app.use(express.json())

// Define routes
const apiRouter = express.Router();

const dateUtil = new DateUtil()

// TODO: Probably going to want to store REDIS entries better because not sure if it scales well
apiRouter.get('/', (req,res) => {
    res.status(200).json({ message: 'Successfully Pinged Backend' });
})

apiRouter.get('/journal-entries', async (req, res) => {

    let redisClient = await getRedisClient()

    const email = req.headers['authorization']?.split(' ')[1];``

    // First see if there are cached journal entries, that way we don't have to fetch from s3 again
    let cachedEntries = await redisClient.get(email);

    if (cachedEntries === null) {
        let entries = await getJournalEntries(email)

        // Redis stores as a string
        await redisClient.set(email, JSON.stringify(entries));
        // Set expiration on retreived journal entries for 1 hour
        await redisClient.expire(email, 3600)
        res.send(entries)
    }
    else {
        let entries = JSON.parse(cachedEntries);
        res.send(entries)
    }
})

apiRouter.get('/journal-entry', async (req, res) => {
    const { date } = req.query;
    const email = req.headers['authorization']?.split(' ')[1];

    const entry = await getJournalEntry(date, email);
    let dateObject = dateUtil.convertStringToDateObject(date)
    const photos = await getPhotosForJournalEntry(email, dateObject)

    let imageData = photos.map(photo => ({
        image: photo.imageBuffer.toString("base64")
    }))

    res.json({
        journalEntry: entry,
        images: imageData
    })
})

// As of right now, backend is only expecting one image to be uploaded
apiRouter.post('/write-journal', upload.single('image'), async (req, res) => {

    try {
        let redisClient = await getRedisClient()

        let entry = req.body.entry
        let title = req.body.title
        let email = req.body.email
        let image = req.file

        const today = dateUtil.getTodayDate()
        const todayString = dateUtil.getDateString(today)

        await writeJournalEntry(entry, title, todayString, email)
        
        if (image) {
            await uploadPhoto(image, email, today)
        }

        // TODO: Temporary solution, after saving journal entry, delete entries from redis so that it is forced to fetch all new entries
        await redisClient.del(email)

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
    }
})

apiRouter.post('/clear-cache', async (req, res) => {

    let redisClient = await getRedisClient()

    const email = req.body.email

    const response = await redisClient.del(email);

    if (response === 1) {
        console.log('Key deleted successfully');
        res.status(200).json({ message: 'Cache cleared successfully' });
    } else {
        console.log('Key does not exist');
        res.status(200).json({ message: 'No cache entry found' });
    }
})

// Prepend `/api` to all routes
app.use('/api', apiRouter);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})
