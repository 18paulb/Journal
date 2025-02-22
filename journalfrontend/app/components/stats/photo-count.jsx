'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import NetworkClient from '@/lib/network-client';
import { useState, useEffect } from 'react';
import LoadingSpinner from '../loading-spinner';

export default function PhotoCountStat({ user }) {
  const [count, setCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setIsLoading(false);
      return;
    }

    const storedCount = localStorage.getItem('photoCount');

    if (storedCount !== null) {
      setCount(Number.parseInt(storedCount));
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const networkClient = new NetworkClient();

    networkClient
      .getPhotoCount(user.email)
      .then((response) => {
        localStorage.setItem('photoCount', response.data.count.toString());
        setCount(response.data.count);
      })
      .catch((error) => {
        console.error(error);
        setCount(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Photos Added</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">
          <ImageIcon className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <CardContent>
          <div className="text-2xl font-bold">{count}</div>
          <p className="text-xs text-muted-foreground">+3 from last week</p>
        </CardContent>
      )}
    </Card>
  );
}
