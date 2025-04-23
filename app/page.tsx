import { ContactSection } from "@/components/contact-section"
import { PromotionDialog } from "@/components/promotion-dialog"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/hero-section"
import ImageGallery from "@/components/gallery"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Handshake } from "lucide-react"

export default function Home() {
  return (
    
    <div className="pt-16">
      <WhatsAppFloat />
      
      {/* New Hero Section */}
      <HeroSection />
      
      {/* <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <HeroSlider slides={sliderData} />
          </div>
          <div className="lg:col-span-1 flex flex-col h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl shadow-lg border border-border/50 overflow-hidden">
            
            <div className="flex-grow overflow-hidden">
              <EventsSlider />
            </div>
          </div>
        </div>
      </div> */}
      
      
      <FAQSection />
      <ImageGallery />
      
      <ContactSection />
      <PromotionDialog />
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
    
  )
}