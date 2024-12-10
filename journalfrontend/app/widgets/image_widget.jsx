import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";

export function ImageWidget({ title, imageSrc, description, tags }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px] w-full">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)} // Handle image load errors
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
  );
}
