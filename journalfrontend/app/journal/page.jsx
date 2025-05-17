import { getJournalEntries } from '@/lib/aws/dynamodb';
import JournalEntries from "./journalEntries";
import { getSession } from "@auth0/nextjs-auth0/edge";

export default async function JournalPage() {
  const session = await getSession();
  const user = session?.user;

  if (!user) return <p>Please Log In</p>

  const journals = await getJournalEntries(user.email)

  return <JournalEntries entries={journals}></JournalEntries>

}
