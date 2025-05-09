import { DashboardPage } from "@/components/dashboard-page"
import { ClassDetail } from "@/components/classes/class-detail"

interface ClassDetailPageProps {
  params: {
    classId: string
  }
}

export function generateMetadata({ params }: ClassDetailPageProps) {
  const classId = params.classId
  const formattedClassName = classId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${formattedClassName} - Learning Dashboard`,
    description: `View details and progress for your ${formattedClassName} class`,
  }
}

export default function ClassDetailPage({ params }: ClassDetailPageProps) {
  return (
    <DashboardPage>
      <ClassDetail classId={params.classId} />
    </DashboardPage>
  )
} 