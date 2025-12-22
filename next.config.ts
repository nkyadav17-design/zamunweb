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
    ];
  },
};

module.exports = nextConfig;
