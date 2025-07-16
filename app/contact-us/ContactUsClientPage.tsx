"use client"

import { useState } from "react"
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { useToast } from "@/hooks/use-toast"

export default function ContactUsClientPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        toast({
          title: "تم الإرسال بنجاح",
          description: result.message,
          variant: "default",
        })
        // إعادة تعيين النموذج
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) form.reset()
      } else {
        toast({
          title: "خطأ في الإرسال",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "خطأ غير متوقع",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          اتصل بـ <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          نحن هنا لخدمتك على مدار الساعة في جميع أحياء <strong>جدة</strong>. تواصل معنا للحصول على خدمة سريعة وموثوقة.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* معلومات الاتصال */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">معلومات الاتصال</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">اتصال مباشر</h3>
                <p className="text-gray-600 mb-2">للطوارئ والخدمة السريعة</p>
                <a href="tel:+966501234567" className="text-green-600 font-semibold hover:text-green-700">
                  +966 50 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">واتساب</h3>
                <p className="text-gray-600 mb-2">للاستفسارات والحجز</p>
                <a
                  href="https://wa.me/966501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-700"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-600 mb-2">للاستفسارات العامة</p>
                <a href="mailto:info@satah-jeddah.com" className="text-blue-600 font-semibold hover:text-blue-700">
                  info@satah-jeddah.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">منطقة الخدمة</h3>
                <p className="text-gray-600">جميع أحياء جدة</p>
                <p className="text-sm text-gray-500 mt-1">
                  الروضة، النسيم، الحمراء، الفيحاء، الصفا، السلامة، الخالدية وجميع الأحياء الأخرى
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ساعات العمل</h3>
                <p className="text-gray-600">24 ساعة، 7 أيام في الأسبوع</p>
                <p className="text-sm text-gray-500 mt-1">خدمة طوارئ متاحة في جميع الأوقات</p>
              </div>
            </div>
          </div>

          {/* معلومات إضافية */}
          <div className="mt-8 bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-blue-900 mb-3">لماذا تختار سطحة جدة؟</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>استجابة سريعة خلال 15-30 دقيقة</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>فريق محترف ومدرب</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>أسعار مناسبة وشفافة</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>تغطية شاملة لجميع أحياء جدة</span>
              </li>
            </ul>
          </div>
        </div>

        {/* نموذج الاتصال */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">أرسل لنا رسالة</h2>

          <form id="contact-form" action={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="05xxxxxxxx"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                الموضوع
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">اختر الموضوع</option>
                <option value="طلب خدمة سطحة">طلب خدمة سطحة</option>
                <option value="استفسار عن الأسعار">استفسار عن الأسعار</option>
                <option value="شكوى أو اقتراح">شكوى أو اقتراح</option>
                <option value="استفسار عام">استفسار عام</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                الرسالة *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>إرسال الرسالة</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* معلومات إضافية */}
      <section className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          خدمة <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark> في جميع الأحياء
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">اتصال فوري</h3>
            <p className="text-gray-600">اتصل بنا الآن للحصول على خدمة سطحة سريعة في أي حي من أحياء جدة</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">خدمة 24/7</h3>
            <p className="text-gray-600">متاحون على مدار الساعة لخدمتك في جميع أحياء جدة بدون استثناء</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">تغطية شاملة</h3>
            <p className="text-gray-600">نغطي جميع أحياء جدة من الروضة إلى الشاطئ ومن النسيم إلى السلامة</p>
          </div>
        </div>
      </section>
    </main>
  )
}
