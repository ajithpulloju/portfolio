"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image?: string;
  grade?: string;
  hours?: string;
  certId?: string;
  description?: string;
  skills?: string[];
}

const certificationsData: Certification[] = [
  { 
    id: "claude-101", 
    title: "Claude 101", 
    issuer: "Anthropic", 
    date: "Aug 2026", 
    image: "/certs/claude-101.jpg", 
    description: "Successfully completed the Claude 101 certification.",
    skills: ["AI", "Prompt Engineering", "Claude"]
  },
  { 
    id: "power-bi", 
    title: "Power BI for Beginners", 
    issuer: "Simplilearn & Microsoft", 
    date: "Jul 2026", 
    image: "/certs/power-bi.jpg", 
    certId: "10475876",
    description: "Certificate code: 10475876. Successfully completed the online course Power BI for Beginners.",
    skills: ["Power BI", "Data Analysis", "Visualization"]
  },
  { id: "dsa", title: "CS201: Elementary Data Structures", issuer: "Saylor University", date: "Apr 14, 2026", image: "/certs/DSA.jpg", grade: "88.71%", hours: "36 Hours", certId: "8313450122PO" },
  { id: "ibm-hci", title: "User Experience Design Fundamentals", issuer: "IBM / SkillsBuild", date: "Apr 2026", image: "/certs/HCI%20IBM%20certificate.jpg" },
  { id: "cyber-sec", title: "CS260: Intro to Cryptography and Network Security", issuer: "Saylor Academy", date: "Apr 2026", image: "/certs/cyber%20security.jpg" },
  { id: "3d-print", title: "Additive Manufacturing", issuer: "OpenLearn", date: "Feb 2026", image: "/certs/3d%20printing.jpg" },
  { id: "ccna-1", title: "CCNA: Introduction to Networks (Completion)", issuer: "Cisco Networking", date: "Nov 2025", image: "/certs/CCNAITNUpdated20251123-31-5mgukn.jpg" },
  { id: "ccna-2", title: "CCNA: Introduction to Networks (Certificate)", issuer: "Cisco Networking", date: "Nov 2025", image: "/certs/CCNA-_Introduction_to_Networks_certificate_2403a51366-sru-edu-in_156a1f0f-a767-4141-8ae2-899a6fd1f8fc.jpg" },
  { id: "aws-dev", title: "AWS Cloud Developing", issuer: "AWS Academy", date: "Nov 2025", image: "/certs/AWS_Academy_Graduate___Cloud_Developing___Training_Badge_Badge20251114-33-docek3.jpg" },
  { id: "aws-found", title: "AWS Cloud Foundations", issuer: "AWS Academy", date: "Nov 2025", image: "/certs/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251110-31-13uivc.jpg" },
  { id: "aws-sec", title: "AWS Cloud Security Builder", issuer: "AWS Academy", date: "Nov 2025", image: "/certs/AWS_Academy_Graduate___Cloud_Security_Builder___Training_Badge_Badge20251110-32-uh8er1.jpg" },
  { id: "aws-web", title: "AWS Cloud Web App Builder", issuer: "AWS Academy", date: "Nov 2025", image: "/certs/AWS_Academy_Graduate___Cloud_Web_Application_Builder___Training_Badge_Badge20251110-32-swh8zv.jpg" },
  { id: "ai-code-1", title: "Introduction to Git and GitHub", issuer: "Google / Coursera", date: "Oct 2025", image: "/certs/AI-Assist%20code%201.jpg" },
  { id: "ai-code-2", title: "Prompt Engineering", issuer: "Infosys Springboard", date: "Oct 2025", image: "/certs/AI-Assist%20code%202.jpg" },
  { id: "ai-code-3", title: "GitHub Copilot for Developers", issuer: "Infosys Springboard", date: "Oct 2025", image: "/certs/AI-Assist%20code%203.jpg" },
  { id: "ai-code-4", title: "Build Generative AI Apps with No-Code Tools", issuer: "Udemy", date: "Oct 2025", image: "/certs/AI-Assist%20code%204.jpg" },
  { id: "ai-code-5", title: "GenAI for Professionals: 10x Your Productivity", issuer: "Udemy", date: "Oct 2025", image: "/certs/AI-assist%20code%205.jpg" },
  { id: "dav", title: "CS250: Python for Data Science", issuer: "Saylor Academy", date: "Oct 2025", image: "/certs/DAV.jpg" },
  { id: "dms", title: "CS202: Discrete Structures", issuer: "Saylor Academy", date: "Apr 2025", image: "/certs/DMS.jpg" },
  { id: "wolf-matrix", title: "Become a Linear Algebra Master", issuer: "Udemy", date: "Mar 2025", image: "/certs/matrix%201.jpg" },
  { id: "game-design", title: "PHYS101: Introduction to Mechanics", issuer: "Saylor Academy", date: "Mar 2025", image: "/certs/game%20design.jpg" },
  { id: "game-design-2", title: "Elastic Collisions in Particle Physics", issuer: "MindLuster", date: "Mar 2025", image: "/certs/game%20design%202.jpg" },
  { id: "os", title: "Introduction to Unix", issuer: "Infosys Springboard", date: "Mar 2025", image: "/certs/os.jpg" },
  { id: "wolf-diff", title: "Differential Equations - Level 1", issuer: "Wolfram U", date: "Nov 2024", image: "/certs/defer%20maths.jpg" },
  { id: "wolf-calc-1", title: "Introduction to Calculus", issuer: "Wolfram U", date: "Oct 2024", image: "/certs/calculus%201.jpg" },
  { id: "wolf-calc-intro", title: "Calculus - Level 1 Certificate", issuer: "Wolfram U", date: "Oct 2024", image: "/certs/calculus%202.jpg" }
];


