import { getAllMessages } from '@/data/contact-messages';
import { format } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';

export const metadata = {
  title: 'پیام‌های تماس | کودکان هوشمند کردستان',
  description: 'لیست پیام‌های دریافتی از فرم تماس',
};

export default async function MessagesPage() {
  const messages = await getAllMessages();

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <h1 className="text-3xl font-bold mb-8 text-center">پیام‌های تماس</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نام</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">نام خانوادگی</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">شماره تماس</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">شهر</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">پیام</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">تاریخ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {messages.map((message) => (
              <tr key={message.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{message.city}</td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="max-w-xs truncate">{message.message}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {format(new Date(message.createdAt), 'PPP', { locale: faIR })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 