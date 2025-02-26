'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { PenSquare } from 'lucide-react';
import NetworkClient from '@/lib/network-client';
import LoadingSpinner from '../loading-spinner';

export default function JournalEntryCountStat({ user }) {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setIsLoading(false);
      return;
    }

    const storedCount = localStorage.getItem('journalEntryCount');

    if (storedCount !== null) {
      setCount(Number.parseInt(storedCount)); // Convert to number
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    new NetworkClient()
      .getJournalEntryCount(user.email)
      .then((response) => {
        localStorage.setItem('journalEntryCount', response.data.count.toString());
        setCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
        setCount(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <PenSquare className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <LoadingSpinner />
        ) : count === null ? (
          <div className="text-sm text-muted-foreground">Unable to load data</div>
        ) : (
          <>
            <div className="text-2xl font-bold">{count}</div>
            <p className="text-xs text-muted-foreground">You&apos;re in the top 10% of users!</p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
