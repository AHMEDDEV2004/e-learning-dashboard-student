import { DashboardPage } from "@/components/dashboard-page"
import { LessonContent } from "@/components/lessons/lesson-content"

export const metadata = {
  title: "Lesson Content - Learning Dashboard",
  description: "View and interact with lesson content",
}

export default function LessonSectionPage({ 
  params 
}: { 
  params: { id: string; sectionId: string } 
}) {
  return (
    <DashboardPage>
      <LessonContent />
    </DashboardPage>
  )
} 