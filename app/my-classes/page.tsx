import { DashboardPage } from "@/components/dashboard-page"
import { ClassesList } from "@/components/classes/classes-list"

export const metadata = {
  title: "My Classes - Learning Dashboard",
  description: "View all your enrolled classes created by teachers",
}

export default function ClassesPage() {
  return (
    <DashboardPage>
      <ClassesList />
    </DashboardPage>
  )
} 