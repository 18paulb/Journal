"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from 'lucide-react'
import Image from "next/image"

export default function PhotoUpload() {
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles])
    
    // Create preview URLs for the new files
    const newPreviews = acceptedFiles.map(file => URL.createObjectURL(file))
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: true
  })

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index))
    setPreviews((prevPreviews) => {
      // Revoke the URL to avoid memory leaks
      URL.revokeObjectURL(prevPreviews[index])
      return prevPreviews.filter((_, i) => i !== index)
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors
            ${isDragActive ? "border-primary bg-primary/5" : "border-gray-300 dark:border-gray-700"}
            hover:border-primary hover:bg-primary/5`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <Upload className="h-8 w-8 text-gray-500" />
            <div className="text-center">
              <p className="text-sm font-medium">
                {isDragActive ? "Drop the files here" : "Drag & drop files here"}
              </p>
              <p className="text-xs text-gray-500 mt-1">or click to select files</p>
            </div>
            <Button variant="secondary" type="button" className="mt-2">
              Select Files
            </Button>
          </div>
        </div>

        {previews.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            {previews.map((preview, index) => (
              <div key={preview} className="relative group">
                <Image
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover w-full aspect-square"
                />
                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white 
                    opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

