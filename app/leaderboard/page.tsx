import { DashboardPage } from "@/components/dashboard-page"
import { LeaderboardContent } from "@/components/leaderboard/leaderboard-content"

export const metadata = {
  title: "Leaderboard - Learning Dashboard",
  description: "See how you rank among your peers in the learning journey",
}

export default function LeaderboardPage() {
  return (
    <DashboardPage>
      <LeaderboardContent />
    </DashboardPage>
  )
} 