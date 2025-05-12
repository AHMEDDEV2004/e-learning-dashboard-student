import { DashboardPage } from "@/components/dashboard-page"
import { LessonsContent } from "@/components/lessons/lessons-content"

export const metadata = {
  title: "Lessons - Learning Dashboard",
  description: "Access and manage your learning lessons",
}

export default function LessonsPage() {
  return (
    <DashboardPage>
      <LessonsContent />
    </DashboardPage>
  )
} 