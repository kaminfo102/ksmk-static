import { getAllMessages } from '@/data/contact-messages';
import { format } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'لیست پیام‌ها | کودکان هوشمند کردستان',
  description: 'لیست پیام‌های دریافتی از کاربران',
};

const ITEMS_PER_PAGE = 10;

interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  message: string;
  createdAt: string;
}

export default function MessagesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const allMessages = getAllMessages();
  const totalPages = Math.ceil(allMessages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const messages = allMessages.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">لیست پیام‌ها</h1>
        <p className="text-muted-foreground text-center mb-12">
          لیست تمام پیام‌های دریافتی از کاربران
        </p>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th colSpan={6} className="px-6 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        <span className="font-bold">تعداد کل پیام‌ها:</span>
                        <span className="text-primary font-bold">{allMessages.length}</span>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-right">ردیف</th>
                  <th className="px-6 py-3 text-right">نام</th>
                  <th className="px-6 py-3 text-right">نام خانوادگی</th>
                  <th className="px-6 py-3 text-right">شماره تماس</th>
                  <th className="px-6 py-3 text-right">شهر</th>
                  <th className="px-6 py-3 text-right">پیام</th>
                  <th className="px-6 py-3 text-right">تاریخ</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message: ContactMessage, index: number) => (
                  <tr 
                    key={message.id}
                    className="border-t hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-center">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      {message.firstName}
                    </td>
                    <td className="px-6 py-4">
                      {message.lastName}
                    </td>
                    <td className="px-6 py-4">{message.phone}</td>
                    <td className="px-6 py-4">{message.city}</td>
                    <td className="px-6 py-4 max-w-md truncate">{message.message}</td>
                    <td className="px-6 py-4">
                      {format(new Date(message.createdAt), 'PPP', { locale: faIR })}
                    </td>
                  </tr>
                ))}
                {messages.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-4 text-center text-muted-foreground">
                      هیچ پیامی یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className="bg-muted/50 border-t">
                  <td colSpan={7} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MessageSquare className="h-4 w-4" />
                        <span>تعداد کل پیام‌ها:</span>
                        <span className="font-bold text-foreground">{allMessages.length}</span>
                      </div>
                      <div className="text-muted-foreground">
                        نمایش {startIndex + 1} تا {Math.min(endIndex, allMessages.length)} از {allMessages.length} رکورد
                      </div>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 py-4 border-t">
              <Link
                href={`/messages?page=${currentPage - 1}`}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-md border ${
                  currentPage === 1
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'hover:bg-muted'
                }`}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/messages?page=${page}`}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-md ${
                      currentPage === page
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>
              <Link
                href={`/messages?page=${currentPage + 1}`}
                className={`inline-flex items-center justify-center w-10 h-10 rounded-md border ${
                  currentPage === totalPages
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'hover:bg-muted'
                }`}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : 0}
              >
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 