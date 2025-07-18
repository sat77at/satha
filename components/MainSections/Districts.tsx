import DistrictCard from "@/components/district-card"
import { ArrowLeft } from "lucide-react"
import { getPopularDistricts } from "@/lib/districts"
import Link from "next/link"
export default function Districts() {
  const popularDistricts = getPopularDistricts()
  return (
    <section id="districts" itemScope itemType="https://schema.org/Service" aria-label="أحياء جدة التي تشملها خدمة سطحة جدة" className="py-16">
      <meta itemProp="serviceType" content="نقل سيارات و سطحات داخل جدة" />
      <meta itemProp="areaServed" content="جدة، السعودية" />
      <meta itemProp="description" content="خدمة سطحة جدة تقدم نقل سيارات سريع وآمن في جميع أحياء جدة على مدار الساعة." />
      <div className="container mx-auto px-1">
        <h2 itemProp="name" className="text-3xl font-bold text-center mb-12 text-gray-900">أحياء جدة التي تخدمها <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong></h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 mb-8 ">
          {popularDistricts.map((district) => (
            <DistrictCard key={district.id} district={district} />
          ))}
        </div>
        <div className="text-center">
          <p className="text-center text-lg text-gray-600 mb-2">تصفح القائمة الكاملة لأحياء جدة التي تشملها خدمة سطحتنا.</p>
          <Link href="/districts" title="عرض جميع أحياء جدة" aria-label="عرض جميع أحياء جدة" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold transition-colors">
            <span className="ml-2">جميع الأحياء</span>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}