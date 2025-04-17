import Image from "next/image";
import Link from "next/link";
import { FileText, Download, Calendar, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FestivalRegistrationForm } from "@/components/festival-registration-form";

export const metadata = {
  title: "راهنمای شرکت در جشنواره و مسابقه | کودکان هوشمند کردستان",
  description: "راهنمای کامل برای شرکت در جشنواره و مسابقه محاسبات ذهنی با چرتکه",
};

export default function FestivalGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">راهنمای شرکت در جشنواره و مسابقه</h1>
        <p className="text-muted-foreground text-center mb-12">
          اطلاعات کامل برای شرکت در جشنواره و مسابقه محاسبات ذهنی با چرتکه
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/festival_dialog.jpg"
            alt="جشنواره و مسابقه محاسبات ذهنی با چرتکه"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">مسابقه آنلاین محاسبات ذهنی با چرتکه</h2>
              <p className="text-lg">فرصتی برای نمایش مهارت‌های شما</p>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <Calendar className="h-5 w-5 text-primary mb-2" />
              <CardTitle className="text-lg">تاریخ مسابقه</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>۱۵ خرداد ۱۴۰۳</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-5 w-5 text-primary mb-2" />
              <CardTitle className="text-lg">شرکت‌کنندگان</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>همه فراگیران چرتکه</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Award className="h-5 w-5 text-primary mb-2" />
              <CardTitle className="text-lg">جوایز</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>جوایز ارزنده و گواهینامه</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <BookOpen className="h-5 w-5 text-primary mb-2" />
              <CardTitle className="text-lg">سطح مسابقه</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>استانی و ملی</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Registration Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">1</span>
              نحوه ثبت‌نام
            </h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-4">
                برای ثبت‌نام در مسابقه، لطفاً فرم زیر را تکمیل کنید:
              </p>
              <FestivalRegistrationForm />
            </div>
          </section>

          {/* Competition Details */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">2</span>
              جزئیات مسابقه
            </h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-4">
                مسابقه محاسبات ذهنی با چرتکه در دو مرحله برگزار می‌شود:
              </p>
              <div className="space-y-4">
                <div className="border-r-4 border-primary pr-4">
                  <h3 className="font-bold text-lg mb-2">مرحله اول: آزمون آنلاین</h3>
                  <p className="text-muted-foreground">
                    در این مرحله، شرکت‌کنندگان در یک آزمون آنلاین شرکت می‌کنند که شامل سوالات محاسباتی با چرتکه است.
                    این آزمون در تاریخ ۱۵ خرداد ۱۴۰۳ برگزار می‌شود.
                  </p>
                </div>
                <div className="border-r-4 border-primary pr-4">
                  <h3 className="font-bold text-lg mb-2">مرحله دوم: مسابقه نهایی</h3>
                  <p className="text-muted-foreground">
                    شرکت‌کنندگان برتر از مرحله اول، به مسابقه نهایی که به صورت حضوری برگزار می‌شود، راه می‌یابند.
                    تاریخ مسابقه نهایی متعاقباً اعلام خواهد شد.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">3</span>
              منابع و راهنماها
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-primary ml-2" />
                    راهنمای شرکت در مسابقه
                  </CardTitle>
                  <CardDescription>راهنمای کامل برای شرکت در مسابقه</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 ml-2" />
                    دانلود PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-primary ml-2" />
                    نمونه سوالات
                  </CardTitle>
                  <CardDescription>نمونه سوالات مسابقات قبلی</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 ml-2" />
                    دانلود PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-primary ml-2" />
                    مقررات مسابقه
                  </CardTitle>
                  <CardDescription>مقررات و قوانین شرکت در مسابقه</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 ml-2" />
                    دانلود PDF
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 text-primary ml-2" />
                    جدول زمانی
                  </CardTitle>
                  <CardDescription>جدول زمانی دقیق مراحل مسابقه</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 ml-2" />
                    دانلود PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">4</span>
              گالری تصاویر
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/festival_dialog.jpg"
                  alt="جشنواره و مسابقه محاسبات ذهنی با چرتکه"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/festival_dialog.jpg"
                  alt="جشنواره و مسابقه محاسبات ذهنی با چرتکه"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/festival_dialog.jpg"
                  alt="جشنواره و مسابقه محاسبات ذهنی با چرتکه"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">5</span>
              سوالات متداول
            </h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">آیا می‌توانم در هر سطحی شرکت کنم؟</h3>
                <p className="text-muted-foreground">
                  بله، مسابقه برای تمام سطوح چرتکه طراحی شده است. در فرم ثبت‌نام، سطح مهارت خود را مشخص کنید.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">هزینه ثبت‌نام چقدر است؟</h3>
                <p className="text-muted-foreground">
                  هزینه ثبت‌نام برای هر شرکت‌کننده ۵۰۰,۰۰۰ ریال است که شامل هزینه برگزاری مسابقه و گواهینامه شرکت می‌شود.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-bold mb-2">آیا نیاز به تجهیزات خاصی دارم؟</h3>
                <p className="text-muted-foreground">
                  برای مرحله اول (آزمون آنلاین)، شما به یک کامپیوتر یا تبلت با اتصال به اینترنت نیاز دارید.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="bg-primary/5 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">نیاز به کمک دارید؟</h2>
            <p className="mb-6 text-muted-foreground">
              اگر سوالی دارید یا نیاز به راهنمایی بیشتری دارید، با ما تماس بگیرید.
            </p>
            <Button asChild>
              <Link href="/contact">تماس با ما</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
} 