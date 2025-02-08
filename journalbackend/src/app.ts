import express from 'express';
import { writeJournalEntry, getJournalEntries, getJournalEntry } from './aws/dynamodb';
import cors from 'cors'
import multer from 'multer'
import { getRedisClient } from './redis';
import { getMediaForJournalEntry, uploadPhoto, uploadAudio, deleteAudio, deleteImage } from './aws/s3';
import DateUtil from './utils/DateFactory'
import { toBase64, getMimeTypePrefix } from './utils/photoManipulator';

const app = express();
const PORT = parseInt(process.env.PORT ?? "8000") // Use .env port or 8000 for local development
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

    const email: string = req.headers['authorization']!!.split(' ')[1];``

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

apiRouter.get('/journal-entry-text', async (req, res) => {
    const date = req.query.date as string; 
    const email = req.headers['authorization']!!.split(' ')[1];

    const entry = await getJournalEntry(date, email);

    res.json({
        journalEntry: entry,
    })
})

apiRouter.get('/journal-entry-media', async (req, res) => {
    const date = req.query.date as string; 
    const email = req.headers['authorization']!!.split(' ')[1];

    let dateObject = dateUtil.convertStringToDateObject(date)
    const mediaData = await getMediaForJournalEntry(email, dateObject)
    let audios = mediaData.audios
    let images = mediaData.images

    let audioData = audios.map((audio: any) => {
        const base64String = toBase64(audio.mediaBuffer)
        const audioUrl = getMimeTypePrefix(base64String, audio!!.mediaKey!!.split('.')!!.pop()!!.toLowerCase())
        return {
            key: audio.mediaKey,
            audio: audioUrl
        }
    })

    let imageData = images.map((photo: any) => {
        const base64String = toBase64(photo.mediaBuffer)
        const photoUrl = getMimeTypePrefix(base64String, photo!!.mediaKey!!.split('.')!!.pop()!!.toLowerCase())
        return {
            key: photo.mediaKey,
            image: photoUrl
        }
    })

    res.json({
        audios: audioData,
        images: imageData
    })

}) 

apiRouter.delete('/audio', async (req, res) => {
    try {
        const key: string = req.query.key as string
        await deleteAudio(key)
        res.send(200)
    } catch (error) {
        res.send(500)
    }
}) 

apiRouter.delete('/image', async (req, res) => {
    try {
        const key: string = req.query.key as string
        await deleteImage(key)
        res.send(200)
    } catch (error) {
        res.send(500)
    }
}) 

// As of right now, backend is only expecting one image to be uploaded
apiRouter.post('/write-journal',   upload.fields([
        { name: "audio", maxCount: 1 },
        { name: "image", maxCount: 1 },
        ]
    ), async (req, res) => {

    try {
        let redisClient = await getRedisClient()

        let entry = req.body.entry
        let title = req.body.title
        let email = req.body.email
        let todayString = req.body.date
        const image = req.files && "image" in req.files ? (req.files["image"] as Express.Multer.File[])[0] : undefined;
        const audio = req.files && "audio" in req.files ? (req.files["audio"] as Express.Multer.File[])[0] : undefined;

        const today = dateUtil.convertStringToDateObject(todayString)

        await writeJournalEntry(entry, title, todayString, email)
        
        if (image) {
            await uploadPhoto(image, email, today)
        }

        if (audio) {
            await uploadAudio(audio, email, today)
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
