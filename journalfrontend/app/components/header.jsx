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
} from "lucide-react";
export function PageHeader() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-800">
                My Journal
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <Home className="w-4 h-4 mr-1" />
              Home
            </Link>
            <Link
              href="/settings"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <Settings className="w-4 h-4 mr-1" />
              Settings
            </Link>
            <Link
              href="/api/auth/logout"
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 flex items-center"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Link>
          </nav>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/settings"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/api/auth/logout"
                    variant="ghost"
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
