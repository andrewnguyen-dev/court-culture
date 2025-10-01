"use client";

import React, { useState } from "react";

interface TapeProps {
  items?: string[];
  speed?: number; // seconds for one full loop
  direction?: "left" | "right";
  rotate?: number; // degrees to rotate the tape for a dynamic look
  className?: string;
  pauseOnHover?: boolean;
}

const DEFAULT_WORDS = [
  "Global Leaders in Multi-Sport Performance",
];

const Tape: React.FC<TapeProps> = ({
  items = DEFAULT_WORDS,
  speed = 30,
  direction = "left",
  rotate = -6,
  className = "",
  pauseOnHover = true,
}) => {
  const [paused, setPaused] = useState(false);

  const animationName = direction === "left" ? "move-left" : "move-right";

  const containerStyle: React.CSSProperties = {
    transform: `rotate(${rotate}deg)`,
  };

  const scrollerStyle: React.CSSProperties = {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
    whiteSpace: "nowrap",
    // animation is constructed using global keyframes added to globals.css
    animation: `${animationName} ${speed}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
    willChange: "transform", // GPU acceleration hint
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
      style={containerStyle}
    >
      <div className="-mx-1">
        {/* Duplicate the list many times to ensure continuous seamless loop */}
        <div className="flex flex-nowrap" style={{ width: "max-content" }}>
          <div style={scrollerStyle} aria-hidden>
            {[...new Array(10)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {items.map((word, idx) => (
                  <div
                    key={`${groupIndex}-${idx}`}
                    className="inline-flex items-center gap-3 px-4 py-2"
                  >
                    <span className="text-lg font-extrabold uppercase tracking-wide">
                      {word}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
