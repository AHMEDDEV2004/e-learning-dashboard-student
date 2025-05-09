"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CourseCard } from "@/components/course-card"
import { CourseProgress } from "@/components/course-progress"

export function DashboardContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#2d0778]">Continue Learning</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CourseProgress
            icon={<div className="h-8 w-8 rounded bg-[#bee543]/20 p-1.5 text-[#2d0778]">🎨</div>}
            title="Advance UI/UX Design"
            category="DESIGN"
            progress={45}
            lessons="18/40 Lessons"
            timeLeft="2 hours left"
            color="purple"
          />
          <CourseProgress
            icon={<div className="h-8 w-8 rounded bg-[#bee543]/20 p-1.5 text-[#2d0778]">🌐</div>}
            title="Basic Web Development"
            category="DEVELOPMENT"
            progress={45}
            lessons="18/40 Lessons"
            timeLeft="2 hours left"
            color="purple"
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#2d0778]">Recommended Courses For You</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-[#2d0778]">Your Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-2 text-3xl">📚</div>
              <h3 className="text-xl font-bold">3 Courses</h3>
              <p className="text-sm text-gray-500">In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-2 text-3xl">✅</div>
              <h3 className="text-xl font-bold">17 Courses</h3>
              <p className="text-sm text-gray-500">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-2 text-3xl">🏆</div>
              <h3 className="text-xl font-bold">876 Points</h3>
              <p className="text-sm text-gray-500">Total Earned</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="mb-2 text-3xl">⏱️</div>
              <h3 className="text-xl font-bold">54 Hours</h3>
              <p className="text-sm text-gray-500">Learning Time</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
