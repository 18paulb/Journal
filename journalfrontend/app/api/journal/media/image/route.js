import { NextResponse } from 'next/server';
import { deleteImage } from '@/lib/aws/s3';

export async function DELETE(request) {
  const url = new URL(request.url);
  const key = url.searchParams.get('key'); // Extract query param

  if (!key) {
    return NextResponse.json({ error: 'Missing image key' }, { status: 400 });
  }

  // Perform the image deletion logic here
  const success = await deleteImage(key);

  if (!success) {
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Image deleted successfully' });
}
