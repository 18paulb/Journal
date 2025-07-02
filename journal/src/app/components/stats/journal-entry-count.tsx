'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PenSquare } from 'lucide-react';


export default function JournalEntryCountStat({ count }: {count: number}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <PenSquare className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <>
          <div className="text-2xl font-bold">{count}</div>
          <p className="text-xs text-muted-foreground">You&apos;re in the top 10% of users!</p>
        </>
      </CardContent>
    </Card>
  );
}
