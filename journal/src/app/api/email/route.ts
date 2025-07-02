import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/aws/ses';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const subject = formData.get('subject') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const fullSubject = `${email} : ${subject}`;
    const fullMessage = `From ${firstName} ${lastName} \n\n ${message}`;

    await sendEmail(fullSubject, fullMessage);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: 'Unknown error occurred' });
    }
  }
}
