"use client"

import Image from "next/image"
import { Trophy, Flame, Target, Bell, Settings, LogOut } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface UserProfileProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function UserProfile({ isOpen = false, onClose }: UserProfileProps) {
  return (
    <div className={cn(
      "fixed right-0 top-0 z-40 h-screen w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <Card className="h-full rounded-none border-l">
        <CardContent className="p-0">
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#2d0778]">Profile</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:bg-[#bee543]/20"
                onClick={onClose}
              >
                <LogOut className="h-4 w-4 text-gray-500" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="User avatar"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-[#2d0778]/10"
                />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2d0778] text-xs text-white">
                  <Trophy className="h-3 w-3" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Brooklyn Simmons</h3>
                <p className="text-sm text-gray-500">UI/UX Designer & Developer</p>
                <div className="mt-1 flex items-center gap-1 text-sm">
                  <span className="text-[#bee543]">🏆</span>
                  <span className="font-medium">876 Points</span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-gray-50 p-2">
                <div className="flex flex-col items-center">
                  <Flame className="mb-1 h-5 w-5 text-[#bee543]" />
                  <span className="text-lg font-bold">54</span>
                  <span className="text-xs text-gray-500">Days Streak</span>
                </div>
              </div>
              <div className="rounded-md bg-gray-50 p-2">
                <div className="flex flex-col items-center">
                  <Target className="mb-1 h-5 w-5 text-[#2d0778]" />
                  <span className="text-lg font-bold">06</span>
                  <span className="text-xs text-gray-500">Goals In Month</span>
                </div>
              </div>
              <div className="rounded-md bg-gray-50 p-2">
                <div className="flex flex-col items-center">
                  <Trophy className="mb-1 h-5 w-5 text-[#bee543]" />
                  <span className="text-lg font-bold">02</span>
                  <span className="text-xs text-gray-500">2nd Place</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-3 hover:border-[#bee543] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d0778]/10">
                    <Bell className="h-5 w-5 text-[#2d0778]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Notifications</h4>
                    <p className="text-xs text-gray-500">3 unread messages</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 rounded-full hover:bg-[#bee543]/20 hover:text-[#2d0778]">
                  View
                </Button>
              </div>
              
              <div className="flex items-center justify-between rounded-lg border p-3 hover:border-[#bee543] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d0778]/10">
                    <Settings className="h-5 w-5 text-[#2d0778]" />
                  </div>
                  <div>
                    <h4 className="font-medium">Account Settings</h4>
                    <p className="text-xs text-gray-500">Privacy and security</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 rounded-full hover:bg-[#bee543]/20 hover:text-[#2d0778]">
                  Edit
                </Button>
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-[#bee543] text-[#2d0778] hover:bg-[#bee543]/90">
                View Full Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
