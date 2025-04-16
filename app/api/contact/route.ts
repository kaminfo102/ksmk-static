import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, city, message } = body;

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection configuration
    await transporter.verify();

    // Email content with enhanced design
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@example.com',
      to: process.env.CONTACT_EMAIL || 'info@example.com',
      subject: `پیام جدید از ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>پیام جدید از فرم تماس</title>
          <style>
            body {
              font-family: 'Tahoma', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              direction: rtl;
              text-align: right;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #4CAF50, #8BC34A);
              color: white;
              padding: 20px;
              border-radius: 8px 8px 0 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .content {
              padding: 20px;
              background-color: #ffffff;
              border-radius: 0 0 8px 8px;
            }
            .info-section {
              background-color: #f9f9f9;
              border-radius: 8px;
              padding: 15px;
              margin-bottom: 20px;
              border-right: 4px solid #4CAF50;
            }
            .info-item {
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              flex-direction: row-reverse;
            }
            .info-label {
              font-weight: bold;
              color: #4CAF50;
              width: 120px;
              display: inline-block;
              text-align: right;
            }
            .message-section {
              background-color: #E8F5E9;
              border-radius: 8px;
              padding: 20px;
              margin-top: 20px;
              border: 1px solid #C8E6C9;
            }
            .message-title {
              color: #2E7D32;
              font-weight: bold;
              margin-bottom: 10px;
              font-size: 18px;
              text-align: right;
            }
            .message-content {
              white-space: pre-wrap;
              color: #1B5E20;
              line-height: 1.8;
              text-align: right;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 15px;
              border-top: 1px solid #e0e0e0;
              color: #757575;
              font-size: 12px;
            }
            .highlight {
              background-color: #FFF9C4;
              padding: 2px 5px;
              border-radius: 3px;
              font-weight: bold;
            }
            /* Gmail-specific fixes */
            @media screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 10px !important;
              }
            }
            /* Force RTL for Gmail */
            * {
              direction: rtl !important;
              text-align: right !important;
            }
            .info-item {
              flex-direction: row-reverse !important;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>پیام جدید از فرم تماس</h1>
            </div>
            
            <div class="content">
              <div class="info-section">
                <div class="info-item">
                  <span class="info-label">نام:</span>
                  <span class="highlight">${firstName}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">نام خانوادگی:</span>
                  <span class="highlight">${lastName}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">شماره تماس:</span>
                  <span class="highlight">${phone}</span>
                </div>
                <div class="info-item">
                  <span class="info-label">شهر:</span>
                  <span class="highlight">${city}</span>
                </div>
              </div>
              
              <div class="message-section">
                <div class="message-title">پیام:</div>
                <div class="message-content">${message}</div>
              </div>
              
              <div class="footer">
                <p>این ایمیل به صورت خودکار از فرم تماس وبسایت ارسال شده است.</p>
                <p>با تشکر از تماس شما</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'پیام با موفقیت ارسال شد و در اسرع وقت با شما تماس خواهیم گرفت' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در ارسال پیام' },
      { status: 500 }
    );
  }
} 