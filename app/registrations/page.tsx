import { getAllRegistrations } from '@/data/festival-registrations';
import { format } from 'date-fns-jalali';
import { faIR } from 'date-fns-jalali/locale';

export const metadata = {
  title: 'لیست ثبت‌نام‌ها | کودکان هوشمند کردستان',
  description: 'لیست ثبت‌نام‌های جشنواره محاسبات ذهنی با چرتکه',
};

export default function RegistrationsPage() {
  const registrations = getAllRegistrations();

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
                  <th className="px-6 py-3 text-right">نام و نام خانوادگی</th>
                  <th className="px-6 py-3 text-right">شماره تماس</th>
                  <th className="px-6 py-3 text-right">کد ملی</th>
                  <th className="px-6 py-3 text-right">شهر</th>
                  <th className="px-6 py-3 text-right">سطح مهارت</th>
                  <th className="px-6 py-3 text-right">تاریخ ثبت‌نام</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((registration) => (
                  <tr 
                    key={registration.id}
                    className="border-t hover:bg-muted/50 transition-colors"
                  >
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
                    <td colSpan={6} className="px-6 py-4 text-center text-muted-foreground">
                      هیچ ثبت‌نامی یافت نشد
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 