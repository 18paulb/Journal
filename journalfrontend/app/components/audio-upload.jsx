"use client"

import {useState, useRef } from "react"
import { Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AudioUpload({ onAudioRecorded }) {
  const [audioRecording, setAudioRecording] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      mediaRecorderRef.current = mediaRecorder
      chunksRef.current = []

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" })
        setAudioRecording(blob)
        onAudioRecorded(blob)
        stream.getTracks().forEach((track) => track.stop())
      }

      mediaRecorder.start()
      setIsRecording(true)
    } catch (err) {
      console.error("Error accessing microphone:", err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleReset = () => {
    setAudioRecording(null)
    chunksRef.current = []
    onAudioRecorded(null)
  }

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
                <Button variant="outline" onClick={handleReset}>
                  Record Again
                </Button>
                <Button variant="destructive" onClick={handleReset}>
                  Delete Recording
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

