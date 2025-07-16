import type { MetadataRoute } from "next"
import { districts } from "@/lib/districts"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://satah-jeddah.com"

  const districtRoutes = districts.flatMap((district) => [
    {
      url: `${baseUrl}/satah-jeddah-${district.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/satah-${district.slug}-jeddah`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ])

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/districts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/satah-jeddah-accidents`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/satah-jeddah-luxury-cars`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact-us`, // <--- إضافة صفحة اتصل بنا
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/faq`, // <--- إضافة صفحة الأسئلة الشائعة
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`, // <--- إضافة صفحة سياسة الخصوصية
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions`, // <--- إضافة صفحة الشروط والأحكام
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...districtRoutes,
  ]
}
