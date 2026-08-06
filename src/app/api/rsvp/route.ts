import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const notificationRecipients = [
  'yasmeenovias@gmail.com',
  'zoyaovias@gmail.com',
  'omerovias@gmail.com',
  'oviasm@gmail.com',
];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<{
      name: string;
      number: string;
    }>;

    const name = body.name?.trim();
    const number = body.number?.trim();

    if (!name || !number) {
      return NextResponse.json(
        { error: 'Name and number are required.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            'Email delivery is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and RSVP_FROM_EMAIL in the environment.',
        },
        { status: 500 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT ?? '587');
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const fromEmail = process.env.RSVP_FROM_EMAIL || smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    await Promise.all(
      notificationRecipients.map((recipient) =>
        transporter.sendMail({
          from: fromEmail,
          to: recipient,
          replyTo: smtpUser,
          subject: `New RSVP from ${name}`,
          text: [
            'A new RSVP has been submitted.',
            '',
            `Name: ${name}`,
            `Number: ${number}`,
            `Submitted At: ${submittedAt}`,
          ].join('\n'),
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2E2E2E;">
              <h2 style="margin: 0 0 16px; color: #B8860B;">New RSVP received</h2>
              <p style="margin: 0 0 12px;">A guest has submitted the RSVP form.</p>
              <table style="border-collapse: collapse; width: 100%; max-width: 520px;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 700; width: 120px;">Name</td>
                  <td style="padding: 8px 0;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700;">Number</td>
                  <td style="padding: 8px 0;">${escapeHtml(number)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 700;">Submitted At</td>
                  <td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td>
                </tr>
              </table>
            </div>
          `,
        })
      )
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Failed to process RSVP.',
      },
      { status: 500 }
    );
  }
}