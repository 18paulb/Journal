import { NextResponse } from "next/server";

import { getJournalEntryCount } from "@/lib/aws/dynamodb";

export async function GET(request) {
  const authHeader = request.headers.get("authorization");
  const email = authHeader?.split(" ")[1];

  let count = await getJournalEntryCount(email);

  return NextResponse.json({
    count: count
  });
}
