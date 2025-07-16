import Link from "next/link"
import { Phone, MapPin, Clock, Shield, CheckCircle, Car, Star, Users } from "lucide-react"
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
import { getDistrictBySlug } from "@/lib/districts"

// Define FAQs for this specific service page
const luxuryCarFaqs = [
  {
    question: "هل لديكم معدات خاصة لنقل السيارات الفاخرة؟",
    answer:
      "نعم، نستخدم سطحات هيدروليكية مغلقة أو مفتوحة ومجهزة بأحدث التقنيات لضمان نقل آمن تمامًا للسيارات الفاخرة والرياضية.",
  },
  {
    question: "هل السائقون مدربون على التعامل مع السيارات الفارهة؟",
    answer: "بالتأكيد، فريقنا من السائقين مدرب تدريباً خاصاً على التعامل مع السيارات الفاخرة بحذر شديد واحترافية عالية.",
  },
  {
    question: "هل خدمة نقل السيارات الفاخرة متوفرة في جميع أحياء جدة؟",
    answer: "نعم، نقدم خدمة نقل السيارات الفاخرة في جميع أحياء جدة وعلى مدار الساعة.",
  },
  {
    question: "هل توفرون تأمينًا على السيارات المنقولة؟",
    answer: "نعم، جميع عمليات النقل مؤمنة لضمان راحة بالك وحماية سيارتك الثمينة.",
  },
]

// Define metadata for the page
export const metadata: Metadata = {
  title: "سطحة نقل سيارات فاخرة جدة | خدمة سحب آمنة وموثوقة للسيارات الفارهة",
  description:
    "خدمة سطحة متخصصة لنقل السيارات الفاخرة والرياضية في جدة بأمان تام. سائقون مدربون، معدات حديثة، وحماية كاملة لسيارتك الثمينة. اتصل الآن!",
  keywords: "سطحة سيارات فاخرة جدة, نقل سيارات رياضية جدة, سطحة سيارات فارهة جدة, سحب سيارات فاخرة جدة, سطحة VIP جدة",
  alternates: {
    canonical: "https://satah-jeddah.com/satah-jeddah-luxury-cars",
  },
  openGraph: {
    title: "سطحة نقل سيارات فاخرة جدة | خدمة آمنة للسيارات الفارهة",
    description: "خدمة سطحة متخصصة لنقل السيارات الفاخرة والرياضية في جدة بأمان تام",
    url: "https://satah-jeddah.com/satah-jeddah-luxury-cars",
    type: "website",
    locale: "ar_SA",
  },
  other: {
    "geo.region": "SA-02",
    "geo.placename": "جدة",
    "geo.position": "21.5433;39.1728",
  },
}

