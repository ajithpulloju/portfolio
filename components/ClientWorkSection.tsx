"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "ProteinPagal.in",
    subtitle: "Freelance Client Project",
    description:
      "A modern protein-focused e-commerce platform designed for meal subscriptions, online ordering, customer management, and business growth.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Supabase"],
    color: "#e63946", // Red accent
    icon: "💪",
    featured: true,
    github: "https://github.com/ajithpulloju/proteinpagal",
    live: "https://proteinpagal.in",
  },
  {
    id: "02",
    title: "Digital Wedding Invitation",
    subtitle: "Kamalakar weds Akila",
    description: "Designed and developed a custom, interactive digital wedding invitation platform for a client. Features elegant UI animations and responsive layout.",
    tags: ["React", "Tailwind CSS", "Vercel"],
    color: "#e879f9", // Hex for accent-pink
    icon: "💍",
    featured: true,
    github: "https://github.com/ajithpulloju/wedding-invitation-",
    live: "https://kamalakarwedsakila.vercel.app/",
  }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function ClientWorkSection() {
  return (
    <section id="client-work" className="relative py-28 overflow-hidden">
      <div className="orb w-[500px] h-[500px] -top-20 right-0 bg-[var(--accent-purple)] opacity-8" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            05 / CLIENT PROJECTS
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-[var(--text)]">
            FREELANCE{" "}
            <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] max-w-sm">
            Real-world solutions crafted for businesses, startups, and independent clients.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative glass rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${project.color}06 0%, transparent 60%)`,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  boxShadow: `0 0 60px ${project.color}30, inset 0 0 60px ${project.color}05`,
                }}
              />

              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                  opacity: 0,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              <div className="relative p-7 flex flex-col gap-4 h-full">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: `${project.color}20` }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: `${project.color}80` }}
                  >
                    {project.id}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-bold text-[var(--text)] leading-tight">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm font-medium mt-0.5"
                    style={{ color: project.color }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-mono rounded-lg"
                      style={{
                        background: `${project.color}15`,
                        color: `${project.color}CC`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent-orange)] rounded-xl border border-white/5 hover:border-[var(--accent-orange)]/30 hover:bg-[var(--accent-orange)]/5 hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.2)]"
                      title="View on GitHub"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{ "--project-color": project.color } as React.CSSProperties}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-mono text-[var(--project-color)] hover:text-[var(--accent-orange)] rounded-xl border border-[var(--project-color)]/10 hover:border-[var(--accent-orange)]/30 hover:bg-[var(--accent-orange)]/5 hover:scale-[1.03] transition-all duration-300 hover:shadow-[0_4px_20px_-5px_rgba(212,175,55,0.2)]"
                      title="View live"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
