'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  '/images/sliders/1.jpg',
  '/images/sliders/2.jpg',
  '/images/sliders/3.jpg',
  '/images/sliders/4.jpg',
  '/images/sliders/5.jpg',
  '/images/sliders/6.jpg',
]

const ImageGallery = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full h-40 md:h-48 lg:h-56 overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
