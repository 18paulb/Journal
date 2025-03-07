import { NextResponse } from 'next/server';
import { getMediaForJournalEntry } from '@/lib/aws/s3';
import DateFactory from '@/lib/date-factory';
import { toBase64, getMimeTypePrefix } from '@/lib/photo-manipulator';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function GET(request, { params }) {

  const email = (await getSession()).user?.email
  if (!email) return NextResponse.json({message: "error fetching email"});

  const date = params.date;

  let dateObject = DateFactory.convertStringToDateObject(date);
  const mediaData = await getMediaForJournalEntry(email, dateObject);
  let audios = mediaData.audios;
  let images = mediaData.images;

  let audioData = audios.map((audio) => {
    const base64String = toBase64(audio.mediaBuffer);
    const audioUrl = getMimeTypePrefix(
      base64String,
      audio?.mediaKey?.split('.')?.pop()?.toLowerCase()
    );
    return {
      key: audio.mediaKey,
      audio: audioUrl,
    };
  });

  let imageData = images.map((photo) => {
    const base64String = toBase64(photo.mediaBuffer);
    const photoUrl = getMimeTypePrefix(
      base64String,
      photo?.mediaKey?.split('.')?.pop()?.toLowerCase()
    );
    return {
      key: photo.mediaKey,
      image: photoUrl,
    };
  });

  return NextResponse.json({
    audios: audioData,
    images: imageData,
  });
}
