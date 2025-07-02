import { NextRequest, NextResponse } from 'next/server';
import { writeJournalEntry } from '@/lib/aws/dynamodb';
import { uploadAudio, uploadPhoto } from '@/lib/aws/s3';
import DateFactory from '@/lib/client/date-factory';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const entry = formData.get('entry') as string;
    const title = formData.get('title') as string;
    const email = formData.get('email') as string;
    const todayString = formData.get('date') as string;
    const isPublic = formData.get('isPublic') === 'true';

    if (!entry || !email || !todayString) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const today = DateFactory.convertStringToDateObject(todayString);

    // Extract file uploads
    const image = formData.get('image'); // File object or null
    const audio = formData.get('audio'); // File object or null

    // Save journal entry
    await writeJournalEntry(entry, title, todayString, email, isPublic);

    // Process image upload
    if (image && image instanceof Blob) {
      await uploadPhoto(image, email, today);
    }

    // Process audio upload
    if (audio && audio instanceof Blob) {
      await uploadAudio(audio, email, today);
    }

    return NextResponse.json({ message: 'Journal entry saved successfully' });
  } catch (error) {
    console.error('Error saving journal entry:', error);
    return NextResponse.json({ error: 'Error saving journal' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    return NextResponse.json({
      message: 'Not currently allowing deletion of Journals',
      request: request,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
