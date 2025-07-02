'use client';

import Link from 'next/link';

import { CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { JournalEntry } from '../models/journal-entry';

type JournalEntriesListProps = {
  entries: JournalEntry[]
}
export default function JournalEntriesList({ entries }: JournalEntriesListProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="border-b">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
          <CalendarDays className="h-6 w-6 text-primary" />
          My Journal Entries
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {entries ? (
          <ScrollArea className="h-[70vh]">
            <ul className="divide-y">
              {entries.map((entry) => (
                <li key={entry.date}>
                  <Link
                    href={{ pathname: `/journal/read/${entry.date}` }}
                    className="block p-6 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold text-primary">{entry.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {entry.entry}
                        </p>
                      </div>
                      <time className="shrink-0 text-sm text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </time>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        ) : (
          <div className="p-6 space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
