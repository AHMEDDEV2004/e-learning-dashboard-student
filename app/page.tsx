import { DashboardPage } from "@/components/dashboard-page"
import { WelcomeBanner } from "@/components/welcome-banner"
import { Card } from "@/components/ui/card"
import { BookOpen, Clock, Trophy, Users } from "lucide-react"
import { WeeklyStreak } from "@/components/weekly-streak"
import { WeeklyWatchTime } from "@/components/weekly-watch-time"
import Image from "next/image"

// Sample recommended courses (from exploreCourses)
const recommendedCourses = [
  {
    id: "web-development-2023",
    title: "Complete Web Development Bootcamp 2023",
    instructor: "Dr. Angela Yu",
    rating: 4.8,
    students: 850,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "machine-learning-python",
    title: "Machine Learning with Python: Zero to Hero",
    instructor: "Andrew Ng",
    rating: 4.9,
    students: 720,
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design Fundamentals",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: 520,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
]

export const metadata = {
  title: "Overview - Learning Dashboard",
  description: "Track your learning progress and access your courses",
}

export default function OverviewPage() {
  return (
    <DashboardPage>
      <div className="space-y-6">
        <WelcomeBanner />

        {/* Stats vertical, charts horizontal with margin left and charts wider */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2">
          {/* Vertical stats */}
          <div className="flex flex-col gap-2 justify-center">
            <Card className="p-6 flex flex-col items-center justify-center">
              <span className="text-base font-semibold mb-1">Courses In Progress</span>
              <span className="text-3xl font-bold text-blue-600">3</span>
            </Card>
            <Card className="p-6 flex flex-col items-center justify-center">
              <span className="text-base font-semibold mb-1">Courses Completed</span>
              <span className="text-3xl font-bold text-green-600">17</span>
            </Card>
          </div>
          {/* Horizontal charts with margin left */}
          <div className="grid grid-cols-2 gap-2 ml-6">
            <WeeklyStreak />
            <WeeklyWatchTime />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedCourses.map((course) => (
              <Card key={course.id} className="p-4 flex flex-col">
                <div className="relative h-32 w-full mb-3 rounded overflow-hidden">
                  <Image src={course.image} alt={course.title} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-2">By {course.instructor}</p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span>⭐ {course.rating}</span>
                  <span>•</span>
                  <span>{course.students} students</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardPage>
  )
}
