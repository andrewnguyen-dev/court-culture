import React from "react";

const courtBased = [
  "Basketball",
  "Volleyball",
  "Futsal",
  "Netball",
  "Handball",
  "Indoor hockey",
  "Dodgeball",
  "Pickleball",
  "Badminton",
  "Table tennis",
  "Padel tennis",
];

const specialtyAndEmerging = ["Esports arenas", "Golf simulators"];

const trainingAndPerformance = [
  "Recovery & Wellness (ice baths, saunas, recovery tech)",
  "Slim rooms Tech",
];

const SportList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="copy grid grid-cols-2 border-t border-[#141414]/60">
    <p className="pr-4">{title}</p>
    <ul>
      {items.map((sport, index) => (
        <li
          key={sport}
          className={`py-1 ${index !== items.length - 1 ? "border-b border-[#141414]/60" : ""}`}
        >
          {sport}
        </li>
      ))}
    </ul>
  </div>
);

const Multisports = () => {
  return (
    <section className="pt-24" id="multisports">
      <h1>Multisports, we do</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="pr-04 max-w-prose text-lg md:text-xl font-medium tracking-tight md:pr-12 lg:pr-24 space-y-2">
          <p>
            At Court Culture, we are committed to providing a diverse range of
            multisport facilities that cater to the needs of our community.
          </p>
          <p>
            Our offerings include a variety of court-based sports, specialty and
            emerging sports, as well as training and performance amenities to
            support athletes of all levels.
          </p>
        </div>
        <div>
          <SportList title="Court-based" items={courtBased} />
          <SportList
            title="Specialty & Emerging Indoor Sports"
            items={specialtyAndEmerging}
          />
          <SportList
            title="Training & Performance"
            items={trainingAndPerformance}
          />
        </div>
      </div>
    </section>
  );
};

export default Multisports;
