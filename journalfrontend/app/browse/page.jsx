'use client';

import { useEffect, useState } from 'react';
import NetworkClient from '@/lib/network-client';
import DateFactory from '@/lib/date-factory';

export default function BrowsePublicJournals() {
  const [publicEntries, setPublicEntries] = useState([]);

  useEffect(() => {
    new NetworkClient()
      .getDailyPublicJournals(DateFactory.getLocalDateString())
      .then((response) => {
        setPublicEntries(response.data.publicJournalEntries ?? []);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Character limit for preview text
  const characterLimit = 400;

  // Function to truncate text
  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-12 text-4xl font-bold">Read Other Journals</h1>
        <div className="space-y-12">
          {publicEntries.map((entry, index) => (
            <article
              key={index}
              className="group relative rounded-xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">{entry.title}</h2>
                <time className="text-sm text-muted-foreground">Date</time>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {truncateText(entry.entry, characterLimit)}
              </p>
              <div className="mt-4 flex justify-end">
                <button className="text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
