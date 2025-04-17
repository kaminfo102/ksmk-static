import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
// import { saveRegistration } from '@/data/festival-registrations';

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
    // const registration = saveRegistration({
    //   firstName,
    //   lastName,
    //   phone,
    //   code_meli,
    //   city,
    //   level,
    //   message,
    // });

    // Send email notification
    const mailOptions = {
      from: process.env.SMTP_USER || 'mirzae.uast@gmail.com',
      to: process.env.SMTP_USER || 'mirzae.uast@gmail.com',
      subject: `ثبت‌نام جدید در جشنواره - ${firstName} ${lastName}`,
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
              border-radius: 10px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              background-color: #dc2626;
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              padding: 20px;
            }
            .info-item {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f9f9f9;
              border-radius: 5px;
              border-right: 3px solid #dc2626;
            }
            .info-label {
              font-weight: bold;
              color: #dc2626;
              margin-bottom: 5px;
            }
            .info-value {
              color: #333;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 0.9em;
              border-top: 1px solid #eee;
              margin-top: 20px;
            }
            .message-box {
              background-color: #f0f9ff;
              border: 1px solid #bae6fd;
              border-radius: 5px;
              padding: 15px;
              margin-top: 20px;
            }
            .message-label {
              color: #0369a1;
              font-weight: bold;
              margin-bottom: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>ثبت‌نام جدید در جشنواره</h1>
            </div>
            <div class="content">
              <div class="info-item">
                <div class="info-label">نام و نام خانوادگی</div>
                <div class="info-value">${firstName} ${lastName}</div>
              </div>
              <div class="info-item">
                <div class="info-label">شماره موبایل</div>
                <div class="info-value">${phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">کد ملی</div>
                <div class="info-value">${code_meli}</div>
              </div>
              <div class="info-item">
                <div class="info-label">شهر</div>
                <div class="info-value">${city}</div>
              </div>
              <div class="info-item">
                <div class="info-label">سطح مهارت</div>
                <div class="info-value">${level}</div>
              </div>
              ${message ? `
                <div class="message-box">
                  <div class="message-label">پیام</div>
                  <div class="info-value">${message}</div>
                </div>
              ` : ''}
              <div class="info-item">
                <div class="info-label">تاریخ ثبت‌نام</div>
                <div class="info-value">${new Date().toLocaleDateString('fa-IR')}</div>
              </div>
            </div>
            <div class="footer">
              <p>این ایمیل به صورت خودکار ارسال شده است.</p>
              <p>کودکان هوشمند کردستان</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'ثبت‌نام با موفقیت انجام شد',
      // registration 
    });
  } catch (error) {
    console.error('Error in festival registration:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در ثبت‌نام' },
      { status: 500 }
    );
  }
} 