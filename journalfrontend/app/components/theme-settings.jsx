'use client';

import * as React from 'react';
import { Check, PaintbrushIcon as Paint } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { useTheme } from '@/app/providers/theme-provider';

import { useEffect } from 'react';

const themes = [
  {
    id: 'light-blue',
    name: 'Light Blue',
    color: 'rgb(239, 246, 255)',
    background: 'bg-[rgb(239,246,255)]',
  },
  {
    id: 'light-pink',
    name: 'Light Pink',
    color: 'rgb(255, 214, 224)',
    background: 'bg-[rgb(255,214,224)]',
  },
  {
    id: 'light-purple',
    name: 'Light Purple',
    color: 'rgb(229, 212, 242)',
    background: 'bg-[rgb(229,212,242)]',
  },
  {
    id: 'light-green',
    name: 'Light Green',
    color: 'rgb(201, 242, 209)',
    background: 'bg-[rgb(201,242,209)]',
  },
  {
    id: 'light-yellow',
    name: 'Light Yellow',
    color: 'rgb(255, 243, 201)',
    background: 'bg-[rgb(255,243,201)]',
  },
  {
    id: 'light-peach',
    name: 'Light Peach',
    color: 'rgb(255, 229, 217)',
    background: 'bg-[rgb(255,229,217)]',
  },
  {
    id: 'light-mint',
    name: 'Light Mint',
    color: 'rgb(209, 245, 237)',
    background: 'bg-[rgb(209,245,237)]',
  },
  {
    id: 'light-lavender',
    name: 'Light Lavender',
    color: 'rgb(230, 230, 250)',
    background: 'bg-[rgb(230,230,250)]',
  },
  {
    id: 'light-coral',
    name: 'Light Coral',
    color: 'rgb(255, 223, 211)',
    background: 'bg-[rgb(255,223,211)]',
  },
  {
    id: 'light-teal',
    name: 'Light Teal',
    color: 'rgb(204, 236, 239)',
    background: 'bg-[rgb(204,236,239)]',
  },
  {
    id: 'light-sage',
    name: 'Light Sage',
    color: 'rgb(226, 236, 219)',
    background: 'bg-[rgb(226,236,219)]',
  },
  {
    id: 'light-lilac',
    name: 'Light Lilac',
    color: 'rgb(240, 230, 255)',
    background: 'bg-[rgb(240,230,255)]',
  },
];

export default function ThemeSettings() {
  const { backgroundColor, setBackgroundColor } = useTheme();

  const [selectedTheme, setSelectedTheme] = React.useState(() => {
    const foundTheme = themes.find((theme) => theme.color === backgroundColor);
    return foundTheme || themes[0]; // Fallback to first theme if no match found
  });

  useEffect(() => {
    if (selectedTheme) {
      setBackgroundColor(selectedTheme.color);
    }
  }, [selectedTheme, setBackgroundColor]);

  return (
    <Card className="shadow-sm">
      <CardHeader className="border-b">
        <div className="flex items-center gap-2">
          <Paint className="h-5 w-5" />
          <CardTitle>App Theme</CardTitle>
        </div>
        <CardDescription>Choose a theme color for your dashboard background</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => setSelectedTheme(theme)}
              className="group relative aspect-square rounded-lg p-0.5 focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={`Select ${theme.name} theme`}
              aria-pressed={selectedTheme.id === theme.id}
            >
              <div
                className={`${theme.background} flex h-full w-full items-center justify-center rounded-md transition-all hover:opacity-90`}
              >
                {selectedTheme.id === theme.id && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/10">
                    <Check className="h-4 w-4 text-white drop-shadow" />
                  </div>
                )}
              </div>
              <span className="mt-1 block text-center text-xs font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
