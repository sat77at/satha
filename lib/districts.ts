export interface District {
  id: string
  name: string
  slug: string
  coordinates: {
    lat: number
    lng: number
  }
  description: string
  isPopular: boolean
  nearbyDistricts?: string[]
  landmarks?: string[] // معالم مهمة في الحي
  mainStreets?: string[] // شوارع رئيسية
  services?: string[] // خدمات متوفرة في الحي
}

export const districts: District[] = [
  {
    id: "1",
    name: "الروضة",
    slug: "al-rawdah",
    coordinates: { lat: 21.5433, lng: 39.1728 },
    description: "حي الروضة من أهم الأحياء الراقية في جدة ويحتاج لخدمة سطحة موثوقة وسريعة",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-safa"],
    landmarks: ["رد سي مول", "الأندلس مول", "مستشفى الدكتور سليمان فقيه", "جامعة دار الحكمة"],
    mainStreets: ["طريق الملك فهد", "شارع التحلية", "طريق الأمير سلطان"],
    services: ["مراكز تجارية", "مستشفيات", "جامعات", "مطاعم فاخرة", "فنادق"],
  },
  {
    id: "2",
    name: "النسيم",
    slug: "al-naseem",
    coordinates: { lat: 21.5507, lng: 39.1674 },
    description: "حي النسيم يتميز بموقعه الاستراتيجي ويحتاج لخدمة سطحة متخصصة",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-safa"],
    landmarks: ["مول العرب", "مستشفى الملك فهد", "جامعة الملك عبدالعزيز", "كورنيش جدة"],
    mainStreets: ["طريق الملك عبدالعزيز", "شارع فلسطين", "طريق المدينة المنورة"],
    services: ["مراكز طبية", "جامعات", "شواطئ", "مراكز تسوق", "مطاعم"],
  },
  {
    id: "3",
    name: "الحمراء",
    slug: "al-hamra",
    coordinates: { lat: 21.5169, lng: 39.1538 },
    description: "حي الحمراء من الأحياء الحيوية في جدة مع خدمة سطحة على مدار الساعة",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-safa"],
    landmarks: ["مول حراء", "مستشفى بقشان", "سوق الحمراء", "مسجد الحمراء الكبير"],
    mainStreets: ["شارع الحمراء", "طريق مكة المكرمة", "شارع الأمير ماجد"],
    services: ["أسواق تقليدية", "مراكز طبية", "مساجد", "مدارس", "محلات تجارية"],
  },
  {
    id: "4",
    name: "الصفا",
    slug: "al-safa",
    coordinates: { lat: 21.5389, lng: 39.1789 },
    description: "حي الصفا من الأحياء المميزة مع خدمة سطحة احترافية",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-hamra"],
    landmarks: ["مول الصفا", "مستشفى الصفا", "حديقة الصفا", "مركز الصفا الطبي"],
    mainStreets: ["شارع الصفا", "طريق الملك خالد", "شارع الأربعين"],
    services: ["مراكز طبية", "مولات", "حدائق", "مطاعم", "كافيهات"],
  },
  {
    id: "5",
    name: "السلامة",
    slug: "al-salama",
    coordinates: { lat: 21.58, lng: 39.13 },
    description: "حي السلامة من الأحياء الكبيرة في جدة، ونقدم فيه خدمة سطحة سريعة وموثوقة على مدار الساعة.",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-hamra"],
    landmarks: ["مول السلامة", "مستشفى السلامة", "جامع السلامة الكبير", "حديقة السلامة"],
    mainStreets: ["شارع السلامة", "طريق الملك عبدالله", "شارع الخمسين"],
    services: ["مولات كبيرة", "مستشفيات", "جوامع", "حدائق عامة", "مدارس"],
  },
  {
    id: "6",
    name: "الخالدية",
    slug: "al-khalidiyah",
    coordinates: { lat: 21.53, lng: 39.16 },
    description: "حي الخالدية حي حيوي في جدة، وخدمة سطحة جدة متوفرة فيه لجميع حالات الطوارئ ونقل السيارات.",
    isPopular: true,
    nearbyDistricts: ["al-rawdah", "al-khalidiyah", "al-hamra"],
    landmarks: ["مول الخالدية", "مستشفى الخالدية", "سوق الخالدية", "مركز الخالدية الطبي"],
    mainStreets: ["شارع الخالدية", "طريق الملك فهد", "شارع التسعين"],
    services: ["مراكز تجارية", "مستشفيات", "أسواق", "مراكز طبية", "مطاعم"],
  },
]

export const getDistrictBySlug = (slug: string): District | undefined => {
  return districts.find((district) => district.slug === slug)
}

export const getPopularDistricts = (): District[] => {
  return districts.filter((district) => district.isPopular)
}
