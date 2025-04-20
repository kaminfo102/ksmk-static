import Image from "next/image"

interface ImageGalleryProps {
  items: string[];
}

export function ImageGallery({ items }: ImageGalleryProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((src, index) => (
          <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 