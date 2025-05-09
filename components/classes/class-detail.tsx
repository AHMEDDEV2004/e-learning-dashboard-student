"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  BarChart2, 
  Book, 
  BookOpen, 
  Calendar, 
  Clock, 
  Download, 
  FileText, 
  GraduationCap, 
  Layers, 
  MessageSquare, 
  Users, 
  Video 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ClassDetailProps {
  classId: string
}

// Mock data for classes
const classesData = {
  "javascript-101": {
    id: "javascript-101",
    name: "JavaScript 101",
    instructor: "Prof. John Smith",
    instructorAvatar: "https://i.pravatar.cc/150?u=john",
    instructorTitle: "Senior Web Development Instructor",
    students: 24,
    description: "Learn the fundamentals of JavaScript including variables, functions, and DOM manipulation. This course is designed for beginners who want to start their journey in web development.",
    nextSession: "Tomorrow, 10:00 AM",
    duration: "8 weeks",
    progress: 65,
    coverImage: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modules: [
      {
        id: "module-1",
        title: "Introduction to JavaScript",
        lessons: [
          { id: "lesson-1", title: "What is JavaScript?", duration: "15 min", type: "video", completed: true },
          { id: "lesson-2", title: "Setting Up Your Environment", duration: "20 min", type: "article", completed: true },
          { id: "lesson-3", title: "Your First JavaScript Program", duration: "25 min", type: "exercise", completed: true }
        ]
      },
      {
        id: "module-2",
        title: "Variables and Data Types",
        lessons: [
          { id: "lesson-4", title: "Variables and Constants", duration: "18 min", type: "video", completed: true },
          { id: "lesson-5", title: "Primitive Data Types", duration: "22 min", type: "video", completed: true },
          { id: "lesson-6", title: "Working with Strings", duration: "15 min", type: "exercise", completed: false },
          { id: "lesson-7", title: "Numbers and Math Operations", duration: "20 min", type: "article", completed: false }
        ]
      },
      {
        id: "module-3",
        title: "Control Flow",
        lessons: [
          { id: "lesson-8", title: "Conditional Statements", duration: "25 min", type: "video", completed: false },
          { id: "lesson-9", title: "Loops", duration: "30 min", type: "exercise", completed: false },
          { id: "lesson-10", title: "Switch Statements", duration: "15 min", type: "article", completed: false }
        ]
      }
    ],
    announcements: [
      { 
        id: "ann-1", 
        title: "Quiz This Friday", 
        content: "We'll have a quiz covering the first two modules this Friday. It will be open-book and last 45 minutes.", 
        date: "2 days ago" 
      },
      { 
        id: "ann-2", 
        title: "Office Hours Extended", 
        content: "I've extended my office hours to include Thursdays from 2-4pm. Feel free to drop by with any questions!", 
        date: "1 week ago" 
      }
    ]
  },
  "react-fundamentals": {
    id: "react-fundamentals",
    name: "React Fundamentals",
    instructor: "Dr. Emily Chen",
    instructorAvatar: "https://i.pravatar.cc/150?u=emily",
    instructorTitle: "Frontend Engineering Lead",
    students: 18,
    description: "Master React concepts including components, state, props, and hooks. Build interactive UIs with the most popular frontend library.",
    nextSession: "Monday, 2:00 PM",
    duration: "10 weeks",
    progress: 42,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    modules: [
      {
        id: "module-1",
        title: "React Basics",
        lessons: [
          { id: "lesson-1", title: "Introduction to React", duration: "20 min", type: "video", completed: true },
          { id: "lesson-2", title: "Setting Up React Environment", duration: "25 min", type: "article", completed: true },
          { id: "lesson-3", title: "JSX Syntax", duration: "18 min", type: "video", completed: true }
        ]
      },
      {
        id: "module-2",
        title: "Components and Props",
        lessons: [
          { id: "lesson-4", title: "Functional Components", duration: "22 min", type: "video", completed: true },
          { id: "lesson-5", title: "Class Components", duration: "25 min", type: "video", completed: false },
          { id: "lesson-6", title: "Props and PropTypes", duration: "20 min", type: "exercise", completed: false }
        ]
      }
    ],
    announcements: [
      { 
        id: "ann-1", 
        title: "Project Deadline Extended", 
        content: "The deadline for the first project has been extended to next Friday to give everyone more time to work on it.", 
        date: "3 days ago" 
      }
    ]
  }
}

