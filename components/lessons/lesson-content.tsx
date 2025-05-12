import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, ChevronRight, CheckCircle2, PlayCircle, FileText, Code2, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface LessonContent {
  id: string
  title: string
  description: string
  type: 'video' | 'reading' | 'exercise'
  content: string
  duration: string
  completed: boolean
}

const mockLessonContent: LessonContent = {
  id: "1-1",
  title: "What is Programming?",
  description: "An introduction to the fundamental concepts of programming",
  type: "video",
  content: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  duration: "15m",
  completed: true
}

export function LessonContent() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/lessons">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{mockLessonContent.title}</h1>
          <p className="mt-2 text-muted-foreground">{mockLessonContent.description}</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          {mockLessonContent.type === 'video' && (
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={mockLessonContent.content}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {mockLessonContent.type === 'reading' && (
            <div className="prose prose-sm max-w-none">
              <p>{mockLessonContent.content}</p>
            </div>
          )}
          {mockLessonContent.type === 'exercise' && (
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Exercise Instructions</h3>
                <p className="mt-2 text-sm text-muted-foreground">{mockLessonContent.content}</p>
              </div>
              <div className="flex justify-end">
                <Button>
                  Submit Solution
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Duration: {mockLessonContent.duration}
          </span>
        </div>
        <Button>
          {mockLessonContent.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          <CheckCircle2 className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
} 