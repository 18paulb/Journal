import express from 'express';
import { getJournalEntries } from './aws.js';
import cors from 'cors'
const app = express();
const PORT = 8000
const HOSTNAME = 'localhost'

app.use(cors({
    origi: '*'
}))

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// TODO: Cache journal results so I don't have to query s3 every time
app.get('/journal-entries', async (req, res) => {
    let entries = await getJournalEntries()
    console.log("returning " + entries.length + " entries")
    res.send(entries)
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
})
