'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Download, PenSquare, Globe2, Lock } from 'lucide-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState } from 'react';
import JournalEntryCountStat from '../components/stats/journal-entry-count';
import PhotoCountStat from '../components/stats/photo-count';
import CurrentStreakStat from '../components/stats/current-streak';
import LongestStreakStat from '../components/stats/longest-streak';
import NetworkClient from '@/lib/network-client';
import DateFactory from '@/lib/date-factory';

export default function HomePage() {
  const writtenTodayString = 'hasWrittenToday';
  const { user } = useUser();
  const [network] = useState(new NetworkClient());
  const [browseIsEnabled, setBrowseIsEnabled] = useState(true);

  // We access localStorage from useEffect to make sure it is only run on the client
  useEffect(() => {
    setBrowseIsEnabled(localStorage.getItem(writtenTodayString) === 'true');
  }, []);

  /**
   Load in today's entry if it exists
   The way this is set up, it will send a network call no matter what however from the UI side, there won't be
   a momentary loading state
  */
  useEffect(() => {
    if (!user) return;

    if (localStorage.getItem(writtenTodayString) === 'true') {
      setBrowseIsEnabled(true);
    } else {
      setBrowseIsEnabled(false);
    }

    const today = DateFactory.getLocalDateString();

    network
      .getJournalEntryText(today, user.email)
      .then((response) => {
        const entry = response.data.journalEntry;
        if (entry != null) {
          localStorage.setItem(writtenTodayString, true);
          setBrowseIsEnabled(true);
        } else {
          localStorage.setItem(writtenTodayString, false);
          setBrowseIsEnabled(false);
        }
      })
      .catch((error) => console.log(error));
  }, [user, network]);

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
                  <p className="text-muted-foreground">Browse through your past entries</p>
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
                  <p className="text-muted-foreground">Start writing today&apos;s journal entry</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="mb-12">
          {browseIsEnabled ? (
            <Link href="/browse" className="block max-w-2xl mx-auto">
              <Card className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Globe2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Browse Public Journals</h2>
                    <p className="text-muted-foreground">
                      Discover shared journal entries from the community
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
                      Write in your entry for today to view others&apos; entries!
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
            <JournalEntryCountStat user={user}></JournalEntryCountStat>

            <PhotoCountStat user={user}></PhotoCountStat>

            <CurrentStreakStat user={user}></CurrentStreakStat>

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
                    <h2 className="text-2xl font-semibold mb-2">Export Journal</h2>
                    <p className="text-muted-foreground">Download your entries as PDF</p>
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
