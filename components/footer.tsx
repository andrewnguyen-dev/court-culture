import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "Mission", href: "/#mission" },
    { name: "Focus Area", href: "/#focus-area" },
    { name: "About Us", href: "/#about-us" },
    { name: "Multisports", href: "/#multisports" },
    { name: "Padel Culture", href: "/padel-culture" },
  ];

  return (
    <footer className="bg-neutral-950 mt-24 text-white pt-16 pb-8 border-t border-neutral-800">
      <div className="container mx-auto px-8 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo & Brand */}
          <div className="space-y-4 max-w-sm">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-md bg-white">
                 <Image src="/logo.png" alt="Court Culture Logo" fill className="object-cover p-1" />
              </div>
              <span className="font-clash-display text-xl font-medium uppercase tracking-wide">
                Court Culture
              </span>
            </Link>
            <p className="font-satoshi text-neutral-400 text-sm leading-relaxed">
              Transforming underused spaces into vibrant destinations for sport,
              wellness, and community connection.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-2 lg:flex lg:gap-16">
             <div className="flex flex-col gap-4">
                <h4 className="font-clash-display text-sm font-semibold uppercase text-neutral-500 tracking-wider">Menu</h4>
                <ul className="space-y-2">
                    {links.slice(0, 5).map((link) => (
                        <li key={link.name}>
                        <Link 
                            href={link.href} 
                            className="font-satoshi text-neutral-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                        </li>
                    ))}
                </ul>
             </div>
             <div className="flex flex-col gap-4">
                <h4 className="font-clash-display text-sm font-semibold uppercase text-neutral-500 tracking-wider">Explore</h4>
                <ul className="space-y-2">
                     {links.slice(5).map((link) => (
                        <li key={link.name}>
                        <Link 
                            href={link.href} 
                            className="font-satoshi text-neutral-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                        </li>
                    ))}
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-satoshi text-sm text-neutral-500 text-center md:text-left">
            &copy; {currentYear} Court Culture. All rights reserved.
          </p>
          
          {/* <div className="flex items-center gap-6">
             <Link href="#" className="font-satoshi text-sm text-neutral-500 hover:text-white transition-colors">
                Privacy Policy
             </Link>
             <Link href="#" className="font-satoshi text-sm text-neutral-500 hover:text-white transition-colors">
                Terms of Service
             </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;