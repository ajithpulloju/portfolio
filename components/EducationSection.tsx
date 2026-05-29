"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: "01",
    degree: "B.Tech – Computer Science Engineering",
    institution: "SR University",
    location: "Warangal, Telangana",
    period: "3rd Year (2026)",
    status: "Current",
    color: "var(--accent-orange)",
    icon: "🎓",
    description:
      "Specializing in Full Stack Development & AI Systems. Actively building next-generation web platforms, participating in national hackathons, and integrating AI microservices.",
  },
  {
    id: "02",
    degree: "Intermediate — MPC",
    institution: "Govt Junior College",
    location: "Hanamkonda, Telangana",
    period: "2022 – 2024",
    status: "Completed",
    color: "var(--accent-purple)",
    icon: "📚",
    description:
      "Mathematics, Physics & Chemistry stream. Built strong analytical and problem-solving foundation that drives my engineering mindset.",
  },
  {
    id: "03",
    degree: "Secondary School Certificate (SSC)",
    institution: "St. Joseph's High School",
    location: "Warangal, Telangana",
    period: "Completed 2022",
    status: "Completed",
    color: "var(--accent-blue)",
    icon: "🏫",
    description:
      "Completed SSC with distinction. Developed early interest in technology and mathematics during school years.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 top-20 right-0 bg-[var(--accent-purple)] opacity-8" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            05 / Education
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-10 lg:mb-16">
          <h2 className="font-bebas text-[clamp(40px,8vw,96px)] leading-none text-[var(--text)]">
            ACADEMIC{" "}
            <span className="text-gradient">JOURNEY</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-5 lg:gap-8">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[var(--accent-orange)] via-[var(--accent-purple)] to-transparent hidden sm:block" />

          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-6 sm:gap-10"
            >
              {/* Dot */}
              <div className="relative hidden sm:flex flex-col items-center pt-1">
                <div
                  className="timeline-dot"
                  style={{ borderColor: edu.color, boxShadow: `0 0 14px ${edu.color}55` }}
                />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 6, scale: 1.01 }}
                className="flex-1 glass rounded-2xl lg:rounded-3xl border border-white/5 p-5 sm:p-8 group transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${edu.color}06 0%, transparent 100%)`,
                }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-[var(--text)] leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: edu.color }}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${edu.color}20`,
                      color: edu.color,
                      border: `1px solid ${edu.color}40`,
                    }}
                  >
                    {edu.status}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs font-mono text-[var(--text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {edu.location}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
