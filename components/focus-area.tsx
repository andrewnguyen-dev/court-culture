"use client";

import Image from "next/image";

interface FocusItemProps {
  title: string;
  descriptions: (string | React.ReactNode)[];
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
      <h1 className="homepage-title">Focus Area</h1>
      <p className="copy -mt-8 mb-20 md:-mt-16">
        Backing the founders who are daring to reshape sport.
      </p>
      <FocusItem
        title="Supporting Other Sports Providers"
        descriptions={["We assist with finance, design, supply, construction, and operations, acting as a one-stop solution for those exploring new sites or scaling their offerings."]}
        imageSrc="/11.jpg"
      />
      <FocusItem
        title="Recreational Partner"
        descriptions={[
          "We position ourselves as the recreational partner of choice for property owners, funds, and developers.",
          "Our role is to transform under utilised or strategic spaces into thriving destinations for sport, wellness, and community.",
        ]}
        imageSrc="/7.jpg"
      />
      <FocusItem
        title="The Active Community Hub"
        descriptions={[
          "Court Culture is actively seeking sites ranging from 2,000 sqm to 15,000 sqm to expand our branded facilities. Within our spaces, we bring together leading sports and wellness brands, creating a “coworking” hub for sport and wellness. Through a diverse range of partner brands, we support and engage local communities, delivering this model across the globe.",
        ]}
        imageSrc="/12.jpg"
      />
      <FocusItem
        title="Shaping the Next Generation of Sports Development"
        descriptions={[
          <>
            Court was built on a bold idea: merging esports, real sport,
            wellness, and cutting-edge technology. Within our ecosystem, players
            train, compete, and track performance data in one immersive
            environment. Our stations develop technical, physical, and mental
            skills, while Hyten promotes well-being, confidence, and social
            growth. Designed for the next generation of players, Court connects
            a global community.{" "}
            <a
              href="https://www.hyten.life/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              Join Our Tribe.
            </a>
          </>,
        ]}
        imageSrc="/13.jpg"
      />
      <FocusItem
        title="International Licensing"
        descriptions={[
          "Court Culture offers international licensing opportunities, allowing partners worldwide to bring our expertise in designing, activating, and operating multi-sport and wellness destinations to their local communities.",
          "Licensees gain access to our brand, operational systems, and strategic support to create thriving recreational hubs.",
        ]}
        imageSrc="/8.jpg"
      />
      <FocusItem
        title="M-V-P! M-V-P!"
        descriptions={[
          "Pop-Up & Modular Sports Activations - Driving Community Engagement and Participation",
        ]}
        imageSrc="/9.jpg"
      />
      <FocusItem
        title="Padel on the Water"
        descriptions={[
          "Padel on the Water is where sport meets spectacle — a bold statement that elevates our reputation as a global lifestyle and sporting destination.",
        ]}
        imageSrc="/10.png"
      />
      <div className="relative aspect-video w-full md:col-span-2">
        <Image src="/6.jpg" alt="Mission" fill className="object-cover" />
      </div>
    </section>
  );
};

export default FocusArea;
