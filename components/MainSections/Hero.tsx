import dynamic from 'next/dynamic';
import Image from "next/image"
const FaWhatsapp = dynamic(() => import('react-icons/fa').then((mod) => mod.FaWhatsapp));
const FaPhone = dynamic(() => import('react-icons/fa').then((mod) => mod.FaPhone));
export default function Hero() {
    return (
        <section role="region" aria-label="قسم المقدمة - سطحة جدة" className=" backdrop-blur-lg shadow-g rounded text-white font-bold py-20">
            <div className="absolute inset-0 -z-50">
                <Image src="images/satha3.jpg" alt="سطحة جدة أثناء تقديم الخدمة" layout="fill" className="object-cover opacity-70" priority />
                <div className={`absolute inset-0 bg-black/70`} />
            </div>
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <strong>سطحة جدة</strong> - أسرع خدمة نقل سيارات في جميع أحياء <mark className="bg-yellow-400 text-blue-900 px-2 rounded">جدة</mark>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-blue-100">خدمة <strong>سطحة موثوقة</strong> وسريعة في جميع أحياء <strong>جدة</strong> على مدار الساعة سواء تعطلت سيارتك أو احتجت نقلها، نحن هنا لمساعدتك فورًا.</p>
                <div className="flex justify-center space-x-4 space-x-reverse">
                    <a href="tel:0559449938" title="اجراء مكالمة هاتفية" className="bg-blue-600 hover:from-indigo-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full flex items-center transition duration-300 hover:scale-105" aria-label="اتصل الآن على الرقم 0535142000">
                        <FaPhone className="ml-2" />
                        اتصل الآن
                    </a>
                    <a href="https://wa.me/966559449938?text=مرحبا،%20أحتاج%20إلى%20خدمة%20سطحة" title="الذهاب الى محادثة واتساب" className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-full flex items-center hover:bg-green-600 transition duration-300 hover:scale-105" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب للحصول على خدمة سطحة">
                        <FaWhatsapp className="ml-2 size-5" />
                        واتساب
                    </a>
                </div>
            </div>
        </section>
    )
}