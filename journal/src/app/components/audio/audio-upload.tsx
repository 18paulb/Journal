'use client';

import { useState, useRef } from 'react';
import { Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DeleteDialog from '../deletion-dialog';

/**
  AudioUpload should not keep track of it's own audioState, the data from audioRecording should be stored in a parent component
*/

type AudioUploadProps = {
  audioRecording: Blob | null,
  onAudioRecorded: (audio: Blob | null) => void
};
export function AudioUpload({ audioRecording, onAudioRecorded }: AudioUploadProps) {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        onAudioRecorded(blob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleReset = () => {
    chunksRef.current = [];
    onAudioRecorded(null);
    setShowDeleteDialog(false);
  };

  return (
    <div className="min-h-[300px] rounded-lg border-2 border-dashed border-primary/20 p-4 hover:border-primary/40 transition-colors flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
        <Mic className="h-12 w-12 text-primary/40" />
        <div className="text-center space-y-4">
          {!audioRecording && !isRecording && (
            <Button onClick={startRecording} className="bg-primary hover:bg-primary/90">
              Start Recording
            </Button>
          )}
          {isRecording && (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="animate-pulse text-red-500">●</span>
                <span className="text-sm text-muted-foreground">Recording in progress...</span>
              </div>
              <Button onClick={stopRecording} variant="destructive">
                Stop Recording
              </Button>
            </div>
          )}
          {audioRecording && !isRecording && (
            <div className="space-y-4 w-full">
              <audio controls className="w-full">
                <source src={URL.createObjectURL(audioRecording)} type="audio/webm" />
                Your browser does not support the audio element.
              </audio>
              <div className="flex justify-center gap-2">
                <DeleteDialog
                  show={showDeleteDialog}
                  setShow={setShowDeleteDialog}
                  title="Delete Recording"
                  description="Are you sure you want to delete this recording? This action cannot be undone."
                  onDelete={handleReset}
                ></DeleteDialog>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
