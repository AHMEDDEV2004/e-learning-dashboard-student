import { Star } from "lucide-react"
import Image from "next/image"

interface CourseCardProps {
  isNew?: boolean
  thumbnail: string
  title: string
  instructor: string
  rating: number
  reviews: number
  price: string
  duration: string
  totalDuration: string
}

export function CourseCard({
  isNew = false,
  thumbnail,
  title,
  instructor,
  rating,
  reviews,
  price,
  duration,
  totalDuration,
}: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white transition-all hover:shadow-md hover:border-[#bee543]/70">
      <div className="relative">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="h-48 w-full object-cover"
        />
        {isNew && (
          <div className="absolute left-3 top-3 rounded bg-[#2d0778] px-2 py-1 text-xs font-medium text-white">
            New
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2d0778]/90 text-white">
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
              className="h-4 w-4"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <span className="text-sm text-white">{duration}</span>
        </div>
        <div className="absolute bottom-3 right-3 rounded bg-[#2d0778]/90 px-2 py-0.5 text-xs text-white">
          {totalDuration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 font-semibold">{title}</h3>
        <p className="mb-2 text-sm text-gray-500">{instructor}</p>
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center text-[#2d0778]">
            <Star className="h-4 w-4 fill-[#bee543] text-[#bee543]" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
          <span className="ml-auto font-semibold text-[#2d0778]">{price}</span>
        </div>
      </div>
    </div>
  )
}
