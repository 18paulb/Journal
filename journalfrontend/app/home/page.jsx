import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Download, ImageIcon, PenSquare, Sparkles, Trophy } from "lucide-react"

export default function HomePage() {
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
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Entries</CardTitle>
                <div className="bg-primary/10 p-2 rounded-full">
                  <PenSquare className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Photos Added</CardTitle>
                <div className="bg-primary/10 p-2 rounded-full">
                  <ImageIcon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+3 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Keep it going!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Trophy className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 days</div>
                <p className="text-xs text-muted-foreground">Achieved on Jan 15</p>
              </CardContent>
            </Card>
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

