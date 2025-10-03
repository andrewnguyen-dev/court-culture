"use client";

import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);

  useGSAP(() => {
    if (isMenuOpen) {
      // Animate menu sliding in from the right
      gsap.set(menuRef.current, { x: "100%" });
      gsap.to(menuRef.current, {
        x: "0%",
        duration: 0.4,
        ease: "power2.out",
      });

      // Fade in overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
      });

      // Set initial state for menu items (below their position)
      gsap.set(menuItemsRef.current, { y: "100%" });

      // Staggered animation for menu items sliding up from bottom
      gsap.to(menuItemsRef.current, {
        y: "0%",
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0, // Start after menu slides in
      });
    } else {
      // Reverse staggered animation for menu items sliding down (reverse order)
      gsap.to(menuItemsRef.current, {
        y: "100%",
        duration: 0.4,
        ease: "power2.in",
        stagger: {
          each: 0.08,
          from: "end", // Start from the last item and go backwards
        },
      });

      // Animate menu sliding out to the right (with slight delay to let items animate first)
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power2.in",
        delay: 0.4,
      });

      // Fade out overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.15,
      });
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = ["Mission", "Focus Area", "About Us", "Multisport"];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="font-satoshi fixed top-0 right-4 left-4 z-40 border-b bg-[#f2f2f2] border-[#141414] sm:right-8 sm:left-8 lg:right-12 lg:left-12">
        <div className="">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <div className="text-xl font-medium font-clash-display text-gray-900 uppercase">
                Court Culture
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="cursor-pointer rounded-md p-2 text-gray-600 hover:text-gray-900"
              aria-label="Open menu"
            >
              <RxHamburgerMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 bg-black/10 opacity-0 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 z-50 h-full w-80 translate-x-full transform bg-[#f4f4f4] shadow-xl sm:w-120"
      >
        <div className="flex h-full flex-col">
          {/* Menu Header */}
          <div className="flex items-center justify-end px-6 py-4">
            <button
              onClick={closeMenu}
              className="cursor-pointer p-2 text-gray-600 hover:text-gray-900 hover:rotate-180 transition-transform duration-300"
              aria-label="Close menu"
            >
              <RxCross1 className="h-5 w-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-6 py-6">
            <nav className="font-clash-display space-y-2 sm:space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="overflow-hidden">
                  <a
                    ref={(el) => {
                      if (el) menuItemsRef.current[index] = el;
                    }}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block hover:pl-6 transition-all duration-300 rounded-md px-4 text-2xl font-medium text-gray-700 hover:text-[#141414] sm:text-3xl"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
