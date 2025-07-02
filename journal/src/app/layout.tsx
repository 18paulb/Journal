import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { PageHeader } from "./components/header";
import { Toaster } from "sonner";
import { ThemeProvider } from "./providers/theme-provider";
import PageFooter from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remnity",
  description: "A journal to share",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <PageHeader />
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
          <PageFooter />
        </body>
      </UserProvider>
    </html>
  );
}
