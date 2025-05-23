'use client';

import { useEffect, useState } from 'react';
import { Settings2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UserLoading } from '../components/user-loading';
import { widgetsMap } from '@/lib/client/widget-info';
import DateFactory from '@/lib/client/date-factory';
import ThemeSettings from '../components/theme-settings';

export default function SettingsPage() {
  const [widgets, setWidgets] = useState([]);
  const { user, error, isLoading } = useUser();

  const handleToggleWidget = (widgetId) => {
    setWidgets((prev) =>
      prev.map((widget) =>
        widget.id === widgetId ? { ...widget, enabled: !widget.enabled } : widget
      )
    );
  };

  useEffect(() => {
    if (user != null) {
      const userWidgets = user?.user_metadata?.widgets || [];

      // Get all enabled widgets based on user data
      const enabledWidgets = userWidgets
        .filter((widgetKey) => widgetsMap[widgetKey])
        .map((widgetKey) => ({ ...widgetsMap[widgetKey], enabled: true }));

      // Get all remaining widgets that are not in the enabledWidgets
      const remainingWidgets = Object.entries(widgetsMap)
        .filter(([key]) => !userWidgets.includes(key))
        .map(([, widget]) => ({ ...widget, enabled: false }));

      // Combine enabled and remaining widgets
      const newWidgets = [...enabledWidgets, ...remainingWidgets];

      setWidgets(newWidgets);
    }
  }, [user]);

  // This page should only appear if the user object has loaded in
  return user ? (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-3xl px-4 py-8 mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
          <div className="p-3 rounded-lg bg-primary/10">
            <Settings2 className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">Widget Settings</h1>
            <p className="text-muted-foreground">
              Choose which widgets to display in your dashboard
            </p>
          </div>
        </div>

        {/* Widgets Card */}
        <Card className="shadow-sm">
          <CardHeader className="border-b">
            <CardTitle>Available Widgets</CardTitle>
            <CardDescription>Toggle widgets on or off to customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6">
              {widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex items-start justify-between space-x-4 rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${widget.preview} shrink-0`}>
                      <Settings2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor={widget.id} className="text-base font-medium">
                        {widget.name}
                      </Label>
                      <p className="text-sm text-muted-foreground">{widget.description}</p>
                    </div>
                  </div>
                  <Switch
                    id={widget.id}
                    checked={widget.enabled}
                    onCheckedChange={() => handleToggleWidget(widget.id)}
                    className="shrink-0"
                  />
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50">
            <div className="flex w-full items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Last updated: {DateFactory.getTodayDate().toLocaleDateString()}
              </p>
            </div>
          </CardFooter>
        </Card>

        <ThemeSettings></ThemeSettings>
      </div>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} erorr={error} />
  );
}
