"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Medal, 
  TrendingDown, 
  TrendingUp
} from "lucide-react"

interface LeaderboardUser {
  id: string
  rank: number
  name: string
  username: string
  avatar: string
  points: number
  pointsChange: number
  completedCourses: number
  quizScore: number
  lastActive: string
  streak: number
  isCurrentUser?: boolean
}

// Mock data
const leaderboardUsers: LeaderboardUser[] = [
  {
    id: "1",
    rank: 1,
    name: "Sarah Wilson",
    username: "sarah_w",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    points: 9800,
    pointsChange: 320,
    completedCourses: 15,
    quizScore: 98,
    lastActive: "3h ago",
    streak: 23
  },
  {
    id: "2",
    rank: 2,
    name: "Alex Johnson",
    username: "alexj",
    avatar: "https://i.pravatar.cc/150?u=alex",
    points: 9250,
    pointsChange: 175,
    completedCourses: 12,
    quizScore: 95,
    lastActive: "1h ago",
    streak: 43
  },
  {
    id: "3",
    rank: 3,
    name: "Michael Chen",
    username: "mchen",
    avatar: "https://i.pravatar.cc/150?u=michael",
    points: 8960,
    pointsChange: -50,
    completedCourses: 10,
    quizScore: 88,
    lastActive: "Just now",
    streak: 12
  },
  {
    id: "4",
    rank: 4,
    name: "Emily Davis",
    username: "emilyd",
    avatar: "https://i.pravatar.cc/150?u=emily",
    points: 8750,
    pointsChange: 220,
    completedCourses: 13,
    quizScore: 92,
    lastActive: "2d ago",
    streak: 0
  },
  {
    id: "5",
    rank: 5,
    name: "James Miller",
    username: "jamesm",
    avatar: "https://i.pravatar.cc/150?u=james",
    points: 8600,
    pointsChange: 95,
    completedCourses: 11,
    quizScore: 89,
    lastActive: "5h ago",
    streak: 18
  },
  {
    id: "6",
    rank: 6,
    name: "Olivia Smith",
    username: "olivias",
    avatar: "https://i.pravatar.cc/150?u=olivia",
    points: 8450,
    pointsChange: 130,
    completedCourses: 12,
    quizScore: 87,
    lastActive: "1d ago",
    streak: 6
  },
  {
    id: "7",
    rank: 7,
    name: "Daniel Lee",
    username: "dlee",
    avatar: "https://i.pravatar.cc/150?u=daniel",
    points: 8300,
    pointsChange: -75,
    completedCourses: 9,
    quizScore: 91,
    lastActive: "4h ago",
    streak: 14
  },
  {
    id: "8",
    rank: 8,
    name: "Sophia Wang",
    username: "sophiaw",
    avatar: "https://i.pravatar.cc/150?u=sophia",
    points: 8150,
    pointsChange: 180,
    completedCourses: 10,
    quizScore: 86,
    lastActive: "7h ago",
    streak: 21
  },
  {
    id: "9",
    rank: 9,
    name: "You",
    username: "your_username",
    avatar: "https://i.pravatar.cc/150?u=you",
    points: 7980,
    pointsChange: 250,
    completedCourses: 8,
    quizScore: 84,
    lastActive: "Just now",
    streak: 15,
    isCurrentUser: true
  },
  {
    id: "10",
    rank: 10,
    name: "David Brown",
    username: "davidb",
    avatar: "https://i.pravatar.cc/150?u=david",
    points: 7850,
    pointsChange: 65,
    completedCourses: 7,
    quizScore: 82,
    lastActive: "2d ago",
    streak: 5
  }
]

type SortKey = "rank" | "points" | "completedCourses" | "quizScore" | "streak"
type SortDirection = "asc" | "desc"

interface LeaderboardTableProps {
  timeFilter: string
  courseFilter: string
  searchQuery: string
}

export function LeaderboardTable({ 
  timeFilter, 
  courseFilter, 
  searchQuery 
}: LeaderboardTableProps) {
  const [sortBy, setSortBy] = useState<SortKey>("rank")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  // Handle sorting
  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortBy(key)
      setSortDirection("asc")
    }
  }

  // Filter and sort users
  let filteredUsers = [...leaderboardUsers]

  // Apply search filter
  if (searchQuery) {
    filteredUsers = filteredUsers.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Sort users
  filteredUsers.sort((a, b) => {
    let result = 0
    
    switch (sortBy) {
      case "rank":
        result = a.rank - b.rank
        break
      case "points":
        result = b.points - a.points
        break
      case "completedCourses":
        result = b.completedCourses - a.completedCourses
        break
      case "quizScore":
        result = b.quizScore - a.quizScore
        break
      case "streak":
        result = b.streak - a.streak
        break
    }
    
    return sortDirection === "asc" ? result : -result
  })

  const getSortIcon = (key: SortKey) => {
    if (sortBy !== key) return null
    return sortDirection === "asc" ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />
  }

  // Render rank indicator (medal or number)
  const renderRank = (rank: number) => {
    if (rank === 1) return <Award className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-500" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span>{rank}</span>
  }

  return (
    <div className="overflow-hidden rounded-lg border shadow">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th 
                className="cursor-pointer px-4 py-3 text-left text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => handleSort("rank")}
              >
                <div className="flex items-center gap-1">
                  <span>Rank</span>
                  {getSortIcon("rank")}
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">User</th>
              <th 
                className="cursor-pointer px-4 py-3 text-left text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => handleSort("points")}
              >
                <div className="flex items-center gap-1">
                  <span>Points</span>
                  {getSortIcon("points")}
                </div>
              </th>
              <th 
                className="cursor-pointer px-4 py-3 text-left text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => handleSort("completedCourses")}
              >
                <div className="flex items-center gap-1">
                  <span>Courses</span>
                  {getSortIcon("completedCourses")}
                </div>
              </th>
              <th 
                className="cursor-pointer px-4 py-3 text-left text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => handleSort("quizScore")}
              >
                <div className="flex items-center gap-1">
                  <span>Quiz Score</span>
                  {getSortIcon("quizScore")}
                </div>
              </th>
              <th 
                className="cursor-pointer px-4 py-3 text-left text-sm font-medium text-gray-500 hover:text-gray-700"
                onClick={() => handleSort("streak")}
              >
                <div className="flex items-center gap-1">
                  <span>Streak</span>
                  {getSortIcon("streak")}
                </div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr 
                key={user.id} 
                className={`border-b transition-colors ${
                  user.isCurrentUser 
                    ? "bg-[#2d0778]/5" 
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="px-4 py-3 text-center text-sm">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full">
                    {renderRank(user.rank)}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        fill
                        className="object-cover"
                      />
                      {user.isCurrentUser && (
                        <div className="absolute inset-0 rounded-full border-2 border-[#2d0778]" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-gray-500">@{user.username}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <div className="font-medium text-[#2d0778]">{user.points.toLocaleString()}</div>
                    <div className={`flex items-center text-xs ${
                      user.pointsChange > 0 ? "text-green-500" : "text-red-500"
                    }`}>
                      {user.pointsChange > 0 ? (
                        <TrendingUp className="mr-1 h-3 w-3" />
                      ) : (
                        <TrendingDown className="mr-1 h-3 w-3" />
                      )}
                      {Math.abs(user.pointsChange)}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  {user.completedCourses}
                </td>
                <td className="px-4 py-3 text-sm">
                  {user.quizScore}%
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-1">
                    <span>{user.streak}</span>
                    <span className="text-xs text-gray-500">days</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {user.lastActive}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 