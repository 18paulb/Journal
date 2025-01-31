import Image from 'next/image'

export default function ImageGrid({images}) {
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
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                {image.width} × {image.height}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  