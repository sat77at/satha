import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, MapPin, Clock, Star, Users, CheckCircle, Building, Navigation, ShoppingBag } from "lucide-react"
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

const alSalamaFaqs = [
  {
    question: `ما هي سرعة استجابة سطحة جدة في حي ${district?.name}?`,
    answer: `نصل إليك في حي ${district?.name} خلال 15-30 دقيقة كحد أقصى، لضمان خدمة سريعة وفعالة.`,
  },
  {
    question: `هل خدمة سطحة ${district?.name} متوفرة 24 ساعة؟`,
    answer: `نعم، خدمتنا متوفرة على مدار الساعة طوال أيام الأسبوع، بما في ذلك العطلات الرسمية.`,
  },
  {
    question: `ما هي أنواع السيارات التي يمكن نقلها في حي ${district?.name}?`,
    answer: `نقدم خدمة نقل لجميع أنواع السيارات، بما في ذلك السيارات المتعطلة، سيارات الحوادث، السيارات الفاخرة، والدراجات النارية.`,
  },
]

export const metadata: Metadata = {
  title: `سطحة جدة السلامة | خدمة نقل السيارات في حي السلامة`,
  description: `خدمة سطحة موثوقة وسريعة في حي السلامة جدة. نقل السيارات والطوارئ على مدار الساعة. اتصل الآن للحصول على خدمة فورية`,
  keywords: `سطحة جدة السلامة, سطحة السلامة, سطحة, جدة, السلامة, نقل سيارات`,
  alternates: {
    canonical: `https://satah-jeddah.com/satah-jeddah-al-salama`,
  },
  openGraph: {
    title: `سطحة جدة السلامة`,
    description: `خدمة سطحة موثوقة في حي السلامة جدة`,
    url: `https://satah-jeddah.com/satah-jeddah-al-salama`,
    type: "website",
    locale: "ar_SA",
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": `السلامة, جدة`,
    "geo.position": `${district?.coordinates.lat};${district?.coordinates.lng}`,
  },
}

export default async function SatahJeddahAlSalamaPage() {
  if (!district) {
    notFound()
  }

  const reviews = await getAllReviews() // Changed function call

  const breadcrumbItems = [
    { label: "جميع الأحياء", href: "/districts" },
    { label: `سطحة جدة ${district.name}`, href: `/satah-jeddah-al-salama` },
  ]

  const pageSchemas = [
    getLocalBusinessSchema(district),
    getServiceSchema(district),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(alSalamaFaqs),
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
            <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark> {district.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            خدمة <strong>سطحة موثوقة</strong> وسريعة في حي <strong>{district.name}</strong> <strong>جدة</strong>. نقل
            السيارات والطوارئ على مدار الساعة مع فريق محترف ومعدات حديثة.
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
                خدمة <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">سطحة</mark> متخصصة في حي{" "}
                {district.name}
              </h2>
              <p className="text-gray-700 mb-4">
                يعتبر حي <strong>{district.name}</strong> من الأحياء المهمة في <strong>جدة</strong>، ونحن نقدم خدمة{" "}
                <em>سطحة</em> متخصصة وسريعة لجميع سكان وزوار هذا الحي المميز. يتميز حي السلامة بموقعه الاستراتيجي وقربه
                من المناطق التجارية والسكنية المهمة.
              </p>
              <p className="text-gray-700 mb-4">
                {district.description}. خدمتنا تشمل نقل السيارات المتعطلة، سيارات الحوادث، والمركبات التي تحتاج صيانة
                طارئة. نغطي جميع المناطق من الطرق الرئيسية إلى الأحياء السكنية.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                مميزات خدمة <mark className="bg-blue-100 text-blue-800 px-1 rounded">سطحة جدة</mark> في حي{" "}
                {district.name}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>وصول سريع خلال 15-30 دقيقة</li>
                <li>فريق محترف ومدرب</li>
                <li>معدات حديثة وآمنة</li>
                <li>أسعار مناسبة وشفافة</li>
                <li>خدمة 24/7 على مدار الساعة</li>
                <li>تغطية شاملة لجميع أنواع السيارات</li>
              </ul>
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900">أسئلة شائعة حول سطحة حي {district.name}</h2>
              <div className="space-y-4">
                {alSalamaFaqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            {/* معلومات سريعة */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">معلومات سريعة</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">حي {district.name}، جدة</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">متوفر 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">تقييم 4.8/5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">+200 عميل راضٍ</span>
                </div>
              </div>
            </div>

            {/* أحياء أخرى */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">أحياء أخرى</h3>
              <div className="space-y-3">
                {nearbyDistricts.map((d) => (
                  <Link
                    key={d?.id}
                    href={`/satah-jeddah-${d?.slug}`}
                    className="block text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    سطحة جدة {d?.name}
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
