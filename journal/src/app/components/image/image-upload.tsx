'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X } from 'lucide-react';
import Image from 'next/image';

type ImageUploadProps = {
  uploadPhoto: React.Dispatch<React.SetStateAction<File | null>>;
};
export default function ImageUpload({ uploadPhoto }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        // Remove previously uploaded file
        if (preview) {
          URL.revokeObjectURL(preview);
        }

        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        uploadPhoto(file);
      }
    },
    [preview, uploadPhoto]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    multiple: true,
  });

  const removeFile = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview(undefined);
    uploadPhoto(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors
            ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 dark:border-gray-700'}
            hover:border-primary hover:bg-primary/5`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <Upload className="h-8 w-8 text-gray-500" />
            <div className="text-center">
              <p className="text-sm font-medium">
                {isDragActive ? 'Drop the files here' : 'Drag & drop files here'}
              </p>
              <p className="text-xs text-gray-500 mt-1">or click to select files</p>
            </div>
            <Button variant="secondary" type="button" className="mt-2">
              Select Files
            </Button>
          </div>
        </div>

        {preview && (
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div key={preview} className="relative group">
              <Image
                src={preview}
                alt={`Preview`}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full aspect-square"
              />
              <button
                onClick={() => removeFile()}
                className="absolute top-2 right-2 p-1 rounded-full bg-black/50 text-white 
                    opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
