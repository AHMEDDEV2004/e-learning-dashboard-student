import Link from "next/link"
import { BarChart2, BookOpen, CheckSquare, FileText, Flag, Home, MessageSquare, Settings, Trophy } from "lucide-react"

export function Sidebar() {
  return (
    <div className="flex h-screen w-56 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-[#2d0778]">
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
          <span>Focotech</span>
        </Link>
      </div>
      <div className="mt-4 px-3 text-sm font-medium text-gray-500">MENU</div>
      <nav className="mt-2 flex-1 space-y-1 px-3">
        <Link href="/" className="flex items-center gap-3 rounded-md bg-[#2d0778]/10 px-3 py-2 text-[#2d0778]">
          <Home className="h-5 w-5" />
          <span>Overview</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <BookOpen className="h-5 w-5" />
          <span>Lessons</span>
        </Link>
        <Link href="/quizzes" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <CheckSquare className="h-5 w-5" />
          <span>Quizzes</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <Trophy className="h-5 w-5" />
          <span>Leaderboard</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <BarChart2 className="h-5 w-5" />
          <span>Skill Graph</span>
        </Link>
        <Link href="/courses" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <FileText className="h-5 w-5" />
          <span>Courses</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <Flag className="h-5 w-5" />
          <span>Certificates</span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <MessageSquare className="h-5 w-5" />
          <span>Messages</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#2d0778] text-xs text-white">
            5
          </span>
        </Link>
        <Link href="#" className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-[#bee543]/10 hover:text-[#2d0778]">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </nav>
      <div className="mt-auto p-4">
        <div className="rounded-lg bg-gradient-to-r from-[#2d0778] to-[#3a0a99] p-4 text-white">
          <div className="mb-2 flex items-center">
            <Flag className="h-5 w-5" />
            <span className="ml-2 font-semibold">Get Premium Now!</span>
          </div>
          <p className="mb-3 text-sm">Reach our special features by subscribe our plan.</p>
          <button className="w-full rounded-md bg-[#bee543] py-2 text-sm font-medium text-[#2d0778] hover:bg-[#aed234] transition-all">Upgrade Now ↑</button>
        </div>
      </div>
    </div>
  )
}
