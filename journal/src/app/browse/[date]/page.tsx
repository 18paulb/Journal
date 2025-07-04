import { getDailyPublicJournalEntries } from '@/lib/aws/dynamodb';
import BrowsePublicJournalsComponent from './browseComponent';

type BrowsePageParams = {
  params: Promise<{
    date: string;
  }>;
};

export default async function BrowsePage({ params }: BrowsePageParams) {
  const { date } = await params;
  
  // Get the journal entries for the day before.
  // Do this because people write at different times so if you see the day before you can see everyone's who wrote.
  const yesterday = getPreviousDayDate(date);
  const publicEntries = await getDailyPublicJournalEntries(yesterday);

  return (
    <BrowsePublicJournalsComponent publicEntries={publicEntries}></BrowsePublicJournalsComponent>
  );
}

function getPreviousDayDate(isoDate: string) {
  const date = new Date(isoDate);
  date.setDate(date.getDate() - 1); // go back one day
  return date.toISOString().split('T')[0]; // return YYYY-MM-DD
}
