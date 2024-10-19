"use client";

import { useEffect, useState } from "react";
import { VerticalTiles } from "@/components/animata/preloader/vertical-tiles";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 2280);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <VerticalTiles
        animationDelay={1.8}
        animationDuration={0.5}
        minTileWidth={66}
        stagger={0.06}
        tileClassName="bg-gradient-to-tl from-slate-800 to-slate-900"
      >
        <>
          <div className="flex flex-col min-h-screen w-full items-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <ShootingStars />
            <StarsBackground />
            <div className="flex-grow p-4 max-w-7xl mx-auto relative z-10 w-full flex items-center justify-center">
              {showTypewriter && (
                <TypewriterEffect
                  words={[
                    {
                      text: "Dumka",
                      className:
                        "font-bold text-center text-white relative z-20 text-2xl sm:text-6xl md:text-7xl lg:text-8xl",
                    },
                  ]}
                />
              )}
            </div>
            <footer className="w-full mt-12 sticky bottom-0">
              {showTypewriter && (
                <p className="w-full text-center my-6 text-gray-600">
                  Copyright © 2024 Dumka
                </p>
              )}
            </footer>
          </div>
        </>
      </VerticalTiles>
    </>
  );
}
