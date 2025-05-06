"use client"

import type React from "react"

import { Bell, Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1">
        <div className="flex items-center justify-between border-b bg-white p-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input type="search" placeholder="Search here..." className="w-64 pl-8" />
              <span className="absolute right-2.5 top-2.5 text-xs text-gray-500">⌘K</span>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
