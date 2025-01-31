import Image from 'next/image'
import { ImageIcon } from "lucide-react"

export default function ImageGrid({images}) {

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
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative bg-muted rounded-lg overflow-hidden">
              <Image
                src={image.image || "/placeholder.svg"}
                alt="Journal photo"
                width={200}
                height={200}
                className="max-w-full h-auto hover:opacity-90 transition-opacity"
                style={{
                  maxHeight: "600px", // Limit maximum height
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
  