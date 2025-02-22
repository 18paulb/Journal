import { NextResponse } from 'next/server';

import { getPhotoCount } from '@/lib/aws/s3';

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const email = authHeader?.split(' ')[1];

  let count = await getPhotoCount(email);

  return NextResponse.json({
    count: count,
  });
}
