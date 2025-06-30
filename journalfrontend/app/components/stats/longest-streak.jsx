"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getJournalEntries } from "@/lib/aws/dynamodb";
import DateFactory from "@/lib/client/date-factory";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Trophy } from "lucide-react";
import { useEffect, useState } from "react";

export default function LongestStreakStat() {
  const { user, error, isLoading } = useUser();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const today = DateFactory.getLocalDateString();

      const streakPromise = calculateStreak(today, user.email);
      const [streak] = await Promise.all([streakPromise]);

      setStreak(streak);
    };

    if (!user) return;
    fetchData();
  }, [user]);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <Trophy className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{streak} days</div>
        <p className="text-xs text-muted-foreground">Achieved on Jan 15</p>
      </CardContent>
    </Card>
  );
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

// Helper function to check if `date1` is exactly one day before `date2`
function isOneDayBefore(date1, date2) {
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  // To make it easy to compare, we set the hr/min/ms to 0 so that we can just check if the dates are one day in MS less than the other
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);

  return date2.getTime() - date1.getTime() === ONE_DAY_MS;
}
