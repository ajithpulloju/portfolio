"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Download, Send } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "pullojuajith@gmail.com",
    href: "mailto:pullojuajith@gmail.com",
    color: "var(--accent-orange)",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 7416945469",
    href: "tel:+917416945469",
    color: "var(--accent-purple)",
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Warangal, India",
    href: "https://maps.google.com/?q=Warangal,India",
    color: "var(--accent-blue)",
  },
];

const socialLinks = [
  {
    icon: <Linkedin size={22} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pullojuajith",
    color: "#0A66C2",
  },
  {
    icon: <Github size={22} />,
    label: "GitHub",
    href: "https://github.com/pullojuajith",
    color: "var(--accent-orange)",
  },
  {
    icon: <Instagram size={22} />,
    label: "Instagram",
    href: "https://www.instagram.com/ajju_xo.xo/",
    color: "#E1306C",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-20 left-1/2 -translate-x-1/2 bg-[var(--accent-orange)] opacity-10" />
      <div className="orb w-80 h-80 bottom-0 right-0 bg-[var(--accent-purple)] opacity-10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            08 / Contact
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-16">
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-[var(--text)]">
            LET&apos;S{" "}
            <span className="text-gradient">CONNECT</span>
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] max-w-lg">
            Open to freelance projects, collaborations, hackathons or just a great tech conversation. Drop a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Contact Links */}
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                variants={itemVariants}
                href={link.href}
                target={link.label === "Location" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-5 group glass rounded-2xl border border-white/5 p-5 transition-all duration-300 hover:border-[var(--accent-orange)] hover:shadow-[0_0_25px_var(--glow-orange)]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${link.color}20`, color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
                    {link.label}
                  </p>
                  <p className="font-semibold text-[var(--text)] mt-0.5 group-hover:text-[var(--accent-orange)] transition-colors">
                    {link.value}
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Send size={16} style={{ color: link.color }} />
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 glass border border-white/5 rounded-2xl px-4 py-2.5 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--text)] transition-all duration-300 group"
                  style={{"--hover-color": s.color} as React.CSSProperties}
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-4">
              <a
                href="mailto:pullojuajith@gmail.com"
                className="btn-gradient flex items-center gap-2 px-7 py-3 rounded-xl text-white font-semibold text-sm shadow-lg hover:shadow-[0_0_30px_var(--glow-orange)] transition-all duration-300"
              >
                <span>Hire Me</span>
                <Send size={16} />
              </a>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/10 hover:border-[var(--accent-orange)] text-[var(--text)] font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-orange)]"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-3xl border border-white/5 p-8"
          >
            <h3 className="font-bold text-xl text-[var(--text)] mb-6">Send a Message</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-orange)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-orange)] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-orange)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-orange)] transition-all resize-none"
                />
              </div>
              <button className="btn-gradient w-full py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_30px_var(--glow-orange)] transition-all duration-300 mt-2">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
