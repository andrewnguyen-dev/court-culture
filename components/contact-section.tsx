"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight, BsWhatsapp } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [result, setResult] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending...");
    const formData = new FormData(form);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      console.log("Error", data);
      setResult(data.error || "Something went wrong");
    }
  }
  
  return (
    <section
      className="mt-24 rounded-lg bg-neutral-800 py-24 text-white"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-clash-display mb-6 text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
              Get in touch
            </h2>
            <p className="font-satoshi mb-8 max-w-lg text-lg text-neutral-300 md:text-xl">
              Join the global court movement. Whether you&apos;re interested in
              building a court, joining a tournament, or becoming part of our
              community, we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              <p className="font-satoshi text-lg text-neutral-300">
                You can also contact me through Whatsapp:
              </p>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-fit gap-2 border-white bg-transparent text-white hover:bg-white hover:text-neutral-900"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=61434770307"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp className="text-lg" />
                  Chat on Whatsapp
                  <BsArrowUpRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-lg bg-neutral-50 p-8 text-neutral-900 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-satoshi text-sm font-medium tracking-wider text-neutral-900 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-satoshi text-sm font-medium tracking-wider text-neutral-900 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="font-satoshi text-sm font-medium tracking-wider text-neutral-900 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
                ></textarea>
              </div>
              <div className="space-y-4">
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                {result && (
                  <p className="font-satoshi text-center text-sm font-medium text-neutral-900">
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
