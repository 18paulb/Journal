"use server"

import { deleteImage } from '@/lib/aws/s3';
import { deleteAudio } from '@/lib/aws/s3';

export async function deleteJournalEntry(date) {
    console.log("Deleted");
}

export async function deleteEntryImage(key) {
    await deleteImage(key);
}

export async function deleteEntryAudio(key) {
    await deleteAudio(key);
}