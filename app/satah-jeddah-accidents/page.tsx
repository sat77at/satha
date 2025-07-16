import Link from "next/link"
import { Phone, MapPin, Clock, Shield, CheckCircle, Wrench, Star, Users } from "lucide-react"
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
const accidentFaqs = [
  {
    question: "ماذا أفعل بعد حادث سيارة في جدة؟",
    answer:
      "أولاً، تأكد من سلامتك وسلامة الركاب. ثم اتصل بالجهات المختصة (المرور أو نجم) ثم اتصل بنا على الفور لخدمة السطحة السريعة.",
  },
  {
    question: "كم تستغرق السطحة للوصول لموقع الحادث في جدة؟",
    answer: "نلتزم بالوصول السريع خلال 15-30 دقيقة كحد أقصى لموقع الحادث في أي حي بجدة.",
  },
  {
    question: "هل تتعاملون مع شركات التأمين لسحب السيارات المتضررة؟",
    answer: "نعم، يمكننا التعامل مباشرة مع شركات التأمين لتسهيل عملية سحب سيارتك بعد الحادث.",
  },
  {
    question: "هل يمكنكم نقل السيارة المتضررة إلى ورشة معينة؟",
    answer: "بالتأكيد، يمكننا نقل سيارتك المتضررة إلى أي ورشة إصلاح أو مركز صيانة تختاره في جدة.",
  },
]

// Define metadata for the page
export const metadata: Metadata = {
  title: "سطحة حوادث جدة | خدمة سحب السيارات المتضررة بعد الحوادث 24/7",
  description:
    "خدمة سطحة متخصصة لسحب السيارات المتضررة من الحوادث في جدة. استجابة سريعة، فريق محترف، وأسعار تنافسية. اتصل بنا الآن لخدمة طوارئ الحوادث.",
  keywords: "سطحة حوادث جدة, سحب سيارات حوادث جدة, نقل سيارات متضررة جدة, سطحة طوارئ جدة, سطحة سريعة للحوادث",
  alternates: {
    canonical: "https://satah-jeddah.com/satah-jeddah-accidents",
  },
  openGraph: {
    title: "سطحة حوادث جدة | خدمة سحب السيارات المتضررة",
    description: "خدمة سطحة متخصصة لسحب السيارات المتضررة من الحوادث في جدة",
    url: "https://satah-jeddah.com/satah-jeddah-accidents",
    type: "website",
    locale: "ar_SA",
  },
  // Use general Jeddah coordinates for geo.position as this is a city-wide service
  other: {
    "geo.region": "SA-02",
    "geo.placename": "جدة",
    "geo.position": "21.5433;39.1728",
  },
}

export default async function SatahJeddahAccidentsPage() {
  const reviews = await getAllReviews()

  const breadcrumbItems = [
    { label: "خدماتنا", href: "/services" },
    { label: "سطحة حوادث جدة", href: "/satah-jeddah-accidents" },
  ]

  // Schema.org Markup
  const pageSchemas = [
    getLocalBusinessSchema(),
    getServiceSchema({
      name: "خدمة سطحة حوادث السيارات في جدة",
      description: "خدمة سحب ونقل السيارات المتضررة من الحوادث في جميع أحياء جدة على مدار الساعة.",
      url: "https://satah-jeddah.com/satah-jeddah-accidents",
      serviceType: "خدمة سحب سيارات الحوادث",
    }),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(accidentFaqs),
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
            <mark className="bg-red-100 text-red-800 px-2 rounded">سطحة حوادث جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            خدمة <strong>سطحة متخصصة</strong> لسحب ونقل السيارات المتضررة من الحوادث في جميع أحياء <strong>جدة</strong>.
            استجابة سريعة على مدار الساعة لضمان سلامتك وراحة بالك.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:+966501234567"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>اتصل الآن لخدمة الطوارئ</span>
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
                خدمة <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">سطحة حوادث</mark> موثوقة في جدة
              </h2>
              <p className="text-gray-700 mb-4">
                عند وقوع حادث، تكون الأولوية لسلامتك. بعد ذلك، يأتي دورنا في <strong>سطحة جدة</strong> لتقديم خدمة سحب
                السيارات المتضررة بكفاءة وأمان. نحن نتفهم مدى التوتر الذي يسببه الحادث، ولذلك نوفر فريقًا متخصصًا ومجهزًا
                للتعامل مع جميع أنواع الحوادث، من الخفيفة إلى الكبيرة.
              </p>
              <p className="text-gray-700 mb-4">
                تغطي خدمتنا جميع أحياء <strong>جدة</strong>، ونضمن وصولاً سريعًا لتقليل وقت انتظارك. سواء كانت سيارتك
                تحتاج إلى سحب من الطريق أو نقل إلى ورشة إصلاح، فإننا نوفر الحل الأمثل.
              </p>

              <h3 className="text-xl font-bold mb-3 text-gray-900">
                لماذا تختارنا لخدمة <mark className="bg-blue-100 text-blue-800 px-1 rounded">سطحة الحوادث</mark>؟
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>
                  <Shield className="inline-block h-5 w-5 text-blue-600 mr-2" />
                  فريق مدرب على التعامل الآمن مع السيارات المتضررة
                </li>
                <li>
                  <Clock className="inline-block h-5 w-5 text-green-600 mr-2" />
                  استجابة سريعة 24/7 في جميع أنحاء جدة
                </li>
                <li>
                  <Wrench className="inline-block h-5 w-5 text-purple-600 mr-2" />
                  معدات حديثة ومتخصصة لجميع أنواع المركبات
                </li>
                <li>
                  <CheckCircle className="inline-block h-5 w-5 text-yellow-600 mr-2" />
                  أسعار شفافة وتنافسية بدون رسوم خفية
                </li>
                <li>
                  <MapPin className="inline-block h-5 w-5 text-red-600 mr-2" />
                  تغطية شاملة لجميع أحياء جدة
                </li>
              </ul>

              <div className="bg-red-50 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-red-900 mb-2">نصيحة هامة بعد الحادث:</h4>
                <p className="text-red-800">
                  حافظ على هدوئك، قم بتأمين موقع الحادث إن أمكن، ولا تحاول تحريك السيارة إذا كانت هناك إصابات أو أضرار
                  جسيمة قبل وصول الجهات المختصة.
                </p>
              </div>
            </article>

            {/* Customer Reviews Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">تقييمات العملاء لخدمة سطحة الحوادث</h2>
              <ReviewsList reviews={reviews} />
            </section>

            {/* Review Form Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ReviewForm districtSlug="accidents-service" />
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">أسئلة شائعة حول سطحة حوادث جدة</h2>
              <div className="space-y-4">
                {accidentFaqs.map((faq, index) => (
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
                  <span className="text-gray-700">متوفر 24/7 للطوارئ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">تقييم 4.9/5 لخدمة الحوادث</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">+500 حالة حادث تم التعامل معها</span>
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