export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleCerts = isExpanded ? certificationsData : certificationsData.slice(0, 6);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedCert]);

  const toggleExpand = () => {
    if (isExpanded) {
      // Scroll smoothly back to section top when collapsing
      const section = document.getElementById("certifications");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="certifications" className="relative py-28 overflow-hidden z-10">
      <div className="orb w-96 h-96 top-20 right-0 bg-[var(--accent-orange)] opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            07 / Certifications
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between flex-wrap gap-8">
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-[var(--text)]">
            MY <span className="text-gradient">CERTS</span>
          </h2>
          
          {/* Certificate Count */}
          <div className="glass border border-white/5 rounded-2xl px-6 py-3 flex shrink-0 items-center justify-center">
            <div className="text-right">
              <p className="text-3xl font-black text-gradient-orange">
                {isExpanded ? certificationsData.length : 6} <span className="text-xl text-[var(--text-muted)] font-normal">/ {certificationsData.length}</span>
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
            {visibleCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                key={cert.id}
                onClick={() => cert.image ? setSelectedCert(cert) : null}
                className={`glass p-6 rounded-2xl border border-white/5 flex flex-col gap-4 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--accent-orange)]/10 ${cert.image ? 'cursor-pointer hover:border-[var(--accent-orange)]/30' : 'cursor-default'}`}
              >
                {/* Glow Overlay */}
                {cert.image && (
                   <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-[var(--accent-orange)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                )}

                <div className="flex items-start justify-between z-10 relative">
                  {/* Small Badge/Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center shrink-0 shadow-inner">
                    <svg className="w-5 h-5 text-[var(--accent-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-[var(--text-muted)] bg-black/20 px-3 py-1 rounded-full border border-white/5">
                    {cert.date}
                  </span>
                </div>

                <div className="flex flex-col mt-2 z-10 relative flex-1">
                  <p className="text-sm text-[var(--accent-orange)] font-mono mb-1">
                    {cert.issuer}
                  </p>
                  <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-white transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  {cert.description && (
                    <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cert.skills.map((skill) => (
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
                
                {cert.image && (
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

        {/* Toggle Expand Button */}
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
            {/* Soft Glow internally on hover */}
            <div className="absolute inset-0 bg-[var(--accent-orange)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
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
              onClick={(e) => e.stopPropagation()} // exact click to avoid closing
            >
              {/* Close Button */}
              <button
                type="button"
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-md"
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 md:p-10 w-full h-full flex flex-col gap-6 relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{selectedCert.title}</h3>
                    <p className="text-[var(--text-muted)] font-mono text-sm mt-1">{selectedCert.issuer} — {selectedCert.date}</p>
                    {/* Extra details badges: grade, hours, certId */}
                    {(selectedCert.grade || selectedCert.hours || selectedCert.certId) && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {selectedCert.grade && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-orange)]/10 border border-[var(--accent-orange)]/30 text-[var(--accent-orange)] font-mono text-xs">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Grade: {selectedCert.grade}
                          </span>
                        )}
                        {selectedCert.hours && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {selectedCert.hours}
                          </span>
                        )}
                        {selectedCert.certId && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted)] font-mono text-xs">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg>
                            ID: {selectedCert.certId}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <a
                    href={selectedCert.image!}
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
                  <Image
                    src={selectedCert.image!}
                    alt={selectedCert.title}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full max-h-[70vh]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
