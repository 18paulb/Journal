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

    let fullSubject = `${email} : ${subject}`;
    let fullMessage = `From ${firstName} ${lastName} \n\n ${message}`;

    await sendEmail(fullSubject, fullMessage);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
