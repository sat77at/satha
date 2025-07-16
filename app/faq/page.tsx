import { CheckCircle, Phone } from "lucide-react"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getLocalBusinessSchema, getFAQPageSchema } from "@/lib/schema"
import type { Metadata } from "next"

const faqs = [
  {
    question: "ما هي خدمة سطحة جدة؟",
    answer:
      "سطحة جدة هي خدمة متخصصة لسحب ونقل السيارات والمركبات في جميع أحياء جدة. نقدم خدماتنا للسيارات المتعطلة، سيارات الحوادث، والسيارات الفاخرة، على مدار الساعة.",
  },
  {
    question: "هل خدمة سطحة جدة متوفرة 24 ساعة؟",
    answer:
      "نعم، خدمتنا متوفرة على مدار 24 ساعة، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية. يمكنك الاتصال بنا في أي وقت.",
  },
  {
    question: "كم تستغرق السطحة للوصول إليّ في جدة؟",
    answer: "نلتزم بالوصول السريع خلال 15-30 دقيقة كحد أقصى في معظم أحياء جدة، حسب موقعك وظروف حركة المرور.",
  },
  {
    question: "ما هي أنواع السيارات التي يمكنكم نقلها؟",
    answer:
      "نقدم خدمة نقل لجميع أنواع السيارات والمركبات، بما في ذلك السيارات الصغيرة، الكبيرة، الدفع الرباعي، الفاخرة، الرياضية، والدراجات النارية.",
  },
  {
    question: "هل أسعاركم تنافسية؟",
    answer: "نعم، نقدم أسعارًا تنافسية وشفافة بدون أي رسوم خفية. يمكنك الاتصال بنا للحصول على تقدير مجاني.",
  },
  {
    question: "هل لديكم تأمين على السيارات المنقولة؟",
    answer: "نعم، جميع عمليات النقل لدينا مؤمنة لضمان سلامة سيارتك وراحة بالك أثناء النقل.",
  },
  {
    question: "ما هي مناطق التغطية لخدمة سطحة جدة؟",
    answer:
      "نغطي جميع أحياء جدة، من شمالها لجنوبها ومن شرقها لغربها، بما في ذلك الأحياء الرئيسية مثل الروضة، النسيم، الحمراء، الفيحاء، الصفا، السلامة، والخالدية.",
  },
  {
    question: "كيف يمكنني طلب خدمة سطحة جدة؟",
    answer: "يمكنك طلب الخدمة بالاتصال بنا مباشرة على الرقم +966 50 123 4567 أو عبر تطبيق واتساب على نفس الرقم.",
  },
  {
    question: "هل يمكنكم نقل السيارة إلى ورشة معينة؟",
    answer: "بالتأكيد، يمكننا نقل سيارتك إلى أي ورشة إصلاح، مركز صيانة، أو موقع آخر تختاره داخل جدة.",
  },
]

export const metadata: Metadata = {
  title: "الأسئلة الشائعة - سطحة جدة | إجابات حول خدمات نقل السيارات",
  description:
    "ابحث عن إجابات لأسئلتك حول خدمات سطحة جدة، سرعة الاستجابة، الأسعار، التغطية الجغرافية، ونقل السيارات المتضررة والفاخرة.",
  keywords: "أسئلة سطحة جدة, استفسارات سطحة, معلومات سطحة جدة, أسعار سطحة جدة, وقت استجابة سطحة, سطحة جدة FAQ",
  alternates: {
    canonical: "https://satah-jeddah.com/faq",
  },
  openGraph: {
    title: "الأسئلة الشائعة - سطحة جدة",
    description: "إجابات حول خدمات سطحة جدة ونقل السيارات",
    url: "https://satah-jeddah.com/faq",
    type: "website",
    locale: "ar_SA",
  },
}

export default function FAQPage() {
  const breadcrumbItems = [{ label: "الأسئلة الشائعة", href: "/faq" }]

  const pageSchemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema(breadcrumbItems),
    getFAQPageSchema(faqs), // Crucial for FAQ rich snippets
  ]

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            الأسئلة الشائعة حول <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            هنا ستجد إجابات لأكثر الأسئلة شيوعًا حول خدماتنا في <strong>سطحة جدة</strong>.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-800 flex items-start space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-700 mt-2 pr-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-12 bg-blue-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            هل لديك سؤال آخر عن <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>؟
          </h2>
          <p className="text-gray-700 mb-4">لا تتردد في الاتصال بنا مباشرة للحصول على المساعدة.</p>
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
