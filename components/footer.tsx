import Link from "next/link"
import { Phone, MapPin, MessageCircle } from "lucide-react"
import { getPopularDistricts } from "@/lib/districts"

export default function Footer() {
  const popularDistricts = getPopularDistricts()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">سطحة جدة</h3>
            <p className="text-gray-300 mb-4">
              خدمة <mark className="bg-blue-600 text-white px-1 rounded">سطحة موثوقة</mark> في جميع أحياء{" "}
              <mark className="bg-blue-600 text-white px-1 rounded">جدة</mark> على مدار الساعة
            </p>
            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">جدة، المملكة العربية السعودية</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">+966 50 123 4567</span>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/districts" className="text-gray-300 hover:text-white transition-colors">
                  جميع الأحياء
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  نبذة عنا
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* الأحياء الشائعة */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">الأحياء الشائعة</h4>
            <ul className="space-y-2">
              {popularDistricts.map((district) => (
                <li key={district.id}>
                  <Link
                    href={`/satah-jeddah-${district.slug}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    سطحة {district.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* خدماتنا المتخصصة */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">خدماتنا المتخصصة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/satah-jeddah-accidents" className="text-gray-300 hover:text-white transition-colors">
                  سطحة حوادث جدة
                </Link>
              </li>
              <li>
                <Link href="/satah-jeddah-luxury-cars" className="text-gray-300 hover:text-white transition-colors">
                  سطحة نقل سيارات فاخرة
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  جميع الخدمات
                </Link>
              </li>
            </ul>
          </div>

          {/* تواصل معنا (هذا القسم سيبقى كما هو أو يمكن دمجه إذا أردت) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+966501234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p>© 2024 سطحة جدة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
