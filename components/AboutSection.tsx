"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const keywords = [
  { word: "Full Stack", color: "var(--accent-purple)" },
  { word: "AI Systems", color: "var(--accent-orange)" },
  { word: "Hackathons", color: "var(--accent-blue)" },
  { word: "Open Source", color: "var(--accent-orange)" },
];

function highlightText(text: string) {
  let result = text;
  const highlights = [
    { key: "Full Stack Development", color: "var(--accent-purple)" },
    { key: "Artificial Intelligence", color: "var(--accent-orange)" },
    { key: "AI-powered systems", color: "var(--accent-orange)" },
    { key: "hackathons", color: "var(--accent-blue)" },
    { key: "intelligent and scalable digital solutions", color: "var(--accent-orange)" },
    { key: "open-source learning", color: "var(--accent-blue)" },
  ];

  return highlights.reduce((acc, h) => {
    const escapedKey = h.key.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    const regex = new RegExp(escapedKey, "gi");
    return acc.replace(regex, (match) => {
      return `<span style="color:${h.color};font-weight:700;text-shadow:0 0 20px ${h.color}33">${match}</span>`;
    });
  }, result);
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  const paragraphs = [
    "Hello! I’m Pulloju Ajith, a passionate B.Tech CSE student (3rd Year) at SR University with a strong interest in Full Stack Development, Artificial Intelligence, and real-world problem solving.",
    "I enjoy building modern web applications, AI-powered systems, and innovative tech projects that create real impact. I actively participate in hackathons, explore emerging technologies, and continuously improve my development skills through practical projects and open-source learning.",
    "My goal is to become a skilled software engineer capable of building intelligent and scalable digital solutions."
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Orb */}
      <div className="orb w-96 h-96 -top-20 right-0 bg-[var(--accent-purple)] opacity-10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-10 lg:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            02 / About
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Profile Image — hidden on mobile, shown on lg+ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex relative justify-center"
          >
            <div className="relative w-64 h-72 sm:w-80 sm:h-96 md:w-96 md:h-[440px]">
              {/* Glowing border frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent-orange)] via-[var(--accent-purple)] to-[var(--accent-blue)] p-[2px]">
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-dark-800">
                  <Image
                    src="/ajith.png"
                    alt="Pulloju Ajith"
                    fill
                    className="object-cover grayscale"
                    onError={(e) => {
                      // Fallback if no image
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 glass px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-10">
                <p className="text-xs font-mono text-[var(--text-muted)]">Status</p>
                <p className="text-sm font-bold text-[var(--accent-orange)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Collaboration
                </p>
              </div>
              <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 glass px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-10">
                <p className="text-xs font-mono text-[var(--text-muted)]">Location</p>
                <p className="text-sm font-bold text-[var(--text)]">📍 Warangal, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:gap-6"
          >
            <motion.div variants={itemVariants}>
              <h2
                className="font-bebas text-[clamp(48px,10vw,120px)] leading-none text-[var(--text)]"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}
              >
                HELLO
                <span className="text-[var(--accent-orange)] glow-text">!</span>
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {paragraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-base sm:text-lg leading-relaxed text-[var(--text-muted)]"
                  dangerouslySetInnerHTML={{ __html: highlightText(para) }}
                />
              ))}
            </div>

            {/* Keyword chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {keywords.map((k) => (
                <span
                  key={k.word}
                  className="px-4 py-2 rounded-full text-sm font-semibold glass border"
                  style={{
                    color: k.color,
                    borderColor: `${k.color}40`,
                    boxShadow: `0 0 12px ${k.color}22`,
                  }}
                >
                  {k.word}
                </span>
              ))}
            </motion.div>

            {/* Info Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 lg:gap-4 mt-2"
            >
              {[
                { label: "University", value: "SR University" },
                { label: "Degree", value: "B.Tech CSE" },
                { label: "Year", value: "3rd Year (2026)" },
                { label: "Focus", value: "Full Stack + AI" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="glass border border-white/5 rounded-2xl px-4 py-3"
                >
                  <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-semibold text-[var(--text)]">
                    {info.value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
