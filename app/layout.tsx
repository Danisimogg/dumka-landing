import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
export const metadata: Metadata = {
  //other meta data key values here...
  openGraph: {
    title: "Dumka",
    description: "Confide your inner thoughts and get wise advice from legends",
  },
};
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Dumka - Easy, Mobile-Friendly Collaboration for Teams</title>
        <meta
          name="description"
          content="Dumka is an easy-to-use, mobile-friendly platform that empowers teams to collaborate seamlessly, anytime, anywhere. Unite people with modern tools for effective teamwork, improved communication, and shared growth."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          itemProp="name"
          content="Dumka  - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          itemProp="description"
          content="Dumka provides an easy, mobile-friendly platform to unite teams for seamless and effective collaboration, anytime, anywhere."
        />
        <meta itemProp="image" content="https://dumka.org/overlay.png" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="og:description"
          content="Dumka is a mobile-first, easy-to-use platform that empowers teams to collaborate seamlessly. Unite people with modern tools for effective teamwork, improved communication, and shared growth."
        />
        <meta property="og:image" content="https://dumka.org/overlay.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dumka_app" />
        <meta
          name="twitter:title"
          content="Dumka  - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          name="twitter:description"
          content="Dumka is an easy, mobile-friendly platform that empowers teams to collaborate seamlessly, anytime, anywhere."
        />
        <meta name="twitter:image" content="https://dumka.org/overlay.png" />
        <meta
          property="line:title"
          content="Dumka  - Easy, Mobile-First Collaboration Platform"
        />
        <meta
          property="line:description"
          content="Dumka empowers teams with a mobile-first approach for effective and easy collaboration, anytime, anywhere."
        />
        <meta
          property="pinterest:description"
          content="Dumka - Easy, mobile-friendly collaboration for effective teamwork, empowering your team anytime, anywhere."
        />
        <meta
          property="reddit:description"
          content="Dumka provides an easy, mobile-first platform for teams to collaborate effectively, anytime, anywhere."
        />
        <meta
          property="telegram:description"
          content="Dumka - Easy, mobile-friendly collaboration for seamless team work."
        />
        <meta
          property="tumblr:description"
          content="Dumka is a mobile-first, easy-to-use platform for creative and effective team collaboration."
        />
        <meta
          property="linkedin:description"
          content="Dumka offers a mobile-friendly solution for teams to collaborate effectively, providing modern tools for productive and seamless teamwork."
        />
        <link
          rel="preload"
          as="image"
          href="https://dumka.org/overlay.png"
          type="image/png"
        />
        <meta
          property="whatsapp:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="whatsapp:description"
          content="Dumka - Unite your team with a mobile-friendly, easy-to-use collaboration platform designed for growth and productivity."
        />
        <meta
          property="telegram:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="vk:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="linkedin:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="email:subject"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
        <meta
          property="gab:title"
          content="Dumka - Easy, Mobile-Friendly Collaboration for Teams"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
