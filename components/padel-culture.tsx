import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const PadelCulture = () => {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-lg md:col-span-2">
      {/* Using Padel on the water image as a background context */}
      <Image
        src="/padel-culture-01.jpg"
        alt="Padel Culture"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8 md:p-12 lg:p-16">
        <h2 className="font-clash-display mb-2 text-4xl font-bold text-white uppercase md:text-5xl lg:text-6xl">
          Padel Culture
        </h2>
        <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
          A specialized subsidiary dedicated to the world&apos;s fastest-growing
          racquet sport.
        </p>
        <Button
          className="border-none bg-white text-black hover:bg-neutral-200"
          size="lg"
        >
          <Link href="/padel-culture">Discover Padel Culture</Link>
        </Button>
      </div>
    </div>
  );
};

export default PadelCulture;
