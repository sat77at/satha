import Link from "next/link"
import { Car, Wrench, Shield, Phone, MapPin, Clock } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getLocalBusinessSchema, getServiceSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "خدمات سطحة جدة المتخصصة | نقل سيارات، حوادث، فاخرة، طوارئ",
  description:
    "اكتشف جميع خدمات سطحة جدة المتخصصة: نقل سيارات الحوادث، سحب السيارات الفاخرة، خدمة الطوارئ 24/7، والمزيد في جميع أحياء جدة.",
  keywords: "خدمات سطحة جدة, سطحة حوادث, سطحة سيارات فاخرة, سطحة طوارئ, نقل سيارات جدة",
  alternates: {
    canonical: "https://satah-jeddah.com/services",
  },
  openGraph: {
    title: "خدمات سطحة جدة المتخصصة",
    description: "اكتشف جميع خدمات سطحة جدة المتخصصة",
    url: "https://satah-jeddah.com/services",
    type: "website",
    locale: "ar_SA",
  },
}

export default function ServicesPage() {
  const breadcrumbItems = [{ label: "خدماتنا", href: "/services" }]

  const pageSchemas = [
    getLocalBusinessSchema(),
    getServiceSchema(), // General service schema for this overview page
    getBreadcrumbSchema(breadcrumbItems),
  ]

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            خدمات <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark> الشاملة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة واسعة من خدمات <strong>سطحة</strong> المتخصصة لتلبية جميع احتياجاتك في <strong>جدة</strong>،
            بسرعة وأمان على مدار الساعة.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
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

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">خدمة طوارئ 24/7</h3>
            <p className="text-gray-600 mb-4">
              متوفرون على مدار الساعة لخدمة الطوارئ، سحب السيارات المتعطلة، أو أي مساعدة على الطريق.
            </p>
            <a
              href="tel:+966501234567"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              اتصل الآن ←
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">نقل آمن وموثوق</h3>
            <p className="text-gray-600 mb-4">
              نضمن نقل سيارتك بأمان تام باستخدام أحدث المعدات وفريق من السائقين المحترفين.
            </p>
            <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
              نبذة عنا ←
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">تغطية جميع أحياء جدة</h3>
            <p className="text-gray-600 mb-4">نصل إليك أينما كنت في جدة، من شمالها لجنوبها، ومن شرقها لغربها.</p>
            <Link
              href="/districts"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              جميع الأحياء ←
            </Link>
          </div>
        </section>

        <aside className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            هل تحتاج <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة</mark> الآن؟
          </h2>
          <p className="text-gray-700 mb-4">لا تتردد في الاتصال بنا للحصول على خدمة سريعة وموثوقة.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+966501234567"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>+966 50 123 4567</span>
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
        </aside>
      </main>
    </>
  )
}
