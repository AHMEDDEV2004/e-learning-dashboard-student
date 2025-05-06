"use client"

import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

interface CourseFiltersProps {
  onClose: () => void
}

export function CourseFilters({ onClose }: CourseFiltersProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg text-[#2d0778]">Filters</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose} className="hover:text-[#2d0778]">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-6 pb-4 pt-0 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-medium text-[#2d0778]">Category</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="category-design" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="category-design">Design</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-development" defaultChecked className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="category-development">Development</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-business" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="category-business">Business</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-marketing" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="category-marketing">Marketing</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-photography" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="category-photography">Photography</Label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium text-[#2d0778]">Level</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="level-beginner" defaultChecked className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="level-beginner">Beginner</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="level-intermediate" defaultChecked className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="level-intermediate">Intermediate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="level-advanced" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="level-advanced">Advanced</Label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium text-[#2d0778]">Duration</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="duration-0-1" defaultChecked className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="duration-0-1">0-1 Hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="duration-1-3" defaultChecked className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="duration-1-3">1-3 Hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="duration-3-6" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="duration-3-6">3-6 Hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="duration-6-17" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="duration-6-17">6-17 Hours</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="duration-17+" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <Label htmlFor="duration-17+">17+ Hours</Label>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium text-[#2d0778]">Price Range</h3>
          <div className="space-y-6">
            <RadioGroup defaultValue="all">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="price-all" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
                <Label htmlFor="price-all">All Prices</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="free" id="price-free" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
                <Label htmlFor="price-free">Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="price-paid" className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
                <Label htmlFor="price-paid">Paid</Label>
              </div>
            </RadioGroup>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-xs">$0</span>
                <span className="text-xs">$100</span>
              </div>
              <Slider defaultValue={[0, 75]} max={100} step={1} className="border-[#2d0778] data-[state=checked]:bg-[#bee543] data-[state=checked]:text-[#2d0778]" />
              <div className="flex justify-between">
                <span className="text-sm font-medium">$0 - $75</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between pt-4">
        <Button variant="outline" className="hover:text-[#2d0778] hover:border-[#bee543]">Reset Filters</Button>
        <Button className="bg-[#bee543] hover:bg-[#aed234] text-[#2d0778] font-medium">Apply Filters</Button>
      </CardFooter>
    </Card>
  )
}
