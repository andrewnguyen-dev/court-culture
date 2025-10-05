import React from "react";
import { Button } from "./ui/button";
import { Globe } from "./ui/globe";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";

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

// Small component for team members to avoid repeating markup
const TeamMember = ({
  name,
  src,
  alt,
}: {
  name: string;
  src: string;
  alt?: string;
}) => (
  <div>
    <div className="relative aspect-square w-full">
      <Image src={src} alt={alt ?? name} fill className="object-cover" />
    </div>
    <div>
      <p className="mt-3 md:text-lg">{name}</p>
    </div>
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
        <div className="w-full">
          <Globe />
        </div>
      </div>
      <div className="mb-32 grid grid-cols-2 gap-4 lg:gap-8 sm lg:grid-cols-4">
        <div>
          <h4 className="col-span-1 mb-3 tracking-tight">The team</h4>
          <p className="sm:text-lg">Our experienced and successful Management team that covers all bases!</p>
        </div>
        <TeamMember name="Christopher Heverin" src="/team-3.jpg" />
        <TeamMember name="Andrew Blake" src="/team-1.jpg" />
        <TeamMember name="Simon Allatson" src="/team-2.jpg" />
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
