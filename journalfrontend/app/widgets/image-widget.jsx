import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export function ImageWidget({ title, imageSrc, description, tags }) {
  const [imageError, setImageError] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 })

  // Get the natural image dimensions
  useEffect(() => {
    if (imageSrc && typeof window !== "undefined") {
      const img = new window.Image()
      img.src = imageSrc
      img.onload = () => {
        setNaturalSize({
          width: img.naturalWidth,
          height: img.naturalHeight,
        })
      }
    }
  }, [imageSrc])

  return (
    <>
      <Card className="overflow-hidden">
        <div
          className="relative h-[200px] w-full cursor-pointer transition-opacity hover:opacity-90"
          onClick={() => !imageError && setIsLightboxOpen(true)}
        >
          {!imageError ? (
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full bg-gray-200 text-gray-500">
              Image not available
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent
          className="p-0 border-0 max-w-none w-auto"
          style={{
            maxWidth: `min(${naturalSize.width}px, 95vw)`,
            maxHeight: "95vh",
          }}
        >
          <DialogTitle className="sr-only">{title || "Image Preview"}</DialogTitle>
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-2 top-2 z-50 rounded-full bg-black/50 p-1.5 text-white hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <div
            className="relative"
            style={{
              width: `min(${naturalSize.width}px, 95vw)`,
              height: `min(${naturalSize.height}px, 95vh)`,
              aspectRatio: naturalSize.width / naturalSize.height,
            }}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain"
              priority
              sizes={`${naturalSize.width}px`}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

