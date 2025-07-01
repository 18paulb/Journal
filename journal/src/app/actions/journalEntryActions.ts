'use server';

import { deleteImage } from '@/lib/aws/s3';
import { deleteAudio } from '@/lib/aws/s3';
import { getJournalEntry as getEntry } from '@/lib/aws/dynamodb';

export async function uploadJournalEntry() {}

export async function deleteJournalEntry(date: string) {
  console.log(date);
}

export async function deleteEntryImage(key: string) {
  await deleteImage(key);
}

export async function deleteEntryAudio(key: string) {
  await deleteAudio(key);
}

export async function getJournalEntry(date: string, email: string) {
  return await getEntry(date, email)
}