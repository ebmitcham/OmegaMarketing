import { useEffect } from "react";

const SITE = {
  name: "Omega Marketing Group",
  tagline: "Website Design, SEO & Digital Marketing Agency",
  description:
    "Omega Marketing Group specializes in custom website design, website construction, website management, SEO optimization, and SEO management. We help businesses dominate search rankings and convert more visitors into customers.",
  url: "https://www.omegamarketinggroup.com",
  phone: "+18880000000",
  email: "hello@omegamarketinggroup.com",
  logo: "https://www.omegamarketinggroup.com/greek-key.jpg",
  keywords:
    "website design, website development, SEO optimization, SEO management, digital marketing agency, web design agency, local SEO, technical SEO, website management, search engine optimization",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: SITE.logo,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: [],
      description: SITE.description,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#service`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      description: SITE.description,
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Construction" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Management" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Optimization" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Management" } },
        ],
      },
    },
  ],
};

export default function SEOHead() {
  useEffect(() => {
    // Title
    document.title = `${SITE.name} | ${SITE.tagline}`;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Core meta
    setMeta("description", SITE.description);
    setMeta("keywords", SITE.keywords);
    setMeta("robots", "index, follow");
    setMeta("author", SITE.name);
    setMeta("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:url", SITE.url, true);
    setMeta("og:title", `${SITE.name} | ${SITE.tagline}`, true);
    setMeta("og:description", SITE.description, true);
    setMeta("og:image", SITE.logo, true);
    setMeta("og:site_name", SITE.name, true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", `${SITE.name} | ${SITE.tagline}`);
    setMeta("twitter:description", SITE.description);
    setMeta("twitter:image", SITE.logo);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", SITE.url);

    // Structured data
    let sd = document.querySelector("#structured-data");
    if (!sd) {
      sd = document.createElement("script");
      sd.id = "structured-data";
      sd.setAttribute("type", "application/ld+json");
      document.head.appendChild(sd);
    }
    sd.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
}
