/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  async redirects() {
    return [
      {
        source: "/content-strategy-and-marketing",
        destination: "/services/content-strategy-and-marketing",
        permanent: true,
      },
      {
        source: "/design-strategy-and-service",
        destination: "/services/design-strategy-and-service",
        permanent: true,
      },
      {
        source: "/marketing-strategy-development",
        destination: "/services/marketing-strategy-development",
        permanent: true,
      },
      {
        source: "/stl-enters-access-solutions-market",
        destination: "/case-studies/stl-enters-access-solutions-market",
        permanent: true,
      },
      {
        source: "/zamun-report-powered-by-airtel",
        destination: "/reports/wired-to-win",
        permanent: true,
      },
      {
        source: "/how-global-brands-shape-tech-standards",
        destination: "/blogs/the-power-players-how-global-brands-shape-tech-standards",
        permanent: true,
      },
      {
        source: "/marketing-strategy-development-services",
        destination: "/services/marketing-strategy-development",
        permanent: true,
      },
      {
        source: "/evs-green-mobility-or-greenwash",
        destination: "/blogs/evs-green-mobility-or-greenwash",
        permanent: true,
      },
      {
        source: "/india-ev-revolution-public-transport-electric-transition",
        destination: "/blogs/india-s-ev-revolution-how-is-public-transport-slowly-going-electric",
        permanent: true,
      },
      {
        source: "/building-a-thriving-ev-ecosystem-a-global-vision",
        destination: "/blogs/building-a-thriving-ev-ecosystem-a-global-vision",
        permanent: true,
      },
      {
        source: "/ev-charging-a-major-departure-from-traditional-fueling",
        destination: "/blogs/ev-charging-a-major-departure-from-traditional-fueling",
        permanent: true,
      },
      {
        source: "/space-data-a-new-commodity-transforming-life-on-earth",
        destination: "/blogs/space-data-a-new-commodity-transforming-life-on-earth",
        permanent: true,
      },
      {
        source: "/weve-been-using-ai-for-longer-than-we-thought",
        destination: "/blogs/we-ve-been-using-ai-for-longer-than-we-thought",
        permanent: true,
      },
      {
        source: "/ev-battery-recycling-a-key-to-sustainability-and-affordability",
        destination: "/blogs/ev-battery-recycling-a-key-to-sustainability-and-affordability",
        permanent: true,
      },
      {
        source: "/quantum-calling-unlocking-the-power-of-quantum-tech-in-telecommunications",
        destination: "/blogs/quantum-calling-unlocking-the-power-of-quantum-tech-in-telecommunications",
        permanent: true,
      },
      {
        source: "/quantum-dreams-vs-reality-where-we-are-and-whats-next",
        destination: "/blogs/quantum-dreams-vs-reality-where-we-are-and-what-s-next",
        permanent: true,
      },
      {
        source: "/unlocking-growth-why-smart-companies-invest-heavily-in-strategic-marketing",
        destination: "/blogs/unlocking-growth-why-smart-companies-invest-heavily-in-strategic-marketing",
        permanent: true,
      },
      {
        source: "/next-gen-bevs-a-sustainable-future-but-with-a-repair-catch",
        destination: "/blogs/next-gen-bevs-a-sustainable-future-but-with-a-repair-catch",
        permanent: true,
      },
      {
        source: "/next-gen-bevs-a-sustainable-future-but-with-a-repair-catch",
        destination: "/blogs/next-gen-bevs-a-sustainable-future-but-with-a-repair-catch",
        permanent: true,
      },
      {
        source: "/from-follower-to-leader-indias-rise-in-shaping-global-industrial-standards",
        destination: "/blogs/from-follower-to-leader-india-s-rise-in-shaping-global-industrial-standards",
        permanent: true,
      },
      {
        source: "/organizational-strategies-top-marketing-companies-use-to-crush-the-competition-in-2025",
        destination: "/blogs/organizational-strategies-top-marketing-companies-use-to-crush-the-competition-in-2025",
        permanent: true,
      },
      {
        source: "/performance-branding-and-how-it-is-reinventing-marketing-roi",
        destination: "/blogs/performance-branding-and-how-it-is-reinventing-marketing-roi",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
