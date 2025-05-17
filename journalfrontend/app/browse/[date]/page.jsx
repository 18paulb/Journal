import { getDailyPublicJournalEntries } from '@/lib/aws/dynamodb';
import BrowsePublicJournalsComponent from './browseComponent';

export default async function BrowsePage({ params }) {
  const date = (await params).date;

  const publicEntries = await getDailyPublicJournalEntries(date);

  return (
    <BrowsePublicJournalsComponent publicEntries={publicEntries}></BrowsePublicJournalsComponent>
  );
}
