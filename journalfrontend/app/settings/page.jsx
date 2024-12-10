"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Calendar,
  Clock,
  Layout,
  MessageSquare,
  Music2,
  Settings2,
  UserRound,
  SaveIcon,
  User,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { UserLoading } from "../components/userLoading";

const iconMap = {
  nasa: BarChart3,
  calendar: Calendar,
  messages: MessageSquare,
  "music-player": Music2,
  clock: Clock,
  "user-profile": UserRound,
};

export default function SettingsPage() {
  const [widgets, setWidgets] = useState([]);
  const { user, error, isLoading } = useUser();

  const handleToggleWidget = (widgetId) => {
    setWidgets((prev) =>
      prev.map((widget) =>
        widget.id === widgetId
          ? { ...widget, enabled: !widget.enabled }
          : widget
      )
    );
  };

  useEffect(() => {
    if (user != null) {
      let widgets = user?.user_metadata.widgets;

      let newWidgets = [];
      for (let i = 0; i < widgets.length; ++i) {
        if (widgets[i] == "NASA_PHOTO") {
          newWidgets.push({
            id: "nasa",
            name: "Nasa Image of the Day",
            description: "See the picture of the day",
            enabled: true,
            preview: "bg-blue-100",
          });
        }
      }

      setWidgets(newWidgets);
    }
  }, [user]);

  const handleClearCache = async () => {
    try {
      const response = await axios.post("http://localhost:8000/clear-cache", {
        email: user.email, // Use the user's email for the request
      });
      console.log("Cache cleared", response.data);
    } catch (err) {
      console.error("Error clearing cache:", err);
    }
  };

  // This page should only appear if the user object has loaded in
  return user ? (
    <div className="container max-w-4xl py-6 space-y-8">
      <div className="flex items-center gap-4">
        <Settings2 className="w-8 h-8" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Widget Settings</h1>
          <p className="text-muted-foreground">
            Choose which widgets to display in your dashboard
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Widgets</CardTitle>
          <CardDescription>
            Toggle widgets on or off to customize your experience
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          {widgets.map((widget) => {
            const Icon = iconMap[widget.id];
            return (
              <div
                key={widget.id}
                className="flex items-center justify-between space-x-4"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${widget.preview}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor={widget.id} className="text-base">
                      {widget.name}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {widget.description}
                    </p>
                  </div>
                </div>
                <Switch
                  id={widget.id}
                  checked={widget.enabled}
                  onCheckedChange={() => handleToggleWidget(widget.id)}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Button
        onClick={handleClearCache}
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <SaveIcon className="mr-2 h-4 w-4" />
        Clear Cache
      </Button>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} erorr={error} />
  );
}
