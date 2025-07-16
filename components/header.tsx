import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                سطحة جدة
              </Link>
              <p className="text-sm text-blue-100">خدمة نقل سيارات موثوقة</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              الرئيسية
            </Link>
            <Link href="/districts" className="hover:text-blue-200 transition-colors">
              جميع الأحياء
            </Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors">
              خدماتنا
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              نبذة عنا
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+966501234567"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">اتصل الآن</span>
            </a>
            <a
              href="https://wa.me/966501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
