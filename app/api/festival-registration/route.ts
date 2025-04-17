import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { saveRegistration } from '@/data/festival-registrations';

const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAIL_USER || 'mirzae.uast@gmail.com',
//     pass: process.env.GMAIL_APP_PASSWORD || 'uejh ggpb nxwy fvrx',
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
    const { firstName, lastName, phone, code_meli, city, level, message } = body;

    // Save registration to file
    const registration = saveRegistration({
      firstName,
      lastName,
      phone,
      code_meli,
      city,
      level,
      message,
    });

    // Send email notification
    const mailOptions = {
      from: process.env.SMTP_USER || 'mirzae.uast@gmail.com',
      to: process.env.SMTP_USER || 'mirzae.uast@gmail.com',
      subject: 'ثبت‌نام جدید در جشنواره',
      html: `
        <div dir="rtl" style="font-family: Tahoma, Arial, sans-serif;">
          <h2>ثبت‌نام جدید در جشنواره</h2>
          <p><strong>نام:</strong> ${firstName}</p>
          <p><strong>نام خانوادگی:</strong> ${lastName}</p>
          <p><strong>شماره موبایل:</strong> ${phone}</p>
          <p><strong>کد ملی:</strong> ${code_meli}</p>
          <p><strong>شهر:</strong> ${city}</p>
          <p><strong>سطح مهارت:</strong> ${level}</p>
          ${message ? `<p><strong>پیام:</strong> ${message}</p>` : ''}
          <p><strong>تاریخ ثبت‌نام:</strong> ${new Date().toLocaleDateString('fa-IR')}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'ثبت‌نام با موفقیت انجام شد',
      registration 
    });
  } catch (error) {
    console.error('Error in festival registration:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در ثبت‌نام' },
      { status: 500 }
    );
  }
} 