'use client'

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
    <div className="mb-8 grid grid-cols-1 gap-8 border-b border-[#141414]/50 pb-8 md:grid-cols-2">
      <div className="space-y-8 sm:mr-4 md:mr-12 lg:mr-36">
        <h3>{title}</h3>
        <div className="space-y-4">
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
    <section className="mt-24" id="focus-area">
      <h1>Focus Area</h1>
      <p className="copy -mt-8 mb-20 md:-mt-16">
        Backing the founders who are daring to reshape sport.
      </p>
      <FocusItem
        title="Venues"
        descriptions={["Coming Soon"]}
        imageSrc="/4.jpg"
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
    </section>
  );
};

export default FocusArea;
