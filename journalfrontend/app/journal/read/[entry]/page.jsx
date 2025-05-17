import { getJournalEntry } from '@/lib/aws/dynamodb';
import { getMediaForJournalEntry } from '@/lib/aws/s3';
import DateFactory from '@/lib/client/date-factory';
import { getSession } from '@auth0/nextjs-auth0/edge';
import { toBase64, getMimeTypePrefix } from '@/lib/client/photo-manipulator';
import JournalEntryComponent from './journalEntryComponent';

export default async function JournalEntry({ params }) {
  const date = (await params).entry;
  const dateObject = DateFactory.convertStringToDateObject(date);

  const session = await getSession();
  const user = session?.user;

  const entryPromise = getJournalEntry(date, user.email);
  const mediaPromise = getMediaForJournalEntry(user.email, dateObject);

  const [entryText, mediaData] = await Promise.all([entryPromise, mediaPromise]);

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

  return (
    <JournalEntryComponent
      entryData={entryText}
      initialEntryImages={imageData}
      initialAudioData={audioData}
    ></JournalEntryComponent>
  );
}
