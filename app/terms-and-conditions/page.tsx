import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getWebSiteSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "الشروط والأحكام - سطحة جدة | اتفاقية استخدام الخدمات",
  description:
    "اطلع على الشروط والأحكام التي تحكم استخدامك لخدمات سطحة جدة وموقعنا الإلكتروني لضمان تجربة واضحة وعادلة.",
  keywords: "شروط استخدام سطحة جدة, أحكام خدمة سطحة, اتفاقية سطحة جدة, شروط الخدمة",
  alternates: {
    canonical: "https://satah-jeddah.com/terms-and-conditions",
  },
  openGraph: {
    title: "الشروط والأحكام - سطحة جدة",
    description: "اتفاقية استخدام خدمات سطحة جدة",
    url: "https://satah-jeddah.com/terms-and-conditions",
    type: "website",
    locale: "ar_SA",
  },
}

export default function TermsAndConditionsPage() {
  const breadcrumbItems = [{ label: "الشروط والأحكام", href: "/terms-and-conditions" }]

  const pageSchemas = [
    getWebSiteSchema(), // General website schema
    getBreadcrumbSchema(breadcrumbItems),
  ]

  return (
    <>
      <SchemaMarkup schemas={pageSchemas} />

      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            الشروط والأحكام لـ <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدماتنا.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-md p-6 mb-12 prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة</h2>
          <p>
            تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقع وخدمات <strong>سطحة جدة</strong>. باستخدامك
            لموقعنا أو خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام بالكامل. إذا كنت لا توافق على أي جزء من هذه
            الشروط، يجب ألا تستخدم موقعنا أو خدماتنا.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">الخدمات</h2>
          <p>
            تقدم <strong>سطحة جدة</strong> خدمات سحب ونقل السيارات والمركبات داخل مدينة جدة والمناطق المحيطة بها. تشمل
            خدماتنا:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>نقل السيارات المتعطلة.</li>
            <li>سحب السيارات المتضررة من الحوادث.</li>
            <li>نقل السيارات الفاخرة والرياضية.</li>
            <li>خدمات الطوارئ على مدار 24 ساعة.</li>
          </ul>
          <p>
            نحن نسعى جاهدين لتقديم خدمة سريعة وموثوقة، ولكن لا نضمن أوقات وصول محددة بسبب ظروف حركة المرور أو العوامل
            الخارجية الأخرى.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">الأسعار والدفع</h2>
          <p>
            يتم تحديد أسعار خدماتنا بناءً على نوع الخدمة، المسافة، ونوع المركبة. سيتم إبلاغك بالسعر المتوقع قبل بدء
            الخدمة. يجب دفع المبلغ المتفق عليه عند إتمام الخدمة. نحن نقبل طرق الدفع المتفق عليها مسبقًا.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">مسؤولية المستخدم</h2>
          <p>بصفتك مستخدمًا لخدماتنا، فإنك توافق على ما يلي:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>تقديم معلومات دقيقة وكاملة عند طلب الخدمة.</li>
            <li>التأكد من أن المركبة جاهزة للنقل وخالية من أي متعلقات شخصية ثمينة.</li>
            <li>التعاون مع فريقنا لضمان عملية نقل سلسة وآمنة.</li>
            <li>الالتزام بجميع القوانين واللوائح المحلية.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">حدود المسؤولية</h2>
          <p>
            تبذل <strong>سطحة جدة</strong> قصارى جهدها لضمان سلامة المركبات أثناء النقل. ومع ذلك، فإننا لسنا مسؤولين عن
            الأضرار التي قد تنجم عن:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>عيوب سابقة في المركبة.</li>
            <li>الكوارث الطبيعية أو الظروف الخارجة عن إرادتنا.</li>
            <li>المعلومات غير الدقيقة المقدمة من قبل المستخدم.</li>
          </ul>
          <p>
            جميع عمليات النقل مؤمنة ضد الأضرار التي قد تحدث بسبب إهمال من جانبنا. يرجى الرجوع إلى سياسة التأمين الخاصة
            بنا لمزيد من التفاصيل.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">الملكية الفكرية</h2>
          <p>
            جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، الرسومات، الشعارات، والصور، هي ملك لـ{" "}
            <strong>سطحة جدة</strong> أو مرخصة لها، ومحمية بموجب قوانين حقوق النشر والعلامات التجارية.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">التغييرات على الشروط والأحكام</h2>
          <p>
            تحتفظ <strong>سطحة جدة</strong> بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر أي تغييرات على هذه
            الصفحة، ويسري مفعولها فور نشرها. استمرارك في استخدام الموقع أو الخدمات بعد نشر التغييرات يعني موافقتك على
            الشروط المعدلة.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">القانون الحاكم</h2>
          <p>
            تخضع هذه الشروط والأحكام وتفسر وفقًا لقوانين المملكة العربية السعودية. أي نزاعات تنشأ عن هذه الشروط ستكون
            خاضعة للاختصاص القضائي الحصري لمحاكم جدة، المملكة العربية السعودية.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">اتصل بنا</h2>
          <p>
            إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا عبر صفحة{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              اتصل بنا
            </Link>
            .
          </p>
        </section>
      </main>
    </>
  )
}
