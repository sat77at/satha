import SchemaMarkup from "@/components/schema-markup"
import {getLocalBusinessSchema, getServiceSchema, getAggregateRatingSchema, getReviewsSchema } from "@/lib/schema"
import { getAllReviews } from "@/app/actions/reviews" // Import getAllReviews
import ReviewsList from "@/components/reviews-list" // Import ReviewsList
import Hero from "@/components/MainSections/Hero"
import Features from "@/components/MainSections/Features"
import Districts from "@/components/MainSections/Districts"
import Services from "@/components/MainSections/Services"
import Faq from "@/components/MainSections/Faq"
import Contact from "@/components/MainSections/Contact"

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

        {/* Specialized Services Section */}
        <Services />

        {/* Popular Districts */}
        <Districts />

        {/* Features Section */}
        <Features />

        {/* Customer Reviews Section for Homepage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              تقييمات العملاء حول <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong>
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <ReviewsList reviews={reviews} />
            </div>
          </div>
        </section>

        {/* FAQ Section for Homepage */}
        <Faq />

        {/* Contact Us Section for Homepage */}
        <Contact />
      </main>
    </>
  )
}
