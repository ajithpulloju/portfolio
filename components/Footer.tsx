"use client";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-16 border-t border-white/5 overflow-hidden">
      <div className="orb w-80 h-80 -bottom-40 left-1/2 -translate-x-1/2 bg-[var(--accent-orange)] opacity-5" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <span className="font-bebas text-4xl text-gradient">PA.</span>
            <p className="text-xs font-mono text-[var(--text-muted)]">
              Pulloju Ajith · Full Stack Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/pullojuajith", label: "GitHub" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/pullojuajith", label: "LinkedIn" },
              { icon: <Instagram size={18} />, href: "https://www.instagram.com/ajju_xo.xo/", label: "Instagram" },
              { icon: <Mail size={18} />, href: "mailto:pullojuajith@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-orange)] hover:border-[var(--accent-orange)] hover:shadow-[0_0_15px_var(--glow-orange)] transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_var(--glow-orange)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[var(--text-muted)]">
            © 2025 Pulloju Ajith. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-[var(--text-muted)] text-center sm:text-left">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
