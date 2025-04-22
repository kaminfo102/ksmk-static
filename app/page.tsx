import { ContactSection } from "@/components/contact-section"
import { PromotionDialog } from "@/components/promotion-dialog"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/hero-section"
import ImageGallery from "@/components/gallery"

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
      
    </div>
  )
}