export default async function SatahJeddahLuxuryCarsPage() {
  const reviews = await getAllReviews()

  const breadcrumbItems = [
    { label: "خدماتنا", href: "/services" },
    { label: "سطحة نقل سيارات فاخرة جدة", href: "/satah-jeddah-luxury-cars" },
  ]

  // Schema.org Markup
  const pageSchemas = [
    getLocalBusinessSchema(),
    getServiceSchema({
      name: "خدمة سطحة نقل السيارات الفاخرة في جدة",
      description: "خدمة نقل آمنة وموثوقة للسيارات الفاخرة والرياضية في جميع أحياء جدة.",
      url: "https://satah-jeddah.com/satah-jeddah-luxury-cars",
      serviceType: "خدمة نقل سيارات فاخرة",
    }),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(luxuryCarFaqs),
  ]

  const aggregateRatingSchema = getAggregateRatingSchema(reviews, "سطحة جدة", "https://satah-jeddah.com")
  if (aggregateRatingSchema) {
    pageSchemas.push(aggregateRatingSchema)
  }

  const reviewsSchema = getReviewsSchema(reviews, "سطحة جدة", "https://satah-jeddah.com")
  if (reviewsSchema.length > 0) {
    pageSchemas.push(...reviewsSchema)
  }

  // Example nearby districts for internal linking
  const popularDistricts = [
    getDistrictBySlug("al-rawdah"),
    getDistrictBySlug("al-naseem"),
    getDistrictBySlug("al-hamra"),
  ].filter(Boolean)

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <mark className="bg-purple-100 text-purple-800 px-2 rounded">سطحة نقل سيارات فاخرة جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            خدمة <strong>سطحة متخصصة</strong> لنقل السيارات الفاخرة والرياضية في <strong>جدة</strong> بأقصى درجات الأمان
            والاحترافية. ثق بنا لسيارتك الثمينة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+966501234567"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل الآن لخدمة VIP</span>
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
              <h2 className="text-2xl font-bold mb-4 text-gray-900">نقل السيارات الفاخرة بأمان واحترافية في جدة</h2>
              <p className="text-gray-700 mb-4">
                نحن ندرك أن سيارتك الفاخرة أو الرياضية هي استثمار قيم، وتتطلب عناية خاصة عند النقل. لذلك، نقدم خدمة{" "}
                <strong>سطحة متخصصة</strong> في <strong>جدة</strong> مصممة خصيصًا لتلبية احتياجات السيارات الفارهة.
                فريقنا مدرب على التعامل مع هذه المركبات بحذر شديد، باستخدام أحدث المعدات لضمان عدم تعرضها لأي خدش أو
                ضرر.
              </p>
              <p className="text-gray-700 mb-4">
                سواء كنت بحاجة لنقل سيارتك إلى ورشة صيانة، معرض، أو حتى من وإلى المطار، فإننا نوفر خدمة موثوقة وسرية.
                نحن نغطي جميع أحياء <strong>جدة</strong> ونضمن وصول سيارتك بأمان وفي الوقت المحدد.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                لماذا تختارنا لنقل سيارتك <mark className="bg-blue-100 text-blue-800 px-1 rounded">الفاخرة</mark>؟
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>
                  <Shield className="inline-block h-5 w-5 text-blue-600 mr-2" />
                  معدات نقل متخصصة (سطحات هيدروليكية، مغلقة عند الطلب)
                </li>
                <li>
                  <Car className="inline-block h-5 w-5 text-green-600 mr-2" />
                  سائقون خبراء ومدربون على التعامل مع السيارات الفارهة
                </li>
                <li>
                  <Clock className="inline-block h-5 w-5 text-purple-600 mr-2" />
                  خدمة سريعة ومتاحة 24/7
                </li>
                <li>
                  <CheckCircle className="inline-block h-5 w-5 text-yellow-600 mr-2" />
                  تأمين شامل على السيارة أثناء النقل
                </li>
                <li>
                  <MapPin className="inline-block h-5 w-5 text-red-600 mr-2" />
                  تغطية واسعة لجميع مناطق جدة
                </li>
              </ul>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-purple-900 mb-2">خدمة VIP لسيارتك:</h4>
                <p className="text-purple-800">
                  نقدم خدمة نقل فاخرة تضمن أقصى درجات العناية والخصوصية لسيارتك، مع الالتزام بالمواعيد والدقة.
                </p>
              </div>
            </article>

            {/* Customer Reviews Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">تقييمات العملاء لخدمة نقل السيارات الفاخرة</h2>
              <ReviewsList reviews={reviews} />
            </section>

            {/* Review Form Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ReviewForm districtSlug="luxury-cars-service" />
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">أسئلة شائعة حول سطحة نقل السيارات الفاخرة</h2>
              <div className="space-y-4">
                {luxuryCarFaqs.map((faq, index) => (
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
                  <span className="text-gray-700">تغطية شاملة لجدة</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">متوفر 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">تقييم 5.0/5 لخدمة السيارات الفاخرة</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">عملاء VIP راضون</span>
                </div>
              </div>
            </div>

            {/* أحياء أخرى (لتعزيز الروابط الداخلية) */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-900">خدماتنا في أحياء جدة</h3>
              <div className="space-y-3">
                {popularDistricts.map((d) => (
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
