import { CheckCircle } from "lucide-react"
import { getFAQPageSchema } from "@/lib/schema"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
export default async function Faq() {
  // Define a subset of FAQs for the homepage
  const homepageFaqs = [
    {
      question: "هل خدمة سطحة جدة متوفرة 24 ساعة؟",
      answer: "نعم، خدمتنا متوفرة على مدار 24 ساعة، 7 أيام في الأسبوع، بما في ذلك العطلات الرسمية.",
    },
    {
      question: "كم تستغرق السطحة للوصول إليّ في جدة؟",
      answer: "نلتزم بالوصول السريع خلال 15-30 دقيقة كحد أقصى في معظم أحياء جدة.",
    },
    {
      question: "ما هي أنواع السيارات التي يمكنكم نقلها؟",
      answer: "نقدم خدمة نقل لجميع أنواع السيارات والمركبات، بما في ذلك السيارات المتعطلة، سيارات الحوادث، والفاخرة.",
    },
    {
      question: "هل يمكن طلب سطحة من خارج جدة؟",
      answer: "نحن نغطي مدينة جدة والمناطق المجاورة حسب التوفر، يُرجى التواصل معنا للتأكد."
    },
    {
      question: "هل السحب يشمل السيارات منخفضة الارتفاع؟",
      answer: "نعم، نوفر سطحات مجهزة للتعامل مع السيارات المنخفضة مثل السيارات الرياضية والفاخرة."
    }
  ]
  const homePageSchemas = [
    getFAQPageSchema(homepageFaqs) // Add FAQPage schema for homepage FAQs
  ]
  return (
    <section id="faq" aria-label="الأسئلة الشائعة حول سطحة جدة" itemScope itemType="https://schema.org/FAQPage" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">إجابات لأشهر الأسئلة الشائعة حول <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong></h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto -mt-4">نقدم لك إجابات دقيقة لأكثر الأسئلة تكرارًا حول خدمات <strong>سطحة جدة</strong> مثل أوقات العمل، سرعة الوصول، وأنواع السيارات التي يمكننا نقلها.</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="space-y-6">
            {homepageFaqs.map((faq, index) => (
              <div id={`faq-${index}`} key={index} itemProp="mainEntity" itemScope itemType="https://schema.org/Question" className="border-b pb-4 last:border-b-0">
                <h3 itemProp="name" className="text-lg font-semibold text-gray-800 flex items-start space-x-2 rtl:space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p itemProp="text" className="text-gray-700 mt-2 pr-7">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link title="عرض جميع الأسئلة الشائعة حول سطحة جدة" aria-label="عرض جميع الأسئلة الشائعة حول سطحة جدة" href="/faq" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
            <span>عرض المزيد من الأسئلة الشائعة عن سطحة جدة</span>
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}