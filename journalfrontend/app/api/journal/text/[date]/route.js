import { NextResponse } from "next/server";
import { getJournalEntry } from "@/lib/aws/dynamodb";

export async function GET(request, { params }) {
  try {
    const authHeader = request.headers.get("authorization");
    const email = authHeader?.split(" ")[1];

    const date = params.date;

    const entry = await getJournalEntry(date, email);

    return NextResponse.json({
      journalEntry: entry,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching journal' }, { status: 500 });
  }
}
