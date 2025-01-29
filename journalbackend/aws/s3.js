import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsCommand
} from "@aws-sdk/client-s3";


const bucketName = 'journalappphotos'


const s3Client = new S3Client({});


export async function uploadPhoto(image, email, date) {
    const key = `${email}-${date}`
    const input = {
        Bucket: bucketName,
        Key: key,
        Body: image.buffer,
        ContentType: image.mimetype
    }

    try {
        let command = new PutObjectCommand(input)
        const response = await s3Client.send(command)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

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

export async function getJournalEntry(key) {

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

    const input = {
        Bucket: bucketName,
        Key: today,
        Body: entryText
    }

    let command = new PutObjectCommand(input)

    const response = await s3Client.send(command)

    console.log(response)
}