import type { Metadata } from "next";
import AboutUs from "@/components/about-us";
import ContactSection from "@/components/contact-section";
import FocusArea from "@/components/focus-area";
import Hero from "@/components/hero";
import Mission from "@/components/mission";
import Multisports from "@/components/multisports";
import PadelCulture from "@/components/padel-culture";

export const metadata: Metadata = {
  title: "Sports & Recreation Facility Specialists",
  description: "Discover how Court Culture reimagines underused spaces into thriving sports and community destinations across Australia.",
};

export default function Home() {
  return (
    <div className="font-satoshi px-4 sm:px-8 lg:px-12">
      <Hero />
      <Mission />
      <PadelCulture />
      <FocusArea />
      <AboutUs />
      <Multisports /> 
      <ContactSection />
    </div>
  );
}
