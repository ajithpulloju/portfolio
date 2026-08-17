"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Internship {
  id: string;
  role: string;
  company: string;
  duration: string;
  description?: string;
  skills?: string[];
  image?: string;
}

const internshipsData: Internship[] = [
  { 
    id: "int-1", 
    role: "Web Development Back-End Intern", 
    company: "1stop / Worisgo", 
    duration: "Apr 2026 - Jun 2026", 
    description: "Successfully underwent Industrial Program on Web Development Back-End.", 
    skills: ["PHP", "Backend", "Database"],
    image: "/certs/1stop-backend.jpg" 
  },
  { 
    id: "int-2", 
    role: "Web Development Front-End Intern", 
    company: "1stop / Worisgo", 
    duration: "Apr 2026 - Jun 2026", 
    description: "Successfully underwent Industrial Program on Web Development Front-End.", 
    skills: ["HTML", "CSS", "JavaScript"],
    image: "/certs/1stop-frontend.jpg" 
  },
  { 
    id: "int-3", 
    role: "Front-End Developer (Project)", 
    company: "Worisgo", 
    duration: "Jun 2026", 
    description: "Successfully completed projects on: Creation of Single Page Website, Personal Expense Tracker, HTML To Do List.", 
    skills: ["React", "UI/UX", "State Management"],
    image: "/certs/worisgo-project-frontend.jpg" 
  },
  { 
    id: "int-4", 
    role: "Back-End Developer (Project)", 
    company: "Worisgo", 
    duration: "Jun 2026", 
    description: "Successfully completed projects on: PHP Simple To-Do List, Simple Blogging Platform, Booking Management System.", 
    skills: ["PHP", "MySQL", "Server Architecture"],
    image: "/certs/worisgo-project-backend.jpg" 
  },
  { 
    id: "kits-merit", 
    role: "HACKSTORM 2026 - Certificate of Merit", 
    company: "KITSW", 
    duration: "Apr 2026", 
    image: "/certs/KITs%20Hackathon%20merit%201st.jpg" 
  },
  { 
    id: "kits-part", 
    role: "HACKSTORM 2026 - Participation", 
    company: "KITSW", 
    duration: "Apr 2026", 
    image: "/certs/KITs%20Hackathon%20participation%20.jpg" 
  },
  { 
    id: "hack-udbhava", 
    role: "UDBHAVA X '26 Hackathon", 
    company: "SR University Coding Club", 
    duration: "Apr 2026", 
    image: "/certs/UDBHAVA%20X%20Hackathon.jpg" 
  },
  { 
    id: "proj-expo", 
    role: "Cubesat - PRAGATHI PROJECT EXPO 2K26", 
    company: "SR University", 
    duration: "Mar 2026", 
    image: "/certs/Pragathi%20project%20expo.jpg" 
  },
  { 
    id: "hack-inno-2", 
    role: "INNO-VA-THON 2.0 MEGA HACKATHON", 
    company: "VNRVJIET & ISOI/IEEE", 
    duration: "Jan 2025", 
    image: "/certs/hackthon.jpg" 
  },
  { 
    id: "gaming-club", 
    role: "E-GAMING CLUB Membership", 
    company: "SR University", 
    duration: "2024-2025", 
    image: "/certs/gaming%20club.jpg" 
  }
];

