import { DashboardPage } from "@/components/dashboard-page"
import { MyCoursesContent } from "@/components/courses/my-courses-content"

export const metadata = {
  title: "My Courses - Learning Dashboard",
  description: "View and manage your enrolled courses",
}

export default function MyCoursesPage() {
  return (
    <DashboardPage>
      <MyCoursesContent />
    </DashboardPage>
  )
} 