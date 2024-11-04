/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Banner } from "@/components/ui/banner";
import { IntroOverlay } from "@/components/ui/introOverlay";
import { Toaster } from "@/components/ui/sonner";
import "./style/App.scss";

export default function Home() {
  const appRef = useRef();
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      homeAnimation(completeAnimation);
    }, appRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <>
      <div className="App" ref={appRef as any}>
        <IntroOverlay />
        <Banner />
        <>
          <ShootingStars />
          <StarsBackground />
          <div className="flex flex-col min-h-screen w-full items-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <main className="flex-grow w-full flex items-center justify-center">
              {/* ... rest of your content ... */}
            </main>
            {animationComplete && (
              <footer className="w-full mt-12 sticky bottom-0">
                <p className="w-full text-center my-6 text-gray-600">
                  Copyright © 2024 Dumka
                </p>
              </footer>
            )}
          </div>
        </>
      </div>
      <Toaster />
    </>
  );
}

const homeAnimation = (completeAnimation: any) => {
  const tl = gsap.timeline();
  return tl
    .fromTo(
      ".line span",
      {
        y: 100,
        skewY: 7,
        opacity: 0,
      },
      {
        y: 0,
        skewY: 0,
        opacity: 1,
        ease: "power4.out",
        delay: 1,
        stagger: {
          amount: 0.3,
        },
        clearProps: "transform, skewY, opacity",
      }
    )
    .to(".overlay-top", {
      height: 0,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".overlay-bottom", {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlay", {
      opacity: 0,
      ease: "power2.out",
      onComplete: completeAnimation as any,
    })
    .from(".case-image img", {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
    });
};
