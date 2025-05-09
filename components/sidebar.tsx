"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { BarChart2, BookOpen, CheckSquare, ChevronDown, ChevronRight, Compass, FileText, Flag, GraduationCap, Home, Library, MessageSquare, Settings, Trophy, Users } from "lucide-react"

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const pathname = usePathname()
  const [classesExpanded, setClassesExpanded] = useState(true)

  const isClassActive = (classPath: string) => pathname === classPath

  return (
    <div className="flex h-screen w-full flex-col border-r bg-white">
      <div className={`flex h-16 items-center ${collapsed ? 'justify-center' : 'px-6'} border-b`}>
        <Link href="/" className={`flex items-center ${collapsed ? '' : 'gap-2'} font-bold text-[#2d0778]`}>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2d0778] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          {!collapsed && <span>Focotech</span>}
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        {!collapsed && <div className="mt-4 px-3 text-sm font-medium text-gray-500">MENU</div>}
        <nav className={`mt-2 flex-col space-y-1 ${collapsed ? 'px-2' : 'px-3'} flex-1 overflow-y-auto scrollbar-hide`}>
          <Link href="/" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname === "/" ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <Home className="h-5 w-5" />
            {!collapsed && <span>Overview</span>}
          </Link>
          
          <Link href="/explore" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname === "/explore" ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <Compass className="h-5 w-5" />
            {!collapsed && <span>Explore</span>}
          </Link>
          
          <Link href="/my-courses" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname === "/my-courses" ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <Library className="h-5 w-5" />
            {!collapsed && <span>My Courses</span>}
          </Link>
          
          <Link href="#" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]`}>
            <BookOpen className="h-5 w-5" />
            {!collapsed && <span>Lessons</span>}
          </Link>

          {/* My Class Section */}
          {!collapsed && <div className="mt-6 px-3 text-sm font-medium text-gray-500">MY CLASSES</div>}
          {collapsed && <div className="my-4 border-t border-gray-200"></div>}
          
          {/* Classes dropdown */}
          <div>
            <button 
              onClick={() => !collapsed && setClassesExpanded(!classesExpanded)} 
              className={`flex w-full items-center ${collapsed ? 'justify-center' : 'justify-between'} rounded-md ${
                pathname.startsWith("/my-classes") ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
              } px-3 py-2`}
            >
              <div className={`flex items-center ${collapsed ? '' : 'gap-3'}`}>
                <Users className="h-5 w-5" />
                {!collapsed && <span>All Classes</span>}
              </div>
              {!collapsed && (
                <div className="text-gray-500">
                  {classesExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </div>
              )}
            </button>
            
            {/* Class children */}
            {!collapsed && classesExpanded && (
              <div className="mt-1 space-y-1 pl-9">
                <Link 
                  href="/my-classes"
                  className={`flex items-center rounded-md px-3 py-2 text-sm ${
                    pathname === "/my-classes" ? "bg-[#2d0778]/5 font-medium text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
                  }`}
                >
                  All Classes
                </Link>
                <Link 
                  href="/my-classes/javascript-101"
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                    isClassActive("/my-classes/javascript-101") ? "bg-[#2d0778]/5 font-medium text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                  JavaScript 101
                </Link>
                <Link 
                  href="/my-classes/react-fundamentals"
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                    isClassActive("/my-classes/react-fundamentals") ? "bg-[#2d0778]/5 font-medium text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                  React Fundamentals
                </Link>
                <Link 
                  href="/my-classes/python-for-beginners"
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                    isClassActive("/my-classes/python-for-beginners") ? "bg-[#2d0778]/5 font-medium text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                  Python for Beginners
                </Link>
              </div>
            )}
          </div>

          {!collapsed && <div className="mt-6 px-3 text-sm font-medium text-gray-500">ACTIVITIES</div>}
          {collapsed && <div className="my-4 border-t border-gray-200"></div>}
          <Link href="/quizzes" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname.startsWith("/quizzes") ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <CheckSquare className="h-5 w-5" />
            {!collapsed && <span>Quizzes</span>}
          </Link>
          <Link href="/leaderboard" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname === "/leaderboard" ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <Trophy className="h-5 w-5" />
            {!collapsed && <span>Leaderboard</span>}
          </Link>
          <Link href="#" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]`}>
            <BarChart2 className="h-5 w-5" />
            {!collapsed && <span>Skill Graph</span>}
          </Link>
          <Link href="/courses" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname.startsWith("/courses") ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <FileText className="h-5 w-5" />
            {!collapsed && <span>Courses</span>}
          </Link>
         
          <Link href="/messages" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md ${
            pathname === "/messages" ? "bg-[#2d0778]/10 text-[#2d0778]" : "text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]"
          } px-3 py-2`}>
            <MessageSquare className="h-5 w-5" />
            {!collapsed && (
              <>
                <span>Messages</span>
                <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#2d0778] text-xs text-white">
                  5
                </span>
              </>
            )}
            {collapsed && (
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#2d0778]"></span>
            )}
          </Link>
          <Link href="#" className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'} rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]`}>
            <Settings className="h-5 w-5" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </div>
      {!collapsed && (
        <div className="p-4 border-t mt-auto">
          <div className="rounded-lg bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
            <div className="mb-2 flex items-center">
              <Flag className="h-5 w-5" />
              <span className="ml-2 font-semibold">Get Premium Now!</span>
            </div>
            <p className="mb-3 text-sm">Reach our special features by subscribe our plan.</p>
            <button className="w-full rounded-md bg-[#bee543] py-2 text-sm font-medium text-[#2d0778] hover:bg-[#aed234] transition-all">Upgrade Now ↑</button>
          </div>
        </div>
      )}
    </div>
  )
}
