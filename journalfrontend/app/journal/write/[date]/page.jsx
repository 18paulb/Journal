import { getJournalEntry } from '@/lib/aws/dynamodb';
import { getSession } from '@auth0/nextjs-auth0/edge';
import JournalEntryEditor from './journalWriteComponent';

export default async function Index({ params }) {
  const today = (await params).date;
  const session = await getSession();
  const user = session?.user;

  const entry = await getJournalEntry(today, user.email);

  console.log('Today: ', today);
  console.log("Today's Entry: ", entry);

  return <JournalEntryEditor entry={entry}></JournalEntryEditor>;
}
