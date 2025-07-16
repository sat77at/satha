import Link from "next/link"
import { ArrowRight, Phone, Clock, Shield, Zap, Wrench, Car, CheckCircle, MessageCircle } from "lucide-react"
import { getPopularDistricts } from "@/lib/districts"
import DistrictCard from "@/components/district-card"
import SchemaMarkup from "@/components/schema-markup"
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getFAQPageSchema,
  getAggregateRatingSchema,
  getReviewsSchema,
} from "@/lib/schema"
import { getAllReviews } from "@/app/actions/reviews" // Import getAllReviews
import ReviewsList from "@/components/reviews-list" // Import ReviewsList

// Define a subset of FAQs for the homepage
const homepageFaqs = [
  {
    question: "هل خدمة سطحة جدة متوفرة 24 ساعة؟",
    answer: "نعم، خدمتنا متوفرة على مدار 24 ساعة، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية.",
  },
  {
    question: "كم تستغرق السطحة للوصول إليّ في جدة؟",
    answer: "نلتزم بالوصول السريع خلال 15-30 دقيقة كحد أقصى في معظم أحياء جدة.",
  },
  {
    question: "ما هي أنواع السيارات التي يمكنكم نقلها؟",
    answer: "نقدم خدمة نقل لجميع أنواع السيارات والمركبات، بما في ذلك السيارات المتعطلة، سيارات الحوادث، والفاخرة.",
  },
]

export default async function HomePage() {
  // Make it async
  const popularDistricts = getPopularDistricts()
  const reviews = await getAllReviews() // Fetch all reviews

  const homePageSchemas = [
    getLocalBusinessSchema(), // General LocalBusiness for the whole service
    getServiceSchema(), // General Service schema
    getFAQPageSchema(homepageFaqs), // Add FAQPage schema for homepage FAQs
  ]

  const aggregateRatingSchema = getAggregateRatingSchema(
    reviews,
    "سطحة جدة", // General name
    "https://satah-jeddah.com", // General URL
  )
  if (aggregateRatingSchema) {
    homePageSchemas.push(aggregateRatingSchema)
  }

  const reviewsSchema = getReviewsSchema(
    reviews,
    "سطحة جدة", // General name
    "https://satah-jeddah.com", // General URL
  )
  if (reviewsSchema.length > 0) {
    homePageSchemas.push(...reviewsSchema)
  }

  return (
    <>
      <SchemaMarkup schemas={homePageSchemas} />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <mark className="bg-yellow-400 text-blue-900 px-2 rounded">سطحة جدة</mark> – أسرع خدمة نقل سيارات
              <br />
              في جميع أحياء <mark className="bg-yellow-400 text-blue-900 px-2 rounded">جدة</mark>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              خدمة <strong>سطحة موثوقة</strong> وسريعة في جميع أحياء <strong>جدة</strong> على مدار الساعة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0559449938"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/966559449938"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              لماذا تختار <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">سرعة الاستجابة</h3>
                <p className="text-gray-600">
                  وصول سريع خلال 15-30 دقيقة في جميع أحياء <em>جدة</em>
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">متوفر 24/7</h3>
                <p className="text-gray-600">
                  خدمة <strong>سطحة</strong> على مدار الساعة طوال أيام الأسبوع
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">خدمة موثوقة</h3>
                <p className="text-gray-600">فريق محترف ومعدات حديثة لضمان سلامة سيارتك</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Districts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              أحياء <mark className="bg-blue-100 text-blue-800 px-2 rounded">جدة</mark> الشائعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {popularDistricts.map((district) => (
                <DistrictCard key={district.id} district={district} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/districts"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>جميع الأحياء</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Specialized Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              خدمات <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark> المتخصصة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">سطحة حوادث جدة</h3>
                <p className="text-gray-600 mb-4">
                  خدمة سريعة ومتخصصة لسحب السيارات المتضررة من الحوادث في جميع أحياء جدة.
                </p>
                <Link
                  href="/satah-jeddah-accidents"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  اعرف المزيد ←
                </Link>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">سطحة نقل سيارات فاخرة</h3>
                <p className="text-gray-600 mb-4">
                  نقل آمن وموثوق للسيارات الفاخرة والرياضية بأقصى درجات العناية والاحترافية.
                </p>
                <Link
                  href="/satah-jeddah-luxury-cars"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                >
                  اعرف المزيد ←
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>جميع خدماتنا</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section for Homepage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              تقييمات العملاء حول <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ReviewsList reviews={reviews} />
            </div>
          </div>
        </section>

        {/* FAQ Section for Homepage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              أسئلة شائعة حول <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="space-y-6">
                {homepageFaqs.map((faq, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-start space-x-2 rtl:space-x-reverse">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-gray-700 mt-2 pr-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/faq"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>جميع الأسئلة الشائعة</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Us Section for Homepage */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              تواصل مع <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              نحن هنا لخدمتك على مدار الساعة في جميع أحياء <strong>جدة</strong>. لا تتردد في الاتصال بنا لأي استفسار أو
              طلب خدمة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <Phone className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">اتصال هاتفي</h3>
                <p className="text-gray-600 mb-4">لخدمة سريعة وفورية</p>
                <a
                  href="tel:0559449938"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>الاتصال الان</span>
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">تواصل واتساب</h3>
                <p className="text-gray-600 mb-4">للاستفسارات أو طلب الخدمة كتابيًا</p>
                <a
                  href="https://wa.me/966559449938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>واتساب</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                <span>صفحة اتصل بنا</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section (Existing) */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              هل تحتاج <mark className="bg-yellow-400 text-blue-900 px-2 rounded">سطحة</mark> الآن؟
            </h2>
            <p className="text-xl mb-8">
              اتصل بنا للحصول على خدمة سريعة وموثوقة في جميع أحياء <strong>جدة</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0559449938"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>انقر للاتصال</span>
              </a>
              <a
                href="https://wa.me/966559449938"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
