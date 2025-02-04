"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CalendarDays, Book, Image, Layout } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUser } from "@auth0/nextjs-auth0/client";

import { UserLoading } from "@/app/components/user-loading";
import { getWidgets } from "@/app/widgets/widget-controller";
import NetworkClient from "@/app/network/network-client";
import ImageGrid from "@/app/components/photo-grid";
import AudioView from "@/app/components/audio-view";
import LoadingSpinner from "@/app/components/loading-spinner";

export default function JournalEntry() {
  const params = useParams(); // Use useParams to access the dynamic 'date' parameter
  const { user, error, isLoading } = useUser();
  const [widgets, setWidgets] = useState([]);

  const [date] = useState(params.entry);

  const [entryData, setEntryData] = useState(null);
  const [entryImages, setEntryImages] = useState([]);
  const [audioData, setAudioData] = useState(null);
  const [mediaIsLoading, setMediaIsLoading] = useState(false);
  const [textIsLoading, setTextIsLoading] = useState(false);

  const [network] = useState(new NetworkClient());

  // Grab the journal entry once the user Object has loaded in
  // We make two API calls to load the text faster and then the media can load after
  useEffect(() => {
    if (user != null) {
      setMediaIsLoading(true);
      setTextIsLoading(true);
      
      // Load the text separate
      network
        .getJournalEntryText(date, user.email)
        .then((response) => {
          setEntryData(response.data.journalEntry);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setTextIsLoading(false);
        });

      // Load Image and Audio Media
      network
        .getJournalEntryMedia(date, user.email)
        .then((response) => {
          setEntryImages(response.data.images);
          setAudioData(response.data.audios);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setMediaIsLoading(false);
        });

      // Also grab the widgets that are active for the user
      setWidgets(getWidgets(user, date));
    }
  }, [user, network, date]);

  // Formats entry text to have correct spacing
  const renderTextWithNewlines = (text) => {
    return text.split("\n").map((line, index) => (
      <p className="text-stone-700 text-lg leading-relaxed mb-1" key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </p>
    ));
  };

  return user ? (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-5xl shadow-xl rounded-xl overflow-hidden border">
        <CardHeader className="bg-gradient-to-b from-blue-100/80 to-blue-50/50 text-foreground space-y-6 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950">
              {entryData?.title || "Journal Entry"}
            </h2>
            <div className="flex items-center space-x-2 text-blue-600 bg-white px-3 py-1.5 rounded-full shadow-sm border border-blue-100">
              <CalendarDays className="h-4 w-4" />
              <span className="font-medium text-sm">{date}</span>
            </div>
          </div>
          <Tabs defaultValue="journal" className="w-full">
            <TabsList className="grid w-full grid-cols-4 gap-1 bg-white/50 p-1 rounded-lg">
              <TabsTrigger
                value="journal"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                <Book className="h-4 w-4" />
                Journal
              </TabsTrigger>
              <TabsTrigger
                value="photos"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                <Image alt="imageIcon" className="h-4 w-4" />
                Photos
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                <Layout className="h-4 w-4" />
                Audio
              </TabsTrigger>
              <TabsTrigger
                value="widgets"
                className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-blue-600"
              >
                <Layout className="h-4 w-4" />
                Widgets
              </TabsTrigger>
            </TabsList>
            <TabsContent value="journal">
              <CardContent className="p-6 sm:p-8">
                <Card className="border border-blue-100">
                  <CardContent className="p-6">
                    {textIsLoading ? (
                      <LoadingSpinner />
                    ) : entryData?.entry ? (
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
                  </CardContent>
                </Card>
              </CardContent>
            </TabsContent>
            <TabsContent value="photos">
              <CardContent className="p-6 sm:p-8">
                <ImageGrid images={entryImages} isLoading={mediaIsLoading} />
              </CardContent>
            </TabsContent>
            <TabsContent value="audio" className="space-y-4">
              <AudioView
                isLoading={mediaIsLoading}
                audioData={audioData}
              ></AudioView>
            </TabsContent>
            <TabsContent value="widgets">
              <CardContent className="p-6 sm:p-8">
                <div className="grid gap-6">
                  {widgets.map((widget, index) => {
                    const WidgetComponent = widget.component;
                    const widgetProps = widget.props || {};
                    return (
                      <Card key={index} className="border border-blue-100">
                        <CardContent className="p-4">
                          <WidgetComponent {...widgetProps} />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </CardHeader>
      </Card>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
