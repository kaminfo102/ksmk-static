// Mock data for courses
export const mockCourses = [
  {
    id: 1,
    title: "دوره برنامه‌نویسی React.js",
    summary: "یادگیری React.js از مقدماتی تا پیشرفته",
    imageUrl: "https://uploadkon.ir/uploads/13b808_252-Elemantary1.jpg",
    views: 1250,
    likes: 87
  },
  {
    id: 2,
    title: "دوره طراحی وب با HTML و CSS",
    summary: "یادگیری اصول طراحی وب و CSS پیشرفته",
    imageUrl: "/images/courses/html-css.jpg",
    views: 980,
    likes: 65
  },
  {
    id: 3,
    title: "دوره برنامه‌نویسی Node.js",
    summary: "ساخت اپلیکیشن‌های سمت سرور با Node.js",
    imageUrl: "/images/courses/nodejs.jpg",
    views: 1100,
    likes: 72
  }
];

// Mock data for gallery items
export const mockGalleryItems = [
  {
    id: 1,
    title: "کارگاه برنامه‌نویسی",
    description: "کارگاه عملی برنامه‌نویسی React.js",
    imageUrl: "https://uploadkon.ir/uploads/ceea08_25Plus2-14-.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "جشن فارغ‌التحصیلی",
    description: "جشن فارغ‌التحصیلی دانشجویان دوره React.js",
    imageUrl: "https://uploadkon.ir/uploads/34fa08_25پوستر-برای-نمایندگی.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "مسابقه برنامه‌نویسی",
    description: "مسابقه برنامه‌نویسی سالانه آموزشگاه",
    imageUrl: "https://uploadkon.ir/uploads/049a08_25IMG-4762.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: "سخنرانی مهمان",
    description: "سخنرانی متخصصین صنعت در آموزشگاه",
    imageUrl: "https://uploadkon.ir/uploads/222808_250-StarterD.jpg",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Mock data for events
export const mockEvents = [
  {
    id: 1,
    title: "کارگاه رایگان React.js",
    description: "کارگاه یک روزه رایگان برای آشنایی با React.js",
    imageUrl: "/images/events/react-workshop.jpg",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    location: "سالن اصلی آموزشگاه",
    capacity: 50,
    price: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "مسابقه برنامه‌نویسی",
    description: "مسابقه سالانه برنامه‌نویسی با جوایز ارزنده",
    imageUrl: "/images/events/coding-competition.jpg",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
    location: "سالن کنفرانس",
    capacity: 100,
    price: 500000,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "سخنرانی متخصصین",
    description: "سخنرانی متخصصین صنعت در مورد آینده برنامه‌نویسی",
    imageUrl: "/images/events/industry-talk.jpg",
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 21 days from now
    location: "سالن اجتماعات",
    capacity: 200,
    price: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    title: "جشن فارغ‌التحصیلی",
    description: "جشن فارغ‌التحصیلی دانشجویان دوره React.js",
    imageUrl: "/images/events/graduation.jpg",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    location: "سالن اصلی",
    capacity: 300,
    price: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]; 