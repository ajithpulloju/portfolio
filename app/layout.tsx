import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorGlow } from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pulloju Ajith | Full Stack Developer Portfolio",
  description:
    "Portfolio of Pulloju Ajith — 3rd Year CSE student at SR University, Full Stack Developer & AI enthusiast building real-world applications and scalable web solutions.",
  keywords: [
    "Pulloju Ajith",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "AI",
    "SR University",
  ],
  authors: [{ name: "Pulloju Ajith" }],
  openGraph: {
    title: "Pulloju Ajith | Full Stack Developer",
    description: "Building real-world applications, AI systems & scalable web solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
