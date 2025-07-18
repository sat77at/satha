import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getBaseOrganizationSchema, getWebSiteSchema } from "@/lib/schema"
import SchemaMarkup from "@/components/schema-markup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "سطحة جدة | أقرب سطحة تقدم خدمة نقل السيارات في مدينة جدة",
    template: "%s | سطحة جدة",
  },
  description:
    "سطحة جدة متوفرة 24 ساعة لنقل السيارات داخل جدة وخارجها بسرعة وأمان. هل تبحث عن أقرب سطحة أو سطحة قريبة منك؟ اتصل الان على رقم سطحة جدة للخدمة الفورية!",
  keywords: "سطحة جدة, سطحة, جدة, نقل سيارات, سطحه جده, طوارئ سيارات, خدمة سطحة, اقرب سطحة, سطحة قريبة مني, سطحة في جدة, رقم سطحة, سطحة شمال جدة",
  authors: [{ name: "سطحة جدة", url: "https://xn--ogbgbkqy0j.com" }],
  creator: "سطحة جدة",
  publisher: "سطحة جدة",
  metadataBase: new URL("https://xn--ogbgbkqy0j.com"),
  alternates: {
    canonical: "https://xn--ogbgbkqy0j.com",
  },
  openGraph: {
    title: "سطحة جدة - أفضل واقرب سطحة في جدة لنقل وسحب السيارات 0559449938",
    description: "احصل على اقرب سطحة في جدةالآن - خدمة فورية 24 ساعة لنقل السيارات بأمان. اتصل بنا اذا كنت تبحث عن سطحة قريبة منك.",
    url: "https://xn--ogbgbkqy0j.com",
    images: ["images/satha2.png"],
    siteName: "سطحة جدة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سطحة جدة - اسرع خدمة سطحات داخل جدة وخارجها",
    description: "احصل على اقرب سطحة في جدةالآن - خدمة فورية 24 ساعة لنقل السيارات بأمان. اتصل بنا اذا كنت تبحث عن سطحة قريبة منك.",
    images: ["images/satha2.png"],
    creator: "@sathaapp",
  },
  verification: {
    google: "google-site-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Automotive",
  generator: 'سطحة جدة',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <title>سطحة جدة | أقرب سطحة تقدم خدمة نقل السيارات في مدينة جدة</title>
        <meta name="description" content="سطحة جدة متوفرة 24 ساعة لنقل السيارات داخل جدة وخارجها بسرعة وأمان. هل تبحث عن أقرب سطحة أو سطحة قريبة منك؟ اتصل الان على رقم سطحة جدة للخدمة الفورية!" />
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.url" content="https://xn--ogbgbkqy0j.com" />
        <meta name="geo.placename" content="جدة" />
        <meta name="geo.position" content="21.5433;39.1728" />
        <meta name="ICBM" content="21.5433, 39.1728" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased scroll-smooth bg-gray-100`}>
        <Header />
        {/* Global Schema.org JSON-LD */}
        <SchemaMarkup schemas={[getBaseOrganizationSchema(), getWebSiteSchema()]} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
