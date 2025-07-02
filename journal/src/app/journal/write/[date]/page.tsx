import { getJournalEntry } from '@/lib/aws/dynamodb';
import { getSession } from '@auth0/nextjs-auth0/edge';
import JournalEntryEditor from './journalWriteComponent';

interface PageProps {
  params: {
    date: string;
  };
}

export default async function Index({ params }: PageProps) {
  const today = (await params).date;
  const session = await getSession();
  const user = session?.user;

  const entry = await getJournalEntry(today, user?.email);

  return <JournalEntryEditor entry={entry}></JournalEntryEditor>;
}
