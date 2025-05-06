import Link from "next/link"
import { CheckSquare, Clock, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface QuizCardProps {
  id: number
  title: string
  description: string
  questions: number
  timeLimit: string
  difficulty: string
  category: string
  completed?: boolean
  score?: number
  progress?: number
}

export function QuizCard({
  id,
  title,
  description,
  questions,
  timeLimit,
  difficulty,
  category,
  completed = false,
  score = 0,
  progress = 0,
}: QuizCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Advanced":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development":
        return "bg-amber-50 text-amber-800 border-amber-200"
      case "Design":
        return "bg-indigo-50 text-indigo-800 border-indigo-200"
      default:
        return "bg-gray-50 text-gray-800 border-gray-200"
    }
  }

  const getButtonText = () => {
    if (completed) return "Review Quiz"
    if (progress > 0) return "Continue Quiz"
    return "Start Quiz"
  }

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#bee543]/70">
      <CardContent className="flex-1 p-0">
        <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        </div>
        <div className="flex h-full flex-col p-4">
          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="outline" className={`flex items-center gap-1 ${getCategoryColor(category)} border`}>
              <Tag className="h-3 w-3" />
              {category}
            </Badge>
            <Badge variant="outline" className={`flex items-center gap-1 ${getDifficultyColor(difficulty)} border`}>
              {difficulty}
            </Badge>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <CheckSquare className="h-4 w-4 text-[#2d0778]" />
              <span>{questions} Questions</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-[#2d0778]" />
              <span>{timeLimit}</span>
            </div>
          </div>
          {completed ? (
            <div className="mt-auto flex items-center justify-between">
              <span className="text-sm text-gray-600">Score</span>
              <span className="font-medium text-[#2d0778]">{score}%</span>
            </div>
          ) : progress > 0 ? (
            <div className="mt-auto space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-gray-100 [&>div]:bg-[#bee543]" />
            </div>
          ) : (
            <div className="mt-auto"></div>
          )}
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <Button 
          className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]" 
          asChild
        >
          <Link href={`/quizzes/${id}`}>{getButtonText()}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 