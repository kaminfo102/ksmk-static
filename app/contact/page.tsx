import { Metadata } from "next"
import { ContactHero } from "@/components/contact-hero"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "تماس با ما | آموزشگاه ما",
  description: "اطلاعات تماس و فرم ارتباط با آموزشگاه ما"
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      <ContactHero />
      <ContactSection />
    </div>
  )
}