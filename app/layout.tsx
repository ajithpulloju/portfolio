import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pulloju Ajith | Full Stack Developer",
  description:
    "Pulloju Ajith is a Full Stack Developer from Warangal, India. Specializing in modern scalable web applications, React, Node.js, and Artificial Intelligence.",
  keywords: [
    "Pulloju Ajith",
    "Pulloju Ajith Portfolio",
    "Pulloju Ajith Full Stack Developer",
    "Protein Pagal Founder",
    "React Developer",
    "Node.js Developer",
    "AI Developer",
    "Web Developer India",
    "SR University",
    "Warangal"
  ],
  authors: [{ name: "Pulloju Ajith" }],
  openGraph: {
    title: "Pulloju Ajith | Full Stack Developer",
    description: "Full Stack Developer building innovative digital products and scalable web applications.",
    type: "website",
    url: "https://pullojuajithportfolio.vercel.app/",
    siteName: "Pulloju Ajith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulloju Ajith | Full Stack Developer",
    description: "Full Stack Developer from Warangal building scalable web applications.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pulloju Ajith",
  url: "https://pullojuajithportfolio.vercel.app/",
  jobTitle: ["Full Stack Developer", "Software Engineer"],
  description: "Pulloju Ajith is a Full Stack Developer from Warangal, Telangana, India, specializing in React, Node.js, and AI.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SR University",
  },
  sameAs: [
    "https://www.linkedin.com/in/pulloju-ajith-325b7a25b/", 
    "https://github.com/ajithpulloju",
    "https://www.instagram.com/chaotix_sthetix"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <CursorGlow />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
