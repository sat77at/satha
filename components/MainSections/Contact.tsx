import Link from "next/link"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"
import dynamic from 'next/dynamic'
const FaWhatsapp = dynamic(() => import('react-icons/fa').then(mod => mod.FaWhatsapp))
const FaPhone = dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone))
export default async function Contact() {
    return (
        <section itemScope itemType="https://schema.org/LocalBusiness" className="py-20 bg-gradient-to-b from-white to-gray-100" id="contact">
            <meta itemProp="name" content="سطحة جدة" />
            <meta itemProp="telephone" content="+966559449938" />
            <meta itemProp="areaServed" content="Jeddah, Saudi Arabia" />
            <meta itemProp="address" content="Jeddah, Saudi Arabia" />
            <meta itemProp="url" content="https://www.xn--ogbgbkqy0j.com/" />
            <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
            <meta itemProp="priceRange" content="SAR 50+" />
            <div className="container mx-auto px-4 text-center">
                <header className="mb-6">
                    <h2 className="text-4xl font-bold mb-3 text-gray-900 leading-relaxed">احصل على مساعدة فورية من <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong></h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">فريقنا جاهز لخدمتك <strong>على مدار 24 ساعة</strong> في جميع أنحاء <strong>جدة</strong> والمناطق المجاورة. لا تتردد بالتواصل معنا عبر الهاتف أو الواتساب لأي طارئ أو استفسار.</p>
                </header>
                <div className="grid grid-cols-2 gap-2 lg:gap-10 max-w-3xl mx-auto mb-5">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <Phone className="h-8 w-8 lg:h-12 lg:w-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900">اتصال مباشر</h3>
                        <p className="text-gray-600 mb-6">لخدمة سحب فورية عبر الهاتف</p>
                        <a href="tel:0559449938" title="اتصل الآن بخدمة سطحة جدة" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-base font-semibold transition transform hover:scale-105" aria-label="اتصل الآن بخدمة سطحة جدة">
                            <FaPhone className="ml-2" />
                            اتصل الآن
                        </a>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                        <MessageCircle className="h-8 w-8 lg:h-12 lg:w-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-gray-900">تواصل واتساب</h3>
                        <p className="text-gray-600 mb-6">للطلبات المكتوبة والاستفسارات الفورية</p>
                        <a href="https://wa.me/966559449938?text=مرحبًا،%20أحتاج%20إلى%20خدمة%20سطحة%20بشكل%20عاجل%20في%20جدة" target="_blank" rel="noopener noreferrer" title="التواصل مع سطحة جدة عبر واتساب" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-base font-semibold transition transform hover:scale-105" aria-label="التواصل مع سطحة جدة عبر واتساب">
                            <FaWhatsapp className="ml-2" />
                            واتساب
                        </a>
                    </div>
                </div>
                <p className="text-gray-500 mb-2">رقم الاتصال المباشر: <strong dir="ltr">055 944 9938</strong></p>
                <p className="text-lg text-gray-500 mb-4">اتصل بنا متى شئت، نحن متواجدون في جميع أحياء جدة: الحمدانية، الشرفية، العزيزية، وبقية المناطق.</p>
                <div className="text-center">
                    <Link href="/contact-us" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition" title="زيارة صفحة اتصل بنا" aria-label="زيارة صفحة اتصل بنا">
                        <span className="ml-2">صفحة اتصل بنا الكاملة</span>
                        <ArrowLeft className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}