export function ClassDetail({ classId }: ClassDetailProps) {
  const [activeTab, setActiveTab] = useState("content")
  
  // Get class data based on ID
  const classData = classesData[classId as keyof typeof classesData]
  
  if (!classData) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">Class not found</h2>
          <p className="mt-2 text-gray-500">The class you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    )
  }

  // Calculate completion stats
  const totalLessons = classData.modules.reduce((total, module) => total + module.lessons.length, 0)
  const completedLessons = classData.modules.reduce((total, module) => {
    return total + module.lessons.filter(lesson => lesson.completed).length
  }, 0)
  
  return (
    <div className="space-y-6">
      {/* Class Header */}
      <div className="relative mb-6 h-48 overflow-hidden rounded-xl bg-gray-200 sm:h-64">
        <Image
          src={classData.coverImage}
          alt={classData.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{classData.name}</h1>
          <div className="mt-2 flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white">
              <Image
                src={classData.instructorAvatar}
                alt={classData.instructor}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{classData.instructor}</p>
              <p className="text-xs text-gray-300">{classData.instructorTitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Class Info & Progress */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="discussion">Discussion</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-6">
              <div className="space-y-6">
                {classData.modules.map((module, index) => (
                  <div key={module.id} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-[#2d0778]">
                        <Layers className="h-5 w-5" />
                        Module {index + 1}: {module.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {module.lessons.filter(l => l.completed).length}/{module.lessons.length} completed
                      </span>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      {module.lessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          className={`flex items-center justify-between rounded-md border p-3 ${
                            lesson.completed 
                              ? "border-green-100 bg-green-50"
                              : "border-gray-200 bg-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            {lesson.type === "video" && <Video className="h-5 w-5 text-[#2d0778]" />}
                            {lesson.type === "article" && <FileText className="h-5 w-5 text-[#2d0778]" />}
                            {lesson.type === "exercise" && <BookOpen className="h-5 w-5 text-[#2d0778]" />}
                            
                            <div>
                              <p className={`font-medium ${lesson.completed ? "text-gray-700" : "text-gray-900"}`}>
                                {lesson.title}
                              </p>
                              <div className="flex items-center gap-3">
                                <span className="flex items-center gap-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3" /> {lesson.duration}
                                </span>
                                {lesson.completed && (
                                  <span className="text-xs font-medium text-green-600">Completed</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant={lesson.completed ? "outline" : "default"}
                            size="sm"
                            className={lesson.completed ? "" : "bg-[#2d0778] hover:bg-[#2d0778]/90"}
                          >
                            {lesson.completed ? "Review" : "Start"}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="announcements">
              <div className="space-y-4">
                {classData.announcements.map(announcement => (
                  <div key={announcement.id} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-[#2d0778]">{announcement.title}</h3>
                      <span className="text-xs text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="discussion">
              <div className="flex h-48 items-center justify-center rounded-lg border bg-gray-50">
                <div className="text-center">
                  <MessageSquare className="mx-auto h-8 w-8 text-gray-400" />
                  <h3 className="mt-2 font-medium text-gray-700">Class Discussion</h3>
                  <p className="mt-1 text-sm text-gray-500">Interact with your instructor and classmates</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources">
              <div className="flex h-48 items-center justify-center rounded-lg border bg-gray-50">
                <div className="text-center">
                  <Download className="mx-auto h-8 w-8 text-gray-400" />
                  <h3 className="mt-2 font-medium text-gray-700">Class Resources</h3>
                  <p className="mt-1 text-sm text-gray-500">No resources available yet</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Class Progress */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2d0778]">Your Progress</h3>
            
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">Overall Completion</span>
                <span className="font-medium text-[#2d0778]">{classData.progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div 
                  className="h-full rounded-full bg-[#2d0778]" 
                  style={{ width: `${classData.progress}%` }}
                />
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-2xl font-bold text-[#2d0778]">{completedLessons}</p>
                <p className="mt-1 text-xs text-gray-500">Lessons Completed</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3">
                <p className="text-2xl font-bold text-[#2d0778]">{totalLessons}</p>
                <p className="mt-1 text-xs text-gray-500">Total Lessons</p>
              </div>
            </div>
          </div>
          
          {/* Next Session */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2d0778]">Next Session</h3>
            <div className="mt-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#2d0778]" />
              <span className="font-medium">{classData.nextSession}</span>
            </div>
            <Button className="mt-4 w-full bg-[#2d0778] hover:bg-[#2d0778]/90">Join Session</Button>
          </div>
          
          {/* Class Details */}
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#2d0778]">Class Details</h3>
            <div className="mt-3 space-y-3">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-sm">{classData.students} students enrolled</span>
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-gray-500" />
                <span className="text-sm">Course length: {classData.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-gray-500" />
                <span className="text-sm">Certificate upon completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 