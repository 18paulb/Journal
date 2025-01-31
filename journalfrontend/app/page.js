"use client";

import Link from "next/link";
import { BookCopy, PenLine, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      {user ? (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
          <main className="container mx-auto px-4 py-16">
            <div className="relative mb-12 flex flex-col items-center text-center">
              <div className="animate-fade-in">
                <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl">
                  Your Digital Journal
                </h1>
                <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
                  Capture your thoughts, memories, and reflections
                </p>
              </div>

              {/* Floating decoration */}
              <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />

              {/* Main Actions */}
              <div className="animate-fade-in-up grid w-full max-w-2xl gap-6 sm:grid-cols-2 [--animation-delay:200ms]">
              <Link href={{ pathname: `/journal` }} className="group">
                  <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <BookCopy className="h-6 w-6" />
                      </div>
                      <CardTitle>View Journals</CardTitle>
                      <CardDescription>
                        Browse your past entries
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
                
                <Link href={{ pathname: `/journal/write` }} className="group">
                  <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <PenLine className="h-6 w-6" />
                      </div>
                      <CardTitle>Write Journal</CardTitle>
                      <CardDescription>
                        Create a new journal entry
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <Link href="/api/auth/login" passHref>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <LogIn className="mr-2 h-5 w-5" />
              Login
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
