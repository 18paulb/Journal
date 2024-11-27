"use client";

import Link from "next/link"; 
import { BookOpen, PenSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import axios from "axios";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-800">My Daily Journal</h1>
          <p className="text-lg text-gray-600">Capture your thoughts, reflect on your day</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
        <Link href={{ pathname: `/journal`}}>
            <Button
              variant="outline"
              className="h-40 w-full text-lg shadow-md transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <BookOpen className="h-8 w-8" />
                <span>View Journal Entries</span>
              </div>
            </Button>
          </Link>

          <Link href={{ pathname: `/journal/write`}}>
            <Button
              variant="outline"
              className="h-40 w-full text-lg shadow-md transition-all hover:bg-blue-50 hover:shadow-lg"
            >
              <div className="flex flex-col items-center space-y-4">
                <PenSquare className="h-8 w-8" />
                <span>Write Today's Journal</span>
              </div>
            </Button>
          </Link>
        </div>

        <footer className="mt-16 text-center text-gray-600">
          <p>Start your journaling journey today and track your personal growth!</p>
        </footer>
      </main>
    </div>
  )
}
