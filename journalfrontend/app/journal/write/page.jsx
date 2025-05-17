import { getJournalEntry } from '@/lib/aws/dynamodb';
import DateFactory from '@/lib/client/date-factory';
import { getSession } from '@auth0/nextjs-auth0/edge';
import JournalEntryEditor from './journalWriteComponent';

export default async function Index() {
  const session = await getSession();
  const user = session?.user;

  const today = DateFactory.getLocalDateString();
  const entry = await getJournalEntry(today, user.email);

  return <JournalEntryEditor entry={entry}></JournalEntryEditor>;
}
