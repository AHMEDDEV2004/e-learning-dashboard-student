"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { WeeklyStreak } from "@/components/weekly-streak"
import { WeeklyWatchTime } from "@/components/weekly-watch-time"
import { CourseCard } from "@/components/course-card"
import { CourseProgress } from "@/components/course-progress"

export function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        <div className="flex items-center justify-between border-b bg-white p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search here..."
                className="w-64 pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute right-2.5 top-2.5 text-xs text-gray-500">⌘K</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-6">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Continue Learning</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <CourseProgress
                  icon={<div className="h-8 w-8 rounded bg-orange-100 p-1.5 text-orange-500">🎨</div>}
                  title="Advance UI/UX Design"
                  category="DESIGN"
                  progress={45}
                  lessons="18/40 Lessons"
                  timeLeft="2 hours left"
                  color="orange"
                />
                <CourseProgress
                  icon={<div className="h-8 w-8 rounded bg-orange-100 p-1.5 text-orange-500">🌐</div>}
                  title="Basic Web Development"
                  category="DEVELOPMENT"
                  progress={45}
                  lessons="18/40 Lessons"
                  timeLeft="2 hours left"
                  color="orange"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Recommended Courses For You</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <CourseCard
                  isNew
                  thumbnail="/placeholder.svg?height=200&width=350"
                  title="Webflow Tutorial: Build Your First Portfolio Website In a Minute"
                  instructor="Adam Smith"
                  rating={4.7}
                  reviews={32}
                  price="$12.99"
                  duration="3:50"
                  totalDuration="9:32"
                />
                <CourseCard
                  thumbnail="/placeholder.svg?height=200&width=350"
                  title="Basic To Advance Design System With UX Strategies"
                  instructor="Scott Warden"
                  rating={4.7}
                  reviews={540}
                  price="$49.99"
                  duration="3:50"
                  totalDuration="9:32"
                />
                <CourseCard
                  thumbnail="/placeholder.svg?height=200&width=350"
                  title="Advanced Frontend Development Techniques"
                  instructor="Jane Cooper"
                  rating={4.9}
                  reviews={128}
                  price="$39.99"
                  duration="4:20"
                  totalDuration="12:45"
                />
                <CourseCard
                  thumbnail="/placeholder.svg?height=200&width=350"
                  title="Mastering React and Next.js for Modern Web Apps"
                  instructor="Michael Johnson"
                  rating={4.8}
                  reviews={215}
                  price="$59.99"
                  duration="5:15"
                  totalDuration="15:30"
                />
              </div>
            </section>
          </div>

          <div className="w-full border-l lg:w-80 xl:w-96">
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <Button variant="ghost" size="sm" className="text-orange-500">
                  Close Details
                </Button>
              </div>
              <UserProfile />
              <WeeklyStreak />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-orange-500">📚</div>
                      <h3 className="text-xl font-bold">3 Courses</h3>
                      <p className="text-sm text-gray-500">In Progress</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-orange-500">✅</div>
                      <h3 className="text-xl font-bold">17 Courses</h3>
                      <p className="text-sm text-gray-500">Completed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <WeeklyWatchTime />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
