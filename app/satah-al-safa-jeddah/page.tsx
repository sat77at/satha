import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, Wrench, CheckCircle } from "lucide-react"
import { getDistrictBySlug } from "@/lib/districts"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import {
  getBreadcrumbSchema,
  getLocalBusinessSchema,
  getServiceSchema,
  getFAQPageSchema,
  getAggregateRatingSchema,
  getReviewsSchema,
} from "@/lib/schema"
import { getAllReviews } from "@/app/actions/reviews"
import ReviewForm from "@/components/review-form"
import ReviewsList from "@/components/reviews-list"
import type { Metadata } from "next"

const district = getDistrictBySlug("al-safa")

const alSafaFaqs2 = [
  {
    question: `هل تقدمون خدمة سطحة سريعة في ${district?.name} جدة؟`,
    answer: `نعم، نلتزم بالوصول السريع خلال 15-30 دقيقة في حي ${district?.name} بجدة لخدمة طوارئ السيارات.`,
  },
  {
    question: `ما هي ساعات عمل سطحة ${district?.name} جدة؟`,
    answer: `نعمل على مدار 24 ساعة، 7 أيام في الأسبوع، لتقديم خدمة سطحة في أي وقت تحتاجها.`,
  },
  {
    question: `هل يمكنني الاعتماد على سطحة ${district?.name} جدة لنقل سيارتي الفاخرة؟`,
    answer: `بالتأكيد، فريقنا مدرب ومجهز بأحدث المعدات لنقل جميع أنواع السيارات بأمان تام، بما في ذلك السيارات الفاخرة.`,
  },
]

export const metadata: Metadata = {
  title: `سطحة الصفا جدة | خدمة نقل السيارات السريعة`,
  description: `خدمة سطحة الصفا جدة موثوقة وسريعة. نقل السيارات والطوارئ في حي الصفا على مدار الساعة. فريق محترف ومعدات حديثة`,
  keywords: `سطحة الصفا جدة, سطحة الصفا, سطحة, جدة, الصفا, نقل سيارات`,
  alternates: {
    canonical: `https://satah-jeddah.com/satah-al-safa-jeddah`,
  },
  openGraph: {
    title: `سطحة الصفا جدة`,
    description: `خدمة سطحة موثوقة في حي الصفا جدة`,
    url: `https://satah-jeddah.com/satah-al-safa-jeddah`,
    type: "website",
    locale: "ar_SA",
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": `الصفا, جدة`,
    "geo.position": `${district?.coordinates.lat};${district?.coordinates.lng}`,
  },
}

export default async function SatahAlSafaJeddahPage() {
  if (!district) {
    notFound()
  }

  const reviews = await getAllReviews()

  const breadcrumbItems = [
    { label: "جميع الأحياء", href: "/districts" },
    { label: `سطحة ${district.name} جدة`, href: `/satah-al-safa-jeddah` },
  ]

  const pageSchemas = [
    getLocalBusinessSchema(district),
    getServiceSchema(district),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(alSafaFaqs2),
  ]

  const aggregateRatingSchema = getAggregateRatingSchema(reviews, `سطحة جدة`, `https://satah-jeddah.com`)
  if (aggregateRatingSchema) {
    pageSchemas.push(aggregateRatingSchema)
  }

  const reviewsSchema = getReviewsSchema(reviews, `سطحة جدة`, `https://satah-jeddah.com`)
  if (reviewsSchema.length > 0) {
    pageSchemas.push(...reviewsSchema)
  }

  const nearbyDistricts = district.nearbyDistricts
    ? district.nearbyDistricts.map((slug) => getDistrictBySlug(slug)).filter(Boolean)
    : []

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <mark className="bg-green-100 text-green-800 px-2 rounded">سطحة {district.name}</mark> جدة
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            خدمة <strong>سطحة {district.name}</strong> في <strong>جدة</strong> - نقل سيارات سريع وآمن مع فريق متخصص
            ومعدات حديثة. خدمة طوارئ متاحة 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:+966501234567"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/966501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              واتساب
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                لماذا تختار <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">سطحة {district.name}</mark> في
                جدة؟
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>سطحة {district.name}</strong> في <strong>جدة</strong> تقدم خدمة متميزة ومتخصصة لجميع سكان وزوار
                حي {district.name}. نحن نفهم احتياجات المنطقة ونقدم حلول نقل مخصصة.
              </p>
              <p className="text-gray-700 mb-4">
                {district.description}. فريقنا مدرب خصيصاً للتعامل مع طرق وظروف حي {district.name}
                لضمان خدمة سريعة وآمنة.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                خدمات <mark className="bg-blue-100 text-blue-800 px-1 rounded">سطحة {district.name}</mark> الشاملة
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>نقل السيارات المتعطلة والمعطوبة</li>
                <li>سطحة للحوادث والطوارئ</li>
                <li>نقل السيارات الحديثة والكلاسيكية</li>
                <li>خدمة السحب والإنقاذ</li>
                <li>نقل الدراجات النارية والمركبات الثقيلة</li>
                <li>خدمة التوصيل للوكالات والمعارض</li>
              </ul>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-green-900 mb-2 flex items-center space-x-2">
                  <Wrench className="h-5 w-5" />
                  <span>خدمة تقنية متقدمة</span>
                </h4>
                <p className="text-green-800">
                  نستخدم أحدث المعدات والتقنيات في <em>سطحة {district.name}</em> لضمان نقل آمن وسريع لجميع أنواع
                  المركبات.
                </p>
              </div>
            </article>

            {/* Customer Reviews Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">تقييمات العملاء في حي {district.name}</h2>
              <ReviewsList reviews={reviews} />
            </section>

            {/* Review Form Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ReviewForm districtSlug={district.slug} />
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">أسئلة متكررة عن سطحة {district.name} جدة</h2>
              <div className="space-y-4">
                {alSafaFaqs2.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">خريطة موقع سطحة {district.name}</h2>
              <div className="w-full h-64">
                <iframe
                  src={`https://maps.google.com/maps?q=${district?.coordinates.lat},${district?.coordinates.lng}&z=14&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`خريطة حي ${district?.name}`}
                />
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">اتصل بـ سطحة {district.name}</h3>
              <div className="space-y-4">
                <a
                  href="tel:+966501234567"
                  className="flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+966 50 123 4567</span>
                </a>
                <a
                  href="https://wa.me/966501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors"
                >
                  <span>واتساب</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">خدمات سطحة أخرى</h3>
              <div className="space-y-3">
                {nearbyDistricts.map((d) => (
                  <Link
                    key={d?.id}
                    href={`/satah-${d?.slug}-jeddah`}
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    سطحة {d?.name} جدة
                  </Link>
                ))}
                <Link
                  href="/districts"
                  className="block text-green-600 hover:text-green-800 transition-colors font-medium"
                >
                  جميع الأحياء ←
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
