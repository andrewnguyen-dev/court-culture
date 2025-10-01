import Image from "next/image";
import React from "react";
import Tape from "./ui/tape";

const Mission = () => {
  return (
    <section className="pt-24" id="mission">
      <h1>Mission</h1>
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        <h3 className="sm:mr-16 md:mr-24 lg:mr-48">Turning Spaces into Places for Sport, Wellness & Connection</h3>
        <div className="copy">
          <p>
            To create vibrant recreational destinations that bring people
            together through sport, wellness, and community. We design, build,
            and operate spaces that transform developments into thriving hubs of
            activity, driving engagement, foot traffic, and long-term value
          </p>
          <p>
            The shortage of facilities around Australia ie; basketball,
            pickleball, badminton - we are solving a massive problem.
          </p>
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
          <div className="absolute -left-8 -right-8 top-[15%] flex justify-end px-6">
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



      <div className="relative aspect-video w-full md:col-span-2">
        <Image src="/3.jpg" alt="Mission" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Mission;
