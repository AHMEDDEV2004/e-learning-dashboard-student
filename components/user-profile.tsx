import Image from "next/image"
import { Trophy, Flame, Target } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function UserProfile() {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="User avatar"
              width={80}
              height={80}
              className="rounded-full border-4 border-orange-100"
            />
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
              <Trophy className="h-3 w-3" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Brooklyn Simmons</h3>
            <p className="text-sm text-gray-500">UI/UX Designer & Developer</p>
            <div className="mt-1 flex items-center gap-1 text-sm">
              <span className="text-orange-500">🏆</span>
              <span className="font-medium">876 Points</span>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-md bg-gray-50 p-2">
            <div className="flex flex-col items-center">
              <Flame className="mb-1 h-5 w-5 text-orange-500" />
              <span className="text-lg font-bold">54</span>
              <span className="text-xs text-gray-500">Days Streak</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 p-2">
            <div className="flex flex-col items-center">
              <Target className="mb-1 h-5 w-5 text-rose-500" />
              <span className="text-lg font-bold">06</span>
              <span className="text-xs text-gray-500">Goals In Month</span>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 p-2">
            <div className="flex flex-col items-center">
              <Trophy className="mb-1 h-5 w-5 text-purple-500" />
              <span className="text-lg font-bold">02</span>
              <span className="text-xs text-gray-500">2nd Place</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
