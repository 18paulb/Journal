'use client';

import { Card } from '@/components/ui/card';
import { Mic, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { useState } from 'react';
import { deleteEntryAudio } from '@/app/actions/journalEntryActions';
import { MediaItemUrl } from '@/app/models/media-item-string';

type AudioViewProps = {
  audioData: MediaItemUrl[],
  setAudioData: React.Dispatch<React.SetStateAction<MediaItemUrl[]>>
}
export default function AudioView({ audioData, setAudioData }: AudioViewProps) {
  const [audioToDelete, setAudioToDelete] = useState<MediaItemUrl | undefined>(undefined);

  if (audioData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
        <Mic className="w-16 h-16 mb-4 opacity-50" />
        <h3 className="text-2xl font-semibold text-center">No Audio Saved</h3>
        <p className="mt-2 text-sm">Audio recordings you add will appear here</p>
      </div>
    );
  }

  const handleDelete = async () => {
    if (audioToDelete) {
      setAudioData(audioData.filter((audio: MediaItemUrl) => audio !== audioToDelete));

      await deleteEntryAudio(audioToDelete.mediaKey);

      setAudioToDelete(undefined);
    }
  };

  return (
    <>
      <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
        {audioData &&
          audioData.map((audio: MediaItemUrl, index: number) => (
            <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Recording {index + 1}</div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => setAudioToDelete(audio)}
                    aria-label={`Delete recording ${index + 1}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                <audio
                  controls
                  className="w-full [&::-webkit-media-controls-panel]:bg-secondary [&::-webkit-media-controls-current-time-display]:text-foreground [&::-webkit-media-controls-time-remaining-display]:text-foreground"
                >
                  <source src={audio.mediaUrl} type="audio/webm" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </Card>
          ))}
      </div>

      <AlertDialog open={!!audioToDelete} onOpenChange={(open) => !open && setAudioToDelete(undefined)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Recording</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this recording? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
