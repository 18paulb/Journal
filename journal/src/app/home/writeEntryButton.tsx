import { Card, CardContent } from "@/components/ui/card";
import DateFactory from "@/lib/client/date-factory";
import { PenSquare } from "lucide-react";
import Link from "next/link";

export default function WriteEntryButton() {

  const today = DateFactory.getLocalDateString();
  return (
    <Link href={{ pathname: `/journal/write/${today}` }} className="block">
      <Card className="hover:shadow-lg transition-all duration-300 group h-full">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <PenSquare className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Write Entry</h2>
            <p className="text-muted-foreground">
              Start writing today&apos;s journal entry
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
