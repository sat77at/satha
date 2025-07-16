import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getBaseOrganizationSchema, getWebSiteSchema } from "@/lib/schema"
import SchemaMarkup from "@/components/schema-markup"
import { Toaster } from "@/components/ui/toaster" // <--- إضافة هذا السطر

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "سطحة جدة | خدمة نقل السيارات الموثوقة في جميع أحياء جدة",
    template: "%s | سطحة جدة",
  },
  description:
    "خدمة سطحة موثوقة وسريعة في جميع أحياء جدة. نقل السيارات والطوارئ على مدار الساعة. فريق محترف ومعدات حديثة. اتصل الآن للحصول على خدمة فورية",
  keywords: "سطحة جدة, سطحة, جدة, نقل سيارات, سطحه جده, طوارئ سيارات, خدمة سطحة",
  authors: [{ name: "سطحة جدة" }],
  creator: "سطحة جدة",
  publisher: "سطحة جدة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://satah-jeddah.com"),
  alternates: {
    canonical: "https://satah-jeddah.com",
  },
  openGraph: {
    title: "سطحة جدة | خدمة نقل السيارات الموثوقة",
    description: "خدمة سطحة موثوقة وسريعة في جميع أحياء جدة",
    url: "https://satah-jeddah.com",
    siteName: "سطحة جدة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "سطحة جدة | خدمة نقل السيارات الموثوقة",
    description: "خدمة سطحة موثوقة وسريعة في جميع أحياء جدة",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="جدة" />
        <meta name="geo.position" content="21.5433;39.1728" />
        <meta name="ICBM" content="21.5433, 39.1728" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <Header />
        {/* Global Schema.org JSON-LD */}
        <SchemaMarkup schemas={[getBaseOrganizationSchema(), getWebSiteSchema()]} />
        {children}
        <Footer />
        <Toaster /> {/* <--- إضافة هذا السطر */}
      </body>
    </html>
  )
}
