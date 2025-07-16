import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, Wrench, CheckCircle, Building, Navigation, ShoppingBag } from "lucide-react"
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
import { getAllReviews } from "@/app/actions/reviews" // Changed import
import ReviewForm from "@/components/review-form"
import ReviewsList from "@/components/reviews-list"
import type { Metadata } from "next"

const district = getDistrictBySlug("al-salama")

const alSalamaFaqs2 = [
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
  title: `سطحة السلامة جدة | خدمة نقل السيارات السريعة`,
  description: `خدمة سطحة السلامة جدة موثوقة وسريعة. نقل السيارات والطوارئ في حي السلامة على مدار الساعة. فريق محترف ومعدات حديثة`,
  keywords: `سطحة السلامة جدة, سطحة السلامة, سطحة, جدة, السلامة, نقل سيارات`,
  alternates: {
    canonical: `https://satah-jeddah.com/satah-al-salama-jeddah`,
  },
  openGraph: {
    title: `سطحة السلامة جدة`,
    description: `خدمة سطحة موثوقة في حي السلامة جدة`,
    url: `https://satah-jeddah.com/satah-al-salama-jeddah`,
    type: "website",
    locale: "ar_SA",
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": `السلامة, جدة`,
    "geo.position": `${district?.coordinates.lat};${district?.coordinates.lng}`,
  },
}

export default async function SatahAlSalamaJeddahPage() {
  if (!district) {
    notFound()
  }

  const reviews = await getAllReviews() // Changed function call

  const breadcrumbItems = [
    { label: "جميع الأحياء", href: "/districts" },
    { label: `سطحة ${district.name} جدة`, href: `/satah-al-salama-jeddah` },
  ]

  const pageSchemas = [
    getLocalBusinessSchema(district),
    getServiceSchema(district),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(alSalamaFaqs2),
  ]

  const aggregateRatingSchema = getAggregateRatingSchema(
    reviews,
    `سطحة جدة`, // General name
    `https://satah-jeddah.com`, // General URL
  )
  if (aggregateRatingSchema) {
    pageSchemas.push(aggregateRatingSchema)
  }

  const reviewsSchema = getReviewsSchema(
    reviews,
    `سطحة جدة`, // General name
    `https://satah-jeddah.com`, // General URL
  )
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
                حي {district.name}. نحن نفهم احتياجات المنطقة ونقدم حلول نقل مخصصة. حي السلامة يتميز بموقعه الاستراتيجي
                وقربه من المناطق التجارية والسكنية المهمة.
              </p>
              <p className="text-gray-700 mb-4">
                {district.description}. فريقنا مدرب خصيصاً للتعامل مع طرق وظروف حي {district.name}
                لضمان خدمة سريعة وآمنة. نغطي جميع المناطق من الطرق الرئيسية إلى الأحياء السكنية.
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

            {/* المعالم والخدمات القريبة */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">المعالم والخدمات القريبة في حي {district.name}</h2>

              {district.landmarks && district.landmarks.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <Building className="h-5 w-5 text-blue-600 mr-2" />
                    المعالم المهمة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {district.mainStreets && district.mainStreets.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <Navigation className="h-5 w-5 text-green-600 mr-2" />
                    الشوارع الرئيسية
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.mainStreets.map((street, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span>{street}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {district.services && district.services.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                    <ShoppingBag className="h-5 w-5 text-purple-600 mr-2" />
                    الخدمات المتوفرة
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {district.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* نصائح محلية */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">نصائح مهمة لسكان حي {district.name}</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">أوقات الذروة</h3>
                  <p className="text-yellow-700">
                    تجنب الحركة في الطرق الرئيسية خلال ساعات الذروة (7-9 صباحاً و 5-7 مساءً) لتجنب الازدحام.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">مواقف السيارات</h3>
                  <p className="text-blue-700">
                    تتوفر مواقف مجانية في المولات والمراكز التجارية، مع مواقف مدفوعة في بعض المناطق المزدحمة.
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-green-800 mb-2">خدمة السطحة السريعة</h3>
                  <p className="text-green-700">
                    نحن متواجدون بشكل دائم في منطقة {district.name} لضمان وصول سريع في حالات الطوارئ أو الأعطال.
                  </p>
                </div>
              </div>
            </section>

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
                {alSalamaFaqs2.map((faq, index) => (
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
