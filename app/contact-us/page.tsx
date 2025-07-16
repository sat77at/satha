import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getLocalBusinessSchema } from "@/lib/schema"
import ContactUsClientPage from "./ContactUsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "اتصل بنا - سطحة جدة | خدمة نقل السيارات على مدار الساعة",
  description: "تواصل مع سطحة جدة للحصول على خدمة نقل سيارات سريعة وموثوقة في جميع أحياء جدة. متاحون 24/7 لخدمتك.",
  keywords: "اتصل بنا, سطحة جدة, تواصل, خدمة عملاء, نقل سيارات جدة",
  alternates: {
    canonical: "https://satah-jeddah.com/contact-us",
  },
  openGraph: {
    title: "اتصل بنا - سطحة جدة",
    description: "تواصل مع سطحة جدة للحصول على خدمة نقل سيارات سريعة وموثوقة",
    url: "https://satah-jeddah.com/contact-us",
    type: "website",
    locale: "ar_SA",
  },
}

export default function ContactUsPage() {
  const breadcrumbItems = [{ label: "اتصل بنا", href: "/contact-us" }]

  const pageSchemas = [getLocalBusinessSchema(), getBreadcrumbSchema(breadcrumbItems)]

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />
      <Breadcrumbs items={breadcrumbItems} />
      <ContactUsClientPage />
    </>
  )
}
