"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PromotionDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasScrolled = window.scrollY > window.innerHeight
      if (hasScrolled) {
        setIsOpen(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[90%] md:max-w-[700px] lg:max-w-[800px] p-4 sm:p-6">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl text-center">مسابقه آنلاین محاسبات ذهنی با چرتکه</DialogTitle>
          <DialogDescription className="text-center text-base sm:text-lg">
            فرصت ویژه برای همه فراگیرانی که در هر موسسه ای چرتکه رو یاد گرفتن باشن.
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden my-4 sm:my-6">
          <Image
            src="/fesival-dialog.jpg"
            alt="مسابقه محاسبات ذهنی با چرتکه استان کردستان"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 700px, 800px"
            priority
          />
        </div>
        <div className="space-y-4 sm:space-y-6">
          <p className="text-muted-foreground text-sm sm:text-base">
            در مسابقه بزرگ محاسبات ذهنی با چرتکه شرکت کنید و از جوایز ارزنده بهره‌مند شوید.
            این فرصتی عالی برای محک زدن خودتونه.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-sm sm:text-base">
              <span className="bg-primary/10 text-primary rounded-full p-1.5 ml-2">✓</span>
              جوایز ارزنده
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <span className="bg-primary/10 text-primary rounded-full p-1.5 ml-2">✓</span>
              حضور در مسابقات ملی و بین المللی
            </li>
            <li className="flex items-center text-sm sm:text-base">
              <span className="bg-primary/10 text-primary rounded-full p-1.5 ml-2">✓</span>
              گواهینامه معتبر شرکت در مسابقه
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:space-x-4 sm:space-x-reverse mt-6">
            <Button variant="outline" onClick={() => setIsOpen(false)} className="w-full sm:w-auto">
              بعداً یادآوری کن
            </Button>
            <Link href="/festival-guide">
            <Button className="w-full sm:w-auto">
              ثبت‌نام در مسابقه
            </Button>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}