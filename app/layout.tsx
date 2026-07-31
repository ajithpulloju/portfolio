import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pulloju Ajith | Full Stack Developer | AI Enthusiast",
  description:
    "Official portfolio of Pulloju Ajith, a Full Stack Developer and CSE student at SR University specializing in React, Node.js, Next.js, and Artificial Intelligence.",
  keywords: [
    "Pulloju Ajith",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "AI Enthusiast",
    "SR University",
    "Software Engineer",
  ],
  authors: [{ name: "Pulloju Ajith" }],
  openGraph: {
    title: "Pulloju Ajith | Full Stack Developer",
    description: "Official portfolio of Pulloju Ajith. Building real-world applications, AI systems & scalable web solutions.",
    type: "website",
    url: "https://pullojuajithportfolio.vercel.app/",
    siteName: "Pulloju Ajith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulloju Ajith | Full Stack Developer",
    description: "Full Stack Developer and CSE student at SR University.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pulloju Ajith",
  url: "https://pullojuajithportfolio.vercel.app/",
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer and B.Tech CSE Student at SR University building AI applications and scalable web solutions.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SR University",
  },
  sameAs: [
    "https://www.linkedin.com/in/pulloju-ajith-325b7a25b/", 
    "https://github.com/ajithpulloju"
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
