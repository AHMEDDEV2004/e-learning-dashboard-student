"use client"

import React, { useState } from "react"
import Link from "next/link"
import { CheckSquare, Clock, Filter, Search, SlidersHorizontal, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Pagination } from "@/components/courses/pagination"

// Mock data for quizzes with proper TypeScript interface
interface Quiz {
  id: number
  title: string
  description: string
  questions: number
  timeLimit: string
  difficulty: string
  category: string
  completed: boolean
  score?: number
  progress?: number
}

const quizzesData: Quiz[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Test your knowledge of HTML, CSS, and basic JavaScript concepts.",
    questions: 15,
    timeLimit: "20 min",
    difficulty: "Beginner",
    category: "Development",
    completed: true,
    score: 92,
  },
  {
    id: 2,
    title: "UI/UX Design Principles",
    description: "Evaluate your understanding of user interface and experience design.",
    questions: 20,
    timeLimit: "25 min",
    difficulty: "Intermediate",
    category: "Design",
    completed: true,
    score: 85,
  },
  {
    id: 3,
    title: "React.js Essentials",
    description: "Challenge yourself with questions about React components, hooks, and state management.",
    questions: 25,
    timeLimit: "30 min",
    difficulty: "Advanced",
    category: "Development",
    completed: false,
    progress: 40,
  },
  {
    id: 4,
    title: "Responsive Design Mastery",
    description: "Test your skills in creating responsive layouts for various devices.",
    questions: 18,
    timeLimit: "22 min",
    difficulty: "Intermediate",
    category: "Design",
    completed: false,
    progress: 0,
  },
  {
    id: 5,
    title: "JavaScript Advanced Concepts",
    description: "Dive deep into closures, prototypes, async/await, and more.",
    questions: 30,
    timeLimit: "45 min",
    difficulty: "Advanced",
    category: "Development",
    completed: false,
    progress: 0,
  },
  {
    id: 6,
    title: "Color Theory Fundamentals",
    description: "Test your knowledge of color schemes, psychology, and applications in design.",
    questions: 15,
    timeLimit: "18 min",
    difficulty: "Beginner",
    category: "Design",
    completed: true,
    score: 78,
  },
  {
    id: 7,
    title: "Next.js and Server-Side Rendering",
    description: "Evaluate your understanding of Next.js features and server-side rendering concepts.",
    questions: 22,
    timeLimit: "30 min",
    difficulty: "Advanced",
    category: "Development",
    completed: false,
    progress: 65,
  },
  {
    id: 8,
    title: "Accessibility in Web Design",
    description: "Test your knowledge of web accessibility standards and best practices.",
    questions: 20,
    timeLimit: "25 min",
    difficulty: "Intermediate",
    category: "Design",
    completed: false,
    progress: 0,
  },
]

