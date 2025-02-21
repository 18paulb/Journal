"use client";

import { useEffect, useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import { UserLoading } from "../components/user-loading";
import { Toggle } from "@/components/ui/toggle";
import NetworkClient from "@/lib/network-client";
import { JournalEntriesCalendar } from "../components/journal-entries-calendar";
import JournalEntriesList from "../components/journal-entries-list";
import { Calendar, List } from "lucide-react";

export default function JournalEntries() {
  const [network] = useState(new NetworkClient());
  const [data, setData] = useState(null);
  const { user, error, isLoading } = useUser();

  const [viewMode, setViewMode] = useState("calendar");

  useEffect(() => {
    if (user) {
      network
        .getUserJournals(user.email)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [user, network]);

  return user ? (
    <div>
      <Toggle
        pressed={viewMode === "calendar"}
        onPressedChange={() => setViewMode("calendar")}
        size="sm"
        aria-label="Calendar view"
      >
        <Calendar className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={viewMode === "list"}
        onPressedChange={() => setViewMode("list")}
        size="sm"
        aria-label="List view"
      >
        <List className="h-4 w-4" />
      </Toggle>

      {viewMode === "calendar" ? (
        <JournalEntriesCalendar entries={data}></JournalEntriesCalendar>
      ) : (
        <JournalEntriesList entries={data}></JournalEntriesList>
      )}
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
