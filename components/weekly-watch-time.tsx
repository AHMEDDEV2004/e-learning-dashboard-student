"use client"

import { useState } from "react"
import { ChevronDown, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function WeeklyWatchTime() {
  const [currentMonth, setCurrentMonth] = useState("May 2024")

  return (
    <Card className="mt-6">
      <CardHeader className="flex flex-row items-center justify-between p-4 pb-0">
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">Weekly Watch Time</h3>
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

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs">6hrs</span>
            <div className="h-4 w-px bg-gray-200"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">4hrs</span>
            <div className="h-4 w-px bg-gray-200"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">2hrs</span>
            <div className="relative h-4 w-px bg-gray-200">
              <div className="absolute -right-8 -top-2 rounded bg-gray-800 px-1 py-0.5 text-[10px] text-white">
                4:24m
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs">1hrs</span>
            <div className="h-4 w-px bg-gray-200"></div>
          </div>
        </div>

        <div className="mt-2 h-32 w-full">
          <div className="flex h-full items-end justify-between">
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "10%" }}></div>
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "20%" }}></div>
            <div className="w-8 rounded-t bg-orange-500 pb-0" style={{ height: "60%" }}></div>
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "15%" }}></div>
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "30%" }}></div>
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "5%" }}></div>
            <div className="w-8 rounded-t bg-gray-200 pb-0" style={{ height: "25%" }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
