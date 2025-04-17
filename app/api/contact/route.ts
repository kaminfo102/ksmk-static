import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveMessage } from '@/data/contact-messages';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'mirzae.uast@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'uejh ggpb nxwy fvrx',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, city, message } = body;

    // Save message to file
    await saveMessage({
      firstName,
      lastName,
      phone,
      city,
      message,
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'پیام جدید از فرم تماس',
      html: `
        <h2>پیام جدید از فرم تماس</h2>
        <p><strong>نام:</strong> ${firstName}</p>
        <p><strong>نام خانوادگی:</strong> ${lastName}</p>
        <p><strong>شماره تماس:</strong> ${phone}</p>
        <p><strong>شهر:</strong> ${city}</p>
        <p><strong>پیام:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'خطا در ارسال پیام' },
      { status: 500 }
    );
  }
} 