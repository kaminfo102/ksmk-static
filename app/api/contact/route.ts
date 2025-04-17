import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { saveMessage } from '@/data/contact-messages';

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
    // await saveMessage({
    //   firstName,
    //   lastName,
    //   phone,
    //   city,
    //   message,
    // });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'پیام جدید از فرم تماس',
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Tahoma, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              background-color: #ffffff;
            }
            .info-item {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f8f9fa;
              border-radius: 4px;
              border-right: 4px solid #4f46e5;
            }
            .info-label {
              font-weight: bold;
              color: #4f46e5;
              margin-bottom: 5px;
            }
            .info-value {
              color: #333;
            }
            .footer {
              text-align: center;
              padding: 20px;
              background-color: #f8f9fa;
              border-radius: 0 0 8px 8px;
              color: #666;
              font-size: 14px;
            }
            .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #4f46e5;
              color: white;
              text-decoration: none;
              border-radius: 4px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">پیام جدید از فرم تماس</h1>
            </div>
            <div class="content">
              <p>سلام،</p>
              <p>یک پیام جدید از فرم تماس دریافت شده است. جزئیات پیام به شرح زیر است:</p>
              
              <div class="info-item">
                <div class="info-label">نام و نام خانوادگی</div>
                <div class="info-value">${firstName} ${lastName}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">شماره تماس</div>
                <div class="info-value">${phone}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">شهر</div>
                <div class="info-value">${city}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">پیام</div>
                <div class="info-value">${message}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">تاریخ ارسال</div>
                <div class="info-value">${new Date().toLocaleDateString('fa-IR')}</div>
              </div>
              
              <div style="text-align: center; margin-top: 20px;">
                <a href="${process.env.NEXT_PUBLIC_APP_URL}/messages" class="button">مشاهده لیست پیام‌ها</a>
              </div>
            </div>
            <div class="footer">
              <p>این ایمیل به صورت خودکار ارسال شده است. لطفاً به آن پاسخ ندهید.</p>
              <p>© ${new Date().getFullYear()} کودکان هوشمند کردستان. تمامی حقوق محفوظ است.</p>
            </div>
          </div>
        </body>
        </html>
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