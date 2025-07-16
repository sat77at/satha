import Link from "next/link"
import { MapPin, Clock, Star } from "lucide-react"
import type { District } from "@/lib/districts"

interface DistrictCardProps {
  district: District
}

export default function DistrictCard({ district }: DistrictCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">حي {district.name}</h3>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm text-gray-600">4.8</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 text-sm">{district.description}</p>

      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="h-4 w-4 text-blue-600" />
        <span className="text-sm text-gray-600">جدة، المملكة العربية السعودية</span>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <Clock className="h-4 w-4 text-green-600" />
        <span className="text-sm text-green-600">متوفر 24/7</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Link
          href={`/satah-jeddah-${district.slug}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors text-sm"
        >
          سطحة جدة {district.name}
        </Link>
        <Link
          href={`/satah-${district.slug}-jeddah`}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-center transition-colors text-sm"
        >
          سطحة {district.name} جدة
        </Link>
      </div>
    </div>
  )
}
