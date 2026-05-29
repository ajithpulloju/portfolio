"use client";
import { motion } from "framer-motion";
import { Briefcase, Code2, Trophy, Globe } from "lucide-react";

const experiences = [
  {
    id: "01",
    role: "Full Stack Developer",
    type: "Self-Driven & Client Projects",
    period: "2024 – Present",
    color: "var(--accent-orange)",
    icon: <Briefcase size={20} />,
    points: [
      "Built responsive full-stack web applications using React, Node.js, and MongoDB",
      "Developed AI-integrated tools and real-time web solutions",
      "Worked on frontend UI/UX, APIs, authentication, and deployment",
      "Learned modern development workflows using GitHub and cloud platforms",
    ],
  },
  {
    id: "02",
    role: "Hackathon Participant",
    type: "Innovation & Rapid Development",
    period: "2023 – Present",
    color: "var(--accent-purple)",
    icon: <Trophy size={20} />,
    points: [
      "Participated in university and national-level hackathons",
      "Developed “AyuLink” — an emergency healthcare support platform",
      "Collaborated with teams to build prototypes under tight deadlines",
      "Improved problem-solving, teamwork, and presentation skills",
    ],
  },
  {
    id: "03",
    role: "Open Source & Learning",
    type: "Continuous Skill Growth",
    period: "2024 – Present",
    color: "var(--accent-blue)",
    icon: <Code2 size={20} />,
    points: [
      "Actively learning advanced full-stack and AI technologies",
      "Exploring open-source projects and developer communities",
      "Practicing DSA, APIs, deployment, and scalable architecture",
      "Building personal projects to strengthen practical experience",
    ],
  },
];

const languages = [
  { name: "Telugu", level: "Native", proficiency: 100, color: "var(--accent-orange)" },
  { name: "English", level: "Intermediate", proficiency: 70, color: "var(--accent-purple)" },
  { name: "Hindi", level: "Basic", proficiency: 45, color: "var(--accent-blue)" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 top-1/2 right-0 bg-[var(--accent-blue)] opacity-8" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            07 / Experience
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-16">
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-[var(--text)]">
            WORK &{" "}
            <span className="text-gradient">GROWTH</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-24">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-white/5 p-6 transition-all duration-300 group"
              style={{ background: `linear-gradient(135deg, ${exp.color}07 0%, transparent 100%)` }}
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${exp.color}20`, color: exp.color }}
                >
                  {exp.icon}
                </div>
                <div>
                  <p
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: exp.color }}
                  >
                    {exp.id}
                  </p>
                  <h3 className="font-bold text-[var(--text)] leading-tight">{exp.role}</h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">{exp.type}</p>
                </div>
              </div>

              {/* Period badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-4"
                style={{
                  background: `${exp.color}15`,
                  color: exp.color,
                  border: `1px solid ${exp.color}35`,
                }}
              >
                {exp.period}
              </span>

              {/* Points */}
              <ul className="flex flex-col gap-2.5">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-[var(--text-muted)] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <div className="flex items-center gap-4 mb-12">
          <Globe size={16} className="text-[var(--accent-orange)]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)]">
            Languages
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl border border-white/5 p-5"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-[var(--text)]">{lang.name}</span>
                <span className="text-xs font-mono" style={{ color: lang.color }}>
                  {lang.level}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    width: `${lang.proficiency}%`,
                    background: `linear-gradient(90deg, var(--accent-orange), rgba(212, 175, 55, 0.4))`,
                    originX: 0
                  }}
                />
              </div>
              <p className="text-right text-xs font-mono text-[var(--text-muted)] mt-2">
                {lang.proficiency}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
