"use client"

import { useState } from "react"
import { ChevronDown, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function WeeklyStreak() {
  const [currentMonth, setCurrentMonth] = useState("May 2024")

  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">Weekly Streak</h3>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <Button variant="outline" size="sm" className="h-8 gap-1 text-sm">
          {currentMonth}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">4/4 Weeks</span>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <span className="sr-only">Previous</span>
              <ChevronDown className="h-4 w-4 rotate-90" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <span className="sr-only">Next</span>
              <ChevronDown className="h-4 w-4 -rotate-90" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          <div className="text-xs text-gray-500">Mon</div>
          <div className="text-xs text-gray-500">Tue</div>
          <div className="text-xs text-gray-500">Wed</div>
          <div className="text-xs text-gray-500">Thu</div>
          <div className="text-xs text-gray-500">Fri</div>
          <div className="text-xs text-gray-500">Sat</div>
          <div className="text-xs text-gray-500">Sun</div>

          <div className="rounded-md bg-orange-500 p-2 text-white">
            <span className="text-sm font-medium">29</span>
          </div>
          <div className="rounded-md bg-orange-500 p-2 text-white">
            <span className="text-sm font-medium">30</span>
          </div>
          <div className="rounded-md bg-orange-500 p-2 text-white">
            <span className="text-sm font-medium">31</span>
          </div>
          <div className="rounded-md bg-gray-100 p-2">
            <span className="text-sm font-medium">1</span>
          </div>
          <div className="rounded-md bg-gray-100 p-2">
            <span className="text-sm font-medium">2</span>
          </div>
          <div className="rounded-md bg-gray-100 p-2">
            <span className="text-sm font-medium">3</span>
          </div>
          <div className="rounded-md bg-gray-100 p-2">
            <span className="text-sm font-medium">4</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
