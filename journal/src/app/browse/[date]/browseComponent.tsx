'use client';

import { JournalEntry } from '@/app/models/journal-entry';
import { useState } from 'react';

type BrowsePublicJournalsComponentProps = {
  publicEntries: JournalEntry[]
}
export default function BrowsePublicJournalsComponent({ publicEntries = [] }: BrowsePublicJournalsComponentProps) {
  // State to track which entries are expanded
  const [expandedEntries, setExpandedEntries] = useState<number[]>([]);

  // Character limit for preview text
  const characterLimit = 400;

  // Function to truncate text
  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  // Toggle expanded state for an entry
  const toggleExpand = (index: number) => {
    setExpandedEntries((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  // Show empty state message if no entries
  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        {!publicEntries || publicEntries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="rounded-2xl bg-gradient-to-br from-muted/30 to-muted/60 p-12 text-center max-w-2xl">
              <div className="mb-6">
                <div className="mx-auto w-24 h-24 rounded-full bg-muted-foreground/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-12 h-12 text-muted-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">No Stories to Share Yet</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                The journal community is just getting started! There aren't any public journals at the moment, but
                amazing stories are on their way.
              </p>
              <p className="text-lg text-muted-foreground/80">
                ✨ Check back soon for inspiring tales and heartfelt reflections ✨
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <h1 className="mb-12 text-4xl font-bold">Read Other Journals</h1>
            {publicEntries.map((entry, index) => {
              const isExpanded = expandedEntries.includes(index)
              return (
                <article
                  key={index}
                  className="group relative rounded-xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-4 flex items-baseline justify-between">
                    <h2 className="text-2xl font-semibold tracking-tight">{entry.title}</h2>
                    <time className="text-sm text-muted-foreground">{entry.date}</time>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">
                    {isExpanded ? entry.entry : truncateText(entry.entry, characterLimit)}
                  </p>
                  <div className="mt-4 flex justify-end">
                    {entry.entry.length > characterLimit && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-sm font-medium text-primary transition-opacity group-hover:opacity-100"
                      >
                        {isExpanded ? "Show less ↑" : "Read more →"}
                      </button>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
