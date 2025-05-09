"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, CheckCircle, Clock, Filter, ListFilter, MoreHorizontal, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface CourseProps {
  id: string
  title: string
  instructor: string
  progress: number
  image: string
  completedLessons: number
  totalLessons: number
  lastAccessed: string
  category: string
  rating: number
  certificate?: boolean
}

const courses: CourseProps[] = [
  {
    id: "web-development",
    title: "The Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 75,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completedLessons: 15,
    totalLessons: 20,
    lastAccessed: "Yesterday",
    category: "Development",
    rating: 4.8
  },
  {
    id: "react-complete",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    progress: 45,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completedLessons: 9,
    totalLessons: 20,
    lastAccessed: "2 days ago",
    category: "Development",
    rating: 4.9
  },
  {
    id: "python-bootcamp",
    title: "Complete Python Bootcamp",
    instructor: "Jose Portilla",
    progress: 100,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completedLessons: 24,
    totalLessons: 24,
    lastAccessed: "1 month ago",
    category: "Programming",
    rating: 4.7,
    certificate: true
  },
  {
    id: "machine-learning",
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    progress: 35,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completedLessons: 7,
    totalLessons: 20,
    lastAccessed: "3 days ago",
    category: "Data Science",
    rating: 4.6
  },
  {
    id: "javascript-weird-parts",
    title: "JavaScript: Understanding the Weird Parts",
    instructor: "Anthony Alicea",
    progress: 10,
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    completedLessons: 2,
    totalLessons: 20,
    lastAccessed: "1 week ago",
    category: "Development",
    rating: 4.9
  }
]

const filters = [
  "All Courses",
  "In Progress",
  "Completed",
  "Not Started"
]

export function MyCoursesContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("All Courses")

  const filteredCourses = courses.filter(course => {
    // Apply search filter
    if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    
    // Apply status filter
    if (selectedFilter === "In Progress") {
      return course.progress > 0 && course.progress < 100
    } else if (selectedFilter === "Completed") {
      return course.progress === 100
    } else if (selectedFilter === "Not Started") {
      return course.progress === 0
    }
    
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#2d0778]">My Courses</h1>
        <p className="text-gray-500">Continue learning or discover new insights from your enrolled courses</p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search your courses..."
            className="h-10 w-full rounded-md border border-gray-300 bg-white pl-10 pr-4 text-sm focus:border-[#2d0778] focus:outline-none focus:ring-1 focus:ring-[#2d0778] sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex rounded-md border border-gray-300 overflow-hidden">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  selectedFilter === filter 
                    ? "bg-[#2d0778] text-white" 
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="gap-1 h-10">
            <ListFilter className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* In-progress course (first one with progress < 100%) */}
      {filteredCourses.find(course => course.progress < 100 && course.progress > 0) && (
        <div className="rounded-lg border bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative h-24 w-36 overflow-hidden rounded-md">
              <Image
                src={filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.image || ""}
                alt="Course thumbnail"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Instructor: {filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.instructor}
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-1 md:mt-0">
                  <span className="text-sm text-gray-500">Last accessed:</span>
                  <span className="text-sm font-medium">
                    {filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.lastAccessed}
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">
                    {filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.completedLessons} of {
                      filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.totalLessons
                    } lessons completed
                  </span>
                  <span className="font-medium text-[#2d0778]">
                    {filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.progress}%
                  </span>
                </div>
                <Progress 
                  value={filteredCourses.find(course => course.progress < 100 && course.progress > 0)?.progress} 
                  className="h-2 bg-gray-200" 
                  indicatorClassName="bg-[#2d0778]"
                />
              </div>
              <div className="mt-4 flex items-center justify-end gap-4">
                <Button variant="outline" size="sm">View Details</Button>
                <Button size="sm" className="bg-[#2d0778] hover:bg-[#2d0778]/90">Continue Learning</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
              {course.progress === 100 && (
                <div className="absolute right-2 top-2 rounded-full bg-green-500 p-1 text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-[#2d0778]/10 px-2.5 py-0.5 text-xs font-medium text-[#2d0778]">
                  {course.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{course.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
              <p className="mt-1 text-sm text-gray-500">By {course.instructor}</p>
              <div className="mt-3 flex-1">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span>
                    {course.completedLessons} of {course.totalLessons} lessons
                  </span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress 
                  value={course.progress} 
                  className="h-1.5 bg-gray-200" 
                  indicatorClassName={course.progress === 100 ? "bg-green-500" : "bg-[#2d0778]"}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  <span>{course.lastAccessed}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Link href={`/courses/${course.id}`}>
                    <Button size="sm" className="h-8 bg-[#2d0778] hover:bg-[#2d0778]/90">
                      {course.progress > 0 && course.progress < 100 ? "Continue" : "View"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredCourses.length === 0 && (
        <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed bg-gray-50 px-4 py-10 text-center">
          <BookOpen className="h-10 w-10 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchQuery ? "Try a different search term or filter" : "Browse our catalog to find your next course"}
          </p>
          <Button className="mt-4 bg-[#2d0778] hover:bg-[#2d0778]/90">
            <Link href="/explore">Explore Courses</Link>
          </Button>
        </div>
      )}
    </div>
  )
} 