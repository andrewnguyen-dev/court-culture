"use client";

import Image from "next/image";

interface FocusItemProps {
  title: string;
  descriptions: string[];
  imageSrc: string;
}

const FocusItem: React.FC<FocusItemProps> = ({
  title,
  descriptions,
  imageSrc,
}) => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-8 border-b border-[#141414]/60 pb-8 md:grid-cols-2">
      <div className="space-y-4 sm:mr-4 md:mr-12 md:space-y-8 lg:mr-36">
        <h3>{title}</h3>
        <div className="space-y-2">
          {descriptions.map((desc, index) => (
            <p key={index} className="copy">
              {desc}
            </p>
          ))}
        </div>
      </div>
      <div className="relative aspect-video w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
};

// TODO: Add Stack effect to FocusItem
const FocusArea = () => {
  return (
    <section className="pt-24" id="focus-area">
      <h1>Focus Area</h1>
      <p className="copy -mt-8 mb-20 md:-mt-16">
        Backing the founders who are daring to reshape sport.
      </p>
      <FocusItem
        title="Venues"
        descriptions={["Coming Soon"]}
        imageSrc="/5.jpg"
      />
      <FocusItem
        title="Recreational Partner"
        descriptions={[
          "We position ourselves as the recreational partner of choice for property owners, funds, and developers.",
          "Our role is to transform under utilised or strategic spaces into thriving destinations for sport, wellness, and community.",
        ]}
        imageSrc="/4.jpg"
      />
      <FocusItem
        title="International Licensing"
        descriptions={[
          "Court Culture offers international licensing opportunities, allowing partners worldwide to bring our expertise in designing, activating, and operating multi-sport and wellness destinations to their local communities.",
          "Licensees gain access to our brand, operational systems, and strategic support to create thriving recreational hubs.",
        ]}
        imageSrc="/4.jpg"
      />
      <FocusItem
        title="M-V-P! M-V-P!"
        descriptions={[
          "Pop-Up & Modular Sports Activations - Driving Community Engagement and Participation",
        ]}
        imageSrc="/4.jpg"
      />
      <FocusItem
        title="Padel on the Water"
        descriptions={[
          "Padel on the Water is where sport meets spectacle — a bold statement that elevates our reputation as a global lifestyle and sporting destination.",
        ]}
        imageSrc="/4.jpg"
      />
      <div className="relative aspect-video w-full md:col-span-2">
        <Image src="/6.jpg" alt="Mission" fill className="object-cover" />
      </div>
    </section>
  );
};

export default FocusArea;
