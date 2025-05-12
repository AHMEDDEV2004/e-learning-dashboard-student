"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  { month: "January", hours: 10 },
  { month: "February", hours: 16 },
  { month: "March", hours: 13 },
  { month: "April", hours: 8 },
  { month: "May", hours: 12 },
  { month: "June", hours: 15 },
]

const chartConfig = {
  hours: {
    label: "Hours",
    color: "#4f46e5", // indigo
  },
} satisfies ChartConfig

export function WeeklyWatchTime() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="pb-2 pt-4 px-4">
        <CardTitle className="text-base">Weekly Watch Time</CardTitle>
        <CardDescription className="text-xs">
          Showing total hours for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 pb-2 px-4">
        <ChartContainer config={chartConfig} className="h-40">
          <AreaChart
            width={220}
            height={120}
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={6}
              tickFormatter={(value) => value.slice(0, 3)}
              fontSize={10}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillHours" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#4f46e5"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#4f46e5"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="hours"
              type="natural"
              fill="url(#fillHours)"
              fillOpacity={0.4}
              stroke="#4f46e5"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1 text-xs px-4 pb-3">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-3 w-3" />
        </div>
        <div className="leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
