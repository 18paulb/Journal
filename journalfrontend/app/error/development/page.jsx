import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Construction } from "lucide-react"

export default function UnderDevelopment() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 p-4">
      <Construction className="size-16 text-muted-foreground" />
      <h1 className="text-center text-3xl font-bold">Page Under Development</h1>
      <Button asChild>
        <Link href="/home">Go Back Home</Link>
      </Button>
    </div>
  )
}

