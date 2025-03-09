import { NextResponse } from 'next/server';
import { getJournalEntry } from '@/lib/aws/dynamodb';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function GET(request, { params }) {
  try {
    const email = (await getSession()).user?.email;
    if (!email) return NextResponse.json({ message: 'error fetching email' });

    const date = params.date;

    const entry = await getJournalEntry(date, email);

    return NextResponse.json({
      journalEntry: entry,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error fetching journal' }, { status: 500 });
  }
}
