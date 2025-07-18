import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { getPopularDistricts } from "@/lib/districts"
import SchemaMarkup from "@/components/schema-markup"
import {
  getLocalBusinessSchema,
  getServiceSchema,
  getAggregateRatingSchema,
  getReviewsSchema,
} from "@/lib/schema"
import { getAllReviews } from "@/app/actions/reviews" // Import getAllReviews
import ReviewsList from "@/components/reviews-list" // Import ReviewsList
import Hero from "@/components/MainSections/Hero"
import Features from "@/components/MainSections/Features"
import Districts from "@/components/MainSections/Districts"
import Services from "@/components/MainSections/Services"
import Faq from "@/components/MainSections/Faq"


export default async function HomePage() {
  // Make it async
  const reviews = await getAllReviews() // Fetch all reviews
  const homePageSchemas = [
    getLocalBusinessSchema(), // General LocalBusiness for the whole service
    getServiceSchema(), // General Service schema
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
        <Hero />
        {/* Features Section */}
        <Features />

        {/* CTA Section */}

        {/* Popular Districts */}
        <Districts />

        {/* Specialized Services Section */}
        <Services />

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
        <Faq />

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
