import { Shield, Clock, Users, Award, Phone } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getLocalBusinessSchema, getServiceSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نبذة عنا - سطحة جدة | خدمة نقل السيارات الموثوقة",
  description:
    "تعرف على سطحة جدة - خدمة نقل السيارات الموثوقة في جميع أحياء جدة. فريق محترف ومعدات حديثة وخدمة على مدار الساعة",
  keywords: "سطحة جدة, نبذة عنا, خدمة نقل السيارات, جدة, سطحة موثوقة",
  alternates: {
    canonical: "https://satah-jeddah.com/about",
  },
  openGraph: {
    title: "نبذة عنا - سطحة جدة",
    description: "تعرف على سطحة جدة - خدمة نقل السيارات الموثوقة",
    url: "https://satah-jeddah.com/about",
    type: "website",
    locale: "ar_SA",
  },
}

export default function AboutPage() {
  const breadcrumbItems = [{ label: "نبذة عنا", href: "/about" }]

  const pageSchemas = [getLocalBusinessSchema(), getServiceSchema(), getBreadcrumbSchema(breadcrumbItems)]

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            نبذة عن <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            رواد في خدمة نقل السيارات بجميع أحياء جدة مع الالتزام بأعلى معايير الجودة والسرعة
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <section>
            <article className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">من نحن؟</h2>
              <p className="text-gray-700 mb-4">
                <strong>سطحة جدة</strong> هي شركة رائدة في مجال نقل السيارات والمركبات في جميع أحياء{" "}
                <strong>جدة</strong>. نحن نفتخر بتقديم خدمة <em>سطحة</em> موثوقة وسريعة على مدار الساعة طوال أيام
                الأسبوع.
              </p>
              <p className="text-gray-700 mb-4">
                بدأنا رحلتنا بهدف واضح: تقديم أفضل خدمة{" "}
                <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">سطحة</mark>
                في <mark className="bg-yellow-100 text-yellow-800 px-1 rounded">جدة</mark> مع الالتزام بمعايير الجودة
                والسرعة والأمان.
              </p>
              <p className="text-gray-700">
                فريقنا المحترف مدرب على أحدث التقنيات ولديه خبرة واسعة في التعامل مع جميع أنواع المركبات والظروف الطارئة
                في شوارع وأحياء جدة.
              </p>
            </article>
          </section>

          <section>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">رؤيتنا ورسالتنا</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-600">الرؤية</h3>
                  <p className="text-gray-700">
                    أن نكون الخيار الأول والأوثق لخدمة <em>سطحة</em> في <em>جدة</em>
                    وجميع أحيائها، مع تقديم خدمة استثنائية تفوق توقعات عملائنا.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-600">الرسالة</h3>
                  <p className="text-gray-700">
                    نقدم خدمة <strong>سطحة</strong> احترافية وموثوقة في جميع أحياء <strong>جدة</strong>
                    مع الالتزام بأعلى معايير الجودة والسرعة والأمان لضمان راحة وأمان عملائنا.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* مميزاتنا */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            لماذا تختار <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">سرعة الاستجابة</h3>
              <p className="text-gray-600">وصول سريع خلال 15-30 دقيقة في جميع أحياء جدة</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">خدمة موثوقة</h3>
              <p className="text-gray-600">فريق محترف ومعدات حديثة لضمان سلامة سيارتك</p>
            </div>
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">فريق خبير</h3>
            <p className="text-gray-600">فنيون مدربون على أعلى مستوى من الخبرة والاحترافية</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">جودة عالية</h3>
            <p className="text-gray-600">التزام بأعلى معايير الجودة في جميع خدماتنا</p>
          </div>
        </section>

        {/* خدماتنا */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">خدماتنا الشاملة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-600">خدمات النقل</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• نقل السيارات المتعطلة</li>
                  <li>• نقل سيارات الحوادث</li>
                  <li>• نقل السيارات الحديثة</li>
                  <li>• نقل المركبات الثقيلة</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-600">خدمات الطوارئ</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• خدمة 24/7</li>
                  <li>• استجابة سريعة للطوارئ</li>
                  <li>• فريق جاهز دائماً</li>
                  <li>• تغطية شاملة لجدة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* تواصل معنا */}
        <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            تواصل مع <mark className="bg-yellow-400 text-blue-900 px-2 rounded">سطحة جدة</mark>
          </h2>
          <p className="text-xl mb-6">نحن هنا لخدمتك على مدار الساعة في جميع أحياء جدة</p>
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
              تواصل عبر الواتساب
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
