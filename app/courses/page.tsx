import { Metadata } from 'next'
import { CoursesSection } from '@/components/courses-section'
import { mockCourses } from '@/data/mock-data'

export const metadata: Metadata = {
  title: 'دوره‌های آموزشی',
  description: 'لیست دوره‌های آموزشی آموزشگاه ما'
}

export default function CoursesPage() {
  return (
    <div className="pt-16">
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">دوره‌های آموزشی</h1>
          <p className="text-muted-foreground">
            جدیدترین و بهترین دوره‌های آموزشی ما را مشاهده کنید
          </p>
        </div>
      </div>
      <CoursesSection courses={mockCourses} />
    </div>
  )
}