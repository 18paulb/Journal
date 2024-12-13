"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@auth0/nextjs-auth0/client";

import { UserLoading } from "@/app/components/userLoading";
import { getWidgets } from "@/app/widgets/widgetController";

export default function JournalEntry() {
  const params = useParams(); // Use useParams to access the dynamic 'date' parameter
  const { user, error, isLoading } = useUser();
  const [widgets, setWidgets] = useState([]);

  const date = params.entry;

  const [data, setData] = useState(null);

  // Grab the journal entry once the user Object has loaded in
  useEffect(() => {
    if (user != null) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/journal-entry?date=${date}`,
          {
            headers: {
              Authorization: `Bearer ${user.email}`, // Sending email in the header
            },
          }
        )
        .then((response) => setData(response.data))
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
          <CardHeader className="bg-teal-100 text-teal-800 flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-teal-200">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">
              Journal Entry
            </h2>
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-5 w-5" />
              <span className="font-semibold">{date}</span>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 md:p-8">
            {data ? (
              renderTextWithNewlines(data.entry)
            ) : (
              <p className="text-stone-700 text-lg  leading-relaxed mb-6">
                Loading...
              </p>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Map over the array of components and render each widget*/}
      {widgets.map((widget, index) => {
        const WidgetComponent = widget.component; // Extract component
        const widgetProps = widget.props || {}; // Extract props (default to empty object)

        return (
          <div key={index}>
            {/* Render the component with its props */}
            <WidgetComponent {...widgetProps} />
          </div>
        );
      })}
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
