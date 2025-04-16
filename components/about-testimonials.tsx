"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "امیر حسینی",
    role: "",
    image: "/images/logo/logo.jpg",
    quote: "کیفیت آموزش‌ها عالی بود و مربیان خیلی خوب بودند."
  },
  {
    name: "مریم اکبری",
    role: "",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
    quote: "پشتیبانی و راهنمایی فوق‌العاده بود."
  },
  {
    name: "رضا محمدی",
    role: "",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070",
    quote: "همه چی عالیه"
  }
]

export function AboutTestimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">نظرات اولیاء</h2>
          <p className="text-muted-foreground">
            آنچه اولیاء فراگیران ما درباره دوره‌های آموزشی می‌گویند
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mr-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}