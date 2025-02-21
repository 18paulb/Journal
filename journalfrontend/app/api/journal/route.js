import { NextResponse } from "next/server";
import { writeJournalEntry } from "@/lib/aws/dynamodb";
import { uploadAudio, uploadPhoto } from "@/lib/aws/s3";
import DateFactory from "@/lib/DateFactory";

export async function POST(request) {
  try {

    const formData = await request.formData();

    // Extract text fields
    const entry = formData.get("entry");
    const title = formData.get("title");
    const email = formData.get("email");
    const todayString = formData.get("date");

    if (!entry || !email || !todayString) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const today = DateFactory.convertStringToDateObject(todayString);

    // Extract file uploads
    const image = formData.get("image"); // File object or null
    const audio = formData.get("audio"); // File object or null

    // Save journal entry
    await writeJournalEntry(entry, title, todayString, email);

    // Process image upload
    if (image && image instanceof Blob) {
      await uploadPhoto(image, email, today);
    }

    // Process audio upload
    if (audio && audio instanceof Blob) {
      await uploadAudio(audio, email, today);
    }

    return NextResponse.json({ message: "Journal entry saved successfully" });
  } catch (error) {
    console.error("Error handling journal entry:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
