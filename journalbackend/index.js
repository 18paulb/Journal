import express from 'express';
import { writeJournalEntry, getJournalEntries, getJournalEntry } from './aws/dynamodb.js';
import cors from 'cors'
import { getRedisClient } from './redis.js';


const app = express();
const PORT = 8000
const HOSTNAME = 'localhost'

app.use(cors({
    origin: '*'
}))

app.use(express.json())


// TODO: Probably going to want to store REDIS entries better because not sure if it scales well

app.get('/journal-entries', async (req, res) => {

    let redisClient = await getRedisClient()
    const { email } = req.query


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

app.get('/journal-entry', async (req, res) => {
    const { date, email } = req.query;
    const entry = await getJournalEntry(date, email);
    res.send(entry);
})

app.post('/write-journal', async (req, res) => {

    let redisClient = await getRedisClient()

    let entry = req.body.entry
    let title = req.body.title
    let email = req.body.email

    const today = new Date().toISOString().split('T')[0];

    await writeJournalEntry(entry, title, today, email)

    // TODO: Temporary solution, after saving journal entry, delete entries from redis so that it is forced to fetch all new entries
    await redisClient.del(email)

    res.sendStatus(200)
})

app.post('/clear-cache', async (req, res) => {

    let redisClient = await getRedisClient()

    const email = req.body.email

    // Deleting a key
    redisClient.del(email, (err, response) => {
        if (err) {
            console.error('Error deleting key:', err);
            res.sendStatus(500)
        } else if (response === 1) {
            console.log('Key deleted successfully');
            res.sendStatus(200)
        } else {
            console.log('Key does not exist');
            res.sendStatus(400)
        }
    });
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})
