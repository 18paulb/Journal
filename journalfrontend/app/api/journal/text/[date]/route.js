import { getJournalEntry } from "@/app/api/aws/dynamodb"

export async function GET(
    request,
    { params }
  ) {
    const authHeader = request.headers.get("authorization");
    const email = authHeader?.split(" ")[1];

    const date = params.date;
  
    const entry = await getJournalEntry(date, email);
  
    return Response.json({
      journalEntry: entry
    });
  }