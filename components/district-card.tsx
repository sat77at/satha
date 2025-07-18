import Link from "next/link"
import { MapPin, Clock, Star } from "lucide-react"
import type { District } from "@/lib/districts"
interface DistrictCardProps {
  district: District
}
export default function DistrictCard({ district }: DistrictCardProps) {
  return (
    <div itemScope itemType="https://schema.org/Place" className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-2 pt-3 lg:p-6 border border-gray-200">
      <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
      <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
        <meta itemProp="latitude" content={district.coordinates.lat.toString()} />
        <meta itemProp="longitude" content={district.coordinates.lng.toString()} />
      </div>
      <meta itemProp="address" content={`حي ${district.name}، جدة، المملكة العربية السعودية`} />
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900" itemProp="name">حي {district.name}</h3>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm text-gray-600">4.8</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4 text-sm" itemProp="description">{district.description}</p>
      <div className="flex items-center space-x-2 mb-3">
        <MapPin className="h-4 w-4 text-blue-600 ml-1" />
        <span className="text-sm text-gray-600" itemProp="addressLocality">جدة، المملكة العربية السعودية</span>
      </div>
      <div className="flex items-center space-x-2 mb-3">
        <Clock className="h-4 w-4 text-green-600 ml-1" />
        <span className="text-sm text-green-600">متوفر 24/7</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Link itemProp="url" href={`/satah-jeddah-${district.slug}`} aria-label={`خدمة سطحة في حي ${district.name} جدة`} className="hover:underline bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 ml-4 mr-4 rounded-lg text-center transition-colors text-sm">سطحة جدة {district.name}</Link>
        <Link itemProp="url" href={`/satah-${district.slug}-jeddah`} aria-label={`خدمة سطحة في حي ${district.name} جدة`} className="hover:underline bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-4 mr-4 rounded-lg text-center transition-colors text-sm">سطحة {district.name} جدة</Link>
      </div>
    </div>
  )
}
