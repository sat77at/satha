'use client'
import { useState } from "react"
import Link from "next/link"
import { Phone, MapPin, Menu, X } from "lucide-react"
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header itemScope itemType="https://schema.org/LocalBusiness" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="px-2 py-2 lg:px-4 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-full">
              <MapPin className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <div>
              <Link href="/" itemProp="name" aria-label="العودة إلى الصفحة الرئيسية" className="text-2xl font-bold hover:text-blue-200 transition-colors">
                <span className="sr-only">العودة إلى الرئيسية</span>
                <strong>سطحة جدة</strong>
              </Link>
              <p className="text-sm text-blue-100">خدمة نقل سيارات موثوقة داخل جدة</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6" aria-label="القائمة الرئيسية">
            <Link href="/" className="hover:text-blue-200 transition-colors">الرئيسية</Link>
            <Link href="/districts" className="hover:text-blue-200 transition-colors">جميع الأحياء</Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors">خدماتنا</Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">نبذة عنا</Link>
          </nav>
          <div className="flex items-center mr-10">
            <a href="tel:0559449938" itemProp="telephone" aria-label="اتصل الآن على الرقم 0559449938" className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 px-2 py-1 rounded-2xl transition-colors">
              <Phone className="h-4 w-4 ml-1" />
              <span className="">اتصل بنا</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden  focus:outline-none" aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4" aria-label="Mobile Menu">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition-colors">الرئيسية</Link>
            <Link href="/districts" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition-colors">جميع الأحياء</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition-colors">خدماتنا</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-200 transition-colors">نبذة عنا</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
