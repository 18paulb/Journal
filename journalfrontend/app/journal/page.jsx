"use client";

import { useEffect, useState } from "react";

import { useUser } from "@auth0/nextjs-auth0/client";
import { UserLoading } from "../components/userLoading";
import NetworkClient from "../network/NetworkClient";
import { JournalEntriesCalendar } from "../components/journal-calendar-grid";

export default function JournalEntries() {
  const network = new NetworkClient();
  const [data, setData] = useState(null);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      network
        .getUserJournals(user.email)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
  }, [user]);

  return user ? (
    <JournalEntriesCalendar entries={data}></JournalEntriesCalendar>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
