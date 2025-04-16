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
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">مسابقه آنلاین محاسبات ذهنی با چرتکه</DialogTitle>
          <DialogDescription>
            فرصت ویژه برای همه فراگیرانی که در هر موسسه ای چرتکه رو یاد گرفتن باشن.
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
          <Image
            src="/festival_dialog.jpg"
            alt="مسابقه محاسبات ذهنی با چرتکه استان کردستان"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <p className="text-muted-foreground">
            در مسابقه بزرگ محاسبات ذهنی با چرتکه شرکت کنید و از جوایز ارزنده بهره‌مند شوید.
            این فرصتی عالی برای محک زدن خودتونه.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 ml-2">✓</span>
              جوایز ارزنده
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 ml-2">✓</span>
              حضور در مسابقات ملی و بین المللی
            </li>
            <li className="flex items-center">
              <span className="bg-primary/10 text-primary rounded-full p-1 ml-2">✓</span>
              گواهینامه معتبر شرکت در مسابقه
            </li>
          </ul>
          <div className="flex justify-end space-x-4 space-x-reverse">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              بعداً یادآوری کن
            </Button>
            <Button>
              ثبت‌نام در مسابقه
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}