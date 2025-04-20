import DateFactory from "@/lib/client/date-factory";
import { getSession } from "@auth0/nextjs-auth0/edge";
import {
  getJournalEntry,
  getJournalEntries,
  getJournalEntryCount,
} from "@/lib/aws/dynamodb";
import { getPhotoCount } from "@/lib/aws/s3";
import HomePageComponent from "./homePageClient";

export default async function Index() {
  const session = await getSession();
  const user = session?.user;

  const today = DateFactory.getLocalDateString();

  // Get today's journal entry if exists
  const journalEntryPromise = getJournalEntry(today, user.email);

  // Get all user stats
  const journalEntryCountPromise = getJournalEntryCount(user.email);
  const photoCountPromise = getPhotoCount(user.email);
  const streakPromise = calculateStreak(today, user.email);

  const [entry, entryCount, photoCount, streak] = await Promise.all([
    journalEntryPromise,
    journalEntryCountPromise,
    photoCountPromise,
    streakPromise,
  ]);

  return (
    <HomePageComponent
      entry={entry}
      entryCount={entryCount}
      photoCount={photoCount}
      streak={streak}
    ></HomePageComponent>
  );
}

// Helper function to check if `date1` is exactly one day before `date2`
function isOneDayBefore(date1, date2) {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  // To make it easy to compare, we set the hr/min/ms to 0 so that we can just check if the dates are one day in MS less than the other
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  return date2.getTime() - date1.getTime() === ONE_DAY_MS;
}

async function calculateStreak(currDate, email) {
  const currDateObj = DateFactory.convertStringToDateObject(currDate);

  // Set the currDateObj to be very beginning of day, makes it easier for comparison
  currDateObj.setHours(0, 0, 0, 0);

  let entries = await getJournalEntries(email);

  // Set all dates to be very beginning of day, makes it easier for comparison
  let entryDates = entries.map((entry) => {
    let dateObj = DateFactory.convertStringToDateObject(entry.date);
    dateObj.setHours(0, 0, 0, 0);
    return dateObj;
  });

  // Sort dates in descending order (latest first), just in case DB didn't sort correctly
  entryDates.sort((a, b) => b - a);

  let streak = 0;
  let prevDate = currDateObj;

  for (let date of entryDates) {
    // If they have written today, incrememnt the streak
    if (currDateObj.getTime() - date.getTime() == 0) {
      streak++;
      continue;
    }

    // Keep checking the prevDate, if it is ond day before, incrememnt streak or break out of loop
    if (isOneDayBefore(date, prevDate)) {
      streak++;
      prevDate = date;
    } else {
      break;
    }
  }

  return streak;
}
