import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, ChevronRight, CheckCircle2, PlayCircle, FileText, Code2 } from "lucide-react"

interface LessonSection {
  id: string
  title: string
  type: 'video' | 'reading' | 'exercise'
  duration: string
  completed: boolean
}

interface LessonDetails {
  id: string
  title: string
  description: string
  totalDuration: string
  progress: number
  sections: LessonSection[]
}

const mockLessonDetails: LessonDetails = {
  id: "1",
  title: "Introduction to Programming",
  description: "Learn the fundamental concepts of programming and computational thinking. This lesson covers basic programming concepts, problem-solving techniques, and an introduction to coding syntax.",
  totalDuration: "2h 15m",
  progress: 60,
  sections: [
    {
      id: "1-1",
      title: "What is Programming?",
      type: "video",
      duration: "15m",
      completed: true
    },
    {
      id: "1-2",
      title: "Basic Programming Concepts",
      type: "reading",
      duration: "20m",
      completed: true
    },
    {
      id: "1-3",
      title: "Variables and Data Types",
      type: "video",
      duration: "25m",
      completed: true
    },
    {
      id: "1-4",
      title: "Control Flow Basics",
      type: "exercise",
      duration: "30m",
      completed: false
    },
    {
      id: "1-5",
      title: "Practice Exercise: Simple Calculator",
      type: "exercise",
      duration: "45m",
      completed: false
    }
  ]
}

export function LessonDetails() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{mockLessonDetails.title}</h1>
          <p className="mt-2 text-muted-foreground">{mockLessonDetails.description}</p>
        </div>
        <Button size="lg">
          <PlayCircle className="mr-2 h-5 w-5" />
          Continue Learning
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>Track your learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Total Duration: {mockLessonDetails.totalDuration}
                </span>
              </div>
              <span className="text-sm font-medium">{mockLessonDetails.progress}% Complete</span>
            </div>
            <Progress value={mockLessonDetails.progress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Lesson Sections</h2>
        <div className="space-y-3">
          {mockLessonDetails.sections.map((section) => (
            <Card key={section.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {section.type === 'video' && <PlayCircle className="h-5 w-5 text-blue-500" />}
                    {section.type === 'reading' && <FileText className="h-5 w-5 text-green-500" />}
                    {section.type === 'exercise' && <Code2 className="h-5 w-5 text-purple-500" />}
                    <div>
                      <h3 className="font-medium">{section.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {section.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {section.completed ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : (
                      <Button variant="ghost" size="sm">
                        Start
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
} 