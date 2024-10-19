"use client";
import Head from "next/head";
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
      <Head>
        <title>Dumka 🦖</title>
        <meta name="description" content="Dumka - A Modern Experience" />
        <meta
          name="description"
          content="Unite people into teams for collaborative work"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta itemProp="name" content="Dumka - A Modern Experience" />
        <meta
          itemProp="description"
          content="Unite people into teams for collaborative work"
        />
        <meta itemProp="image" content="https://dumka.org/overlay.jpg" />
        <meta property="og:image" content="https://dumka.org/overlay.jpg" />

        <meta property="og:title" content="Dumka - A Modern Experience" />
        <meta
          property="og:description"
          content="Unite people into teams for collaborative work"
        />
        <meta name="twitter:card" content="https://dumka.org/overlay.jpg" />
        <meta name="twitter:site" content="@@dumka_app" />
        <meta name="twitter:title" content="Dumka - A Modern Experience" />
        <meta
          name="twitter:description"
          content="Unite people into teams for collaborative work"
        />
        <meta name="twitter:image" content="https://dumka.org/overlay.jpg" />
        <meta property="line:title" content="Dumka - A Modern Experience" />
        <meta
          property="line:description"
          content="Unite people into teams for collaborative work"
        />
        <meta
          property="pinterest:description"
          content="Dumka - A Modern Experience"
        />
        <meta property="reddit:title" content="Dumka - A Modern Experience" />
        <meta property="telegram:title" content="Dumka - A Modern Experience" />
        <meta property="tumblr:title" content="Dumka - A Modern Experience" />
        <meta property="viber:title" content="Dumka - A Modern Experience" />
        <meta property="weibo:title" content="Dumka - A Modern Experience" />
        <meta property="whatsapp:title" content="Dumka - A Modern Experience" />
        <meta property="linkedin:title" content="Dumka - A Modern Experience" />
        <meta property="vk:title" content="Dumka - A Modern Experience" />
        <meta property="mailru:title" content="Dumka - A Modern Experience" />
        <meta
          property="livejournal:title"
          content="Dumka - A Modern Experience"
        />
        <meta
          property="workplace:title"
          content="Dumka - A Modern Experience"
        />
        <meta property="pocket:title" content="Dumka - A Modern Experience" />
        <meta
          property="instapaper:title"
          content="Dumka - A Modern Experience"
        />
        <meta property="hatena:title" content="Dumka - A Modern Experience" />
        <meta
          property="facebookMessenger:title"
          content="Dumka - A Modern Experience"
        />
        <meta property="email:subject" content="Dumka - A Modern Experience" />
        <meta property="gab:title" content="Dumka - A Modern Experience" />
      </Head>
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
