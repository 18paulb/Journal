"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageIcon } from "lucide-react";
import LoadingSpinner from "../loading-spinner";

export default function PhotoCountStat({ count }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Photos Added</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <ImageIcon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{count}</div>
        <p className="text-xs text-muted-foreground">+3 from last week</p>
      </CardContent>
    </Card>
  );
}
