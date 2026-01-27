import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import ContactSection from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Padel Culture | Dedicated to the World's Fastest-Growing Sport",
  description:
    "A specialized subsidiary of Court Culture managing full setup and operations for Padel venues.",
};

const services = [
  "Site selection and commercial agreements",
  "All design components and commercial elements",
  "Planning, permitting, and compliance",
  "Court construction and installation",
  "Insurance, maintenance, and safety",
  "Technology, bookings, and payments",
  "National marketing, branding, and ongoing support",
];

export default function PadelCulturePage() {
  return (
    <div className="font-satoshi pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black">
        <Image
          src="/10.png"
          alt="Padel Culture Hero"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="relative container mx-auto flex h-full flex-col justify-end px-4 pb-24 md:px-8 lg:px-12">
          <h1 className="font-clash-display text-5xl font-bold text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl">
            Padel Culture
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-white/90 md:text-2xl">
            A specialized subsidiary of the Court Culture group, focused
            exclusively on delivering world-class Padel experiences.
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-8 lg:px-12">
        {/* Intro Section */}
        <section className="py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-clash-display mb-6 text-4xl leading-tight font-semibold uppercase md:text-5xl">
                We Manage the Details, <br />
                <span className="text-neutral-500">
                  You Build the Community.
                </span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-700">
                <p>
                  Padel Culture manages the full setup and day-to-day
                  operations, so you don't have to. We deliver a fully
                  operational padel venue — allowing you to focus on people,
                  growth, and building a thriving local padel community.
                </p>
                <p>
                  Our core model centers on partnerships tailored to clubs,
                  businesses, and organizations of all sizes. Courts are
                  installed under a fully financed lease and revenue-share
                  structure, creating a low-risk, high-impact opportunity for
                  our partners.
                </p>
              </div>
            </div>

            {/* Services List */}
            <div className="rounded-xl bg-neutral-50 p-8 md:p-12">
              <h3 className="font-clash-display mb-8 text-2xl font-medium !tracking-wide text-neutral-900 uppercase">
                What We Handle for You
              </h3>
              <ul className="grid gap-4">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <svg
                        width="12"
                        height="12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-neutral-800 md:text-lg">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Partnership Section - Acenta Group */}
        <section className="mb-24 overflow-hidden rounded-2xl bg-black text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="/4.jpg"
                alt="Partnership"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20">
              <div className="mb-6 inline-block max-w-max rounded-full bg-white/10 px-4 py-1 text-sm font-medium tracking-wider text-neutral-200 uppercase backdrop-blur-sm">
                Strategic Partnership
              </div>
              <h2 className="font-clash-display mb-6 text-3xl font-bold uppercase md:text-5xl">
                Powered by <br /> Acenta Group
              </h2>
              <div className="mb-8 space-y-4 text-white/80">
                <p>
                  None of this would be possible without the commitment,
                  professionalism, and partnership of the world&apos;s leading
                  supplier of all things Padel: <strong>Acenta Group</strong>.
                </p>
                <p>
                  Court Culture has entered into an exclusive long-term
                  partnership to provide the best available Padel products to
                  customers throughout Australia, New Zealand & Oceania.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-fit border-white hover:bg-white hover:text-black"
              >
                <Link
                  href="https://acenta.group/2026/01/26/acenta-group-establishes-exclusive-partnership-agent-platform-in-australia-new-zealand-and-oceania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-neutral-800"
                >
                  Read Media Release <BsArrowUpRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section>
          <div className="mb-12">
            <h2 className="font-clash-display mb-4 text-4xl font-bold uppercase md:text-6xl">
              The Ecosystem
            </h2>
            <p className="max-w-3xl text-xl text-neutral-600">
              Through integrated solutions spanning court construction,
              equipment, tournaments, and community engagement, we're helping
              drive the worldwide growth of padel.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Courts */}
            <div className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-neutral-900 p-8 text-white transition-colors hover:bg-neutral-800">
              <div>
                <h3 className="font-clash-display mb-4 text-3xl font-bold uppercase">
                  Courts
                </h3>
                <p className="text-white/70">
                  Building the foundation for a global padel community.
                  High-quality padel courts tailored to clubs, businesses, and
                  organizations of all sizes.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="https://teamacenta.com/courts/"
                  target="_blank"
                  className="inline-flex items-center text-sm font-bold tracking-wide uppercase hover:underline"
                >
                  View Courts <BsArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Store */}
            <div className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-neutral-50 p-8 text-black transition-colors hover:bg-neutral-200">
              <div>
                <h3 className="font-clash-display mb-4 text-3xl font-bold uppercase">
                  Store
                </h3>
                <p className="text-neutral-600">
                  Sport of Padel - Your one-stop platform for padel gear and
                  apparel. A curated selection of equipment for both B2C and B2B
                  customers.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* Brands */}
            <div className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-xl bg-neutral-50 p-8 text-black transition-colors hover:bg-neutral-200">
              <div>
                <h3 className="font-clash-display mb-4 text-3xl font-bold uppercase">
                  Brands
                </h3>
                <p className="text-neutral-600">
                  <strong>Peliga</strong> is our dedicated padel brand, built on
                  a commitment to quality, performance, and product innovation.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-bold tracking-wide uppercase">
                  Explore Peliga
                </span>
              </div>
            </div>

            {/* Team */}
            <div className="group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-xl bg-neutral-50 p-8 text-black transition-colors hover:bg-neutral-200 lg:col-span-2">
              <div>
                <h3 className="font-clash-display mb-4 text-3xl font-bold uppercase">
                  Team Sport of Padel
                </h3>
                <p className="max-w-prose text-neutral-600">
                  A vibrant community of players and ambassadors, united by a
                  shared passion for padel. Driving engagement, fostering
                  connections, and supporting the global growth of the sport.
                </p>
              </div>
            </div>

            {/* Tour */}
            <div className="group relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-xl bg-black p-8 text-white transition-colors hover:bg-neutral-900">
              <div>
                <h3 className="font-clash-display mb-4 text-3xl font-bold uppercase">
                  Acenta Padel Tour
                </h3>
                <p className="text-white/70">
                  Bringing together players across Scandinavia in a unique mix
                  of competition, community, and passion.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="https://teamacenta.com/padeltour/"
                  target="_blank"
                  className="inline-flex items-center text-sm font-bold tracking-wide uppercase hover:underline"
                >
                  View Tour <BsArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
    </div>
  );
}
