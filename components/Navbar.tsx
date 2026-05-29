"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(href.replace("#", ""));
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-thin-custom text-3xl tracking-[0.2em] text-[var(--text)] whitespace-nowrap"
        >
          PA<span className="text-[var(--accent-orange)]">.</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:text-[var(--text)] relative group ${
                active === link.href.replace("#", "")
                  ? "text-[var(--text)] font-semibold"
                  : "text-[var(--text-muted)] font-medium"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[var(--text)] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggle}
            className="text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={14} className="opacity-70" />
            ) : (
              <Moon size={14} className="opacity-70" />
            )}
          </button>

          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-orange)] border border-[var(--accent-orange)]/30 px-5 py-2 hover:bg-[var(--accent-orange)] hover:text-black transition-colors"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[var(--text-muted)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent-orange)] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-xl btn-gradient text-white text-sm font-semibold"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
}
