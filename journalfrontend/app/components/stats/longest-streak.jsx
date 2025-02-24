import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

export default function LongestStreakStat() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <Trophy className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">14 days</div>
        <p className="text-xs text-muted-foreground">Achieved on Jan 15</p>
      </CardContent>
    </Card>
  );
}
