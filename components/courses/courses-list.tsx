"use client"

import { useState } from "react"
import { BookOpen, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/course-card"
import { CourseFilters } from "@/components/courses/course-filters"
import { Pagination } from "@/components/courses/pagination"

// Mock data for courses
const coursesData = [
  {
    id: 1,
    isNew: true,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Webflow Tutorial: Build Your First Portfolio Website In a Minute",
    instructor: "Adam Smith",
    rating: 4.7,
    reviews: 32,
    price: "$12.99",
    duration: "3:50",
    totalDuration: "9:32",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 2,
    isNew: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Basic To Advance Design System With UX Strategies",
    instructor: "Scott Warden",
    rating: 4.7,
    reviews: 540,
    price: "$49.99",
    duration: "3:50",
    totalDuration: "9:32",
    category: "UX/UI",
    level: "Intermediate",
  },
  {
    id: 3,
    isNew: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Advanced Frontend Development Techniques",
    instructor: "Jane Cooper",
    rating: 4.9,
    reviews: 128,
    price: "$39.99",
    duration: "4:20",
    totalDuration: "12:45",
    category: "Development",
    level: "Advanced",
  },
  {
    id: 4,
    isNew: true,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Mastering React and Next.js for Modern Web Apps",
    instructor: "Michael Johnson",
    rating: 4.8,
    reviews: 215,
    price: "$59.99",
    duration: "5:15",
    totalDuration: "15:30",
    category: "Development",
    level: "Intermediate",
  },
  {
    id: 5,
    isNew: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Introduction to User Experience Design Principles",
    instructor: "Sarah Williams",
    rating: 4.6,
    reviews: 89,
    price: "$29.99",
    duration: "2:45",
    totalDuration: "8:20",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 6,
    isNew: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Data Visualization with D3.js",
    instructor: "Robert Chen",
    rating: 4.5,
    reviews: 76,
    price: "$44.99",
    duration: "4:10",
    totalDuration: "11:45",
    category: "Data",
    level: "Advanced",
  },
  {
    id: 7,
    isNew: true,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "Mobile App Design: From Wireframes to High-Fidelity Prototypes",
    instructor: "Emily Parker",
    rating: 4.9,
    reviews: 142,
    price: "$54.99",
    duration: "3:30",
    totalDuration: "10:15",
    category: "Design",
    level: "Intermediate",
  },
  {
    id: 8,
    isNew: false,
    thumbnail: "/placeholder.svg?height=200&width=350",
    title: "JavaScript Algorithms and Data Structures",
    instructor: "David Kim",
    rating: 4.8,
    reviews: 320,
    price: "$64.99",
    duration: "6:20",
    totalDuration: "18:45",
    category: "Development",
    level: "Advanced",
  },
]

export function CoursesList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 6

  // Calculate pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = coursesData.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(coursesData.length / coursesPerPage)

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-[#2d0778]" />
          <h1 className="text-2xl font-bold text-[#2d0778]">Courses</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 sm:min-w-[240px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search courses..."
              className="pl-8 focus:border-[#2d0778] focus:ring-1 focus:ring-[#2d0778]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="h-10 w-10 border-dashed hover:border-[#bee543] hover:text-[#2d0778]"
          >
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 border-dashed hover:border-[#bee543] hover:text-[#2d0778]"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
      </div>

      {showFilters && <CourseFilters onClose={() => setShowFilters(false)} />}

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-white">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">All Courses</TabsTrigger>
          <TabsTrigger value="design" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Design</TabsTrigger>
          <TabsTrigger value="development" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Development</TabsTrigger>
          <TabsTrigger value="business" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Business</TabsTrigger>
          <TabsTrigger value="marketing" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Marketing</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentCourses.map((course) => (
              <CourseCard
                key={course.id}
                isNew={course.isNew}
                thumbnail={course.thumbnail}
                title={course.title}
                instructor={course.instructor}
                rating={course.rating}
                reviews={course.reviews}
                price={course.price}
                duration={course.duration}
                totalDuration={course.totalDuration}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="design" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentCourses
              .filter((course) => course.category === "Design" || course.category === "UX/UI")
              .map((course) => (
                <CourseCard
                  key={course.id}
                  isNew={course.isNew}
                  thumbnail={course.thumbnail}
                  title={course.title}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviews={course.reviews}
                  price={course.price}
                  duration={course.duration}
                  totalDuration={course.totalDuration}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="development" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentCourses
              .filter((course) => course.category === "Development")
              .map((course) => (
                <CourseCard
                  key={course.id}
                  isNew={course.isNew}
                  thumbnail={course.thumbnail}
                  title={course.title}
                  instructor={course.instructor}
                  rating={course.rating}
                  reviews={course.reviews}
                  price={course.price}
                  duration={course.duration}
                  totalDuration={course.totalDuration}
                />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="business" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed bg-white p-8 text-center">
              <div>
                <p className="text-muted-foreground">No business courses available at the moment.</p>
                <Button variant="link" className="mt-2">
                  Browse other categories
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="marketing" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed bg-white p-8 text-center">
              <div>
                <p className="text-muted-foreground">No marketing courses available at the moment.</p>
                <Button variant="link" className="mt-2">
                  Browse other categories
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}