export function QuizzesList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const quizzesPerPage = 6

  // Calculate pagination
  const indexOfLastQuiz = currentPage * quizzesPerPage
  const indexOfFirstQuiz = indexOfLastQuiz - quizzesPerPage
  const currentQuizzes = quizzesData.slice(indexOfFirstQuiz, indexOfLastQuiz)
  const totalPages = Math.ceil(quizzesData.length / quizzesPerPage)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-blue-100 text-blue-800"
      case "Advanced":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-[#2d0778]" />
          <h1 className="text-2xl font-bold text-[#2d0778]">Quizzes</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="relative flex-1 sm:min-w-[240px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search quizzes..."
              className="pl-8 focus:border-[#2d0778] focus:ring-1 focus:ring-[#2d0778]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className="h-10 w-10 border-dashed hover:border-[#bee543] hover:text-[#2d0778]"
          >
            <Filter className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-10 w-10 border-dashed hover:border-[#bee543] hover:text-[#2d0778]"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="bg-white">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">All Quizzes</TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Completed</TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">In Progress</TabsTrigger>
          <TabsTrigger value="not-started" className="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-800">Not Started</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentQuizzes.map((quiz) => (
              <Card key={quiz.id} className="overflow-hidden hover:shadow-md hover:border-[#bee543]/70 transition-all">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
                    <h3 className="text-lg font-semibold">{quiz.title}</h3>
                  </div>
                  <div className="p-4">
                    <p className="mb-4 text-sm text-gray-600">{quiz.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1 border border-[#bee543]/30 bg-[#bee543]/10 text-[#2d0778]">
                        <Tag className="h-3 w-3" />
                        {quiz.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`flex items-center gap-1 ${getDifficultyColor(quiz.difficulty)}`}
                      >
                        {quiz.difficulty}
                      </Badge>
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <CheckSquare className="h-4 w-4 text-[#2d0778]" />
                        <span>{quiz.questions} Questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-[#2d0778]" />
                        <span>{quiz.timeLimit}</span>
                      </div>
                    </div>
                    {quiz.completed ? (
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className="font-medium text-[#2d0778]">{quiz.score}%</span>
                      </div>
                    ) : (quiz.progress ?? 0) > 0 ? (
                      <div className="mb-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium text-[#2d0778]">{quiz.progress}%</span>
                        </div>
                        <Progress value={quiz.progress ?? 0} className="h-2 bg-gray-100 [&>div]:bg-[#bee543]" />
                      </div>
                    ) : null}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50 p-4">
                  <Button className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" asChild>
                    <Link href={`/quizzes/${quiz.id}`}>
                      {quiz.completed ? "Review Quiz" : (quiz.progress ?? 0) > 0 ? "Continue Quiz" : "Start Quiz"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quizzesData
              .filter((quiz) => quiz.completed)
              .map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden hover:shadow-md hover:border-[#bee543]/70 transition-all">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
                      <h3 className="text-lg font-semibold">{quiz.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="mb-4 text-sm text-gray-600">{quiz.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 border border-[#bee543]/30 bg-[#bee543]/10 text-[#2d0778]">
                          <Tag className="h-3 w-3" />
                          {quiz.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${getDifficultyColor(quiz.difficulty)}`}
                        >
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <CheckSquare className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.questions} Questions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-600">Score</span>
                        <span className="font-medium text-[#2d0778]">{quiz.score}%</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Button className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Review Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quizzesData
              .filter((quiz) => !quiz.completed && (quiz.progress ?? 0) > 0)
              .map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden hover:shadow-md hover:border-[#bee543]/70 transition-all">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
                      <h3 className="text-lg font-semibold">{quiz.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="mb-4 text-sm text-gray-600">{quiz.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 border border-[#bee543]/30 bg-[#bee543]/10 text-[#2d0778]">
                          <Tag className="h-3 w-3" />
                          {quiz.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${getDifficultyColor(quiz.difficulty)}`}
                        >
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <CheckSquare className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.questions} Questions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>
                      <div className="mb-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-medium text-[#2d0778]">{quiz.progress}%</span>
                        </div>
                        <Progress value={quiz.progress ?? 0} className="h-2 bg-gray-100 [&>div]:bg-[#bee543]" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Button className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Continue Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            {quizzesData.filter((quiz) => !quiz.completed && (quiz.progress ?? 0) > 0).length === 0 && (
              <div className="col-span-full flex h-40 items-center justify-center rounded-lg border border-dashed bg-white p-8 text-center">
                <div>
                  <p className="text-muted-foreground">No quizzes in progress.</p>
                  <Button variant="link" className="mt-2">
                    Start a new quiz
                  </Button>
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="not-started" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quizzesData
              .filter((quiz) => !quiz.completed && quiz.progress === 0)
              .map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden hover:shadow-md hover:border-[#bee543]/70 transition-all">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
                      <h3 className="text-lg font-semibold">{quiz.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="mb-4 text-sm text-gray-600">{quiz.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1 border border-[#bee543]/30 bg-[#bee543]/10 text-[#2d0778]">
                          <Tag className="h-3 w-3" />
                          {quiz.category}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`flex items-center gap-1 ${getDifficultyColor(quiz.difficulty)}`}
                        >
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <CheckSquare className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.questions} Questions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-[#2d0778]" />
                          <span>{quiz.timeLimit}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t bg-gray-50 p-4">
                    <Button className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Start Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}
