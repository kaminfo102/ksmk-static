import { Metadata } from "next"
import { EventsHero } from "@/components/events-hero"
import { format } from "date-fns-jalali"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Search, Users } from "lucide-react"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { mockEvents } from "@/data/mock-data"

export const metadata: Metadata = {
  title: "رویدادها | آموزشگاه ما",
  description: "رویدادها و مسابقات آموزشگاه ما"
}

// Events list skeleton component
function EventsListSkeleton() {
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Skeleton className="h-10 w-full md:w-64" />
        <Skeleton className="h-10 w-full md:w-64" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Events list component
function EventsListContent({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams.page) || 1
  const limit = 9
  const search = typeof searchParams.search === 'string' ? searchParams.search : ''
  const location = typeof searchParams.location === 'string' ? searchParams.location : ''
  
  // Filter events based on search and location
  let filteredEvents = mockEvents.filter(event => {
    const matchesSearch = search === '' || 
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase());
    
    const matchesLocation = location === '' || 
      event.location.toLowerCase().includes(location.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });
  
  // Get unique locations for filter
  const locations = Array.from(new Set(mockEvents.map(event => event.location))).sort();
  
  // Apply pagination
  const totalCount = filteredEvents.length;
  const totalPages = Math.ceil(totalCount / limit);
  const paginatedEvents = filteredEvents.slice((page - 1) * limit, page * limit);
  
  return (
    <div className="container py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="جستجوی رویدادها..."
            className="pl-9"
            defaultValue={search}
          />
        </div>
        
        <select 
          className="w-full md:w-64 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
          defaultValue={location}
        >
          <option value="">همه مکان‌ها</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      
      {paginatedEvents.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">رویدادی یافت نشد</h3>
          <p className="text-muted-foreground mt-2">
            {search || location 
              ? 'لطفاً معیارهای جستجو را تغییر دهید' 
              : 'در حال حاضر رویدادی برنامه‌ریزی نشده است'}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedEvents.map((event) => {
              // For mock data, we'll simulate some registrations
              const registrationsCount = Math.floor(Math.random() * event.capacity);
              const isFull = registrationsCount >= event.capacity;
              const remainingSpots = event.capacity - registrationsCount;
              
              return (
                <Card key={event.id} className="overflow-hidden flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(event.date), 'yyyy/MM/dd')}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>
                        {isFull ? (
                          <span className="text-destructive">ظرفیت تکمیل شده</span>
                        ) : (
                          `${remainingSpots} نفر باقی مانده`
                        )}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/events/${event.id}`}>
                        مشاهده جزئیات
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
          
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNumber = i + 1
                const isCurrentPage = pageNumber === page
                
                return (
                  <Button
                    key={pageNumber}
                    variant={isCurrentPage ? "default" : "outline"}
                    size="sm"
                    asChild
                  >
                    <Link 
                      href={{
                        pathname: '/events',
                        query: { 
                          ...searchParams,
                          page: pageNumber 
                        }
                      }}
                    >
                      {pageNumber}
                    </Link>
                  </Button>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function EventsPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <EventsHero />
      <Suspense fallback={<EventsListSkeleton />}>
        <EventsListContent searchParams={searchParams} />
      </Suspense>
    </>
  )
}