import Link from "next/link"
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="size-5" />
            Authentication Error
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTitle>Unable to sign in</AlertTitle>
            <AlertDescription>We encountered an issue while trying to authenticate your account.</AlertDescription>
          </Alert>

          <div className="space-y-4 text-sm text-muted-foreground">
            <p>This could be due to:</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Invalid email or password combination</li>
              <li>Your account may have been deactivated</li>
              <li>Temporary authentication service disruption</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="flex gap-2 w-full">
            <Button asChild variant="outline" className="w-full">
              <Link href="/api/auth/login">Try Again</Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/info/contact-us">Contact Support</Link>
            </Button>
          </div>
          <Button asChild variant="link" className="w-full">
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}

