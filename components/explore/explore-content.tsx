"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Compass, Filter, Search, Star, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExploreItem {
  id: string
  title: string
  category: string
  instructor: string
  rating: number
  students: number
  image: string
  trending?: boolean
  isFeatured?: boolean
  price?: number
  isFree?: boolean
}

const exploreCourses: ExploreItem[] = [
  {
    id: "web-development-2023",
    title: "Complete Web Development Bootcamp 2023",
    category: "Development",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 850,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    trending: true,
    isFeatured: true
  },
  {
    id: "machine-learning-python",
    title: "Machine Learning with Python: Zero to Hero",
    category: "Data Science",
    instructor: "Andrew Ng",
    rating: 4.9,
    students: 720,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    trending: true
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design Fundamentals",
    category: "Design",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: 520,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFree: true
  },
  {
    id: "mobile-app-flutter",
    title: "Mobile App Development with Flutter",
    category: "Development",
    instructor: "Max Schwarzmüller",
    rating: 4.6,
    students: 650,
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Masterclass",
    category: "Marketing",
    instructor: "Neil Patel",
    rating: 4.5,
    students: 780,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFeatured: true
  },
  {
    id: "data-science-python",
    title: "Data Science with Python: Pandas & NumPy",
    category: "Data Science",
    instructor: "Jose Portilla",
    rating: 4.7,
    students: 590,
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
]

const categories = [
  "All Categories",
  "Development",
  "Data Science",
  "Design",
  "Marketing",
  "Business",
  "Photography"
]

export function ExploreContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#2d0778]">Explore</h1>
        <p className="text-gray-500">Discover new courses, classes, and learning opportunities</p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search courses, topics..."
            className="h-10 w-full rounded-md border border-gray-300 bg-white pl-10 pr-4 text-sm focus:border-[#2d0778] focus:outline-none focus:ring-1 focus:ring-[#2d0778] sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <select
            className="h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#2d0778] focus:outline-none focus:ring-1 focus:ring-[#2d0778]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Button variant="outline" size="sm" className="gap-1 h-10">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Featured course */}
      {exploreCourses.find(course => course.isFeatured) && (
        <div className="relative overflow-hidden rounded-lg border shadow-sm">
          <div className="relative h-64 w-full">
            <Image
              src={exploreCourses.find(course => course.isFeatured)?.image || ""}
              alt="Featured course"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-[#2d0778] px-2.5 py-0.5 text-xs font-medium">Featured</span>
                {exploreCourses.find(course => course.isFeatured)?.trending && (
                  <span className="flex items-center gap-1 rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-medium">
                    <TrendingUp className="h-3 w-3" /> Trending
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold">{exploreCourses.find(course => course.isFeatured)?.title}</h2>
              <p className="text-sm text-gray-200">By {exploreCourses.find(course => course.isFeatured)?.instructor}</p>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{exploreCourses.find(course => course.isFeatured)?.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{exploreCourses.find(course => course.isFeatured)?.students} students</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-4">
            <div>
              <span className="text-sm text-gray-500">{exploreCourses.find(course => course.isFeatured)?.category}</span>
            </div>
            <Button className="bg-[#2d0778] hover:bg-[#2d0778]/90">View Course</Button>
          </div>
        </div>
      )}

      {/* Course grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exploreCourses
          .filter(course => !course.isFeatured)
          .filter(course => 
            (selectedCategory === "All Categories" || course.category === selectedCategory) &&
            (course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
             course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
             course.category.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map(course => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {course.trending && (
                  <div className="absolute left-3 top-3 rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-medium text-white">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Trending</span>
                    </div>
                  </div>
                )}
                {course.isFree && (
                  <div className="absolute right-3 top-3 rounded-full bg-green-500 px-2.5 py-0.5 text-xs font-medium text-white">
                    Free
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="rounded-full bg-[#2d0778]/10 px-2.5 py-0.5 text-xs font-medium text-[#2d0778]">{course.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#2d0778]">{course.title}</h3>
                <p className="mt-1 text-sm text-gray-500">By {course.instructor}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>{course.students} students</span>
                  </div>
                  {course.price ? (
                    <span className="font-semibold text-[#2d0778]">${course.price}</span>
                  ) : (
                    <span className="font-semibold text-green-600">Free</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
} 