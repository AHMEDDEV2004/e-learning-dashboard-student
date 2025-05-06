import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { QuizDetails } from "@/components/quizzes/quiz-details"

export default function QuizDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <QuizDetails id={params.id} />
    </DashboardLayout>
  )
}
