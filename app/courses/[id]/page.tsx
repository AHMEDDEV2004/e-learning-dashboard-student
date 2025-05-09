import { DashboardPage } from "@/components/dashboard-page"
import { CourseDetails } from "@/components/courses/course-details"

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardPage>
      <CourseDetails id={params.id} />
    </DashboardPage>
  )
}
