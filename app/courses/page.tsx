import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CoursesList } from "@/components/courses/courses-list"

export default function CoursesPage() {
  return (
    <DashboardLayout>
      <CoursesList />
    </DashboardLayout>
  )
}
