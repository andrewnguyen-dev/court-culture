import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto flex min-h-[70vh] flex-col justify-center gap-4 px-4 sticky top-16">
        <p className="font-satoshi text-xl font-bold text-gray-800 uppercase sm:text-2xl md:text-3xl">
          More than a Court, It&apos;s a Culture
        </p>
        <p className="font-clash-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-8xl/22 lg:text-9xl/28">
          COURT CULTURE
        </p>
        <p className="font-satoshi text-lg text-gray-700 md:text-xl max-w-prose">
          We design, build, and operate Sports & Recreation Facilities that transform underused spaces into vibrant destinations for sport, wellness, and community connection.
        </p>

        <div className="mt-8 flex">
          <Button variant="outline" size="lg">
            Let&apos;s Talk <BsArrowUpRight className="ml-2" />
          </Button>
        </div>
      </div>
      <div className="relative h-[50vh] w-full lg:h-[80vh]">
        <Image src="/1.jpg" alt="Hero" fill className="object-cover" priority />
      </div>
    </section>
  );
};

export default Hero;
