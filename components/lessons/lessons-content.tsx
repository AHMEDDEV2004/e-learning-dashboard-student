import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"

interface Lesson {
  id: string
  title: string
  description: string
  duration: string
  progress: number
  category: string
}

const mockLessons: Lesson[] = [
  {
    id: "1",
    title: "Introduction to Programming",
    description: "Learn the basics of programming concepts and logic",
    duration: "2h 15m",
    progress: 60,
    category: "Programming Basics"
  },
  {
    id: "2",
    title: "Variables and Data Types",
    description: "Understanding different types of data and how to store them",
    duration: "1h 30m",
    progress: 30,
    category: "Programming Basics"
  },
  {
    id: "3",
    title: "Control Flow",
    description: "Learn about loops, conditions, and program flow",
    duration: "2h 45m",
    progress: 0,
    category: "Programming Basics"
  },
  {
    id: "4",
    title: "Functions and Methods",
    description: "Master the art of writing reusable code",
    duration: "2h",
    progress: 0,
    category: "Advanced Concepts"
  },
  {
    id: "5",
    title: "Object-Oriented Programming",
    description: "Understanding classes, objects, and inheritance",
    duration: "3h",
    progress: 0,
    category: "Advanced Concepts"
  },
  {
    id: "6",
    title: "Error Handling",
    description: "Learn how to handle and debug errors in your code",
    duration: "1h 45m",
    progress: 0,
    category: "Advanced Concepts"
  }
]

export function LessonsContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Lessons</h1>
        <Button>
          <BookOpen className="mr-2 h-4 w-4" />
          Start New Lesson
        </Button>
      </div>

      <div className="grid gap-6">
        {Array.from(new Set(mockLessons.map(lesson => lesson.category))).map(category => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold">{category}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockLessons
                .filter(lesson => lesson.category === category)
                .map((lesson) => (
                  <Link href={`/lessons/${lesson.id}`} key={lesson.id}>
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <CardTitle>{lesson.title}</CardTitle>
                        <CardDescription>{lesson.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-4 w-4" />
                            {lesson.duration}
                          </div>
                          <Button variant="ghost" size="sm">
                            {lesson.progress > 0 ? 'Continue' : 'Start'}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-4 w-full bg-secondary h-2 rounded-full">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 