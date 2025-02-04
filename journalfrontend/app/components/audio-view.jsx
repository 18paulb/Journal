import { Card } from "@/components/ui/card"

export default function AudioView({ audioData }) {
  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto p-4">
      {audioData.map((audio, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Recording {index + 1}</div>
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
  )
}

