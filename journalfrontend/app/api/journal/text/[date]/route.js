import { NextResponse } from 'next/server';
import { getJournalEntry } from '@/lib/aws/dynamodb';

export async function GET(request, { params }) {
  const authHeader = request.headers.get('authorization');
  const email = authHeader?.split(' ')[1];

  const date = params.date;

  const entry = await getJournalEntry(date, email);

  return NextResponse.json({
    journalEntry: entry,
  });
}
