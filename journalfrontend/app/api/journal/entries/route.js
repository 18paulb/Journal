import { NextResponse } from 'next/server';
import { getJournalEntries } from '@/lib/aws/dynamodb';
import { getSession } from '@auth0/nextjs-auth0/edge';

export async function GET() {
  const email = (await getSession()).user?.email;

  if (!email) return NextResponse.json({ message: 'error fetching email' });

  let entries = await getJournalEntries(email);

  return NextResponse.json(entries);
}
