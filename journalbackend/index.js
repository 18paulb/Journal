import express from 'express';
import { getJournalEntries, getJournalEntry, saveJournalEntry } from './aws.js';
import cors from 'cors'
import { getRedisClient } from './redis.js';


const app = express();
const PORT = 8000
const HOSTNAME = 'localhost'

app.use(cors({
    origin: '*'
}))

app.use(express.json())

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/journal-entries', async (req, res) => {

    let redisClient = await getRedisClient()

    // First see if there are cached journal entries, that way we don't have to fetch from s3 again
    let cachedEntries = await redisClient.get('journalEntries');

    if (cachedEntries === null) {
        let entries = await getJournalEntries()

        // Redis stores as a string
        await redisClient.set('journalEntries', JSON.stringify(entries));
        // Set expieration on retreived journal entries for 1 hour
        await redisClient.expire('journalEntries', 3600)
        console.log("returning " + entries.length + " entries")
        res.send(entries)
    }
    else {
        let entries = JSON.parse(cachedEntries);
        res.send(entries)
    }
})

app.get('/journal-entry', async (req, res) => {
    const { date } = req.query; // Grab the 'date' from the query parameters
    const entry = await getJournalEntry(date); // Pass the 'date' to the function
    res.send(entry);
})

app.post('/write-journal', async (req, res) => {

    let redisClient = await getRedisClient()

    let entry = req.body.entry

    await saveJournalEntry(entry)

    // TODO: Temporary solution, after saving journal entry, delete entries from redis so that it is forced to fetch all new entries
    await redisClient.del("journalEntries")

    res.sendStatus(200)
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})
