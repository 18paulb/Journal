"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageIcon } from "lucide-react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ImageGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
        <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
        <h3 className="text-2xl font-semibold text-center">No Photos Saved :)</h3>
        <p className="mt-2 text-sm">Photos you add to this entry will appear here</p>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(image)
                }
              }}
            >
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.alt || "Journal photo"}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || { image: "", alt: "" }}
      />
    </>
  )
}


/**
 * Modal component for displaying full-size images
**/
export function ImageModal({ isOpen, onClose, image }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-background/95 backdrop-blur-sm">
        <DialogTitle className="sr-only">{"Image Preview"}</DialogTitle>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 bg-background/50 hover:bg-background/80 rounded-full"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
          <Image
            src={image.image || "/placeholder.svg"}
            alt={image.alt || "Journal photo"}
            width={1200}
            height={800}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}