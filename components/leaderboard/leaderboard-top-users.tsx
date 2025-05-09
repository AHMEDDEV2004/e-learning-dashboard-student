"use client"

import Image from "next/image"
import { Crown, TrendingUp } from "lucide-react"

interface TopUserProps {
  rank: number
  name: string
  points: number
  avatar: string
  change?: number
  courseCompleted: number
}

const topUsers: TopUserProps[] = [
  {
    rank: 2,
    name: "Alex Johnson",
    points: 9250,
    avatar: "https://i.pravatar.cc/150?u=alex",
    change: 1,
    courseCompleted: 12
  },
  {
    rank: 1,
    name: "Sarah Wilson",
    points: 9800,
    avatar: "https://i.pravatar.cc/150?u=sarah",
    change: 2,
    courseCompleted: 15
  },
  {
    rank: 3,
    name: "Michael Chen",
    points: 8960,
    avatar: "https://i.pravatar.cc/150?u=michael",
    change: -1,
    courseCompleted: 10
  },
]

export function LeaderboardTopUsers() {
  // Sort users by rank
  const sortedUsers = [...topUsers].sort((a, b) => a.rank - b.rank)
  
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {sortedUsers.map((user) => (
        <div 
          key={user.name}
          className={`relative overflow-hidden rounded-xl border p-4 ${
            user.rank === 1 
              ? "border-yellow-400 bg-gradient-to-b from-yellow-50 to-white shadow-md" 
              : user.rank === 2 
              ? "border-gray-300 bg-gradient-to-b from-gray-50 to-white" 
              : "border-amber-700 bg-gradient-to-b from-amber-50 to-white"
          }`}
        >
          {user.rank === 1 && (
            <div className="absolute -right-6 -top-6 rounded-full bg-yellow-400 p-8">
              <Crown className="h-5 w-5 text-white" />
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.courseCompleted} courses completed</p>
              <div className="mt-1 flex items-center gap-1">
                <span className="text-lg font-bold text-[#2d0778]">{user.points.toLocaleString()}</span>
                <span className="text-xs text-gray-500">points</span>
                {user.change !== undefined && (
                  <div className={`ml-2 flex items-center text-xs ${
                    user.change > 0 ? "text-green-500" : user.change < 0 ? "text-red-500" : ""
                  }`}>
                    <TrendingUp className={`h-3 w-3 ${user.change < 0 ? "rotate-180" : ""}`} />
                    <span>{Math.abs(user.change)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-3 flex justify-between text-sm">
            <span className={`rounded-full px-2.5 py-0.5 font-medium ${
              user.rank === 1 
                ? "bg-yellow-100 text-yellow-800" 
                : user.rank === 2 
                ? "bg-gray-100 text-gray-800" 
                : "bg-amber-100 text-amber-800"
            }`}>
              Rank #{user.rank}
            </span>
            <span className="text-gray-500">This week</span>
          </div>
        </div>
      ))}
    </div>
  )
} 