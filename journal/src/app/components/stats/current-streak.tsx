import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';


export default function CurrentStreakStat({ streak }: { streak: number }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <>
          <div className="text-2xl font-bold">{streak} days</div>
          <p className="text-xs text-muted-foreground">Keep it going!</p>
        </>
      </CardContent>
    </Card>
  );
}
