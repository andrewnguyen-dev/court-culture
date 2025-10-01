import AboutUs from "@/components/about-us";
import FocusArea from "@/components/focus-area";
import Hero from "@/components/hero";
import Mission from "@/components/misson";
import Multisports from "@/components/multisports";

export default function Home() {
  return (
    <div className="font-satoshi px-4 sm:px-8 lg:px-12">
      <Hero />
      <Mission />
      <FocusArea />
      <AboutUs />
      <Multisports /> 
    </div>
  );
}
