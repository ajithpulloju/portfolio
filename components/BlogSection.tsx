"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    id: "01",
    title: "Building AyuLink: How I Created a Rural Healthcare System in 48 Hours",
    excerpt:
      "The story of how a hackathon idea became a full rural emergency healthcare system connecting IoT hardware to hospital cloud with zero WiFi dependency.",
    date: "April 2025",
    readTime: "8 min read",
    tag: "Hackathon",
    color: "var(--accent-orange)",
  },
  {
    id: "02",
    title: "AI Diet Planner: From Dataset to Production ML Pipeline",
    excerpt:
      "A deep dive into building an end-to-end machine learning application — from data preprocessing with Pandas to deploying with FastAPI and React.",
    date: "March 2025",
    readTime: "12 min read",
    tag: "AI / ML",
    color: "var(--accent-purple)",
  },
  {
    id: "03",
    title: "CubeSat Simulation: Orbital Mechanics with Python & SciPy",
    excerpt:
      "How I used Python, NumPy, SciPy and Plotly to simulate a modular CubeSat satellite's orbital mechanics, telemetry, and power systems.",
    date: "February 2025",
    readTime: "10 min read",
    tag: "Space Tech",
    color: "var(--accent-blue)",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 top-0 right-0 bg-[var(--accent-purple)] opacity-8" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            10 / Blog
          </span>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-bebas text-[clamp(48px,8vw,96px)] leading-none text-[var(--text)]">
            LATEST{" "}
            <span className="text-gradient">WRITES</span>
          </h2>
          <button className="flex items-center gap-2 text-sm font-mono text-[var(--accent-orange)] hover:gap-4 transition-all duration-300">
            View All Posts <ArrowRight size={16} />
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-3xl border border-white/5 overflow-hidden cursor-pointer transition-all duration-500"
              style={{ background: `linear-gradient(135deg, ${post.color}07 0%, transparent 100%)` }}
            >
              {/* Top accent */}
              <div
                className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }}
              />

              <div className="p-6 flex flex-col gap-4">
                {/* Tag */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: `${post.color}20`,
                      color: post.color,
                      border: `1px solid ${post.color}35`,
                    }}
                  >
                    {post.tag}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)]">{post.id}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-[var(--text)] leading-snug group-hover:text-white transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[var(--text-muted)] group-hover:translate-x-1.5 transition-transform duration-300"
                    style={{ color: post.color }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
