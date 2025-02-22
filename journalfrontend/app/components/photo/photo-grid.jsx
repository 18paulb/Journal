'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageIcon, Trash2, X } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/app/components/loading-spinner';

export default function ImageGrid({ images, isLoading, setImages, network }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
        <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
        <h3 className="text-2xl font-semibold text-center">No Photos Saved :)</h3>
        <p className="mt-2 text-sm">Photos you add to this entry will appear here</p>
      </div>
    );
  }

  const handleDeleteClick = (e, image) => {
    e.stopPropagation(); // Prevent opening the image modal
    setImageToDelete(image);
  };

  const handleDelete = async () => {
    if (imageToDelete) {
      setImages(images.filter((image) => image !== imageToDelete));

      network
        .deleteImage(imageToDelete.key)
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          console.log(response);
        });

      setImageToDelete(null);
    }
  };

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
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(image);
                }
              }}
            >
              <Image
                src={image.image || '/placeholder.svg'}
                alt={image.alt || 'Journal photo'}
                fill
                className="object-cover group-hover:opacity-90 transition-opacity"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                onClick={(e) => handleDeleteClick(e, image)}
                aria-label="Delete image"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || { image: '', alt: '' }}
      />

      <AlertDialog open={!!imageToDelete} onOpenChange={(open) => !open && setImageToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the image.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

/**
 * Modal component for displaying full-size images
 **/
export function ImageModal({ isOpen, onClose, image }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-background/95 backdrop-blur-sm">
        <DialogTitle className="sr-only">{'Image Preview'}</DialogTitle>
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
            src={image.image || '/placeholder.svg'}
            alt={image.alt || 'Journal photo'}
            width={1200}
            height={800}
            className="object-contain w-full h-full"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
