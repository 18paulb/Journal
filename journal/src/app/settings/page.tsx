'use client';

import { Settings2 } from 'lucide-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UserLoading } from '../components/user-loading';
import ThemeSettings from '../components/theme-settings';

export default function SettingsPage() {
  const { user, error, isLoading } = useUser();

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

        <ThemeSettings></ThemeSettings>
      </div>
    </div>
  ) : (
    <UserLoading isLoading={isLoading} error={error} />
  );
}
