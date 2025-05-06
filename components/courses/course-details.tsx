import Link from "next/link"
import { ArrowLeft, BookOpen, Clock, Globe, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CourseDetailsProps {
  id: string | number
}

export function CourseDetails({ id }: CourseDetailsProps) {
  // In a real app, you would fetch the course details based on the ID
  const course = {
    id,
    title: "Mastering React and Next.js for Modern Web Apps",
    instructor: "Michael Johnson",
    rating: 4.8,
    reviews: 215,
    price: "$59.99",
    duration: "15:30",
    students: 1245,
    lastUpdated: "April 2024",
    language: "English",
    level: "Intermediate",
    description:
      "Learn how to build modern web applications using React and Next.js. This comprehensive course covers everything from the basics to advanced concepts, helping you become a proficient React developer.",
    whatYouWillLearn: [
      "Build full-stack applications with React and Next.js",
      "Implement server-side rendering and static site generation",
      "Create responsive and accessible user interfaces",
      "Manage state with React hooks and context API",
      "Integrate with APIs and handle data fetching",
      "Deploy your applications to production",
    ],
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Introduction to React", duration: "10:15" },
          { title: "Setting Up Your Development Environment", duration: "15:30" },
          { title: "Your First React Component", duration: "12:45" },
        ],
      },
      {
        title: "React Fundamentals",
        lessons: [
          { title: "JSX and React Elements", duration: "14:20" },
          { title: "Props and State", duration: "18:10" },
          { title: "Handling Events", duration: "11:55" },
          { title: "Conditional Rendering", duration: "09:30" },
        ],
      },
      {
        title: "Next.js Essentials",
        lessons: [
          { title: "Introduction to Next.js", duration: "13:40" },
          { title: "Pages and Routing", duration: "16:25" },
          { title: "Data Fetching Methods", duration: "20:15" },
          { title: "API Routes", duration: "15:50" },
        ],
      },
    ],
  }

  return (
    <div className="bg-gray-50 pb-12">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-[#2d0778] to-[#3a0a99] py-12 text-white">
        <div className="container mx-auto px-4">
          <Link href="/courses" className="mb-6 inline-flex items-center gap-1 text-white/90 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Courses</span>
          </Link>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{course.title}</h1>
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-white" />
              <span className="font-medium">{course.rating}</span>
              <span className="text-white/80">({course.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-5 w-5" />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-5 w-5" />
              <span>{course.duration} total hours</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-5 w-5" />
              <span>{course.language}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-5 w-5" />
              <span>{course.level}</span>
            </div>
          </div>
          <p className="text-lg text-white/90">Last updated: {course.lastUpdated}</p>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-3">
                <TabsTrigger value="overview" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="rounded-lg border bg-white p-6">
                  <h2 className="mb-4 text-xl font-bold">Course Description</h2>
                  <p className="text-gray-700">{course.description}</p>
                </div>
                <div className="rounded-lg border bg-white p-6">
                  <h2 className="mb-4 text-xl font-bold">What You Will Learn</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 rounded-full bg-green-100 p-0.5 text-green-600">
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
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-4">
                {course.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="rounded-lg border bg-white overflow-hidden">
                    <div className="bg-gray-50 p-4">
                      <h3 className="font-medium">
                        Section {sectionIndex + 1}: {section.title}
                      </h3>
                    </div>
                    <div className="divide-y">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#bee543]/20 text-[#2d0778]">
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
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </div>
                            <span>{lesson.title}</span>
                          </div>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="reviews" className="rounded-lg border bg-white p-6">
                <h2 className="mb-4 text-xl font-bold">Student Reviews</h2>
                <div className="mb-6 flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#2d0778]">{course.rating}</div>
                    <div className="flex items-center justify-center">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(course.rating) ? "fill-[#bee543] text-[#bee543]" : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">{course.reviews} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-sm">5 stars</div>
                      <Progress value={75} className="h-2 flex-1" />
                      <div className="text-sm">75%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">4 stars</div>
                      <Progress value={20} className="h-2 flex-1" />
                      <div className="text-sm">20%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">3 stars</div>
                      <Progress value={5} className="h-2 flex-1" />
                      <div className="text-sm">5%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">2 stars</div>
                      <Progress value={0} className="h-2 flex-1" />
                      <div className="text-sm">0%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm">1 star</div>
                      <Progress value={0} className="h-2 flex-1" />
                      <div className="text-sm">0%</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                          <div className="font-medium">Sarah L.</div>
                          <div className="text-xs text-gray-500">2 weeks ago</div>
                        </div>
                      </div>
                      <div className="flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-orange-500 text-orange-500" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="mt-2">
                        This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand, and the projects are practical and engaging. Highly recommend!
                      </p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                          <div>
                            <div className="font-medium">John D.</div>
                            <div className="text-xs text-gray-500">1 month ago</div>
                          </div>
                        </div>
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "fill-orange-500 text-orange-500" : "text-gray-300"}`}
                              />
                            ))}
                        </div>
                      </div>
                      <p className="mt-2">
                        Great course with lots of practical examples. The instructor is knowledgeable and responsive to questions. I've learned a lot and feel confident applying these skills to my own projects.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-6 rounded-lg border bg-white p-6 shadow-sm">
                <div className="mb-4 text-center">
                  <div className="mb-2 text-3xl font-bold">{course.price}</div>
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium">
                    Enroll Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full hover:text-[#2d0778] hover:border-[#bee543]">
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Lessons</span>
                    <span className="font-medium">
                      {course.curriculum.reduce((acc, section) => acc + section.lessons.length, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Language</span>
                    <span className="font-medium">{course.language}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Certificate</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-orange-50 p-4 text-center">
                  <p className="text-sm text-orange-800">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
