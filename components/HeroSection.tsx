"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import Profile360Viewer from "./Profile360Viewer";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Breathing animation for the viewer
  const breathingAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // 360 Viewer Transforms
  // Desktop: Start scale 1.3 in center, shrink to 1 and move right
  const desktopScale = useTransform(scrollYProgress, [0, 0.35], [1.3, 1]);
  const desktopLeft = useTransform(scrollYProgress, [0, 0.35], ["50%", "85%"]);
  const desktopTop = useTransform(scrollYProgress, [0, 0.35], ["50%", "100%"]);
  const desktopX = useTransform(scrollYProgress, [0, 0.35], ["-50%", "-100%"]);
  const desktopY = useTransform(scrollYProgress, [0, 0.35], ["-50%", "-100%"]);

  // Mobile: Start scale 1.2 in center, shrink to 1
  const mobileScale = useTransform(scrollYProgress, [0, 0.35], [1.2, 1]);

  // Desktop Text Animation Transforms
  const pullojuX = useTransform(scrollYProgress, [0, 0.35], ["60vw", "0vw"]);
  const pullojuY = useTransform(scrollYProgress, [0, 0.35], ["35vh", "0vh"]);
  const pullojuScale = useTransform(scrollYProgress, [0, 0.35], [1, 1]);

  const ajithX = useTransform(scrollYProgress, [0, 0.35], ["0vw", "0vw"]);
  const ajithY = useTransform(scrollYProgress, [0, 0.35], ["-20vh", "0vh"]);
  const ajithScale = useTransform(scrollYProgress, [0, 0.35], [1, 1]);

  // Text Reveal Transforms
  const nameOp = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
  const nameY = useTransform(scrollYProgress, [0.05, 0.15], [40, 0]);

  const roleOp = useTransform(scrollYProgress, [0.10, 0.20], [0, 1]);
  const roleY = useTransform(scrollYProgress, [0.10, 0.20], [40, 0]);

  const skillsOp = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const skillsY = useTransform(scrollYProgress, [0.15, 0.25], [40, 0]);

  const statsOp = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const statsY = useTransform(scrollYProgress, [0.25, 0.35], [40, 0]);

  const desc1Op = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const desc1Y = useTransform(scrollYProgress, [0.35, 0.45], [40, 0]);

  const desc2Op = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const desc2Y = useTransform(scrollYProgress, [0.45, 0.55], [40, 0]);

  const finalOp = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const finalY = useTransform(scrollYProgress, [0.55, 0.65], [40, 0]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} id="hero-section" className="relative h-[400vh] w-full z-10">
      
      <div id="hero-sticky" className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* HERO CONTENT */}
        <motion.div 
          className="w-full h-full flex flex-col justify-center pt-16 bg-black relative"
        >

        {/* Orbs fade in as we scroll so start is pure black */}
        <motion.div style={{ opacity: nameOp }} className="absolute inset-0 pointer-events-none">
          <div className="orb w-[600px] h-[600px] -top-40 -right-40 bg-[var(--accent-orange)] opacity-10" />
          <div className="orb w-[500px] h-[500px] bottom-0 -left-40 bg-[var(--accent-purple)] opacity-10" />
          <div className="orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-blue)] opacity-5" />
        </motion.div>

        {/* ── MOBILE LAYOUT (< lg) ── */}
        <div className="lg:hidden px-4 py-8 relative z-10 h-full w-full max-h-[100dvh] overflow-hidden grid grid-cols-1 grid-rows-[auto_1fr_auto] landscape:grid-cols-[1fr_1.5fr] landscape:grid-rows-1 landscape:gap-4 items-center justify-items-center">
          
          {/* MIDDLE: 360 Profile Viewer (Moved to first visual in landscape) */}
          <motion.div
            style={{ scale: mobileScale }}
            className="row-start-2 landscape:col-start-1 landscape:row-start-1 relative w-[220px] h-[220px] landscape:w-[180px] landscape:h-[180px] z-10 pointer-events-auto flex items-center justify-center shrink-0"
          >
            <motion.div
              animate={breathingAnimation}
              className="w-full h-full"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 85%, transparent 100%)"
              }}
            >
              <Profile360Viewer className="w-full h-full" />
            </motion.div>
          </motion.div>

          {/* RIGHT/TOP COLUMN WRAPPER FOR LANDSCAPE */}
          <div className="row-start-1 landscape:col-start-2 landscape:row-start-1 flex flex-col justify-between h-full w-full z-20">
            {/* TOP: Name & Badges */}
            <div className="flex flex-col items-center landscape:items-start gap-2 mt-4 landscape:mt-0 w-full">
              <motion.div style={{ opacity: nameOp, y: nameY }}>
                <h1 className="font-thin-custom text-[42px] landscape:text-[32px] leading-[1] tracking-tight text-[var(--text)] text-center landscape:text-left">
                  Pulloju <span className="text-[var(--accent-orange)] block landscape:inline">Ajith</span>
                </h1>
              </motion.div>
              <motion.div style={{ opacity: roleOp, y: roleY }} className="flex flex-wrap justify-center landscape:justify-start gap-2">
                {["Full Stack", "AI Systems"].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[8px] uppercase font-mono tracking-wider rounded-full border border-white/10 bg-white/5 text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
            
            {/* BOTTOM: Stats, Description, CTAs (Pushed to bottom row-start-3 in portrait) */}
            <div className="row-start-3 landscape:row-auto flex flex-col items-center landscape:items-start gap-4 landscape:gap-2 w-full mb-6 landscape:mb-0 mt-auto">
              <div className="flex flex-col items-center landscape:items-start text-[11px] text-[var(--text-muted)] leading-relaxed max-w-[280px] text-center landscape:text-left">
                <motion.span style={{ opacity: desc1Op, y: desc1Y }}>3rd-year CSE student at SR University,</motion.span>
                <motion.span style={{ opacity: desc2Op, y: desc2Y }}>passionate about <span className="text-[var(--text)] font-medium">Full Stack</span> & <span className="text-[var(--text)] font-medium">AI</span>.</motion.span>
              </div>
              
              <motion.div style={{ opacity: statsOp, y: statsY }} className="flex gap-2 w-full max-w-[280px] justify-between">
                {[ { label: "Projects", value: "10+" }, { label: "Experience", value: "3 Yrs" }, { label: "Tech", value: "20+" } ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center flex-1 gap-0.5 glass border border-white/5 rounded-xl py-2 landscape:py-1 px-1">
                    <span className="text-base landscape:text-sm font-thin-custom text-[var(--text)]">{stat.value}</span>
                    <span className="text-[6px] font-mono tracking-widest text-[var(--text-muted)] uppercase">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div style={{ opacity: finalOp, y: finalY }} className="flex flex-col gap-3 w-full max-w-[280px]">
                <div className="flex gap-2 w-full">
                  <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })} className="flex-1 py-2.5 landscape:py-1.5 rounded-full border border-white/10 glass text-[9px] font-light-custom text-[var(--text)] tracking-[0.2em] uppercase hover:text-[var(--accent-orange)] transition-colors">
                    Projects
                  </button>
                  <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 landscape:py-1.5 rounded-full border border-[var(--accent-orange)]/35 bg-[var(--accent-orange)]/10 text-[9px] font-light-custom text-[var(--accent-orange)] tracking-[0.2em] uppercase text-center hover:bg-[var(--accent-orange)] hover:text-black transition-colors flex items-center justify-center">
                    Resume
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP LAYOUT (>= lg) ── */}
        <div className="hidden lg:block max-w-7xl mx-auto px-12 w-full h-full relative">
          
          {/* Animated 360 Viewer */}
          <motion.div
            style={{
              left: desktopLeft,
              top: desktopTop,
              x: desktopX,
              y: desktopY,
              scale: desktopScale
            }}
            className="absolute w-[550px] z-0 pointer-events-auto flex justify-center items-end h-[80%]"
          >
            <motion.div
              animate={breathingAnimation}
              className="w-full h-full"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)"
              }}
            >
              <Profile360Viewer className="w-full h-full" />
            </motion.div>
          </motion.div>

          {/* Text Content Container */}
          <div className="flex flex-col gap-4 relative z-10 h-full justify-center">
            <motion.div style={{ opacity: roleOp, y: roleY }} className="flex items-center gap-6">
              <span className="text-[10px] font-light-custom text-[var(--text-muted)] tracking-[0.3em] uppercase">
                ABOUT
              </span>
              <div className="h-[1px] w-12 bg-[var(--text-muted)] opacity-50"></div>
            </motion.div>

            <div className="relative w-fit">
              <h1 className="font-thin-custom text-[clamp(40px,8vw,90px)] leading-[0.9] tracking-tight text-[var(--text)] whitespace-nowrap flex flex-col">
                <motion.span 
                  style={{ x: pullojuX, y: pullojuY, scale: pullojuScale, originX: 0, originY: 1 }} 
                  className="inline-block"
                >
                  Pulloju
                </motion.span>
                <motion.span 
                  style={{ x: ajithX, y: ajithY, scale: ajithScale, originX: 0, originY: 0 }} 
                  className="text-[var(--text-muted)] ml-24 inline-block"
                >
                  Ajith
                </motion.span>
              </h1>
              <motion.div style={{ opacity: roleOp }} className="absolute top-1/2 -right-[120%] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-orange)]" />
                <div className="w-24 h-[1px] bg-gradient-to-r from-[var(--accent-orange)] to-transparent opacity-50"></div>
                <span className="text-[10px] text-[var(--accent-orange)] tracking-[0.2em] uppercase font-light-custom absolute -top-4 right-0">Developer</span>
              </motion.div>
            </div>

            <motion.div style={{ opacity: roleOp, y: roleY }} className="flex items-center gap-4 text-[11px] font-light-custom text-[var(--text-muted)] uppercase tracking-[0.2em]">
              <span>Full Stack</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-30" />
              <span>AI Systems</span>
              <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-30" />
              <span>SR University</span>
            </motion.div>

            <div className="max-w-2xl text-sm sm:text-base text-[var(--text-muted)] leading-[1.8] font-light-custom border-l border-white/10 pl-6 animate-glow flex flex-col gap-2">
              <motion.span style={{ opacity: desc1Op, y: desc1Y }}>
                I'm a 3rd-year Computer Science Engineering student passionate about <span className="text-[var(--text)]">Full Stack Development</span>, <span className="text-[var(--text)]">AI solutions</span>, and modern web technologies.
              </motion.span>
              <motion.span style={{ opacity: desc2Op, y: desc2Y }}>
                I love building real-world projects, participating in hackathons, and creating impactful digital experiences.
              </motion.span>
              <motion.span style={{ opacity: finalOp, y: finalY }} className="text-[var(--accent-orange)] block mt-2 text-xs uppercase tracking-widest font-mono">
                "Building impactful products with code, creativity, and AI."
              </motion.span>
            </div>

            <motion.div style={{ opacity: skillsOp, y: skillsY }} className="flex flex-wrap gap-2 pt-1 max-w-xl">
              {["Full Stack Developer", "AI Enthusiast", "Hackathon Builder", "Problem Solver", "Open Source Learner"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 text-[9px] uppercase font-mono tracking-wider rounded-xl border border-white/5 bg-white/5 text-[var(--text-muted)] hover:border-[var(--accent-orange)]/30 hover:text-[var(--accent-orange)] transition-all duration-300">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div style={{ opacity: finalOp, y: finalY }} className="flex flex-wrap items-center gap-6 pt-2">
              <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })} className="px-6 py-2.5 rounded-full border border-white/10 glass text-[11px] font-light-custom text-[var(--text)] tracking-[0.2em] uppercase hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)]/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-pointer">
                View Projects
              </button>
              <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full border border-[var(--accent-orange)]/35 bg-[var(--accent-orange)]/10 text-[11px] font-light-custom text-[var(--accent-orange)] tracking-[0.2em] uppercase hover:bg-[var(--accent-orange)] hover:text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300">
                View Resume
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/pullojuajith" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-all duration-300" aria-label="GitHub">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com/in/pullojuajith" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-all duration-300" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/ajju_xo.xo/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-all duration-300" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Desktop Stats */}
          <motion.div style={{ opacity: statsOp, y: statsY }} className="absolute top-1/2 -translate-y-1/2 right-12 flex flex-col gap-8">
            <span className="text-[10px] font-light-custom text-[var(--text-muted)] tracking-[0.3em] uppercase text-right w-full">
              STATISTICS
            </span>
            <div className="flex flex-col gap-8 items-end mt-4">
              {[ { label: "PROJECTS", value: "10+" }, { label: "EXPERIENCE", value: "3YRS" }, { label: "TECHNOLOGIES", value: "20+" } ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-end gap-2 group relative">
                  <span className="text-3xl font-thin-custom tracking-wider text-[var(--text)]">{stat.value}</span>
                  <div className="h-[1px] w-24 bg-white/20 relative">
                     <span className="absolute top-0 right-0 w-1 h-1 bg-white -mt-[1.5px] group-hover:bg-[var(--accent-orange)] transition-colors"></span>
                  </div>
                  <span className="text-[8px] font-light-custom tracking-[0.2em] text-[var(--text-muted)] uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <motion.button
          style={{ opacity: finalOp }}
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors group z-20"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} className="animate-bounce group-hover:text-[var(--accent-orange)]" />
        </motion.button>

        </motion.div>

      </div>
    </section>
  );
}
