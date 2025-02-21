import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand,
    ListObjectsV2Command
} from "@aws-sdk/client-s3";

const photoBucketName = 'journalappphotos'
const audioBucketName = 'journalappaudio'

const s3Client = new S3Client({});

export async function deleteAudio(key) {
    try {
        const command = new DeleteObjectCommand({
          Bucket: audioBucketName,
          Key: key,
        });
    
        const response = await s3Client.send(command);
        console.log("Successfully deleted:", key, response);
        return response;
      } catch (error) {
        console.error("Error deleting object:", error);
        throw error;
      }
}

export async function deleteImage(key) {
    try {
      const command = new DeleteObjectCommand({
        Bucket: photoBucketName,
        Key: key,
      });
  
      const response = await s3Client.send(command);
      console.log("Successfully deleted:", key, response);
      return response;
    } catch (error) {
      console.error("Error deleting object:", error);
      throw error;
    }
  }

export async function uploadPhoto(image, email, today) {
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // Gets the month (0-based, so add 1)
    const day = today.getDate();

    const key = `${email}/${year}/${month}/${day}/${image.originalname}`

    const input = {
        Bucket: photoBucketName,
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

export async function getMediaForJournalEntry(email, date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Gets the month (0-based, so add 1)
    const day = date.getDate();

    // Prepare the input for both photo and audio
    const photoInput = {
        Bucket: photoBucketName,
        Prefix: `${email}/${year}/${month}/${day}/`,
        StartAfter: `${email}/${year}/${month}/${day}/`
    };
    const audioInput = {
        Bucket: audioBucketName,
        Prefix: `${email}/${year}/${month}/${day}/`,
        StartAfter: `${email}/${year}/${month}/${day}/`
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
    const fetchPhotoPromises = photos.map((item) =>
        fetchMedia(item, photoBucketName)
    );
    const fetchAudioPromises = audios.map((item) =>
        fetchMedia(item, audioBucketName)
    );

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

    const key = `${email}/${year}/${month}/${day}/${audio.originalname}`

    const uploadParams = {
        Bucket: audioBucketName,
        Key: key,
        Body: audio.buffer,
        ContentType: audio.mimetype,
      };
    
      try {
        // Upload the buffer to S3
        const command = new PutObjectCommand(uploadParams);
        const data = await s3Client.send(command);
        console.log("Upload Success", data);
      } catch (err) {
        console.error("Error uploading buffer to S3:", err);
      }
}