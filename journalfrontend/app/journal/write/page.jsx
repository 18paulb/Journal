"use client";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CalendarIcon, BookOpenIcon, SaveIcon } from "lucide-react";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function JournalEntryEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, error, isLoading } = useUser();

  const handleSave = async () => {
    // Check if user is not initialized
    if (!user) {
      alert("User not authenticated. Please log in.");
      return;
    }

    if (content.trim() === "") {
      alert("Please enter a journal entry.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/write-journal", {
        entry: content,
        title: title.length > 0 ? title : "N/A",
        email: user.email, // Use the user's email for the request
      });
      console.log("Journal entry submitted:", response.data);
    } catch (err) {
      console.error("Error submitting journal entry:", err);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader className="bg-primary/5 border-b border-primary/10">
          <CardTitle className="text-2xl font-bold text-center text-primary flex items-center justify-center">
            <BookOpenIcon className="mr-2" />
            My Journal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1 flex items-center"
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
              Title
            </label>
            <Input
              id="title"
              placeholder="Enter your entry title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border-primary/20 focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Journal Entry
            </label>
            <Textarea
              id="content"
              placeholder="Write your thoughts here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[200px] border-primary/20 focus:border-primary focus:ring-primary"
            />
          </div>
        </CardContent>
        <CardFooter className="bg-primary/5 border-t border-primary/10">
          <Button
            onClick={handleSave}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <SaveIcon className="mr-2 h-4 w-4" />
            Save Entry
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
