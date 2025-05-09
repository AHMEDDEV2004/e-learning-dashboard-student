"use client"

import { useState, useEffect } from "react"
import { Bell, ChevronRight, Menu, User, X } from "lucide-react"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { UserProfile } from "@/components/user-profile"
import { cn } from "@/lib/utils"

interface DashboardPageProps {
  children: React.ReactNode
}

export function DashboardPage({ children }: DashboardPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  
  const isMessagesPage = pathname === "/messages"
  const isLeaderboardPage = pathname === "/leaderboard"
  const isClassesPage = pathname.startsWith("/my-classes")
  const isExplorePage = pathname === "/explore"
  const isMyCoursesPage = pathname === "/my-courses"

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleProfile = () => {
    setProfileOpen(!profileOpen)
  }

  // Helper to get the page title based on pathname
  const getPageTitle = () => {
    if (isMessagesPage) return "Messages"
    if (isLeaderboardPage) return "Leaderboard"
    if (isClassesPage) return "My Classes"
    if (isExplorePage) return "Explore"
    if (isMyCoursesPage) return "My Courses"
    return "Dashboard"
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Backdrop for mobile when sidebar or profile is open */}
      {isMobile && (sidebarOpen || profileOpen) && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 transition-opacity"
          onClick={() => {
            setSidebarOpen(false)
            setProfileOpen(false)
          }}
        />
      )}

      {/* Sidebar */}
      <div 
        className={cn(
          "fixed z-40 h-full transition-all duration-300 ease-in-out md:relative",
          sidebarOpen ? "left-0" : "-left-full md:-left-20",
          sidebarOpen ? (isMobile ? "w-64" : "w-64") : "w-20"
        )}
      >
        <Sidebar collapsed={!sidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b bg-white px-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="mr-2 h-9 w-9 rounded-full hover:bg-[#bee543]/20"
            >
              {sidebarOpen ? <ChevronRight className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-xl font-bold text-[#2d0778]">
              {getPageTitle()}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-full hover:bg-[#bee543]/20"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#2d0778] text-[10px] text-white">
                3
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 rounded-full hover:bg-[#bee543]/20"
              onClick={toggleProfile}
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className={cn(
          "flex-1", 
          isMessagesPage ? "p-0 overflow-hidden" : "p-4 md:p-6 overflow-auto"
        )}>
          {children}
        </main>
      </div>

      {/* User Profile Sidebar */}
      <UserProfile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  )
}
