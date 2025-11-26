import ServicesSlider from "@/components/ServicesSlider";

const items = [
  {
    id: "mk-1",
    category: "Marketing",
    title: "Marketing Strategy Development",
    href: "/services/marketing-strategy-development",
    image: "/images/services/Marketing-Strategy-Development.png",
  },
  {
    id: "br-1",
    category: "Brand",
    title: "Brand Positioning and Marketing",
    href: "/services/brand-positioning-and-marketing",
    image: "/images/services/Brand-Positioning-and-Marketing.jpg",
  },
  {
    id: "de-1",
    category: "Design",
    title: "Design Strategy and Service",
    href: "/services/design-strategy-and-service",
    image: "/images/services/Design-Strategy-Services.jpg",
  },
  {
    id: "mk-2",
    category: "Strategy and Marketing",
    title: "Content Strategy and Marketing Services",
    href: "/services/content-strategy-and-marketing",
    image: "/images/services/Content-Strategy-and-Marketing.jpg",
  },
  {
    id: "mk-3",
    category: "Marketing",
    title: "Channel & Campaign Management",
    href: "/services/channel-and-campaign-marketing",
    image: "/images/services/Channel-and-Campaign-Marketing.jpg",
  },
  {
    id: "mk-4",
    category: "Marketing",
    title: "Specialized Marketing Services",
    href: "/services/specialized-marketing-services",
    image: "/images/services/Specialized-Marketing-Services.jpg",
  },
];

export default function OurServicesPage() {
  return (
    <main className="bg-black">
      <ServicesSlider heading="Our Services" items={items} />
    </main>
  );
}