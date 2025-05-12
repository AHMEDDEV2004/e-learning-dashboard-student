"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", hours: 12 },
  { month: "February", hours: 18 },
  { month: "March", hours: 15 },
  { month: "April", hours: 7 },
  { month: "May", hours: 14 },
  { month: "June", hours: 16 },
]

const chartConfig = {
  hours: {
    label: "Hours",
    color: "#ff9800", // orange
  },
} satisfies ChartConfig

export function WeeklyStreak() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-base">Weekly Streak</CardTitle>
        <CardDescription className="text-xs">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-2 px-4">
        <ChartContainer config={chartConfig} className="h-40">
          <BarChart width={220} height={120} accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={6}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              fontSize={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="hours" fill="#ff9800" radius={6} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs px-4 pb-3">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-3 w-3" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total hours for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
