import { NextResponse } from 'next/server';

import { getDailyPublicJournalEntries } from '@/lib/aws/dynamodb';

export async function GET(request, props) {
  const params = await props.params;
  const date = params.date;

  const journalEntries = [
    {
      title: 'A Perfect Summer Day',
      entry:
        'Today was absolutely wonderful. The sun was shining brightly and I decided to take a long walk in the park. The flowers were in full bloom, and the gentle breeze carried the sweet scent of jasmine. I found myself lost in thought, contemplating how these simple moments often bring the most joy.',
    },
    {
      title: 'Learning to Code',
      entry:
        "Started my journey with programming today. It's fascinating how a few lines of code can create something meaningful. Though challenging, the satisfaction of solving problems makes it worth it. I'm excited to see where this path leads me.",
    },
    {
      title: 'Reflections on Growth',
      entry:
        "Looking back at the past year, it's amazing to see how much I've grown. Every challenge faced has shaped me into who I am today. The struggles, the victories, all of them have been valuable lessons that I'll carry forward.",
    },
    {
      title: 'New Recipe Adventure',
      entry:
        "Tried making sushi for the first time today. While it didn't look as perfect as the restaurant's, the taste was surprisingly good! The process taught me that perfection comes with practice. Looking forward to trying more complex rolls next time.",
    },
    {
      title: 'Morning Meditation',
      entry:
        "Started my day with a peaceful meditation session. The quiet moments before sunrise have become my favorite time of day. It's amazing how just 15 minutes of mindfulness can set a positive tone for the entire day ahead.",
    },
  ];

  let dailyJournals = await getDailyPublicJournalEntries(date);

  dailyJournals = dailyJournals.concat(journalEntries);

  return NextResponse.json({
    publicJournalEntries: dailyJournals,
  });
}
