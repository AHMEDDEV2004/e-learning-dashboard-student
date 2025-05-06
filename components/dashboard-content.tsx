"use client"

import { CourseCard } from "@/components/course-card"
import { CourseProgress } from "@/components/course-progress"
import { UserProfile } from "@/components/user-profile"
import { WeeklyStreak } from "@/components/weekly-streak"
import { WeeklyWatchTime } from "@/components/weekly-watch-time"

export function DashboardContent() {
  return (
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
            <button className="text-orange-500">Close Details</button>
          </div>
          <UserProfile />
          <WeeklyStreak />
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border bg-white p-4 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-orange-500">📚</div>
                <h3 className="text-xl font-bold">3 Courses</h3>
                <p className="text-sm text-gray-500">In Progress</p>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-4 text-center">
              <div className="flex flex-col items-center">
                <div className="mb-2 text-orange-500">✅</div>
                <h3 className="text-xl font-bold">17 Courses</h3>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
          <WeeklyWatchTime />
        </div>
      </div>
    </div>
  )
}
