'use client'

import React, { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight, BsWhatsapp } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
    const [result, setResult] = useState("");
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        setResult("Sending...");
        const formData = new FormData(form);

        formData.append("access_key", accessKey || "");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            form.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
  return (
    <section className="bg-neutral-800 py-24 mt-24 text-white rounded-lg" id="contact">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-clash-display mb-6 text-4xl font-bold uppercase sm:text-5xl md:text-6xl">
              Get in touch
            </h2>
            <p className="font-satoshi mb-8 text-lg text-neutral-300 md:text-xl max-w-lg">
              Join the global padel movement. Whether you&apos;re interested in
              building a court, joining a tournament, or becoming part of our
              community, we&apos;d love to hear from you.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="font-satoshi text-lg text-neutral-300">
                You can also contact me through Whatsapp:
              </p>
              <Button asChild variant="outline" size="lg" className="w-fit gap-2 border-white bg-transparent text-white hover:bg-white hover:text-neutral-900">
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
          <div className="rounded-lg bg-neutral-50 p-8 md:p-12 text-neutral-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Submission from Court Culture"/>
              <input type="hidden" name="from_name" value="Court Culture Form"/>
              <div className="space-y-2">
                <label htmlFor="name" className="font-satoshi text-sm font-medium text-neutral-900 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-satoshi text-sm font-medium text-neutral-900 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-satoshi text-sm font-medium text-neutral-900 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                ></textarea>
              </div>
              <div className="h-captcha" data-captcha="true"></div>

              <div className="space-y-4">
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
                {result && (
                  <p className="text-center font-satoshi text-sm font-medium text-neutral-900">
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
