"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "./ui/button"

const faqs = [
  {
    question: "مسابقه در چه تاریخی برگزار می شود و تا کی وقت داریم برای شرکت کردن؟",
    answer: "تاریخ شروع ثبت نام 30 فروردین و تاریخ پایان ثبت نام 12 اردیبهشت می باشد."
  },
  {
    question: "در طول اجرای مسابقه مشکلات و سوالاتم رو از کی میتونم بپرسم؟",
    answer: "شما می‌تونید از طریق پشتیبانی آنلاین یا تماس از طریق تلفن 087-91002848 و ارتباط از طریق واتساپ با تیم ما در ارتباط باشید."
  },
  {
    question: "مسابقه چطور برگزار میشه؟",
    answer: "مسابقه به صورت کاملا آنلاین برگزار میشه و فراگیر میتونه از طریق موبایل، تبلت، لپ تاب یا کامپیوتر رومیزی  سوالات رو جواب بده و در پایان امتیاز خودش رو ببینه"
  },
  {
    question: "چه فراگیرانی میتونن در مسابقه ثبت نام کنن؟",
    answer: "همه فراگیران در هر موسسه ای که چرتکه رو یاد گرفتن بر اساس  سن و سطح(ترم) میتونن در مسابقه ثبت نام کنن و سوالات در همان سطح رو جواب میدن و با هم سطحی های خودش رقابت خواهد داشت."
  }
]

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">سوالات متداول</h2>
          <p className="text-muted-foreground">پاسخ به سوالات رایج شما</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-lg py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: faqs.length * 0.1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button variant="outline" size="lg">
              سوالات بیشتر
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}