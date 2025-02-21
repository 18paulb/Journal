"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  LogOut,
  Settings,
  MoreHorizontal,
  BookHeart,
} from "lucide-react";
import { useUser } from "@auth0/nextjs-auth0/client";

export function PageHeader() {
  const { user, error, isLoading } = useUser();
  return (
    <header className="sticky top-0 z-50 bg-white/80 border-b backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="flex items-center space-x-3 transition-colors hover:text-primary"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <BookHeart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Remnity</h1>
                <p className="text-xs text-muted-foreground">
                  Record your journey
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          {user && (
            <div>
              <nav className="hidden md:flex items-center space-x-1">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/" className="flex items-center space-x-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="/settings"
                    className="flex items-center space-x-2"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => window.location.href = "/api/auth/logout"}
                  asChild
                >
                  <span>Logout</span>
                </Button>
              </nav>

              <div className="md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/" className="flex items-center space-x-2">
                        <Home className="h-4 w-4" />
                        <span>Home</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/settings"
                        className="flex items-center space-x-2"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="text-red-500 focus:text-red-500"
                    >
                      <Link
                        href="/api/auth/logout"
                        className="flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
