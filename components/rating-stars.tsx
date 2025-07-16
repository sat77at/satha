"use client"

import { Star } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils" // Assuming cn utility is available

interface RatingStarsProps {
  value: number
  onChange?: (value: number) => void
  size?: number
  readOnly?: boolean
}

export default function RatingStars({ value, onChange, size = 24, readOnly = false }: RatingStarsProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)

  const displayValue = readOnly ? value : (hoverValue ?? value)

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <Star
          key={starIndex}
          size={size}
          className={cn(
            "cursor-pointer transition-colors",
            displayValue >= starIndex ? "text-yellow-500 fill-yellow-500" : "text-gray-300",
            readOnly ? "cursor-default" : "hover:text-yellow-400 hover:fill-yellow-400",
          )}
          onClick={() => !readOnly && onChange?.(starIndex)}
          onMouseEnter={() => !readOnly && setHoverValue(starIndex)}
          onMouseLeave={() => !readOnly && setHoverValue(null)}
        />
      ))}
    </div>
  )
}
