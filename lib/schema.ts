import type {
  WithContext,
  LocalBusiness,
  Service,
  BreadcrumbList,
  Organization,
  FAQPage,
  WebSite,
  AggregateRating,
  Review,
} from "schema-dts"
import type { District } from "./districts"

const BASE_URL = "https://satah-jeddah.com"
const PHONE_NUMBER = "+966501234567"

export const getBaseOrganizationSchema = (): WithContext<Organization> => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "سطحة جدة",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`, // Assuming you'll add a logo
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_NUMBER,
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic", "English"],
  },
  sameAs: [
    // Add social media links here if available
    // "https://facebook.com/satahjeddah",
    // "https://twitter.com/satahjeddah",
  ],
})

export const getWebSiteSchema = (): WithContext<WebSite> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: "سطحة جدة",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
})

export const getLocalBusinessSchema = (district?: District): WithContext<LocalBusiness> => {
  const baseLocalBusiness: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "سطحة جدة",
    description: "خدمة سطحة موثوقة وسريعة في جميع أحياء جدة على مدار الساعة",
    url: BASE_URL,
    telephone: PHONE_NUMBER,
    address: {
      "@type": "PostalAddress",
      addressLocality: "جدة",
      addressRegion: "مكة المكرمة",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.5433, // Default Jeddah coordinates
      longitude: 39.1728,
    },
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "$$",
    // Removed aggregateRating from here as it will be added separately for all reviews
  }

  if (district) {
    return {
      ...baseLocalBusiness,
      name: `سطحة جدة ${district.name}`,
      description: `خدمة سطحة موثوقة وسريعة في حي ${district.name} جدة`,
      areaServed: {
        "@type": "Place",
        name: `حي ${district.name}، جدة`,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: district.coordinates.lat,
        longitude: district.coordinates.lng,
      },
      url: `${BASE_URL}/satah-jeddah-${district.slug}`, // Specific URL for district page
    }
  }
  return baseLocalBusiness
}

export const getServiceSchema = (
  options?: {
    name?: string
    description?: string
    url?: string
    serviceType?: string
    areaServedName?: string
  },
  district?: District,
): WithContext<Service> => {
  const defaultName = "خدمة سحب ونقل السيارات (سطحة)"
  const defaultDescription = "خدمة سطحة موثوقة وسريعة لنقل السيارات المتعطلة وسيارات الحوادث في جدة."
  const defaultUrl = BASE_URL
  const defaultServiceType = "خدمة سحب ونقل السيارات"
  const defaultAreaServedName = "جدة، المملكة العربية السعودية"

  const serviceName = options?.name || defaultName
  const serviceDescription = options?.description || defaultDescription
  const serviceUrl = options?.url || defaultUrl
  const serviceType = options?.serviceType || defaultServiceType
  const areaServedName = options?.areaServedName || defaultAreaServedName

  const baseService: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceType,
    provider: getBaseOrganizationSchema(),
    areaServed: {
      "@type": "Place",
      name: areaServedName,
    },
    description: serviceDescription,
    url: serviceUrl,
  }

  if (district) {
    return {
      ...baseService,
      name: `خدمة سطحة في حي ${district.name} جدة`,
      description: `خدمة سطحة متخصصة وسريعة في حي ${district.name} جدة، تشمل نقل السيارات المتعطلة وسيارات الحوادث.`,
      areaServed: {
        "@type": "Place",
        name: `حي ${district.name}، جدة`,
      },
      url: `${BASE_URL}/satah-jeddah-${district.slug}`,
    }
  }
  return baseService
}

export const getBreadcrumbSchema = (items: { label: string; href: string }[]): WithContext<BreadcrumbList> => {
  const itemListElement = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: `${BASE_URL}${item.href}`,
  }))

  // Add homepage to breadcrumbs if not already there
  if (itemListElement[0]?.item !== `${BASE_URL}/`) {
    itemListElement.unshift({
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: `${BASE_URL}/`,
    })
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElement,
  }
}

export const getFAQPageSchema = (faqs: { question: string; answer: string }[]): WithContext<FAQPage> => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})

interface ReviewData {
  name: string | null
  stars: number
  comment: string
  created_at: string
}

export const getAggregateRatingSchema = (
  reviews: ReviewData[],
  // These parameters are now for the overall service, not specific to a district
  itemReviewedName = "سطحة جدة",
  itemReviewedUrl: string = BASE_URL,
): WithContext<AggregateRating> | null => {
  if (reviews.length === 0) return null

  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0)
  const averageRating = (totalStars / reviews.length).toFixed(1)

  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: averageRating,
    reviewCount: reviews.length.toString(),
    itemReviewed: {
      "@type": "LocalBusiness", // Or Service, depending on context
      name: itemReviewedName,
      url: itemReviewedUrl,
    },
  }
}

export const getReviewsSchema = (
  reviews: ReviewData[],
  // These parameters are now for the overall service, not specific to a district
  itemReviewedName = "سطحة جدة",
  itemReviewedUrl: string = BASE_URL,
): WithContext<Review>[] => {
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.stars.toString(),
    },
    author: {
      "@type": "Person",
      name: review.name || "مستخدم مجهول",
    },
    reviewBody: review.comment,
    datePublished: new Date(review.created_at).toISOString().split("T")[0], // YYYY-MM-DD
    itemReviewed: {
      "@type": "LocalBusiness", // Or Service
      name: itemReviewedName,
      url: itemReviewedUrl,
    },
  }))
}
