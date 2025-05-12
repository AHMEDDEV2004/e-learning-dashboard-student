import { DashboardPage } from "@/components/dashboard-page"
import { LessonDetails } from "@/components/lessons/lesson-details"

export const metadata = {
  title: "Lesson Details - Learning Dashboard",
  description: "View and track your lesson progress",
}

export default function LessonPage({ params }: { params: { id: string } }) {
  return (
    <DashboardPage>
      <LessonDetails />
    </DashboardPage>
  )
} 