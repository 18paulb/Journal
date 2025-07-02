'use client';

import { useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { JournalEntriesCalendar } from '../components/journal-entries-calendar';
import JournalEntriesList from '../components/journal-entries-list';
import { Calendar, List } from 'lucide-react';
import { JournalEntry } from '../models/journal-entry';

type JournalEntriesProps = {
  entries: JournalEntry[]
}
export default function JournalEntries({ entries }: JournalEntriesProps) {
  const [viewMode, setViewMode] = useState('calendar');

  return (
    <div>
      <Toggle
        pressed={viewMode === 'calendar'}
        onPressedChange={() => setViewMode('calendar')}
        size="sm"
        aria-label="Calendar view"
      >
        <Calendar className="h-4 w-4" />
      </Toggle>
      <Toggle
        pressed={viewMode === 'list'}
        onPressedChange={() => setViewMode('list')}
        size="sm"
        aria-label="List view"
      >
        <List className="h-4 w-4" />
      </Toggle>

      {viewMode === 'calendar' ? (
        <JournalEntriesCalendar entries={entries}></JournalEntriesCalendar>
      ) : (
        <JournalEntriesList entries={entries}></JournalEntriesList>
      )}
    </div>
  );
}
