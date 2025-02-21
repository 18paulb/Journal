import { getJournalEntries } from "@/app/api/aws/dynamodb";

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  const email = authHeader?.split(" ")[1];

  let entries = await getJournalEntries(email);

  return Response.json(entries);
}
