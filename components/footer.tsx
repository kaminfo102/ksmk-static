"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 rtl" style={{ direction: 'rtl' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-right"
            style={{ direction: 'rtl' }}
          >
            <div className="flex gap-4">
              {[
                { src: "/images/logo/logo.jpg", alt: "لوگوی استان کردستان" },
                { src: "/images/logo/logo-iranskids.jpg", alt: "لوگوی اصلی موسسه" },
                { src: "/images/logo/logo-pama.jpg", alt: "لوگوی پاما" }
              ].map((logo, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed text-right">
            محاسبات ذهنی یک شکل از آموزش است که به منظور توانمند سازی کودک برای انجام محاسبات، بدون استفاده از هرگونه ابزاری مانند ماشین حساب و… می باشد.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-right"
            style={{ direction: 'rtl' }}
          >
            <h3 className="font-semibold text-xl mb-6 relative inline-block text-right">
              دسترسی سریع
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30"></span>
            </h3>
            <ul className="space-y-3">
              {/* <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-end gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"></span>
                  دوره‌های آموزشی
                </Link>
              </li> */}
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-end gap-2 group flex-row-reverse">
                  گالری تصاویر
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-end gap-2 group flex-row-reverse">
                  درباره ما
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center justify-end gap-2 group flex-row-reverse">
                  تماس با ما
                  <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors duration-300"></span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-right"
            style={{ direction: 'rtl' }}
          >
            <h3 className="font-semibold text-xl mb-6 relative inline-block text-right">
              تماس با ما
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30"></span>
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center justify-end gap-3 flex-row-reverse">
                <span>087-91002848</span>
                <Phone className="h-5 w-5 text-primary/70" />
              </li>
              <li className="flex items-center justify-end gap-3 flex-row-reverse">
                <span>mirzae.uast@gmail.com</span>
                <Mail className="h-5 w-5 text-primary/70" />
              </li>
              <li className="flex items-center justify-end gap-3 flex-row-reverse">
                <span>استان کردستان</span>
                <MapPin className="h-5 w-5 text-primary/70" />
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-right"
            style={{ direction: 'rtl' }}
          >
            <h3 className="font-semibold text-xl mb-6 relative inline-block text-right">
              شبکه‌های اجتماعی
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary/30"></span>
            </h3>
            <div className="flex justify-end space-x-6 space-x-reverse flex-row-reverse">
              <a href="https://www.instagram.com/iranskids.kurdestan/" className="text-muted-foreground hover:text-primary transition-colors duration-300 transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
              
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-muted-foreground" style={{ direction: 'rtl' }}>
          <p className="text-sm text-right">تمامی حقوق برای کودکان هوشمند استان کردستان محفوظ است. © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}