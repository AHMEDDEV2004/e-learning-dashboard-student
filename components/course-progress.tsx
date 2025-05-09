import type React from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface CourseProgressProps {
  icon: React.ReactNode
  title: string
  category: string
  progress: number
  lessons: string
  timeLeft: string
  color: "orange" | "blue" | "green" | "purple"
}

export function CourseProgress({
  icon,
  title,
  category,
  progress,
  lessons,
  timeLeft,
  color = "purple",
}: CourseProgressProps) {
  const getColorClass = () => {
    switch (color) {
      case "orange":
        return "text-orange-500"
      case "blue":
        return "text-blue-500"
      case "green":
        return "text-green-500"
      case "purple":
        return "text-[#2d0778]"
      default:
        return "text-[#2d0778]"
    }
  }

  return (
    <div className="rounded-lg border bg-white p-4 hover:border-[#bee543] transition-colors">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-start gap-3">
          {icon}
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-gray-500">{category}</p>
          </div>
        </div>
      </div>
      <Progress 
        value={progress} 
        className="mb-3 h-2 bg-gray-100" 
        indicatorClassName="bg-[#2d0778]" 
      />
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span>{lessons}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{timeLeft}</span>
        </div>
      </div>
      <Button 
        variant="ghost" 
        className={`mt-3 w-full ${getColorClass()} hover:bg-[#bee543]/20 hover:text-[#2d0778]`}
      >
        Resume Course
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-4 w-4"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      </Button>
    </div>
  )
}
