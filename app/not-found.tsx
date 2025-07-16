import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
        <p className="text-gray-600 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد تم نقلها أو حذفها.</p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </Link>

          <div className="text-center">
            <Link
              href="/districts"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>تصفح جميع الأحياء</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            هل تحتاج <mark className="bg-blue-100 text-blue-800 px-1 rounded">سطحة</mark> الآن؟
          </h2>
          <p className="text-gray-600 mb-4">اتصل بنا للحصول على خدمة سريعة</p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="tel:+966501234567"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              اتصل الآن
            </a>
            <a
              href="https://wa.me/966501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
