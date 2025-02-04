import { useState, useEffect } from "react"
import axios from "axios"
import { Loader2, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ImageWidget } from "./image-widget";

export function NasaWidget({ date }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`/api/widget?date=${date}`)
      .then((response) => {
        setData(response.data)
        setError(false)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [date])

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center min-h-[200px] p-6">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">Loading NASA image of the day...</p>
        </CardContent>
      </Card>
    )
  }

  if (!data || error) {
    return (
      <Card className="w-full">
        <CardContent className="flex flex-col items-center justify-center min-h-[200px] p-6">
          <Rocket className="h-8 w-8 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-center">No NASA Image Available</h3>
          <p className="mt-2 text-sm text-muted-foreground text-center">
            We couldn&apos;t fetch the astronomy picture for this date
          </p>
        </CardContent>
      </Card>
    )
  }

  return <ImageWidget title={data.title} imageSrc={data.url} description={data.explanation} tags={null} />
}
