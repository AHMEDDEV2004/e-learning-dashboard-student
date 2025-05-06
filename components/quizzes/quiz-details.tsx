"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckSquare, Clock, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface QuizDetailsProps {
  id: string | number
}

export function QuizDetails({ id }: QuizDetailsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(1200) // 20 minutes in seconds

  // Mock quiz data - in a real app, you would fetch this based on the ID
  const quiz = {
    id,
    title: "Web Development Fundamentals",
    description: "Test your knowledge of HTML, CSS, and basic JavaScript concepts.",
    questions: [
      {
        id: 1,
        text: "Which HTML tag is used to define an unordered list?",
        options: [
          { id: "a", text: "<ol>" },
          { id: "b", text: "<ul>" },
          { id: "c", text: "<li>" },
          { id: "d", text: "<dl>" },
        ],
        correctAnswer: "b",
      },
      {
        id: 2,
        text: "Which CSS property is used to change the text color of an element?",
        options: [
          { id: "a", text: "color" },
          { id: "b", text: "text-color" },
          { id: "c", text: "font-color" },
          { id: "d", text: "background-color" },
        ],
        correctAnswer: "a",
      },
      {
        id: 3,
        text: "What is the correct JavaScript syntax to change the content of the HTML element with id 'demo'?",
        options: [
          { id: "a", text: "document.getElement('demo').innerHTML = 'Hello';" },
          { id: "b", text: "document.getElementById('demo').innerHTML = 'Hello';" },
          { id: "c", text: "#demo.innerHTML = 'Hello';" },
          { id: "d", text: "document.getElementByName('demo').innerHTML = 'Hello';" },
        ],
        correctAnswer: "b",
      },
      {
        id: 4,
        text: "Which of the following is NOT a valid CSS selector?",
        options: [
          { id: "a", text: ".class" },
          { id: "b", text: "#id" },
          { id: "c", text: "*" },
          { id: "d", text: "!element" },
        ],
        correctAnswer: "d",
      },
      {
        id: 5,
        text: "What does the 'box-sizing: border-box' CSS property do?",
        options: [
          { id: "a", text: "It makes the element a flex container" },
          { id: "b", text: "It includes padding and border in the element's total width and height" },
          { id: "c", text: "It creates a box shadow around the element" },
          { id: "d", text: "It removes the element from the normal document flow" },
        ],
        correctAnswer: "b",
      },
    ],
    timeLimit: "20 min",
    difficulty: "Beginner",
    category: "Development",
  }

  const handleStartQuiz = () => {
    setQuizStarted(true)
  }

  const handleAnswerSelect = (questionIndex: number, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerId,
    })
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    return Math.round((correctAnswers / quiz.questions.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  if (!quizStarted) {
    return (
      <div className="p-6">
        <Link href="/quizzes" className="mb-6 inline-flex items-center gap-1 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Quizzes</span>
        </Link>

        <Card className="mx-auto max-w-3xl">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <h1 className="text-2xl font-bold">{quiz.title}</h1>
            <p className="mt-2 text-white/90">{quiz.description}</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-6 flex flex-wrap gap-3">
              <Badge variant="outline" className="flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {quiz.category}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 bg-green-100 text-green-800">
                {quiz.difficulty}
              </Badge>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-orange-500" />
                <span>{quiz.questions.length} Questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>{quiz.timeLimit} Time Limit</span>
              </div>
            </div>

            <div className="rounded-lg border bg-gray-50 p-4">
              <h3 className="mb-2 font-medium">Quiz Instructions</h3>
              <ul className="ml-5 list-disc space-y-1 text-sm text-gray-600">
                <li>Read each question carefully before selecting your answer.</li>
                <li>You can navigate between questions using the previous and next buttons.</li>
                <li>You can review and change your answers before submitting the quiz.</li>
                <li>The timer will start once you begin the quiz.</li>
                <li>Your score will be displayed immediately after completion.</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t bg-gray-50 p-4">
            <Button variant="outline" asChild>
              <Link href="/quizzes">Cancel</Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleStartQuiz}>
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  if (quizCompleted) {
    const score = calculateScore()
    return (
      <div className="p-6">
        <Card className="mx-auto max-w-3xl">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <h1 className="text-2xl font-bold">Quiz Completed</h1>
            <p className="mt-2 text-white/90">{quiz.title}</p>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <div className="mb-6">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-4xl font-bold text-orange-500">
                {score}%
              </div>
              <h2 className="text-xl font-semibold">
                {score >= 80 ? "Excellent!" : score >= 60 ? "Good job!" : "Keep practicing!"}
              </h2>
              <p className="text-gray-600">
                You answered {Object.keys(selectedAnswers).length} out of {quiz.questions.length} questions.
              </p>
            </div>

            <div className="mb-6 rounded-lg border bg-gray-50 p-4 text-left">
              <h3 className="mb-4 font-medium">Performance Summary</h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Correct Answers</span>
                    <span className="text-sm text-green-600">
                      {quiz.questions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length} /{" "}
                      {quiz.questions.length}
                    </span>
                  </div>
                  <Progress
                    value={
                      (quiz.questions.filter((q, i) => selectedAnswers[i] === q.correctAnswer).length /
                        quiz.questions.length) *
                      100
                    }
                    className="h-2 bg-gray-200"
                  />
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Incorrect Answers</span>
                    <span className="text-sm text-red-600">
                      {quiz.questions.filter((q, i) => selectedAnswers[i] !== q.correctAnswer).length} /{" "}
                      {quiz.questions.length}
                    </span>
                  </div>
                  <Progress
                    value={
                      (quiz.questions.filter((q, i) => selectedAnswers[i] !== q.correctAnswer).length /
                        quiz.questions.length) *
                      100
                    }
                    className="h-2 bg-gray-200"
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t bg-gray-50 p-4">
            <Button variant="outline" asChild>
              <Link href="/quizzes">Back to Quizzes</Link>
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href={`/quizzes/${id}/review`}>Review Answers</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="p-6">
      <Card className="mx-auto max-w-3xl">
        <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{formatTime(timeRemaining)}</span>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="h-2 bg-gray-200" />
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-xl font-medium">{quiz.questions[currentQuestion].text}</h2>
            <RadioGroup
              value={selectedAnswers[currentQuestion] || ""}
              onValueChange={(value) => handleAnswerSelect(currentQuestion, value)}
            >
              <div className="space-y-3">
                {quiz.questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center rounded-lg border p-4 transition-colors hover:bg-gray-50"
                  >
                    <RadioGroupItem value={option.id} id={`option-${option.id}`} className="mr-3" />
                    <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer">
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t bg-gray-50 p-4">
          <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button
            className="bg-orange-500 hover:bg-orange-600"
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestion]}
          >
            {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
