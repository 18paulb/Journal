import { writeJournalEntry } from "./dynamodb.js"
import { getJournalEntries } from "./s3.js"

async function transferS3toDynamo() {

    let entries = await getJournalEntries()

    for (let i = 0; i < entries.length; ++i) {
        writeJournalEntry(entries[i].text, entries[i].date, entries[i].date)
    }
}
