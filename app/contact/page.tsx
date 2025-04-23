import { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Handshake } from "lucide-react"

export const metadata: Metadata = {
  title: "تماس با ما | آموزشگاه ما",
  description: "اطلاعات تماس و فرم ارتباط با آموزشگاه ما"
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      {/* <ContactHero /> */}
      <ContactSection />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">همکاری با ما</h1>
          

          {/* Cooperation Section */}
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-right">
                <h2 className="text-2xl font-bold mb-3">به خانواده بزرگ کودکان هوشمند بپیوندید</h2>
                <p className="text-muted-foreground mb-4">
                  فرصت‌های همکاری با موسسه کودکان هوشمند کردستان را از دست ندهید
                </p>
                <Link href="/cooperation">
                  <Button className="group">
                    <Handshake className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
                    همکاری با ما
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block">
                <Handshake className="h-24 w-24 text-primary/20" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 p-6 rounded-lg">
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </div>
  )
}