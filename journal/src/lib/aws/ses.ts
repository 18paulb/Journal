import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses';

// Create SES service object
const sesClient = new SESClient(
  {
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS!,
      secretAccessKey: process.env.AWS_SECRET!,
    }
  }
);

/**
 * Send an email using Amazon SES
 * @param {string} subject - Email subject
 * @param {string} htmlBody - HTML content of the email
 * @param {string} textBody - Plain text content of the email
 * @returns {Promise} - Result from SES sendEmail operation
 */
export async function sendEmail(subject: string, textBody: string) {
  const params = {
    Destination: {
      ToAddresses: ['bjpaul99@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `<p>${textBody}</p>`,
        },
        Text: {
          Charset: 'UTF-8',
          Data: textBody ?? 'Empty Text',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: subject,
      },
    },
    Source: 'bjpaul99@gmail.com',
  };

  const command = new SendEmailCommand(params);

  try {
    const result = await sesClient.send(command);
    console.log('Email sent successfully:', result.MessageId);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
