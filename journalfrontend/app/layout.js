import localFont from "next/font/local";
import "./globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { PageHeader } from "./components/header"
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Journal",
  description: "A web app to write your journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <PageHeader/>
          {children}
          <Toaster/>
        </body>
      </UserProvider>
    </html>
  );
}
