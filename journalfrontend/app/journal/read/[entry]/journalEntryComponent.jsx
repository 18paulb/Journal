'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { CalendarDays, Book, Trash2, Lock, ImageIcon, Mic, Unlock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import NetworkClient from '@/lib/client/network-client';
import ImageGrid from '@/app/components/photo/photo-grid';
import AudioView from '@/app/components/audio/audio-view';
import { deleteJournalEntry } from '@/app/actions/journalEntryActions';

export default function JournalEntryComponent({ entryData, initialEntryImages, initialAudioData }) {
  const params = useParams(); // Use useParams to access the dynamic 'date' parameter

  const [date] = useState(params.entry);

  const [entryImages, setEntryImages] = useState(initialEntryImages);
  const [audioData, setAudioData] = useState(initialAudioData);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  // Formats entry text to have correct spacing
  const renderTextWithNewlines = (text) => {
    return text.split('\n').map((line, index) => (
      <p className="text-stone-700 text-lg leading-relaxed mb-1" key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </p>
    ));
  };

  const handleDeleteEntry = async () => {
    setIsDeleting(true);
    try {
      await deleteJournalEntry(date);
      toast.success('Journal entry deleted successfully');
      router.push('/journal'); // Redirect to journal list
    } catch (error) {
      console.error('Error deleting journal entry:', error);
      toast.error('Failed to delete journal entry');
    } finally {
      setIsDeleting(false);
      setShowDeleteDialog(false);
    }
  };

  return (
    <>
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="border-b bg-white px-6 py-8 sm:px-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                    {entryData?.title || 'Journal Entry'}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span>{date}</span>
                    <>
                      {entryData?.isPrivate ? (
                        <>
                          <span className="text-slate-300">•</span>
                          <Lock className="h-4 w-4" />
                          <span>Private</span>
                        </>
                      ) : (
                        <>
                          <span className="text-slate-300">•</span>
                          <Unlock className="h-4 w-4" />
                          <span>Public</span>
                        </>
                      )}
                    </>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 self-end text-slate-500 hover:text-red-600 sm:self-auto"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete entry</span>
                </Button>
              </div>

              <Tabs defaultValue="journal" className="mt-8">
                <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1">
                  <TabsTrigger
                    value="journal"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium transition-colors hover:bg-white hover:text-slate-900 data-[state=active]:bg-white data-[state=active]:text-slate-900"
                  >
                    <Book className="h-4 w-4" />
                    Journal
                  </TabsTrigger>
                  <TabsTrigger
                    value="photos"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium transition-colors hover:bg-white hover:text-slate-900 data-[state=active]:bg-white data-[state=active]:text-slate-900"
                  >
                    <ImageIcon className="h-4 w-4" />
                    Photos
                  </TabsTrigger>
                  <TabsTrigger
                    value="audio"
                    className="inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm font-medium transition-colors hover:bg-white hover:text-slate-900 data-[state=active]:bg-white data-[state=active]:text-slate-900"
                  >
                    <Mic className="h-4 w-4" />
                    Audio
                  </TabsTrigger>
                </TabsList>

                <div className="bg-slate-50/50 px-6 py-8 sm:px-8 mt-6">
                  <TabsContent value="journal" className="mt-0">
                    {entryData?.entry ? (
                      <div className="prose prose-slate max-w-none">
                        {renderTextWithNewlines(entryData.entry)}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32">
                        <div className="animate-pulse flex space-x-4">
                          <div className="h-4 w-48 bg-blue-100 rounded"></div>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                  <TabsContent value="photos">
                    <CardContent className="p-6 sm:p-8">
                      <ImageGrid images={entryImages} setImages={setEntryImages} />
                    </CardContent>
                  </TabsContent>
                  <TabsContent value="audio" className="space-y-4">
                    <AudioView audioData={audioData} setAudioData={setAudioData}></AudioView>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </Card>
        </div>

        <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Journal Entry</AlertDialogTitle>
              <AlertDialogDescription className="space-y-2">
                <p>
                  Are you sure you want to delete this journal entry? This action cannot be undone.
                </p>
                <p className="font-medium text-red-600">This will permanently delete:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>The journal text content</li>
                  <li>All associated images</li>
                  <li>All audio recordings</li>
                </ul>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleDeleteEntry}
                disabled={isDeleting}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                {isDeleting ? 'Deleting...' : 'Delete Everything'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}
