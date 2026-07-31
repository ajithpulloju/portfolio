import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pulloju Ajith | Full Stack Developer & Fitness Coach",
  description:
    "Pulloju Ajith is a Full Stack Developer, Fitness Coach, and National-Level Basketball Champion from Warangal, India. Specializing in modern web applications, AI, and health coaching.",
  keywords: [
    "Pulloju Ajith",
    "Pulloju Ajith Portfolio",
    "Pulloju Ajith Full Stack Developer",
    "Pulloju Ajith Fitness Coach",
    "Pulloju Ajith Bodybuilder",
    "Pulloju Ajith Basketball Player",
    "National Level Basketball Champion",
    "Protein Pagal Founder",
    "React Developer",
    "Node.js Developer",
    "AI Developer",
    "Web Developer India",
    "Fitness Trainer",
    "Muscle Building Coach",
    "Diet Planner",
    "Health Coach",
    "SR University",
    "Warangal"
  ],
  authors: [{ name: "Pulloju Ajith" }],
  openGraph: {
    title: "Pulloju Ajith | Full Stack Developer & Fitness Coach",
    description: "Full Stack Developer, Fitness Coach, and National-Level Basketball Champion. Building innovative digital products and inspiring healthy lifestyles.",
    type: "website",
    url: "https://pullojuajithportfolio.vercel.app/",
    siteName: "Pulloju Ajith Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulloju Ajith | Developer & Coach",
    description: "Full Stack Developer, Fitness Coach, and National-Level Basketball Champion from Warangal.",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pulloju Ajith",
  url: "https://pullojuajithportfolio.vercel.app/",
  jobTitle: ["Full Stack Developer", "Fitness Coach", "Athlete"],
  description: "Pulloju Ajith is a Full Stack Developer, Fitness Coach, and National-Level Basketball Champion from Warangal, Telangana, India.",
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
