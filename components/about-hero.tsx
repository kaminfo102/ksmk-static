"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative h-[500px] flex items-center">
      <Image
        src="https://uploadkon.ir/uploads/e1fe16_25iranskidscom-66127153-119991682611440-1794678820946436160-n.jpg"
        alt="درباره ما"
        fill
        className="object-contain md:object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {/* <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            داستان ما
          </h1>
          <p className="text-xl text-white/90">
          موسسه کودکان هوشمند،آموزش محاسبات ذهنی با استفاده از چرتکه که بر گرفته از کشورهای آسیای شرقی می باشد را به یک برنامه جامع به منظور معرفی به فرزندان ایران اسلامی بومی سازی کرده و سرلوحه کار خویش قرار داده است. محاسبات ذهنی یک شکل از آموزش است که به منظور توانمند سازی کودک برای انجام محاسبات، بدون استفاده از هرگونه ابزاری مانند ماشین حساب و… می باشد.کودک، با استفاده از این تکنیک قادر خواهد بود قدرت ذهنی خود را افزایش دهد. امروزه بیش از ۴۰۰۰ مرکز در سراسر جهان این آموزش پویا را در زمینه ریاضیات توصیه می کنند واین تعداد رو به افزایش است. این موسسه به عنوان یک نهاد برتر با تاییدیه رسمی از دفتر تکنولوژی وزارت آموزش و پرورش در آموزش محاسبات ذهنی به رسمیت شناخته شده ودر سراسر ایران آغاز به کار نموده است ، نمایندگان این موسسه طیف گسترده ای از شهرهای کشور می باشند که نسبت به تربیت فرزندان ایران اسلامی اقدام نموده اند
          </p> */}
        </motion.div>
      </div>
    </section>
  )
}