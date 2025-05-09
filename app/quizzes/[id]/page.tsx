import { DashboardPage } from "@/components/dashboard-page"
import { QuizDetails } from "@/components/quizzes/quiz-details"

export default function QuizDetailsPage({ params }: { params: { id: string } }) {
  return (
    <DashboardPage>
      <QuizDetails id={params.id} />
    </DashboardPage>
  )
}
