export default function BrowsePublicJournals() {
  // Sample journal entries data
  const journalEntries = [
    {
      id: 1,
      title: 'A Perfect Summer Day',
      content:
        'Today was absolutely wonderful. The sun was shining brightly and I decided to take a long walk in the park. The flowers were in full bloom, and the gentle breeze carried the sweet scent of jasmine. I found myself lost in thought, contemplating how these simple moments often bring the most joy.',
      date: '2024-02-23',
    },
    {
      id: 2,
      title: 'Learning to Code',
      content:
        "Started my journey with programming today. It's fascinating how a few lines of code can create something meaningful. Though challenging, the satisfaction of solving problems makes it worth it. I'm excited to see where this path leads me.",
      date: '2024-02-22',
    },
    {
      id: 3,
      title: 'Reflections on Growth',
      content:
        "Looking back at the past year, it's amazing to see how much I've grown. Every challenge faced has shaped me into who I am today. The struggles, the victories, all of them have been valuable lessons that I'll carry forward.",
      date: '2024-02-21',
    },
    {
      id: 4,
      title: 'New Recipe Adventure',
      content:
        "Tried making sushi for the first time today. While it didn't look as perfect as the restaurant's, the taste was surprisingly good! The process taught me that perfection comes with practice. Looking forward to trying more complex rolls next time.",
      date: '2024-02-20',
    },
    {
      id: 5,
      title: 'Morning Meditation',
      content:
        "Started my day with a peaceful meditation session. The quiet moments before sunrise have become my favorite time of day. It's amazing how just 15 minutes of mindfulness can set a positive tone for the entire day ahead.",
      date: '2024-02-19',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-12 text-4xl font-bold">Read Other Journals</h1>
        <div className="space-y-12">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="group relative rounded-xl bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="text-2xl font-semibold tracking-tight">{entry.title}</h2>
                <time className="text-sm text-muted-foreground">{entry.date}</time>
              </div>
              <p className="leading-relaxed text-muted-foreground">{entry.content}</p>
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
