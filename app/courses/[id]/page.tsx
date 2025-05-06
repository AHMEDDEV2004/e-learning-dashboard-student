import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { CourseDetails } from "@/components/courses/course-details"

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <CourseDetails id={params.id} />
    </DashboardLayout>
  )
}
