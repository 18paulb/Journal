import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand,
    ListBucketsCommand,
    ListObjectsCommand
} from "@aws-sdk/client-s3";


const bucketName = 'brandonpauljournal'

const s3Client = new S3Client({});

export async function getJournalEntries() {

    const input = {
        Bucket: bucketName
    }

    let command = new ListObjectsCommand(input)
    const response = await s3Client.send(command)
    let allEntries = response.Contents

    let formattedEntries = []
    for (let i = 0; i < allEntries.length; ++i) {
        let entry = await getJournalEntry(allEntries[i].Key)
        formattedEntries.push({
            date: allEntries[i].Key,
            text: entry
        })
    }
    return formattedEntries
}

async function getJournalEntry(key) {

    const input = {
        Bucket: bucketName,
        Key: key
    }

    let command = new GetObjectCommand(input)
    const response = await s3Client.send(command)

    // Transform into the actual text of the journal
    return await response.Body.transformToString()

}

export async function saveJournalEntry(entryText) {
    const today = new Date().toISOString().split('T')[0];

    console.log(today)
    const input = {
        Bucket: bucketName,
        Key: today,
        Body: entryText
    }

    let command = new PutObjectCommand(input)

    const response = await s3Client.send(command)

    console.log(response)
}