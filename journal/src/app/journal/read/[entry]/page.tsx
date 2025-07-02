import { getJournalEntry } from '@/lib/aws/dynamodb';
import { getMediaForJournalEntry } from '@/lib/aws/s3';
import DateFactory from '@/lib/client/date-factory';
import { getSession } from '@auth0/nextjs-auth0/edge';
import { toBase64, getMimeTypePrefix } from '@/lib/client/photo-manipulator';
import JournalEntryComponent from './journalEntryComponent';
import { MediaItemUrl } from '@/app/models/media-item-string';

export default async function JournalEntry({ params }:any) {
  const date = (await params).entry;
  const dateObject = DateFactory.convertStringToDateObject(date);

  const session = await getSession();
  const user = session?.user;

  const entryPromise = getJournalEntry(date, user?.email);
  const mediaPromise = getMediaForJournalEntry(user?.email, dateObject);

  const [entryData, mediaData] = await Promise.all([entryPromise, mediaPromise]);

  let audios = mediaData.audios;
  let images = mediaData.images;

  let audioData: MediaItemUrl[] = audios.map((audio) => {
    const base64String = toBase64(audio.mediaBuffer);
    const audioUrl = getMimeTypePrefix(
      base64String,
      audio?.mediaKey?.split('.')?.pop()?.toLowerCase() ?? ""
    );

    return {
      mediaKey: audio.mediaKey,
      mediaUrl: audioUrl,
    };
  });

  let imageData: MediaItemUrl[] = images.map((photo) => {
    const base64String = toBase64(photo.mediaBuffer);
    const photoUrl = getMimeTypePrefix(
      base64String,
      photo?.mediaKey?.split('.')?.pop()?.toLowerCase() ?? ""
    );
    return {
      mediaKey: photo.mediaKey,
      mediaUrl: photoUrl,
    };
  });

  return (
    <JournalEntryComponent
      entryData={entryData}
      initialEntryImages={imageData}
      initialAudioData={audioData}
    ></JournalEntryComponent>
  );
}
