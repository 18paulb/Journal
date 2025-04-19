import DateFactory from "@/lib/client/date-factory";
import { getSession } from "@auth0/nextjs-auth0/edge";
import { getJournalEntry } from "@/lib/aws/dynamodb";
import HomePageComponent from "./homePageClient";

export default async function Index() {
  const session = await getSession();
  const user = session?.user;

  const today = DateFactory.getLocalDateString();

  const entry = await getJournalEntry(today, user.email);

  return <HomePageComponent entry={entry}></HomePageComponent>;
}
