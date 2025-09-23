import Image from "next/image";
import React from "react";

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
      <div className="relative aspect-video w-full md:col-span-2">
        <Image src="/3.jpg" alt="Mission" fill className="object-cover" />
      </div>
    </section>
  );
};

export default Mission;
