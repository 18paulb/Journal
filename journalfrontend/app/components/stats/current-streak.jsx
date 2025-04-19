import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import LoadingSpinner from '../loading-spinner';

import { useEffect, useState } from 'react';
import NetworkClient from '@/lib/client/network-client';
import DateFactory from '@/lib/client/date-factory';
import { StatEnum } from '@/lib/enums/stat-enum';

export default function CurrentStreakStat({ user }) {
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const storedStreak = localStorage.getItem(StatEnum.STREAK);

    if (storedStreak) {
      setStreak(Number.parseInt(storedStreak));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    new NetworkClient()
      .getStreakCount(DateFactory.getLocalDateString())
      .then((response) => {
        localStorage.setItem(StatEnum.STREAK, response.data.streak);
        setStreak(response.data.streak ?? -1);
      })
      .catch((error) => {
        console.log(error);
        setStreak(-1);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <LoadingSpinner />
        ) : streak < 0 ? (
          <div className="text-sm text-muted-foreground">Unable to load data</div>
        ) : (
          <>
            <div className="text-2xl font-bold">{streak} days</div>
            <p className="text-xs text-muted-foreground">Keep it going!</p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
