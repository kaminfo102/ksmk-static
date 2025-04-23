import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, city, type, message } = body;

    // Send email notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `درخواست همکاری جدید - ${firstName} ${lastName}`,
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
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">درخواست همکاری جدید</h1>
            </div>
            <div class="content">
              <p>سلام،</p>
              <p>یک درخواست همکاری جدید دریافت شده است. جزئیات درخواست به شرح زیر است:</p>
              
              <div class="info-item">
                <div class="info-label">نام و نام خانوادگی</div>
                <div class="info-value">${firstName} ${lastName}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">شماره تماس</div>
                <div class="info-value">${phone}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">شهرستان</div>
                <div class="info-value">${city}</div>
              </div>
              
              <div class="info-item">
                <div class="info-label">نوع همکاری</div>
                <div class="info-value">${type}</div>
              </div>
              
              ${message ? `
              <div class="info-item">
                <div class="info-label">توضیحات</div>
                <div class="info-value">${message}</div>
              </div>
              ` : ''}
              
              <div class="info-item">
                <div class="info-label">تاریخ درخواست</div>
                <div class="info-value">${new Date().toLocaleDateString('fa-IR')}</div>
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
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'درخواست همکاری با موفقیت ثبت شد'
    });
  } catch (error) {
    console.error('Error in cooperation request:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در ثبت درخواست' },
      { status: 500 }
    );
  }
} 