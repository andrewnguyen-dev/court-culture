import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="sticky top-16 container mx-auto flex min-h-[70vh] flex-col justify-center gap-4 px-4">
        <p className="font-satoshi text-xl font-bold text-gray-800 uppercase sm:text-2xl md:text-3xl">
          More than a Court, It&apos;s a Culture
        </p>
        <p className="font-clash-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl/22 lg:text-9xl/28">
          COURT CULTURE
        </p>
        <p className="font-satoshi max-w-prose text-lg text-gray-700 md:text-xl">
          We design, build, and operate Sports & Recreation Facilities that
          transform underused spaces into vibrant destinations for sport,
          wellness, and community connection.
        </p>

        <div className="mt-8 flex">
          <Button variant="outline" size="lg" asChild>
            <Link
              href="#contact"
              className="flex items-center"
            >
              Let&apos;s Talk <BsArrowUpRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative aspect-video h-[60vh] w-full overflow-hidden lg:h-[80vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/Cinematic_Basketball_Spin_Video.webm"
            type="video/webm"
          />
          <source src="/Cinematic_Basketball_Spin_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
