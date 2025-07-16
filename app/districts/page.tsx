import { districts } from "@/lib/districts"
import DistrictCard from "@/components/district-card"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getAggregateRatingSchema,
  getReviewsSchema,
} from "@/lib/schema"
import { getAllReviews } from "@/app/actions/reviews"
import ReviewsList from "@/components/reviews-list"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "جميع أحياء جدة - سطحة جدة | خدمة نقل السيارات",
  description:
    "تصفح جميع أحياء جدة التي تغطيها خدمة سطحة جدة. خدمة موثوقة وسريعة في الروضة، النسيم، الحمراء، الفيحاء وجميع أحياء جدة",
  keywords: "سطحة جدة, أحياء جدة, سطحة, جدة, نقل سيارات, الروضة, النسيم, الحمراء, الفيحاء",
  alternates: {
    canonical: "https://satah-jeddah.com/districts",
  },
  openGraph: {
    title: "جميع أحياء جدة - سطحة جدة",
    description: "تصفح جميع أحياء جدة التي تغطيها خدمة سطحة جدة",
    url: "https://satah-jeddah.com/districts",
    type: "website",
    locale: "ar_SA",
  },
}

export default async function DistrictsPage() {
  const breadcrumbItems = [{ label: "جميع الأحياء", href: "/districts" }]
  const reviews = await getAllReviews()

  const pageSchemas = [getLocalBusinessSchema(), getServiceSchema(), getBreadcrumbSchema(breadcrumbItems)]

  const aggregateRatingSchema = getAggregateRatingSchema(reviews, "سطحة جدة", "https://satah-jeddah.com")
  if (aggregateRatingSchema) {
    pageSchemas.push(aggregateRatingSchema)
  }

  const reviewsSchema = getReviewsSchema(reviews, "سطحة جدة", "https://satah-jeddah.com")
  if (reviewsSchema.length > 0) {
    pageSchemas.push(...reviewsSchema)
  }

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            جميع أحياء <mark className="bg-blue-100 text-blue-800 px-2 rounded">جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            خدمة <strong>سطحة موثوقة</strong> في جميع أحياء <strong>جدة</strong> على مدار الساعة. اختر حيك للحصول على
            خدمة سريعة ومتخصصة.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {districts.map((district) => (
              <DistrictCard key={district.id} district={district} />
            ))}
          </div>
        </section>

        {/* Add a section for overall reviews */}
        <section className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">تقييمات العملاء لخدمة سطحة جدة</h2>
          <ReviewsList reviews={reviews} />
        </section>

        <aside className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            خدمة <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark> الشاملة
          </h2>
          <p className="text-gray-700 mb-4">
            نحن نقدم خدمة <em>سطحة</em> متخصصة في جميع أحياء <em>جدة</em> بما في ذلك:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>سطحة للسيارات المتعطلة</li>
            <li>نقل السيارات الحديثة</li>
            <li>سطحة للحوادث والطوارئ</li>
            <li>خدمة على مدار الساعة</li>
          </ul>
        </aside>
      </main>
    </>
  )
}
