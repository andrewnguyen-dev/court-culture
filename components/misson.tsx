import Image from "next/image";
import React from "react";
import Tape from "./ui/tape";
import { Button } from "./ui/button";
import Link from "next/link";

export type StatItem = {
  value: string;
  label: string;
};

export const StatsCard: React.FC<{
  title: string;
  items: StatItem[];
  className?: string;
}> = ({ title, items, className = "" }) => {
  return (
    <div className={`rounded-lg bg-neutral-100 p-6 border border-neutral-200 ${className}`}>
      <div className="mb-2">
        <h5 className="font-semibold text-neutral-600 uppercase tracking-wide mb-5">{title}</h5>
        <div className="space-y-5">
          {items.map((it, idx) => (
            <div key={idx}>
              <p className="text-5xl font-bold text-[#141414]/90 mb-1">{it.value}</p>
              <p className="text-neutral-700">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const statsData: { title: string; items: StatItem[] }[] = [
  {
    title: "Basketball Infrastructure",
    items: [
      { value: "304", label: "Basketball clubs & associations across Australia & New Zealand" },
      { value: "1.35M", label: "Active basketball participants (≈ 5% of Australians)" },
    ],
  },
  {
    title: "Demand & Capacity Challenges",
    items: [
      { value: "1,000+", label: "Player waiting lists at some associations" },
      { value: "9-10", label: "Players per team due to court shortages (only 5 play at a time)" },
    ],
  },
  {
    title: "Regional Distribution",
    items: [
      { value: "3", label: "States (VIC, NSW, QLD) host the largest participation base" },
      { value: "50%", label: "Of associations prefer multi-court venues for cost, safety & management efficiency" },
    ],
  },
  {
    title: "Growth Trends",
    items: [
      { value: "↑300%", label: "Pickleball participation over the past 5 years — one of the world's fastest-growing sports" },
    ],
  },
  {
    title: "Future Outlook",
    items: [
      { value: "↑20%", label: "Population increase by 2040 → major pressure on sport & recreation infrastructure" },
    ],
  },
  {
    title: "Multi-Sport Impact",
    items: [
      { value: "↑60%", label: "Community use increase at multi-sport sites year-round" },
    ],
  },
];

const Mission = () => {
  return (
    <section className="pt-24" id="mission">
      <h1 className="homepage-title">Mission</h1>
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <h3 className="sm:mr-16 md:mr-24 lg:mr-48">Turning Spaces into Places for Sport, Wellness & Connection</h3>
        <div className="copy">
          <p>
            To create vibrant recreational destinations that bring people
            together through sport, wellness, and community. We design, build,
            and operate spaces that transform developments into thriving hubs of
            activity, driving engagement, foot traffic, and long-term value.
          </p>
          <p>
            The shortage of facilities around Australia ie; basketball,
            pickleball, badminton - we are solving a massive problem.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {statsData.map((card) => (
            <StatsCard key={card.title} title={card.title} items={card.items} />
          ))}
        </div>
      </div>

      {/* 2 cards */}


      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left card */}
        <div className="min-h-72 relative overflow-hidden rounded-lg bg-neutral-300 p-10 text-[#141414]">
          <div className="pointer-events-none">
            <h2 className="pb-24 font-bold font-clash-display uppercase leading-none text-5xl lg:text-6xl w-[90%] tracking-tight">
              <span className="block">Backed by Leaders in Sports &amp; Innovation</span>
            </h2>
          </div>

          {/* diagonal tape */}
          <div className="absolute -left-8 -right-8 bottom-[10%] flex justify-start px-6">
            <div className="w-full max-w-none">
              <Tape
                items={["Global Leaders in Multi-Sport Performance"]}
                speed={10}
                direction="left"
                rotate={-4}
                className="bg-zinc-100/90 text-[#141414] py-1"
                pauseOnHover
              />
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="min-h-72 relative overflow-hidden rounded-lg bg-neutral-800 p-10 text-white">
          <div className="pointer-events-none absolute left-10 bottom-10">
            <h2 className="font-bold font-clash-display uppercase leading-none text-5xl lg:text-6xl w-[90%] tracking-tight">
              <span className="block">The Game Changer</span>
            </h2>
          </div>

          {/* diagonal tape */}
          <div className="absolute -left-8 -right-8 top-[18%] flex justify-end px-6">
            <div className="w-full max-w-none flex justify-end">
              <Tape
                items={["Setting the Standard—Endorsed by the Best in Sport"]}
                speed={10}
                direction="right"
                rotate={6}
                className="bg-stone-700 text-white py-1"
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
