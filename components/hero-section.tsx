"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Image on the left (swapped from right) */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image container with transparent background */}
            <div className="relative w-full h-auto overflow-hidden">
              <div className="w-full h-auto bg-transparent">
                <Image
                  src="/kia.png"
                  alt="آموزشگاه ما"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                  style={{ 
                    backgroundColor: 'transparent',
                    // mixBlendMode: 'multiply'
                  }}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>
          
          {/* Text content on the right (swapped from left) */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              جشنواره و مسابقات آنلاین استانی محاسبات ذهنی با چرتکه
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground mb-6 text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
 همه فراگیران چرتکه، از هر مؤسسه آموزشی، می‌تونن در این مسابقه شرکت کنن           و تا الان هرچی آموزش دیدن و در هر سطح و ترمی که هستند خودشون رو محک بزنن
  </motion.p> 
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto">
                  اطلاعات بیشتر و ثبت نام
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  تماس با ما
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 