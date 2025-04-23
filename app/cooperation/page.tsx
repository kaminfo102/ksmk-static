import { Metadata } from "next"
import { CooperationForm } from "@/components/cooperation-form"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "همکاری با ما | کودکان هوشمند کردستان",
  description: "فرصت‌های همکاری با موسسه کودکان هوشمند کردستان"
}

export default function CooperationPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">همکاری با ما</h1>
          <p className="text-muted-foreground text-center mb-12">
            به خانواده بزرگ کودکان هوشمند بپیوندید
          </p>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">1</span>
                درباره همکاری با ما
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="mb-4">
                  موسسه کودکان هوشمند کردستان با هدف گسترش آموزش محاسبات ذهنی با چرتکه در سراسر استان، از همکاری با افراد و مراکز آموزشی استقبال می‌کند. ما به دنبال افرادی هستیم که:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>به آموزش و پرورش کودکان علاقه‌مند هستند</li>
                  <li>دارای تجربه در زمینه آموزش هستند</li>
                  <li>توانایی مدیریت و راه‌اندازی مراکز آموزشی را دارند</li>
                  <li>به دنبال فرصت‌های شغلی پویا و چالش‌برانگیز هستند</li>
                </ul>
              </div>
            </section>

            {/* Cooperation Types */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">2</span>
                انواع همکاری
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">نماینده</h3>
                  <p className="text-muted-foreground">
                    نمایندگان ما در شهرهای مختلف استان، مسئولیت معرفی و گسترش خدمات موسسه را بر عهده دارند.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">مربی</h3>
                  <p className="text-muted-foreground">
                    مربیان ما پس از گذراندن دوره‌های تخصصی، به آموزش کودکان در مراکز مختلف می‌پردازند.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">آموزشگاه</h3>
                  <p className="text-muted-foreground">
                    مراکز آموزشی می‌توانند با دریافت نمایندگی، خدمات موسسه را به دانش‌آموزان ارائه دهند.
                  </p>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">سوپروایزر آموزشی</h3>
                  <p className="text-muted-foreground">
                    سوپروایزرهای آموزشی بر کیفیت آموزش در مراکز مختلف نظارت می‌کنند.
                  </p>
                </div>
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">3</span>
                شرایط همکاری
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  
                  <li>تجربه کاری در زمینه آموزش کودکان</li>
                  <li>توانایی برقراری ارتباط موثر با کودکان و والدین</li>
                  <li>تعهد به اصول اخلاقی و حرفه‌ای</li>
                  <li>توانایی کار تیمی و مدیریت زمان</li>
                </ul>
              </div>
            </section>

            {/* Registration Form */}
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="bg-primary/10 text-primary rounded-full p-2 mr-3">4</span>
                فرم درخواست همکاری
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <CooperationForm />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 