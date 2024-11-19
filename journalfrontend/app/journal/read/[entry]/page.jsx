"use client";

import { useParams } from "next/navigation"; // Import useParams from next/navigation
import { useState, useEffect } from "react";
import axios from "axios";
import { CalendarDays } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function JournalEntry() {
  const params = useParams(); // Use useParams to access the dynamic 'date' parameter

  const date = params.entry;

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/journal-entry?date=${date}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const renderTextWithNewlines = (text) => {
    return text.split("\n").map((line, index) => (
      <p className="text-stone-700 text-lg leading-relaxed mb-6" key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </p>
    ));
  };

  return (
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
            renderTextWithNewlines(data)
          ) : (
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              Loading
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
