import { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { AboutFeatures } from "@/components/about-features"
import { AboutTeam } from "@/components/about-team"
import { AboutTestimonials } from "@/components/about-testimonials"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ImageGallery } from "@/components/image-gallery"

export const metadata: Metadata = {
  title: "درباره ما | کودکان هوشمند کردستان",
  description: "درباره آموزشگاه ما و خدمات آموزشی ما"
}
const images = [
  // '/images/about/1.jpeg',
  '/images/about/2.jpg',
  '/images/about/3.jpg',
  '/images/about/4.jpg',
  
 
]
export default function AboutPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      
      <AboutHero />
      <ImageGallery items={images} />
      <AboutFeatures />
      {/* <AboutTeam /> */}
      <AboutTestimonials />
    </div>
  )
}