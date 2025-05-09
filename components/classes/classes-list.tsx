"use client"

import Link from "next/link"
import Image from "next/image"
import { BarChart2, Book, Calendar, Clock, GraduationCap, Plus, Search, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClassProps {
  id: string
  name: string
  instructor: string
  instructorAvatar: string
  students: number
  description: string
  nextSession: string
  duration: string
  progress: number
  coverImage: string
}

const classes: ClassProps[] = [
  {
    id: "javascript-101",
    name: "JavaScript 101",
    instructor: "Prof. John Smith",
    instructorAvatar: "https://i.pravatar.cc/150?u=john",
    students: 24,
    description: "Learn the fundamentals of JavaScript including variables, functions, and DOM manipulation.",
    nextSession: "Tomorrow, 10:00 AM",
    duration: "8 weeks",
    progress: 65,
    coverImage: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "react-fundamentals",
    name: "React Fundamentals",
    instructor: "Dr. Emily Chen",
    instructorAvatar: "https://i.pravatar.cc/150?u=emily",
    students: 18,
    description: "Master React concepts including components, state, props, and hooks.",
    nextSession: "Monday, 2:00 PM",
    duration: "10 weeks",
    progress: 42,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: "python-for-beginners",
    name: "Python for Beginners",
    instructor: "Sarah Johnson",
    instructorAvatar: "https://i.pravatar.cc/150?u=sarah2",
    students: 32,
    description: "Start your Python journey learning syntax, data structures, and basic algorithms.",
    nextSession: "Wednesday, 11:00 AM",
    duration: "6 weeks",
    progress: 20,
    coverImage: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
]

export function ClassesList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#2d0778]">My Classes</h1>
        <p className="text-gray-500">Classes created by teachers to enhance your learning journey</p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search classes..."
            className="h-10 w-full rounded-md border border-gray-300 bg-white pl-10 pr-4 text-sm focus:border-[#2d0778] focus:outline-none focus:ring-1 focus:ring-[#2d0778] sm:w-64"
          />
        </div>
        <Button className="gap-2 bg-[#2d0778] hover:bg-[#2d0778]/90">
          <Plus className="h-4 w-4" />
          <span>Join New Class</span>
        </Button>
      </div>

      {/* Classes grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <Link 
            key={classItem.id}
            href={`/my-classes/${classItem.id}`}
            className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={classItem.coverImage}
                alt={classItem.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">{classItem.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <div className="relative h-5 w-5 overflow-hidden rounded-full">
                    <Image
                      src={classItem.instructorAvatar}
                      alt={classItem.instructor}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-white">{classItem.instructor}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="line-clamp-2 text-sm text-gray-600">{classItem.description}</p>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{classItem.students} students</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Book className="h-4 w-4" />
                  <span>{classItem.duration}</span>
                </div>
              </div>

              <div className="mt-3">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-[#2d0778]">Progress</span>
                  <span>{classItem.progress}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                  <div 
                    className="h-full rounded-full bg-[#2d0778]" 
                    style={{ width: `${classItem.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1 text-sm font-medium text-[#2d0778]">
                <Calendar className="h-4 w-4" />
                <span>Next: {classItem.nextSession}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 