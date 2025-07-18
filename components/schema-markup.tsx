import type {
  WithContext,
  LocalBusiness,
  Service,
  BreadcrumbList,
  Organization,
  ContactPoint,
  FAQPage,
  WebSite,
} from "schema-dts"

interface SchemaMarkupProps {
  schemas?: WithContext<LocalBusiness | Service | BreadcrumbList | Organization | ContactPoint | FAQPage | WebSite>[]
  /* السماح بخصائص إضافية لاستدعاءات قديمة مثل type, district */
  [key: string]: unknown
}

export default function SchemaMarkup({ schemas = [] }: SchemaMarkupProps) {
  if (schemas.length === 0) return null

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          defer
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"), // Sanitize for XSS
          }}
        />
      ))}
    </>
  )
}
