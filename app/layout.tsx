import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { professor } from "./data/professor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const siteUrl = "https://greekwithpythagoras.com";

const title = `${professor.fullName} (${professor.fullNameGreek}) | Learn Greek with Confidence`;
const description = `Personalised Greek language lessons with ${professor.fullName} — ${professor.fullNameGreek}, Greek language teacher and published author. Online worldwide and in person in London.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Pythagoras Eleftheriadis",
    "Πυθαγόρας Ελευθεριάδης",
    "learn Greek",
    "Greek language teacher",
    "Greek language tutor",
    "Greek professor",
    "Greek author",
    "published author",
    "Greek lessons",
    "Greek lessons London",
    "Greek lessons online",
    "online Greek lessons",
    "Greek lessons Thessaloniki",
    "Greek teacher Thessaloniki",
    "Greek teacher London",
    "private Greek lessons",
    "Greek for students",
    "Greek for beginners",
    "conversational Greek",
    "Greek tutor for students",
    "learn Greek online",
    "Greek language classes",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: professor.fullName,
    locale: "en_GB",
    type: "profile",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 1105,
        alt: professor.hero.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: professor.fullName,
  alternateName: professor.fullNameGreek,
  jobTitle: professor.title,
  url: siteUrl,
  image: `${siteUrl}/images/pythagoras.webp`,
  email: professor.email,
  sameAs: [professor.socials.instagram, professor.socials.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <Navbar />

        <main id="top">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
