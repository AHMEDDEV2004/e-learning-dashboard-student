"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, Search, Phone, Video, Info, Paperclip, Smile, Send, Image as ImageIcon, File, Mic, MoreVertical } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Mock data for teachers
const teachers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UI/UX Design",
    online: true,
    lastMessage: "Let me know if you have any questions about the assignment!",
    lastMessageTime: "10:42 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Web Development",
    online: true,
    lastMessage: "Your project looks great! I've added some comments.",
    lastMessageTime: "Yesterday",
    unread: 0,
  },
  {
    id: 3,
    name: "Dr. Emily Parker",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Data Science",
    online: false,
    lastMessage: "We'll discuss this in our next session.",
    lastMessageTime: "Monday",
    unread: 0,
  },
  {
    id: 4,
    name: "Prof. David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Mobile Development",
    online: false,
    lastMessage: "Please submit your assignment by Friday.",
    lastMessageTime: "Aug 15",
    unread: 0,
  },
  {
    id: 5,
    name: "Dr. Lisa Wong",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UI/UX Design",
    online: true,
    lastMessage: "Great progress on your portfolio!",
    lastMessageTime: "Aug 12",
    unread: 0,
  },
]

// Mock data for messages
const messageHistory = [
  {
    id: 1,
    sender: "teacher",
    text: "Hi there! How are you progressing with the final project?",
    time: "10:30 AM",
    status: "read",
  },
  {
    id: 2,
    sender: "user",
    text: "Hello! I've completed about 70% of it. Just working on the responsive design issues.",
    time: "10:32 AM",
    status: "read",
  },
  {
    id: 3,
    sender: "teacher",
    text: "That's great progress! Do you need any help with the responsive design?",
    time: "10:34 AM",
    status: "read",
  },
  {
    id: 4,
    sender: "user",
    text: "Yes, I'm having some trouble with the navigation menu on mobile view. It's not collapsing properly.",
    time: "10:36 AM",
    status: "read",
  },
  {
    id: 5,
    sender: "teacher",
    text: "I see. Let me share some resources that might help you with that.",
    time: "10:38 AM",
    status: "read",
  },
  {
    id: 6,
    sender: "teacher",
    text: "Here's a link to a tutorial that covers mobile navigation patterns: https://example.com/mobile-nav",
    time: "10:39 AM",
    status: "read",
  },
  {
    id: 7,
    sender: "teacher",
    text: "Also, have you considered using a hamburger menu with a slide-out drawer? That's often a good solution for mobile navigation.",
    time: "10:40 AM",
    status: "read",
  },
  {
    id: 8,
    sender: "user",
    text: "Thank you for the resources! I'll check them out. And yes, I was thinking about a hamburger menu, but I'm not sure how to animate the transition smoothly.",
    time: "10:41 AM",
    status: "read",
  },
  {
    id: 9,
    sender: "teacher",
    text: "Let me know if you have any questions about the assignment!",
    time: "10:42 AM",
    status: "delivered",
  },
]

