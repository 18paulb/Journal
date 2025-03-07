import { NextResponse } from 'next/server';

import { getJournalEntryCount } from '@/lib/aws/dynamodb';

import { getSession } from '@auth0/nextjs-auth0/edge';


export async function GET(request) {
  
  const email = (await getSession()).user?.email
  if (!email) return NextResponse.json({message: "error fetching email"});

  let count = await getJournalEntryCount(email);

  return NextResponse.json({
    count: count,
  });
}
