import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/aws/ses';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const subject = formData.get('subject');
    const email = formData.get('email');
    const message = formData.get('message');

    let fullSubject = `${email} : ${subject}`;
    let fullMessage = `From ${firstName} ${lastName} \n\n ${message}`;

    sendEmail(fullSubject, fullMessage);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
