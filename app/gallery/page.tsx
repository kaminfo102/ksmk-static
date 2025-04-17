import { Metadata } from "next"
import { GalleryGrid } from "@/components/gallery-grid"
import { mockGalleryItems } from "@/data/mock-data"
import ImageGallery from "@/components/gallery"
export const metadata: Metadata = {
  title: "گالری تصاویر | آموزشگاه ما",
  description: "گالری تصاویر و لحظات به یاد ماندنی آموزشگاه ما"
}

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">گالری تصاویر</h1>
          <p className="text-muted-foreground">
            تصاویر و لحظات به یاد ماندنی آموزشگاه ما
          </p>
        </div>
      </div>
      <GalleryGrid items={mockGalleryItems} />
      <ImageGallery />
    </div>
  )
}