import { Card } from "@/components/ui/card";
import { Mic } from "lucide-react"
import LoadingSpinner from "@/app/components/loading-spinner";

export default function AudioView({ audioData, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (audioData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
        <Mic className="w-16 h-16 mb-4 opacity-50" />
        <h3 className="text-2xl font-semibold text-center">No Audio Saved</h3>
        <p className="mt-2 text-sm">Audio recordings you add will appear here</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
      {audioData &&
        audioData.map((audio, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                Recording {index + 1}
              </div>
              <audio
                controls
                className="w-full [&::-webkit-media-controls-panel]:bg-secondary [&::-webkit-media-controls-current-time-display]:text-foreground [&::-webkit-media-controls-time-remaining-display]:text-foreground"
              >
                <source src={audio.audio} type="audio/webm" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </Card>
        ))}
    </div>
  );
}
