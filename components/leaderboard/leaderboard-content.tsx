"use client"

import { useState } from "react"
import { 
  Award, 
  Crown, 
  Filter, 
  Medal, 
  Search, 
  TrendingUp 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { LeaderboardTable } from "./leaderboard-table"
import { LeaderboardTopUsers } from "./leaderboard-top-users"

type TimeFilter = "daily" | "weekly" | "monthly" | "all-time"
type CourseFilter = "all" | "javascript" | "react" | "node" | "python"

export function LeaderboardContent() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("weekly")
  const [courseFilter, setCourseFilter] = useState<CourseFilter>("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#2d0778]">Leaderboard</h1>
        <p className="text-gray-500">See how you rank against other learners</p>
      </div>

      {/* Top 3 Users */}
      <LeaderboardTopUsers />

      {/* Filters and Search */}
      <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={timeFilter === "daily" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeFilter("daily")}
            className={timeFilter === "daily" ? "bg-[#2d0778] text-white" : ""}
          >
            Daily
          </Button>
          <Button
            variant={timeFilter === "weekly" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeFilter("weekly")}
            className={timeFilter === "weekly" ? "bg-[#2d0778] text-white" : ""}
          >
            <TrendingUp className="h-4 w-4" />
            Weekly
          </Button>
          <Button
            variant={timeFilter === "monthly" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeFilter("monthly")}
            className={timeFilter === "monthly" ? "bg-[#2d0778] text-white" : ""}
          >
            Monthly
          </Button>
          <Button
            variant={timeFilter === "all-time" ? "default" : "outline"}
            size="sm"
            onClick={() => setTimeFilter("all-time")}
            className={timeFilter === "all-time" ? "bg-[#2d0778] text-white" : ""}
          >
            All-time
          </Button>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Find a user..."
              className="h-9 rounded-md border border-gray-300 bg-white pl-8 pr-4 text-sm focus:border-[#2d0778] focus:outline-none focus:ring-1 focus:ring-[#2d0778]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Course
            <select 
              className="appearance-none bg-transparent text-sm focus:outline-none"
              value={courseFilter}
              onChange={(e) => setCourseFilter(e.target.value as CourseFilter)}
            >
              <option value="all">All</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="node">Node.js</option>
              <option value="python">Python</option>
            </select>
          </Button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <LeaderboardTable 
        timeFilter={timeFilter} 
        courseFilter={courseFilter} 
        searchQuery={searchQuery} 
      />
    </div>
  )
} 