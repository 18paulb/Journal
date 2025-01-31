"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CalendarDays, Book, Image, Layout } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@auth0/nextjs-auth0/client";

import { UserLoading } from "@/app/components/userLoading";
import { getWidgets } from "@/app/widgets/widgetController";
import NetworkClient from "@/app/network/NetworkClient";
import ImageGrid from "@/app/components/photogrid";

export default function JournalEntry() {
  const params = useParams(); // Use useParams to access the dynamic 'date' parameter
  const { user, error, isLoading } = useUser();
  const [widgets, setWidgets] = useState([]);

  const date = params.entry;

  const [entryData, setEntryData] = useState(null)
  const [entryImages, setEntryImages] = useState([])

  const network = new NetworkClient()

  // Grab the journal entry once the user Object has loaded in
  // We make two API calls to load the text faster and then the images can load after
  useEffect(() => {
    if (user != null) {
        network.getUserEntryText(date, user.email)
        .then((response) => {
          setEntryData(response.data.journalEntry)
        })
        .catch((error) => console.log(error));

        network.getUserEntryImages(date, user.email)
        .then((response) => {
          setEntryImages(response.data.images)
        })
        .catch((error) => console.log(error));

      // Also grab the widgets that are active for the user
      setWidgets(getWidgets(user, date));
    }
  }, [user]);

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
    <div>
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-5xl bg-white shadow-md">
          <CardHeader className="bg-teal-100 text-teal-800 flex flex-col space-y-4 p-4 sm:p-6 border-b border-teal-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
                {entryData?.title ? entryData?.title : "Journal Entry"}
              </h2>
              <div className="flex items-center space-x-2">
                <CalendarDays className="h-5 w-5" />
                <span className="font-semibold">{date}</span>
              </div>
            </div>
            <Tabs defaultValue="journal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="journal" className="flex items-center gap-2">
                  <Book className="h-4 w-4" />
                  Journal
                </TabsTrigger>
                <TabsTrigger value="photos" className="flex items-center gap-2">
                  <Image alt="image logo" className="h-4 w-4" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="widgets" className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  Widgets
                </TabsTrigger>
              </TabsList>
              <TabsContent value="journal">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {entryData?.entry ? (
                    renderTextWithNewlines(entryData.entry)
                  ) : (
                    <p className="text-stone-700 text-lg leading-relaxed mb-6">Loading...</p>
                  )}
                </CardContent>
              </TabsContent>
              <TabsContent value="photos">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <ImageGrid images={entryImages} />
                </CardContent>
              </TabsContent>
              <TabsContent value="widgets">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="grid gap-4">
                    {widgets.map((widget, index) => {
                      const WidgetComponent = widget.component
                      const widgetProps = widget.props || {}
                      return (
                        <div key={index}>
                          <WidgetComponent {...widgetProps} />
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  )
}
