import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';

const photoBucketName = 'journalappphotos';
const audioBucketName = 'journalappaudio';

const s3Client = new S3Client({});

export async function deleteAudio(key) {
  const command = new DeleteObjectCommand({
    Bucket: audioBucketName,
    Key: key,
  });

  const response = await s3Client.send(command);
  return response;
}

export async function deleteImage(key) {
  const command = new DeleteObjectCommand({
    Bucket: photoBucketName,
    Key: key,
  });

  const response = await s3Client.send(command);
  return response;
}

export async function deleteAllJournalEntryMedia(date, email) {
  console.log(date, email);
}

export async function uploadPhoto(image, email, today) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Gets the month (0-based, so add 1)
  const day = today.getDate();

  // Convert the file to a buffer
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const key = `${email}/${year}/${month}/${day}/${image.name}`;

  const input = {
    Bucket: photoBucketName,
    Key: key,
    Body: buffer,
    ContentType: image.mimetype,
  };

  let command = new PutObjectCommand(input);
  await s3Client.send(command);
}

export async function getMediaForJournalEntry(email, date) {
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

  const photoCommand = new ListObjectsV2Command(photoInput);
  const audioCommand = new ListObjectsV2Command(audioInput);

  // Send both requests in parallel
  const [photoResponse, audioResponse] = await Promise.all([
    s3Client.send(photoCommand),
    s3Client.send(audioCommand),
  ]);

  const photos = photoResponse.Contents || [];
  const audios = audioResponse.Contents || [];

  // Function to fetch data for a media item (photo or audio)
  const fetchMedia = async (item, bucketName) => {
    const mediaKey = item.Key;
    const getObjectParams = {
      Bucket: bucketName,
      Key: mediaKey,
    };

    const getObjectCommand = new GetObjectCommand(getObjectParams);
    const mediaResponse = await s3Client.send(getObjectCommand);

    const stream = mediaResponse.Body;
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const mediaBuffer = Buffer.concat(chunks);

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

export async function uploadAudio(audio, email, today) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Gets the month (0-based, so add 1)
  const day = today.getDate();

  const key = `${email}/${year}/${month}/${day}/${audio.name}`;

    // Convert the file to a buffer
  const bytes = await audio.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadParams = {
    Bucket: audioBucketName,
    Key: key,
    Body: buffer,
    ContentType: audio.mimetype,
  };

  const command = new PutObjectCommand(uploadParams);
  await s3Client.send(command);
}

export async function getPhotoCount(email) {
  let totalCount = 0;
  let continuationToken = undefined;

  do {
    const params = {
      Bucket: photoBucketName,
      Prefix: email,
      ContinuationToken: continuationToken,
    };

    const command = new ListObjectsV2Command(params);
    const response = await s3Client.send(command);

    // Add the count from this page to the total
    if (response.Contents) {
      totalCount += response.Contents.length;
    }

    // Check if there are more objects to list
    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return totalCount;
}
