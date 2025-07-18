import { Clock, Shield, Zap } from "lucide-react"
export default function FeaturesSection() {
    return (
        <section id="features" itemScope itemType="https://schema.org/LocalBusiness" itemProp="hasOfferCatalog" className="m-3 mt-16 pt-10 pb-10 border-2 border-indigo-700/40 backdrop-blur-lg shadow-lg rounded-lg">
            <meta itemProp="name" content="سطحة جدة" />
            <meta itemProp="telephone" content="0559449938" />
            <meta itemProp="address" content="حي الأندلس، جدة، السعودية" />
            <meta itemProp="url" content="https://www.xn--ogbgbkqy0j.com/" />
            <div className=" mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">لماذا تختار <strong className="bg-blue-100 text-blue-800 px-2 rounded">سطحة جدة</strong>؟</h2>
                <p className="text-indigo-700 text-lg mb-6">نقدم خدمة <strong>نقل السيارات</strong> و<strong>السطحات الفورية</strong> في جميع أحياء <strong>جدة</strong> من خلال مركزنا الرئيسي في <strong>حي الأندلس – جدة</strong>. اتصل الآن على <a href="tel:0559449938" itemProp="telephone" className="text-blue-700 underline hover:text-blue-900"> 0559449938</a> لخدمة سريعة وموثوقة.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <article className="text-center p-6 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Service">
                        <meta itemProp="provider" content="سطحة جدة" />
                        <meta itemProp="serviceType" content="نقل سيارات و سطحات" />
                        <meta itemProp="areaServed" content="جدة، السعودية" />
                        <meta itemProp="offers" content="نقل السيارات داخل جدة بسرعة وآمان" />
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="سرعة الاستجابة" title="سرعة الاستجابة">
                            <Zap className="h-8 w-8 text-blue-600" role="img" aria-label="أيقونة السرعة" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900" itemProp="name">سرعة الاستجابة</h3>
                        <p className="text-gray-600" itemProp="description">وصول فوري خلال 15 إلى 30 دقيقة لخدمة <strong>سطحة سيارات</strong> في جميع <strong>أحياء جدة</strong>.</p>
                    </article>
                    <article className="text-center p-6 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Service">
                        <meta itemProp="provider" content="سطحة جدة" />
                        <meta itemProp="serviceType" content="نقل سيارات و سطحات" />
                        <meta itemProp="areaServed" content="جدة، السعودية" />
                        <meta itemProp="offers" content="نقل السيارات داخل جدة بسرعة وآمان" />
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="سطحات جدة متوفرة 24 ساعة" title="سطحات جدة متوفرة 24 ساعة">
                            <Clock className="h-8 w-8 text-green-600" role="img" aria-label="أيقونة الوقت" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900" itemProp="name">سطحات جدة متوفرة 24 ساعة</h3>
                        <p className="text-gray-600" itemProp="description">متواجدون لخدمتكم على مدار الساعة لتوفير <strong>سطحة بجدة</strong> بسرعة واستجابة فورية.</p>
                    </article>
                    <article className="text-center p-6 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Service">
                        <meta itemProp="provider" content="سطحة جدة" />
                        <meta itemProp="serviceType" content="نقل سيارات و سطحات" />
                        <meta itemProp="areaServed" content="جدة، السعودية" />
                        <meta itemProp="offers" content="نقل السيارات داخل جدة بسرعة وآمان" />
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="خدمة موثوقة" title="خدمة موثوقة">
                            <Shield className="h-8 w-8 text-purple-600" role="img" aria-label="أيقونة الثقة" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900" itemProp="name">خدمة موثوقة</h3>
                        <p className="text-gray-600" itemProp="description">فريق محترف من <strong>سطحات جدة </strong> ومعدات حديثة لضمان سلامة سيارتك</p>
                    </article>
                </div>
            </div>
        </section>
    )
}