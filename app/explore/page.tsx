import { DashboardPage } from "@/components/dashboard-page"
import { ExploreContent } from "@/components/explore/explore-content" 

export const metadata = {
  title: "Explore - Learning Dashboard",
  description: "Discover new courses, classes, and learning opportunities",
}

export default function ExplorePage() {
  return (
    <DashboardPage>
      <ExploreContent />
    </DashboardPage>
  )
} 