export function MessagesContent() {
  const [activeTeacher, setActiveTeacher] = useState(teachers[0])
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(messageHistory)
  
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  // Add an effect to apply overflow:hidden to html and body elements
  useEffect(() => {
    // Add the overflow-hidden class to the body element
    document.body.classList.add('overflow-hidden')
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])
  
  const handleSendMessage = () => {
    if (message.trim() === "") return
    
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent",
    }
    
    setMessages([...messages, newMessage])
    setMessage("")
    
    // Simulate teacher response after 2 seconds
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        sender: "teacher",
        text: "I'll check this out and get back to you soon!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "delivered",
      }
      
      setMessages(prev => [...prev, responseMessage])
    }, 2000)
  }
  
  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex h-full w-full overflow-hidden bg-white">
      {/* Custom scrollbar styling */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        
        /* Directly style the overflow-hidden class */
        .overflow-hidden {
          overflow: hidden !important;
        }
      `}</style>
      
      {/* Teachers Sidebar */}
      <div className="w-[40rem] border-r flex flex-col bg-gray-50 h-full">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#2d0778] flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Messages
            </h2>
            <Badge className="bg-[#bee543] text-[#2d0778]">{teachers.reduce((acc, teacher) => acc + teacher.unread, 0)}</Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search teachers..."
              className="pl-8 bg-white focus:border-[#2d0778] focus:ring-1 focus:ring-[#2d0778]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" className="flex-1 flex flex-col">
          <div className="px-4 pt-4">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="unread" className="data-[state=active]:bg-[#bee543] data-[state=active]:text-[#2d0778]">Unread</TabsTrigger>
              <TabsTrigger value="online" className="data-[state=active]:bg-[#2d0778] data-[state=active]:text-white">Online</TabsTrigger>
            </TabsList>
          </div>
          
          <div className="flex-1 overflow-auto hide-scrollbar">
            <TabsContent value="all" className="m-0 h-full">
              <div className="divide-y">
                {filteredTeachers.map((teacher) => (
                  <div 
                    key={teacher.id}
                    className={cn(
                      "p-4 hover:bg-gray-100 cursor-pointer transition-colors",
                      activeTeacher.id === teacher.id && "bg-gray-100"
                    )}
                    onClick={() => setActiveTeacher(teacher)}
                  >
                    <div className="flex gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={teacher.avatar} alt={teacher.name} />
                          <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {teacher.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{teacher.name}</p>
                          <span className="text-xs text-gray-500">{teacher.lastMessageTime}</span>
                        </div>
                        <p className="text-xs text-gray-500">{teacher.role}</p>
                        <p className="text-sm truncate text-gray-600">{teacher.lastMessage}</p>
                      </div>
                      {teacher.unread > 0 && (
                        <Badge className="bg-[#bee543] text-[#2d0778] shrink-0 self-center">{teacher.unread}</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="unread" className="m-0 h-full">
              <div className="divide-y">
                {filteredTeachers
                  .filter(teacher => teacher.unread > 0)
                  .map((teacher) => (
                    <div 
                      key={teacher.id}
                      className={cn(
                        "p-4 hover:bg-gray-100 cursor-pointer transition-colors",
                        activeTeacher.id === teacher.id && "bg-gray-100"
                      )}
                      onClick={() => setActiveTeacher(teacher)}
                    >
                      <div className="flex gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={teacher.avatar} alt={teacher.name} />
                            <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {teacher.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{teacher.name}</p>
                            <span className="text-xs text-gray-500">{teacher.lastMessageTime}</span>
                          </div>
                          <p className="text-xs text-gray-500">{teacher.role}</p>
                          <p className="text-sm truncate text-gray-600">{teacher.lastMessage}</p>
                        </div>
                        <Badge className="bg-[#bee543] text-[#2d0778] shrink-0 self-center">{teacher.unread}</Badge>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="online" className="m-0 h-full">
              <div className="divide-y">
                {filteredTeachers
                  .filter(teacher => teacher.online)
                  .map((teacher) => (
                    <div 
                      key={teacher.id}
                      className={cn(
                        "p-4 hover:bg-gray-100 cursor-pointer transition-colors",
                        activeTeacher.id === teacher.id && "bg-gray-100"
                      )}
                      onClick={() => setActiveTeacher(teacher)}
                    >
                      <div className="flex gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={teacher.avatar} alt={teacher.name} />
                            <AvatarFallback>{teacher.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium truncate">{teacher.name}</p>
                            <span className="text-xs text-gray-500">{teacher.lastMessageTime}</span>
                          </div>
                          <p className="text-xs text-gray-500">{teacher.role}</p>
                          <p className="text-sm truncate text-gray-600">{teacher.lastMessage}</p>
                        </div>
                        {teacher.unread > 0 && (
                          <Badge className="bg-[#bee543] text-[#2d0778] shrink-0 self-center">{teacher.unread}</Badge>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activeTeacher.avatar} alt={activeTeacher.name} />
                <AvatarFallback>{activeTeacher.name.charAt(0)}</AvatarFallback>
              </Avatar>
              {activeTeacher.online && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-[#2d0778]">{activeTeacher.name}</h3>
              <p className="text-xs text-gray-500 flex items-center">
                {activeTeacher.online ? (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block mr-1"></span> Online
                  </>
                ) : (
                  "Offline"
                )}
                <span className="mx-1">•</span>
                {activeTeacher.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-gray-100">
                    <Phone className="h-5 w-5 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Voice Call</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-gray-100">
                    <Video className="h-5 w-5 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Video Call</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-gray-100">
                    <Info className="h-5 w-5 text-gray-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Teacher Info</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-auto hide-scrollbar">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={cn(
                  "flex",
                  msg.sender === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.sender === "teacher" && (
                  <Avatar className="h-8 w-8 mr-2 mt-1 shrink-0">
                    <AvatarImage src={activeTeacher.avatar} alt={activeTeacher.name} />
                    <AvatarFallback>{activeTeacher.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div>
                  <div 
                    className={cn(
                      "rounded-2xl p-3 max-w-md",
                      msg.sender === "user" 
                        ? "bg-[#2d0778] text-white rounded-tr-none" 
                        : "bg-gray-100 text-gray-800 rounded-tl-none"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <div 
                    className={cn(
                      "flex items-center mt-1 text-xs text-gray-500",
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === "user" && (
                      <span className="ml-1">
                        {msg.status === "sent" && "✓"}
                        {msg.status === "delivered" && "✓✓"}
                        {msg.status === "read" && "✓✓"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="px-4 py-3 border-t">
          <div className="flex items-end gap-2">
            <div className="flex gap-1 self-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-gray-100">
                      <Paperclip className="h-5 w-5 text-gray-600" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Attach File</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-gray-100">
                    <MoreVertical className="h-5 w-5 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4" />
                    <span>Send Image</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <File className="h-4 w-4" />
                    <span>Send Document</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    <span>Voice Message</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex-1 relative">
              <Input
                placeholder="Type a message..."
                className="pr-12 focus:border-[#2d0778] focus:ring-1 focus:ring-[#2d0778]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full hover:bg-gray-100"
              >
                <Smile className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
            
            <Button 
              className="shrink-0 rounded-full bg-[#bee543] hover:bg-[#aed234] text-[#2d0778]"
              onClick={handleSendMessage}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 