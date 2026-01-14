export type ServiceFAQ = {
  q: string;
  a: string;
};

export function buildServiceJsonLd(input: {
  siteUrl: string;
  orgId: string;
  websiteId: string;
  slug: string;
  title: string;
  faq?: ServiceFAQ[];
}) {
  const url = `${input.siteUrl}/services/${input.slug}`;

  const graph: any[] = [
    /* ===========================
       WEB PAGE
    ============================ */
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      "url": url,
      "name": `${input.title} | Zamun`,
      "isPartOf": { "@id": input.websiteId },
      "about": { "@id": input.orgId },
      "inLanguage": "en"
    },

    /* ===========================
       SERVICE
    ============================ */
    {
      "@type": "Service",
      "@id": `${url}#service`,
      "name": input.title,
      "url": url,
      "provider": { "@id": input.orgId },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Place", "name": "Global" }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceLocation": {
          "@type": "Place",
          "name": "Online"
        }
      },
      "offers": {
        "@type": "Offer",
        "url": `${input.siteUrl}/contact`,
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  /* ===========================
     FAQ (only if visible)
  ============================ */
  if (input.faq && input.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "url": url,
      "mainEntity": input.faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
