import { getMediaForJournalEntry, uploadPhoto, uploadAudio, deleteAudio, deleteImage } from "@/app/api/aws/s3"
import DateFactory from "@/app/api/utils/DateFactory"
import { toBase64, getMimeTypePrefix } from "@/app/api/utils/photoManipulator";

export async function GET(
    request,
    { params }
) {

    const dateUtil = new DateFactory()

    const authHeader = request.headers.get("authorization");
    const email = authHeader?.split(" ")[1];

    const date = params.date;

    let dateObject = dateUtil.convertStringToDateObject(date)
    const mediaData = await getMediaForJournalEntry(email, dateObject)
    let audios = mediaData.audios
    let images = mediaData.images

    let audioData = audios.map((audio) => {
        const base64String = toBase64(audio.mediaBuffer)
        const audioUrl = getMimeTypePrefix(base64String, audio?.mediaKey?.split('.')?.pop()?.toLowerCase())
        return {
            key: audio.mediaKey,
            audio: audioUrl
        }
    })

    let imageData = images.map((photo) => {
        const base64String = toBase64(photo.mediaBuffer)
        const photoUrl = getMimeTypePrefix(base64String, photo?.mediaKey?.split('.')?.pop()?.toLowerCase())
        return {
            key: photo.mediaKey,
            image: photoUrl
        }
    })

    return Response.json({
        audios: audioData,
        images: imageData
    });
}