export default function InternshipsSection() {
  const [selectedInt, setSelectedInt] = useState<Internship | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleInts = isExpanded ? internshipsData : internshipsData.slice(0, 6);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedInt(null);
    };
    if (selectedInt) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedInt]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedInt) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedInt]);

  const toggleExpand = () => {
    if (isExpanded) {
      // Scroll smoothly back to section top when collapsing
      const section = document.getElementById("internships");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="internships" className="relative py-28 overflow-hidden z-10">
      <div className="orb w-96 h-96 top-20 left-0 bg-[var(--accent-purple)] opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            08 / PROFESSIONAL DEVELOPMENT
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-bebas text-[clamp(40px,7vw,84px)] leading-none text-[var(--text)]">
              ACHIEVEMENTS & <span className="text-gradient">EXPERIENCE</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-lg">
              Certifications, hackathons, internships, competitions, and continuous learning milestones.
            </p>
          </div>
          
          {/* Certificate Count */}
          <div className="glass border border-white/5 rounded-2xl px-6 py-3 flex shrink-0 items-center justify-center h-fit">
            <div className="text-right">
              <p className="text-3xl font-black text-gradient-orange">
                {isExpanded ? internshipsData.length : Math.min(6, internshipsData.length)} <span className="text-xl text-[var(--text-muted)] font-normal">/ {internshipsData.length}</span>
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                Showing
              </p>
            </div>
          </div>
        </div>

        {/* Grid Layout Configuration: 3 desktop, 2 tablet, 1 mobile */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleInts.map((int) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                key={int.id}
                onClick={() => int.image ? setSelectedInt(int) : null}
                className={`glass p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--accent-orange)]/10 ${int.image ? 'cursor-pointer hover:border-[var(--accent-orange)]/30' : 'cursor-default'}`}
              >
                {/* Glow Overlay */}
                {int.image && (
                   <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[var(--accent-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                )}

                <div className="flex items-start justify-between z-10 relative">
                  {/* Small Badge/Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
                    <svg className="w-5 h-5 text-[var(--accent-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] bg-black/20 px-3 py-1 rounded-full border border-white/5">
                    {int.duration}
                  </span>
                </div>

                <div className="flex flex-col mt-2 z-10 relative flex-1">
                  <p className="text-sm text-[var(--accent-orange)] font-mono mb-1">
                    {int.company}
                  </p>
                  <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-white transition-colors duration-300">
                    {int.role}
                  </h3>
                  
                  {int.description && (
                    <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                      {int.description}
                    </p>
                  )}
                  
                  {int.skills && int.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {int.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-[10px] font-mono rounded-md bg-white/5 text-[var(--text-muted)] border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                {int.image && (
                  <div className="mt-auto pt-4 flex items-center justify-end z-10 relative">
                    <span className="text-xs font-mono tracking-wider text-[var(--accent-orange)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-x-0 translate-x-2 flex items-center gap-1">
                      VIEW FULL <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Expand Button - only show if there are more than 6 */}
        {internshipsData.length > 6 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleExpand}
              className="group relative px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 overflow-hidden rounded-full font-mono text-sm uppercase tracking-widest text-white transition-colors flex items-center gap-2"
            >
              <span className="relative z-10">
                {isExpanded ? "Show Less" : "Show More"}
              </span>
              <svg 
                className={`w-4 h-4 relative z-10 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <div className="absolute inset-0 bg-[var(--accent-orange)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedInt && selectedInt.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedInt(null)}
          >
            {/* Modal Backdrop Blur */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center max-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-md"
                onClick={() => setSelectedInt(null)}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 md:p-10 w-full h-full flex flex-col gap-6 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{selectedInt.role}</h3>
                    <p className="text-[var(--text-muted)] font-mono text-sm mt-1">{selectedInt.company} — {selectedInt.duration}</p>
                  </div>
                  <a
                    href={selectedInt.image!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-mono text-xs uppercase tracking-widest transition-all hover:scale-105"
                  >
                    Open Original
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="relative w-full rounded-xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center p-2" style={{ minHeight: "50vh", maxHeight: "70vh" }}>
                  {selectedInt.image!.endsWith('.pdf') ? (
                    <iframe 
                      src={selectedInt.image!} 
                      className="w-full h-full min-h-[60vh] rounded-xl bg-white" 
                      title={selectedInt.role} 
                    />
                  ) : (
                    <Image
                      src={selectedInt.image!}
                      alt={selectedInt.role}
                      width={1200}
                      height={800}
                      className="object-contain w-full h-full max-h-[70vh]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
