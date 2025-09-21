import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <section className="mt-24">
      <h1>Mission</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <p className="sm:mr-16 md:mr-24 lg:mr-48 text-3xl font-semibold">Turning Spaces into Places for Sport, Wellness & Connection</p>
        <div className="flex flex-col gap-4 text-xl">
          <p>
            To create vibrant recreational destinations that bring people
            together through sport, wellness, and community. We design, build,
            and operate spaces that transform developments into thriving hubs of
            activity, driving engagement, foot traffic, and long-term value
          </p>
          <p>
            The shortage of facilities around Australia ie; basketball,
            Pickleball, badminton - we are solving a massive problem.
          </p>
        </div>
        <div className="relative aspect-video w-full md:col-span-2">
          <Image src="/2.jpg" alt="Mission" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Mission;
