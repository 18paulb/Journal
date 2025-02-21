"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Download, PenSquare } from "lucide-react"
import { useUser } from "@auth0/nextjs-auth0/client"
import JournalEntryCountStat from "../components/stats/journal-entry-count"
import PhotoCountStat from "../components/stats/photo-count"
import CurrentStreakStat from "../components/stats/current-streak"
import LongestStreakStat from "../components/stats/longest-streak"

export default function HomePage() {

  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center space-y-2">
          <h1 className="text-4xl font-bold mb-2 text-primary">My Journal</h1>
          <p className="text-muted-foreground text-lg">Capture your thoughts, memories, and moments</p>
        </div>

        {/* Main Actions */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <Link href={{ pathname: `/journal` }} className="block">
            <Card className="hover:shadow-lg transition-all duration-300 group h-full">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Read Journal</h2>
                  <p className="text-muted-foreground">Browse through your past entries</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href={{ pathname: `/journal/write` }} className="block">
            <Card className="hover:shadow-lg transition-all duration-300 group h-full">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                    <PenSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Write Entry</h2>
                  <p className="text-muted-foreground">Start writing today&apos;s journal entry</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Stats Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Your Stats</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <JournalEntryCountStat user={user}></JournalEntryCountStat>

            <PhotoCountStat user={user}></PhotoCountStat>

            <CurrentStreakStat></CurrentStreakStat>

            <LongestStreakStat></LongestStreakStat>
            
          </div>
        </div>
        {/* Tools Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Link href={{ pathname: `/journal/export` }} className="block">
              <Card className="hover:shadow-lg transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                      <Download className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Export Journal</h2>
                    <p className="text-muted-foreground">Download your entries as PDF</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

