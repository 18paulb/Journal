import DateFactory from "@/lib/client/date-factory";
import { getSession } from "@auth0/nextjs-auth0/edge";
import {
  getJournalEntry,
  getJournalEntries,
  getJournalEntryCount,
} from "@/lib/aws/dynamodb";
import { getPhotoCount } from "@/lib/aws/s3";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, PenSquare, Globe2, Lock } from "lucide-react";
import JournalEntryCountStat from "../components/stats/journal-entry-count";
import PhotoCountStat from "../components/stats/photo-count";
import CurrentStreakStat from "../components/stats/current-streak";
import LongestStreakStat from "../components/stats/longest-streak";

export default async function HomePage() {
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

  const browseIsEnabled = entry != null;

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center space-y-2">
          <h1 className="text-4xl font-bold mb-2 text-primary">My Journal</h1>
          <p className="text-muted-foreground text-lg">
            Capture your thoughts, memories, and moments
          </p>
        </div>

        {/* Main Actions */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Link href={{ pathname: `/journal` }} className="block">
            <Card className="hover:shadow-lg transition-all duration-300 group h-full">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Read Journal</h2>
                  <p className="text-muted-foreground">
                    Browse through your past entries
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href={{ pathname: `/journal/write` }} className="block">
            <Card className="hover:shadow-lg transition-all duration-300 group h-full">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <PenSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Write Entry</h2>
                  <p className="text-muted-foreground">
                    Start writing today&apos;s journal entry
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mb-12">
          {browseIsEnabled ? (
            <Link
              href={`/browse/${DateFactory.getLocalDateString()}`}
              className="block max-w-2xl mx-auto"
            >
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">
                      Browse Public Journals
                    </h2>
                    <p className="text-muted-foreground">
                      Discover anonymous journal entries from the community
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div className="block max-w-2xl mx-auto">
              <Card className="transition-all duration-300 bg-muted/40 border-dashed">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-muted p-4 rounded-full w-fit mx-auto mb-4">
                      <Lock className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-muted-foreground">
                      Browse Public Journals
                    </h2>
                    <p className="text-muted-foreground text-red-500">
                      Write in your entry for today to view others&apos;
                      entries!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Stats</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <JournalEntryCountStat count={entryCount}></JournalEntryCountStat>

            <PhotoCountStat count={photoCount}></PhotoCountStat>

            <CurrentStreakStat streak={streak}></CurrentStreakStat>

            <LongestStreakStat></LongestStreakStat>
          </div>
        </div>
        {/* Tools Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href={{ pathname: `/journal/export` }} className="block">
              <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Download className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">
                      Export Journal
                    </h2>
                    <p className="text-muted-foreground">
                      Download your entries as PDF
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
