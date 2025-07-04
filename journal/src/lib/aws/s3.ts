import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
  ListObjectsV2CommandInput,
  _Object
} from '@aws-sdk/client-s3';
import { StatusCode } from '@/lib/enums/status-code';
import S3Error from '@/lib/error/s3-error';
import InvalidParamsError from '@/lib/error/invalid-params';
import MediaUploadError from '@/lib/error/media-upload-error';
import { Readable } from 'stream';
import { MediaData } from '@/app/models/media-data';
import { MediaItemBuffer } from '@/app/models/media-item-buffer';


const photoBucketName = 'journalappphotos';
const audioBucketName = 'journalappaudio';

const s3Client = new S3Client(
  {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS!,
      secretAccessKey: process.env.AWS_SECRET!,
    }
  }
);

export async function deleteAudio(key: string) {
  if (!key) throw new InvalidParamsError('Key is invalid', StatusCode.BAD_REQUEST);

  const command = new DeleteObjectCommand({
    Bucket: audioBucketName,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch {
    throw new S3Error('Error deleting audio', StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteImage(key: string) {
  if (!key) throw new InvalidParamsError('Key is invalid', StatusCode.BAD_REQUEST);

  const command = new DeleteObjectCommand({
    Bucket: photoBucketName,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch {
    throw new S3Error('Error deleting image', StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteAllJournalEntryMedia(date: Date, email: string) {
  console.log(date, email);
}

export async function uploadPhoto(image: File, email: string, today: Date) {
  if (!image || !email || !today)
    throw new InvalidParamsError('image, email, or date is invalid', StatusCode.BAD_REQUEST);

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Gets the month (0-based, so add 1)
  const day = today.getDate();

  // Convert the file to a buffer
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  if (!buffer) throw new MediaUploadError('Error getting image buffer', StatusCode.BAD_REQUEST);

  const key = `${email}/${year}/${month}/${day}/${image.name}`;

  const input = {
    Bucket: photoBucketName,
    Key: key,
    Body: buffer,
  };

  const command = new PutObjectCommand(input);

  try {
    await s3Client.send(command);
  } catch {
    throw new S3Error('Error uploading photo', StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function getMediaForJournalEntry(email: string, date: Date): Promise<MediaData> {
  if (!email || !date)
    throw new InvalidParamsError('Email or Date is invalid', StatusCode.BAD_REQUEST);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Gets the month (0-based, so add 1)
  const day = date.getDate();

  // Prepare the input for both photo and audio
  const photoInput = {
    Bucket: photoBucketName,
    Prefix: `${email}/${year}/${month}/${day}/`,
    StartAfter: `${email}/${year}/${month}/${day}/`,
  };
  const audioInput = {
    Bucket: audioBucketName,
    Prefix: `${email}/${year}/${month}/${day}/`,
    StartAfter: `${email}/${year}/${month}/${day}/`,
  };

  // Get the names of all the files
  const photoCommand = new ListObjectsV2Command(photoInput);
  const audioCommand = new ListObjectsV2Command(audioInput);

  // Send both requests in parallel
  const [photoResponse, audioResponse] = await Promise.all([
    s3Client.send(photoCommand),
    s3Client.send(audioCommand),
  ]);

  const photos = photoResponse.Contents || [];
  const audios = audioResponse.Contents || [];

const fetchMedia = async (item: _Object, bucketName: string): Promise<MediaItemBuffer> => {
  const mediaKey = item.Key;
  if (!mediaKey) throw new Error('Missing media key');

  const getObjectCommand = new GetObjectCommand({
    Bucket: bucketName,
    Key: mediaKey,
  });

  let mediaResponse;
  try {
    mediaResponse = await s3Client.send(getObjectCommand);
  } catch {
    throw new S3Error('Error fetching media', StatusCode.INTERNAL_SERVER_ERROR);
  }

  if (!(mediaResponse.Body instanceof Readable)) {
    throw new Error('Expected mediaResponse.Body to be a Readable stream');
  }

  const mediaBuffer = await streamToBuffer(mediaResponse.Body) as Buffer<ArrayBuffer>;

  return { mediaKey, mediaBuffer };
};
  // Fetch all photos and audios in parallel
  const fetchPhotoPromises = photos.map((item) => fetchMedia(item, photoBucketName));
  const fetchAudioPromises = audios.map((item) => fetchMedia(item, audioBucketName));

  const [imagesData, audiosData] = await Promise.all([
    Promise.all(fetchPhotoPromises),
    Promise.all(fetchAudioPromises),
  ]);

  return {
    images: imagesData,
    audios: audiosData,
  };
}

export async function uploadAudio(audio: File, email: string, today: Date) {
  if (!audio || !email || !today)
    throw new InvalidParamsError('Audio, Email, or Date is invalid', StatusCode.BAD_REQUEST);

  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Gets the month (0-based, so add 1)
  const day = today.getDate();

  const key = `${email}/${year}/${month}/${day}/${audio.name}`;

  // Convert the file to a buffer
  const bytes = await audio.arrayBuffer();
  const buffer = Buffer.from(bytes);

  if (!buffer) throw new MediaUploadError('Error getting audio buffer', StatusCode.BAD_REQUEST);

  const uploadParams = {
    Bucket: audioBucketName,
    Key: key,
    Body: buffer,
  };

  const command = new PutObjectCommand(uploadParams);

  try {
    await s3Client.send(command);
  } catch {
    throw new S3Error('Error inserting audio', StatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function getPhotoCount(email: string) {
  if (!email) throw new InvalidParamsError('Email is an invalid param', StatusCode.BAD_REQUEST);

  let totalCount = 0;
  let continuationToken = undefined;

  do {
    const params: ListObjectsV2CommandInput = {
      Bucket: photoBucketName,
      Prefix: email,
      ContinuationToken: continuationToken,
    };

    const command = new ListObjectsV2Command(params);

    let response;

    try {
      response = await s3Client.send(command);
    } catch {
      throw new S3Error('Error retrieving photo count', StatusCode.INTERNAL_SERVER_ERROR);
    }

    // Add the count from this page to the total
    if (response.Contents) {
      totalCount += response.Contents.length;
    }

    // Check if there are more objects to list
    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return totalCount;
}

async function streamToBuffer(stream: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}