import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { QuizzesList } from "@/components/quizzes/quizzes-list"

export default function QuizzesPage() {
  return (
    <DashboardLayout>
      <QuizzesList />
    </DashboardLayout>
  )
}
