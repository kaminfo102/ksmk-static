import { getAllRegistrations } from '@/data/festival-registrations';
import { format } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'لیست ثبت‌نام‌ها | کودکان هوشمند کردستان',
  description: 'لیست ثبت‌نام‌های جشنواره محاسبات ذهنی با چرتکه',
};

const ITEMS_PER_PAGE = 10;

export default function RegistrationsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const allRegistrations = getAllRegistrations();
  const totalPages = Math.ceil(allRegistrations.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const registrations = allRegistrations.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">لیست ثبت‌نام‌ها</h1>
        <p className="text-muted-foreground text-center mb-12">
          لیست تمام ثبت‌نام‌های انجام شده در جشنواره محاسبات ذهنی با چرتکه
        </p>

        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th colSpan={7} className="px-6 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-bold">تعداد کل ثبت‌نام‌ها:</span>
                        <span className="text-primary font-bold">{allRegistrations.length}</span>
                      </div>
                    </div>
                  </th>
                </tr>
                <tr className="bg-muted/50">
                  <th className="px-6 py-3 text-right">ردیف</th>
                  <th className="px-6 py-3 text-right">نام و نام خانوادگی</th>
                  <th className="px-6 py-3 text-right">شماره تماس</th>
                  <th className="px-6 py-3 text-right">کد ملی</th>
                  <th className="px-6 py-3 text-right">شهر</th>
                  <th className="px-6 py-3 text-right">سطح مهارت</th>
                  <th className="px-6 py-3 text-right">تاریخ ثبت‌نام</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration, index) => (
                  <tr 
                    key={registration.id}
                    className="border-t hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-center">
                      {startIndex + index + 1}
                    </td>
                    <td className="px-6 py-4">
                      {registration.firstName} {registration.lastName}
                    </td>
                    <td className="px-6 py-4">{registration.phone}</td>
                    <td className="px-6 py-4">{registration.code_meli}</td>
                    <td className="px-6 py-4">{registration.city}</td>
                    <td className="px-6 py-4">{registration.level}</td>
                    <td className="px-6 py-4">
                      {format(new Date(registration.createdAt), 'PPP', { locale: faIR })}
                    </td>
                  </tr>
                ))}
                {registrations.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-4 text-center text-muted-foreground">
                      هیچ ثبت‌نامی یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr className="bg-muted/50 border-t">
                  <td colSpan={7} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>تعداد کل ثبت‌نام‌ها:</span>
                        <span className="font-bold text-foreground">{allRegistrations.length}</span>
                      </div>
                      <div className="text-muted-foreground">
                        نمایش {startIndex + 1} تا {Math.min(endIndex, allRegistrations.length)} از {allRegistrations.length} رکورد
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
                href={`/registrations?page=${currentPage - 1}`}
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
                    href={`/registrations?page=${page}`}
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
                href={`/registrations?page=${currentPage + 1}`}
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