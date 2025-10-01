import React from "react";
import { Button } from "./ui/button";
import { Globe } from "./ui/globe";
import { BsArrowUpRight } from "react-icons/bs";

const AboutUsItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="mb-4 space-y-2 border-b border-[#141414]/60 pb-4">
    <h4 className="tracking-tight">{title}</h4>
    <p className="copy">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section className="pt-24" id="about-us">
      <h1>About Us</h1>
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <AboutUsItem
            title="Repurposing Facilities"
            description="Transforming underused spaces into thriving community hubs for health and wellness."
          />
          <AboutUsItem
            title="Super Sites"
            description="Large-scale venues anchored by basketball and multisport partnerships."
          />
          <AboutUsItem
            title="Tailor-made Centres"
            description="Tailored multisport destinations for emerging and specialist sports like pickleball, badminton, and volleyball."
          />
        </div>
        <div className="relative aspect-square w-full">
          <Globe />
        </div>
      </div>
      <div className="mb-32">
        <p className="font-clash-display text-3xl">
          Let&apos;s begin this adventure, together.
        </p>
        <div className="mt-4 flex">
          <Button variant="outline" size="lg">
            Connect <BsArrowUpRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
