import { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { AboutFeatures } from "@/components/about-features"
import { AboutTeam } from "@/components/about-team"
import { AboutTestimonials } from "@/components/about-testimonials"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export const metadata: Metadata = {
  title: "درباره ما | کودکان هوشمند کردستان",
  description: "درباره آموزشگاه ما و خدمات آموزشی ما"
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      <AboutHero />
      <AboutFeatures />
      {/* <AboutTeam /> */}
      <AboutTestimonials />
    </div>
  )
}