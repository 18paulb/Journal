"use client"

import { Card, CardContent } from "@/components/ui/card";
import DateFactory from "@/lib/client/date-factory";
import { Globe2, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { getJournalEntry } from "../actions/journalEntryActions";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from 'next/link';

export default function BrowseButton() {
  const { user, error, isLoading } = useUser()
  const [hasWritten, setHasWritten] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

      if (!user || !user?.email) return;

      const today = DateFactory.getLocalDateString();
      
      // Get today's journal entry if exists
      const entry = await getJournalEntry(today, user.email);

      if (entry) {
        setHasWritten(true);
      }
    };
    fetchData();
  }, [user]);
  return (
    <div className="mb-12">
      {hasWritten ? (
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
                  Write in your entry for today to view others&apos; entries!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
