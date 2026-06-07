import { SITE } from "@/lib/content";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.fullName,
    description: SITE.tagline,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Winnipeg",
      addressRegion: "MB",
      addressCountry: "CA",
    },
    areaServed: "Winnipeg, MB",
    sameAs: [SITE.instagram],
    foundingDate: SITE.est,
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
