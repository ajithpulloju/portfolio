"use client";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, Instagram } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background Orbs */}
      <div className="orb w-[600px] h-[600px] -top-40 -right-40 bg-[var(--accent-orange)] opacity-10" />
      <div className="orb w-[500px] h-[500px] bottom-0 -left-40 bg-[var(--accent-purple)] opacity-10" />
      <div className="orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-blue)] opacity-5" />

      {/* ── MOBILE LAYOUT (< lg) ── stacked, centered, clean */}
      <div className="lg:hidden flex flex-col items-center text-center px-6 pt-10 pb-28 gap-6 relative z-10">
        {/* Profile Image — centered on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[var(--accent-orange)]/40 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
        >
          <img
            src="/ajith.png"
            alt="Pulloju Ajith"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            style={{ objectPosition: "center 20%" }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-5"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="font-thin-custom text-[clamp(52px,16vw,80px)] leading-[0.9] tracking-tight text-[var(--text)]">
              Pulloju
              <br />
              <span className="text-[var(--accent-orange)]">Ajith</span>
            </h1>
          </motion.div>

          {/* Role badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {["Full Stack", "AI Systems"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider rounded-full border border-white/10 bg-white/5 text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs"
          >
            3rd-year B.Tech CSE student at SR University, passionate about{" "}
            <span className="text-[var(--text)] font-medium">Full Stack Development</span> &{" "}
            <span className="text-[var(--text)] font-medium">AI solutions</span>.
          </motion.p>

          {/* Quote */}
          <motion.p variants={itemVariants} className="text-[var(--accent-orange)] text-[10px] uppercase tracking-widest font-mono">
            "Building impactful products with code, creativity, and AI."
          </motion.p>

          {/* Tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {["Hackathon Builder", "Problem Solver", "Open Source Learner"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[9px] uppercase font-mono tracking-wider rounded-xl border border-white/5 bg-white/5 text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full max-w-xs">
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full py-3 rounded-full border border-white/10 glass text-[11px] font-light-custom text-[var(--text)] tracking-[0.2em] uppercase hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)]/50 transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full border border-[var(--accent-orange)]/35 bg-[var(--accent-orange)]/10 text-[11px] font-light-custom text-[var(--accent-orange)] tracking-[0.2em] uppercase text-center hover:bg-[var(--accent-orange)] hover:text-black transition-all duration-300"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center">
            {[
              { href: "https://github.com/pullojuajith", icon: <Github size={18} />, label: "GitHub" },
              { href: "https://linkedin.com/in/pullojuajith", icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: "https://www.instagram.com/ajju_xo.xo/", icon: <Instagram size={18} />, label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 w-full max-w-xs pt-2">
            {[
              { label: "Projects", value: "10+" },
              { label: "Experience", value: "3 Yrs" },
              { label: "Technologies", value: "20+" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 glass border border-white/5 rounded-2xl py-3">
                <span className="text-xl font-thin-custom text-[var(--text)]">{stat.value}</span>
                <span className="text-[8px] font-mono tracking-widest text-[var(--text-muted)] uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── DESKTOP LAYOUT (>= lg) ── original overlapping design */}
      <div className="hidden lg:block max-w-7xl mx-auto px-12 w-full py-24 relative">
        {/* Subtle decorative grid/lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-white/5"></div>

        {/* Profile Image Portrait */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
           className="absolute bottom-0 right-[15%] w-[550px] z-0 pointer-events-auto flex justify-center items-end h-[80%]"
        >
          <img
            src="/ajith.png"
            alt="Pulloju Ajith"
            className="w-full max-h-full object-contain grayscale brightness-90 opacity-90 transition-all duration-500 ease-in-out cursor-pointer hover:grayscale-0 hover:brightness-100 hover:opacity-100 hover:scale-105 hover:drop-shadow-2xl"
            style={{
              maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
              WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)"
            }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10 relative z-10"
        >
          {/* Top Label */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 mt-10">
            <span className="text-[10px] font-light-custom text-[var(--text-muted)] tracking-[0.3em] uppercase">
              ABOUT
            </span>
            <div className="h-[1px] w-12 bg-[var(--text-muted)] opacity-50"></div>
          </motion.div>

          {/* Luxury Large Heading */}
          <motion.div variants={itemVariants} className="relative mt-8">
            <h1 className="font-thin-custom text-[clamp(60px,12vw,140px)] leading-[0.9] tracking-tight text-[var(--text)] whitespace-nowrap">
              Pulloju
              <br />
              <span className="text-[var(--text-muted)] ml-24">
                Ajith
              </span>
            </h1>
            {/* Subtle Gold dot marker */}
            <div className="absolute top-1/2 right-[10%] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]" />
              <div className="w-24 h-[1px] bg-gradient-to-r from-[var(--accent-orange)] to-transparent opacity-50"></div>
              <span className="text-[10px] text-[var(--accent-orange)] tracking-[0.2em] uppercase font-light-custom absolute -top-4 right-0">Developer</span>
            </div>
          </motion.div>

          {/* Divider and Subtitles */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between py-4 mt-8"
          >
            <div className="flex items-center gap-4 text-[11px] font-light-custom text-[var(--text-muted)] uppercase tracking-[0.2em]">
              <span>Full Stack</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-30" />
              <span>AI Systems</span>
            </div>
            <span className="text-[11px] font-light-custom text-[var(--text-muted)] uppercase tracking-[0.2em]">
              SR University · 2024–2028
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-sm sm:text-base text-[var(--text-muted)] leading-[1.8] font-light-custom border-l border-white/10 pl-6 animate-glow"
          >
            I'm a 3rd-year Computer Science Engineering student passionate about{" "}
            <span className="text-[var(--text)]">Full Stack Development</span>,{" "}
            <span className="text-[var(--text)]">AI solutions</span>, and modern web technologies. I love building real-world projects, participating in hackathons, and creating impactful digital experiences.
            <span className="text-[var(--accent-orange)] block mt-2 text-xs uppercase tracking-widest font-mono">
              "Building impactful products with code, creativity, and AI."
            </span>
          </motion.p>

          {/* Tags / Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1 max-w-xl">
            {[
              "Full Stack Developer",
              "AI Enthusiast",
              "Hackathon Builder",
              "Problem Solver",
              "Open Source Learner",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 text-[9px] uppercase font-mono tracking-wider rounded-xl border border-white/5 bg-white/5 text-[var(--text-muted)] hover:border-[var(--accent-orange)]/30 hover:text-[var(--accent-orange)] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-2">
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 rounded-full border border-white/10 glass text-[11px] font-light-custom text-[var(--text)] tracking-[0.2em] uppercase hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)]/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-[var(--accent-orange)]/35 bg-[var(--accent-orange)]/10 text-[11px] font-light-custom text-[var(--accent-orange)] tracking-[0.2em] uppercase hover:bg-[var(--accent-orange)] hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300"
            >
              View Resume
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/pullojuajith"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/pullojuajith"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/ajju_xo.xo/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)] hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </motion.div>

          {/* Desktop Stats */}
          <motion.div
            variants={itemVariants}
            className="absolute top-32 right-12 flex flex-col gap-10 opacity-80"
          >
            <span className="text-[10px] font-light-custom text-[var(--text-muted)] tracking-[0.3em] uppercase absolute -top-8 right-0 text-right w-full">
              STATISTICS
            </span>
            <div className="flex gap-12 items-end mt-4">
              {[
                { label: "PROJECTS", value: "10+" },
                { label: "EXPERIENCE", value: "3YRS" },
                { label: "TECHNOLOGIES", value: "20+" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-3 group relative">
                  <span className="text-3xl font-thin-custom tracking-wider text-[var(--text)]">
                    {stat.value}
                  </span>
                  <div className="h-[1px] w-full bg-white/20 relative">
                     <span className="absolute top-0 right-0 w-1 h-1 bg-white -mt-[1.5px] group-hover:bg-[var(--accent-orange)] transition-colors"></span>
                  </div>
                  <span className="text-[8px] font-light-custom tracking-[0.2em] text-[var(--text-muted)] uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-2 h-24 mt-4 w-full justify-end border-b border-white/10 pb-0">
               <div className="w-8 h-1/3 bg-white/10" />
               <div className="w-8 h-2/3 bg-white/15" />
               <div className="w-8 h-full bg-white/30" />
               <div className="w-8 h-1/2 bg-white/10" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors group"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown
          size={18}
          className="animate-bounce group-hover:text-[var(--accent-orange)]"
        />
      </motion.button>
    </section>
  );
}
