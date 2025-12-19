import type { Metadata } from "next";
import ReportSlider from "@/components/ReportSlider";

export const metadata: Metadata = {
  title: "Research Reports & Industry Insights | Zamun",
  description:
    "Explore Zamun’s in-depth research reports and industry insights covering marketing, technology, cybersecurity, data strategy, and business growth to drive stronger performance.",
  alternates: {
    canonical: "https://www.zamun.com/reports",
  },
  keywords: [
    "research reports",
    "industry insights",
    "business research reports",
    "marketing research reports",
    "technology insights",
    "cybersecurity reports",
    "data driven insights",
    "business strategy reports",
    "thought leadership content",
    "B2B research insights",
    "enterprise research reports",
    "Zamun research",
  ],
};

const items = [
  {
    id: "mk-1",
    category: "Report",
    title: "Cybersecurity",
    href: "/reports/cybersecurity",
    image: "/images/reports/cybersecurity.jpg",
  },
  {
    id: "br-1",
    category: "Report",
    title: "Digital Public Infrastructure",
    href: "/reports/digital-public-infrastructure",
    image: "/images/reports/digital-public-infrastructure.jpg",
  },
  {
    id: "de-1",
    category: "Report",
    title: "Electronics Manufacturing",
    href: "/reports/electronics-manufacturing",
    image: "/images/reports/electronics-manufacturing.jpg",
  },
  {
    id: "mk-2",
    category: "Report",
    title: "Robotics",
    href: "/reports/robotics",
    image: "/images/reports/robotic.jpg",
  },
  {
    id: "mk-3",
    category: "Report",
    title: "Smart Mobility",
    href: "/reports/smart-mobility",
    image: "/images/reports/smart-mobility.jpg",
  },
  {
    id: "mk-4",
    category: "Report",
    title: "Wired to Win",
    href: "/reports/wired-to-win",
    image: "/images/reports/wired-to-win.jpg",
  },
];

export default function OurReportsPage() {
  return (
    <main className="bg-black">
      <ReportSlider
        heading="Where emerging technology meets real-world impact."
        cta={{ label: "Know More", href: "/reports" }}
        items={items}
      />
    </main>
  );
}
