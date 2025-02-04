"use client";

import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Save,
  BookOpen,
  Calendar,
  PenTool,
  ImageIcon,
  Mic,
} from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserLoading } from "@/app/components/userLoading";
import NetworkClient from "@/app/network/NetworkClient";
import PhotoUpload from "@/app/components/photoupload";
import { Label } from "@/components/ui/label";

import { AudioUpload } from "../../components/audio-upload"

export default function JournalEntryEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, error, isLoading } = useUser();
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [network] = useState(new NetworkClient());

  const { toast } = useToast();

  const [audioRecording, setAudioRecording] = useState(null);

  // Load in today's entry if it exists
  useEffect(() => {
    if (user != null) {
      const today = new Date().toLocaleDateString("en-CA");

      network
        .getJournalEntryText(today, user.email)
        .then((response) => {
          const entry = response.data.journalEntry;
          if (entry != null) {
            // Fallback to empty strings if missing data
            setTitle(entry?.title || "");
            setContent(entry?.entry || "");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [user, network]);

  const handleSave = async () => {
    if (content.trim() === "") {
      alert("Please enter a journal entry.");
      return;
    }

    // upload any image data
    const formData = new FormData();
    formData.append("entry", content);
    formData.append("title", title ? title : "N/A");
    formData.append("email", user.email);
    if (uploadedPhoto) {
      // FIXME: Use a more unique name, might overwite existing photos
      formData.append("image", uploadedPhoto);
    }
    if (audioRecording) {
          formData.append("audio", audioRecording, `${uuidv4()}.webm`);
    }

    try {
      await network.writeJournalEntry(formData);
      toast({
        title: "Successfully saved",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "An error occurred",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  return user ? (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 to-slate-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="space-y-2 border-b bg-gradient-to-b from-primary/5 to-primary/10">
          <CardTitle className="flex justify-center space-x-3">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold text-primary">
              New Journal Entry
            </span>
          </CardTitle>
        </CardHeader>

        <div className="p-6">
          <div className="space-y-2 mb-6">
            <Label
              htmlFor="title"
              className="flex items-center space-x-2 text-sm font-medium"
            >
              <Calendar className="h-4 w-4 text-primary" />
              <span>Entry Title</span>
            </Label>
            <Input
              id="title"
              placeholder="What's on your mind today?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-primary/20 transition-colors focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>

          <Tabs defaultValue="text" className="space-y-4">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="text" className="flex items-center space-x-2">
                <PenTool className="h-4 w-4" />
                <span>Write</span>
              </TabsTrigger>
              <TabsTrigger
                value="photos"
                className="flex items-center space-x-2"
              >
                <ImageIcon className="h-4 w-4" />
                <span>Upload Photos</span>
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="flex items-center space-x-2"
              >
                <Mic className="h-4 w-4" />
                <span>Record Audio</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="content"
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <span>Your Story</span>
                  <span className="text-xs text-muted-foreground">
                    (Write freely, express yourself)
                  </span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Begin writing your thoughts, feelings, and experiences..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[300px] border-primary/20 transition-colors focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary resize-none"
                />
              </div>
            </TabsContent>

            <TabsContent value="photos" className="space-y-4">
              <div className="rounded-lg transition-colors">
                <PhotoUpload
                  uploadPhoto={setUploadedPhoto}
                  className="w-full"
                />
                {uploadedPhoto && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Photo added: {uploadedPhoto.name}
                  </p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="audio" className="space-y-4">
              <AudioUpload audioRecording={audioRecording} onAudioRecorded={setAudioRecording}></AudioUpload>
            </TabsContent>
          </Tabs>
        </div>

        <CardFooter className="border-t bg-gradient-to-b from-primary/5 to-primary/10 p-6">
          <Button
            onClick={handleSave}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Save className="mr-2 h-4 w-4" />
            Save Journal Entry
          </Button>
        </CardFooter>
      </Card>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
