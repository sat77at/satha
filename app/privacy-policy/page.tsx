import Link from "next/link"
import Breadcrumbs from "@/components/breadcrumbs"
import SchemaMarkup from "@/components/schema-markup"
import { getBreadcrumbSchema, getWebSiteSchema } from "@/lib/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "سياسة الخصوصية - سطحة جدة | حماية بياناتك",
  description: "تعرف على سياسة الخصوصية لسطحة جدة وكيف نحمي بياناتك الشخصية عند استخدام خدماتنا وموقعنا الإلكتروني.",
  keywords: "سياسة خصوصية سطحة جدة, حماية البيانات سطحة, معلومات شخصية سطحة جدة, خصوصية العملاء",
  alternates: {
    canonical: "https://satah-jeddah.com/privacy-policy",
  },
  openGraph: {
    title: "سياسة الخصوصية - سطحة جدة",
    description: "كيف تحمي سطحة جدة بياناتك الشخصية",
    url: "https://satah-jeddah.com/privacy-policy",
    type: "website",
    locale: "ar_SA",
  },
}

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [{ label: "سياسة الخصوصية", href: "/privacy-policy" }]

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
            سياسة الخصوصية لـ <mark className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</mark>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن نلتزم بحماية خصوصية بياناتك الشخصية. يرجى قراءة سياستنا لفهم كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك.
          </p>
        </header>

        <section className="bg-white rounded-lg shadow-md p-6 mb-12 prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">مقدمة</h2>
          <p>
            توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن معلوماتك الشخصية عند زيارتك أو استخدامك لموقع{" "}
            <strong>سطحة جدة</strong> وخدماتنا. نحن نلتزم بحماية خصوصيتك ونعمل وفقًا لأفضل الممارسات ومعايير حماية
            البيانات.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">المعلومات التي نجمعها</h2>
          <p>قد نقوم بجمع أنواع مختلفة من المعلومات منك، بما في ذلك:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>معلومات الاتصال:</strong> مثل اسمك، رقم هاتفك، وعنوان بريدك الإلكتروني عند طلب خدمة أو التواصل
              معنا.
            </li>
            <li>
              <strong>معلومات الخدمة:</strong> تفاصيل حول نوع السيارة، موقعك، وجهة النقل، ونوع الخدمة المطلوبة (مثل سطحة
              حوادث، سطحة نقل سيارات فاخرة).
            </li>
            <li>
              <strong>بيانات الاستخدام:</strong> معلومات حول كيفية تفاعلك مع موقعنا، مثل الصفحات التي تزورها، الوقت الذي
              تقضيه على الموقع، وعنوان IP الخاص بك.
            </li>
            <li>
              <strong>بيانات التقييمات:</strong> الاسم (اختياري)، عدد النجوم، والتعليق الذي تقدمه عند تقييم خدماتنا.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">كيف نستخدم معلوماتك</h2>
          <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              تقديم وتخصيص خدمات <strong>سطحة جدة</strong> لك.
            </li>
            <li>الاستجابة لاستفساراتك وطلباتك.</li>
            <li>تحسين موقعنا وخدماتنا.</li>
            <li>إرسال تحديثات أو عروض ترويجية (مع خيار إلغاء الاشتراك).</li>
            <li>تحليل استخدام الموقع لأغراض إحصائية وتحسين تجربة المستخدم.</li>
            <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">مشاركة المعلومات</h2>
          <p>نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              مقدمي الخدمات الذين يساعدوننا في تشغيل أعمالنا (مثل خدمات الاستضافة، تحليل البيانات)، بشرط التزامهم
              بالسرية.
            </li>
            <li>الجهات الحكومية أو القانونية إذا كان ذلك مطلوبًا بموجب القانون.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">أمن البيانات</h2>
          <p>
            نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير.
            ومع ذلك، لا توجد طريقة إرسال عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">حقوقك</h2>
          <p>
            لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها، وتصحيحها، أو حذفها. يرجى الاتصال بنا لممارسة هذه
            الحقوق.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">التغييرات على سياسة الخصوصية</h2>
          <p>
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، ويسري مفعولها فور نشرها.
            ننصحك بمراجعة هذه الصفحة بشكل دوري.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">اتصل بنا</h2>
          <p>
            إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر صفحة{" "}
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
