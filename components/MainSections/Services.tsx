import Link from "next/link"
import { Wrench, Car, ArrowLeft } from "lucide-react"
export default async function Services() {
    return (
        <section id="services" itemScope itemType="https://schema.org/Service" aria-label="خدمات سطحة جدة المتوفرة" className="py-16 bg-gray-50">
            <meta itemProp="serviceType" content="خدمة نقل سيارات و سطحات في جدة" />
            <meta itemProp="areaServed" content="جدة، السعودية" />
            <meta itemProp="provider" content="سطحة جدة" />
            <meta itemProp="description" content="خدمة سطحة جدة تقدم مجموعة متنوعة من خدمات نقل السيارات، بما في ذلك سحب السيارات المتضررة من الحوادث ونقل السيارات الفاخرة داخل جدة." />
            <div className="container mx-auto px-4">
                <h2 itemProp="name" className="text-3xl font-bold text-center mb-12 text-gray-900">خدمات <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong> المتخصصة</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <article itemScope itemType="https://schema.org/Offer" className="text-center p-6 bg-white rounded-lg shadow-md">
                        <meta itemProp="name" content="سطحة حوادث جدة" />
                        <header>
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Wrench className="h-8 w-8 text-red-600" aria-hidden="true"/>
                            </div>
                            <h3 itemProp="name" className="text-xl font-bold mb-2 text-gray-900"><strong>سطحة</strong> حوادث جدة</h3>
                        </header>
                        <p itemProp="description" className="text-gray-600 mb-4">نقدم خدمة متخصصة لسحب السيارات المتضررة من الحوادث داخل أحياء جدة بسرعة وأمان، مع دعم فوري على مدار الساعة.</p>
                        <footer>
                            <Link itemProp="url" href="/satah-jeddah-accidents" title="تفاصيل خدمة سطحة حوادث جدة" aria-label="تفاصيل خدمة سطحة حوادث جدة" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">اعرف المزيد ←</Link>
                        </footer>
                    </article>
                    <article itemScope itemType="https://schema.org/Offer" className="text-center p-6 bg-white rounded-lg shadow-md">
                        <meta itemProp="name" content="سطحة سيارات فاخرة جدة" />
                        <header>
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Car className="h-8 w-8 text-purple-600" aria-hidden="true"/>
                            </div>
                            <h3 itemProp="name" className="text-xl font-bold mb-2 text-gray-900"><strong>سطحة</strong> نقل سيارات فاخرة</h3>
                        </header>
                        <p itemProp="description" className="text-gray-600 mb-4">نقل آمن وموثوق للسيارات الفاخرة والرياضية بأقصى درجات العناية والاحترافية.</p>
                        <footer>
                            <Link itemProp="url" title="تفاصيل خدمة سطحة سيارات فاخرة" aria-label="تفاصيل خدمة سطحة سيارات فاخرة" href="/satah-jeddah-luxury-cars" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">اعرف المزيد ←</Link>
                        </footer>
                    </article>
                </div>
                <div className="text-center mt-8">
                    <Link title="عرض جميع خدمات سطحة جدة" aria-label="عرض جميع خدمات سطحة جدة" href="/services" className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-colors">
                        <span className="ml-2">جميع خدماتنا</span>
                        <ArrowLeft className="h-5 w-5" aria-hidden="true"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}