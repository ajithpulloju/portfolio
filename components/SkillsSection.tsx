"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "FRONTEND",
    color: "var(--accent-orange)", // Gold
    icon: "◇",
    skills: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    color: "var(--accent-blue)", // Silver
    icon: "◇",
    skills: ["Node.js", "Express.js", "FastAPI", "MongoDB", "SQL", "REST APIs"],
  },
  {
    title: "PROGRAMMING",
    color: "var(--text)", 
    icon: "◇",
    skills: ["Python", "JavaScript", "C", "Ruby"],
  },
  {
    title: "AI / ML",
    color: "var(--accent-purple)", // Medium Gold
    icon: "◇",
    skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "SciPy", "Plotly"],
  },
  {
    title: "TOOLS",
    color: "var(--accent-blue)",
    icon: "◇",
    skills: ["Git", "GitHub", "Postman", "Figma", "Power BI", "Jupyter", "Vercel", "LeetCode"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 bottom-0 right-1/4 bg-[var(--accent-blue)] opacity-8" />

      <div className="max-w-7xl mx-auto px-5 lg:px-12 relative">
        {/* Subtle decorative grid/lines */}
        <div className="absolute top-0 right-[10%] w-[1px] h-32 bg-gradient-to-b from-white/10 to-transparent"></div>

        {/* Label */}
        <div className="flex items-center gap-6 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-orange)]">
            03 / SKILLS & EXPERTISE
          </span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        <div className="mb-12 lg:mb-20">
          <h2 className="font-thin-custom text-[clamp(36px,8vw,100px)] leading-[0.9] tracking-tight text-[var(--text)]">
            Technology
            <br />
            <span className="text-[var(--text-muted)] ml-6 sm:ml-24">Stack</span>
          </h2>
        </div>

        {/* Sleek Logo Showcase Marquee */}
        <div className="w-full overflow-hidden py-10 mb-20 relative border-y border-white/5 bg-white/[0.01]">
          {/* Subtle Side Fades */}
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee whitespace-nowrap min-w-full">
            {/* First Set */}
            {[
              { name: "React", color: "#61DAFB", svg: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 fill-none stroke-current"><circle r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
              { name: "Node.js", color: "#339933", svg: <svg viewBox="0 0 256 293" className="w-6 h-6 fill-current"><path d="M239.5 69.8L139.7 12.2c-7.1-4.1-16.2-4.1-23.3 0L16.5 69.8c-7.1 4.1-11.5 11.7-11.5 19.9v115.1c0 8.2 4.4 15.8 11.5 19.9l99.8 57.6c7.1 4.1 16.2 4.1 23.3 0l99.8-57.6c7.1-4.1 11.5-11.7 11.5-19.9V89.7c.1-8.2-4.3-15.8-11.4-19.9zm-22.9 123.6c0 1.2-.6 2.3-1.7 2.9l-77.9 45c-1 1-2.4 1-3.5 0l-77.9-45c-1-.6-1.7-1.7-1.7-2.9V99.7c0-1.2.6-2.3 1.7-2.9l77.9-45c1-1 2.4-1 3.5 0l77.9 45c1 .6 1.7 1.7 1.7 2.9v93.7z"/></svg> },
              { name: "Python", color: "#3776AB", svg: <svg viewBox="0 0 110 110" className="w-6 h-6 fill-current"><path d="M55 2C32.1 2 33.7 11.8 33.7 11.8v10.3h22v3.1H27.9C15.6 25.2 6 34.5 6 47.9c0 14.8 10.9 15.6 10.9 15.6h9.3v-13c0-8.5 7.1-15.6 15.6-15.6H74c8.5 0 14 7.1 14 15.6v33.7C88 95 78.4 104 66.1 104c-13.4 0-14-11.7-14-11.7v-9.3H30c-8.5 0-15.6-7.1-15.6-15.6v-25c0-8.5 7.1-15.6 15.6-15.6h48.3c8.5 0 15.6 7.1 15.6 15.6v13c0 8.5-7.1 15.6-15.6 15.6H58.3v-3.1h27.9c12.3 0 21.8-9.3 21.8-22.7C108 30.5 97.1 29.7 97.1 29.7h-9.3v13c0 8.5-7.1 15.6-15.6 15.6H41c-8.5 0-14-7.1-14-15.6V19.1c0-10.7 9.6-17.1 21.8-17.1C55 2 55 2 55 2z"/></svg> },
              { name: "MongoDB", color: "#47A248", svg: <svg viewBox="0 0 256 512" className="w-6 h-6 fill-current"><path d="M191.1 254.4c0-50.6-28.7-88.7-41.9-106.3-10.6-14-19.4-25.3-21.2-30.8V356c3.1-6.1 13.9-19.1 25.8-34.9 18.2-24 37.3-51.5 37.3-66.7zM128 0C68.9 99 23 189 23 256c0 67 45.9 157 105 256 59.1-99 105-189 105-256C233 189 187.1 99 128 0zm0 464c-35-59.5-83-149.2-83-208 0-58.8 48-148.5 83-208V464z"/></svg> },
              { name: "Tailwind CSS", color: "#06B6D4", svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> },
              { name: "TypeScript", color: "#3178C6", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M0 0h256v256H0z" fill="#3178C6"/><path d="M136.6 100.8H96.8v88h-18v-88H39v-15.6h97.6v15.6zm72 43.6c0 16-10.4 28.2-28.8 28.2-13.6 0-24.4-6.4-28-16.6l15.6-9c2.4 6 7.2 9.6 12.6 9.6 7.2 0 10.8-3.6 10.8-9.4 0-5.2-4-7.6-12.8-11.4-12.8-5.4-23.2-11.4-23.2-25.2 0-14.2 10.6-25 26.6-25 12.4 0 21.6 5 25.6 14.6l-14.8 9c-2.4-5.2-6.4-7.6-11-7.6-6.2 0-9 3.6-9 8.2 0 5 3 6.8 12 10.8 14.6 6 24.2 11.8 24.2 26.8z" fill="#fff"/></svg> },
              { name: "JavaScript", color: "#F7DF1E", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M0 0h256v256H0z" fill="#F7DF1E"/><path d="M123.6 166.4c0 14-8.8 23.2-22.4 23.2-12 0-19.6-6-23.2-15l15.6-9.2c2.4 5.2 6 8.2 9.6 8.2 5.2 0 7.8-2.6 7.8-7.8V98.8h12.6v67.6zm78 6.4c0 14.2-9.6 23.2-25.6 23.2-12.6 0-21.4-5.6-25-14.6l15.2-9c2.4 5.2 6.2 7.6 10.2 7.6 5.8 0 8.6-2.6 8.6-7.8 0-4.6-2.6-6.2-11.2-9.8-12-5-20.2-9.8-20.2-22.2 0-12.8 9.6-21.8 23.2-21.8 11.2 0 18.6 4.6 22 12.8l-14.2 8.6c-2-4.4-4.8-6.2-8.2-6.2-4.6 0-6.8 2.6-6.8 6.6 0 4 2 5.4 10.2 9 12.2 5.2 19.8 9.8 19.8 22.8z" fill="#000"/></svg> },
              { name: "Figma", color: "#F24E1E", svg: <svg viewBox="0 0 256 384" className="w-6 h-6 fill-current"><path d="M128 0a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64zm0 128a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64zM64 320a64 64 0 0 0 64 64 64 64 0 0 0 64-64V256H64v64zM192 128a64 64 0 0 0 64 64 64 64 0 0 0-64 64V128z" fill="#1ABC9C"/><path d="M64 64a64 64 0 0 0 64 64V0a64 64 0 0 0-64 64zm0 128a64 64 0 0 0 64 64v-128a64 64 0 0 0-64 64z" fill="#F24E1E"/></svg> },
              { name: "Git", color: "#F05032", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M249.2 119.8L136.2 6.8c-9-9-23.7-9-32.8 0L76.8 33.3l33.8 33.8c7.5-2.5 16.1-.7 22 5.2 5.9 5.9 7.7 14.5 5.2 22l33.8 33.8c7.5-2.5 16.1-.7 22 5.2 9 9 9 23.7 0 32.8-9 9-23.7 9-32.8 0-5.9-5.9-7.7-14.5-5.2-22L122 110.2c2.5-7.5.7-16.1-5.2-22-5.9-5.9-14.5-7.7-22-5.2L61 49.2 6.8 103.4c-9 9-9 23.7 0 32.8l113 113c9 9 23.7 9 32.8 0l116.6-116.6c9-9.1 9-23.8 0-32.8z"/></svg> }
            ].map((tech, idx) => (
              <div 
                key={idx} 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group cursor-pointer mr-12"
                style={{ "--hover-glow": tech.color } as React.CSSProperties}
              >
                <div className="transition-transform group-hover:scale-110 duration-300">{tech.svg}</div>
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors tracking-widest">{tech.name}</span>
              </div>
            ))}

            {/* Repeated Set for Infinite Effect */}
            {[
              { name: "React", color: "#61DAFB", svg: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6 fill-none stroke-current"><circle r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
              { name: "Node.js", color: "#339933", svg: <svg viewBox="0 0 256 293" className="w-6 h-6 fill-current"><path d="M239.5 69.8L139.7 12.2c-7.1-4.1-16.2-4.1-23.3 0L16.5 69.8c-7.1 4.1-11.5 11.7-11.5 19.9v115.1c0 8.2 4.4 15.8 11.5 19.9l99.8 57.6c7.1 4.1 16.2 4.1 23.3 0l99.8-57.6c7.1-4.1 11.5-11.7 11.5-19.9V89.7c.1-8.2-4.3-15.8-11.4-19.9zm-22.9 123.6c0 1.2-.6 2.3-1.7 2.9l-77.9 45c-1 1-2.4 1-3.5 0l-77.9-45c-1-.6-1.7-1.7-1.7-2.9V99.7c0-1.2.6-2.3 1.7-2.9l77.9-45c1-1 2.4-1 3.5 0l77.9 45c1 .6 1.7 1.7 1.7 2.9v93.7z"/></svg> },
              { name: "Python", color: "#3776AB", svg: <svg viewBox="0 0 110 110" className="w-6 h-6 fill-current"><path d="M55 2C32.1 2 33.7 11.8 33.7 11.8v10.3h22v3.1H27.9C15.6 25.2 6 34.5 6 47.9c0 14.8 10.9 15.6 10.9 15.6h9.3v-13c0-8.5 7.1-15.6 15.6-15.6H74c8.5 0 14 7.1 14 15.6v33.7C88 95 78.4 104 66.1 104c-13.4 0-14-11.7-14-11.7v-9.3H30c-8.5 0-15.6-7.1-15.6-15.6v-25c0-8.5 7.1-15.6 15.6-15.6h48.3c8.5 0 15.6 7.1 15.6 15.6v13c0 8.5-7.1 15.6-15.6 15.6H58.3v-3.1h27.9c12.3 0 21.8-9.3 21.8-22.7C108 30.5 97.1 29.7 97.1 29.7h-9.3v13c0 8.5-7.1 15.6-15.6 15.6H41c-8.5 0-14-7.1-14-15.6V19.1c0-10.7 9.6-17.1 21.8-17.1C55 2 55 2 55 2z"/></svg> },
              { name: "MongoDB", color: "#47A248", svg: <svg viewBox="0 0 256 512" className="w-6 h-6 fill-current"><path d="M191.1 254.4c0-50.6-28.7-88.7-41.9-106.3-10.6-14-19.4-25.3-21.2-30.8V356c3.1-6.1 13.9-19.1 25.8-34.9 18.2-24 37.3-51.5 37.3-66.7zM128 0C68.9 99 23 189 23 256c0 67 45.9 157 105 256 59.1-99 105-189 105-256C233 189 187.1 99 128 0zm0 464c-35-59.5-83-149.2-83-208 0-58.8 48-148.5 83-208V464z"/></svg> },
              { name: "Tailwind CSS", color: "#06B6D4", svg: <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.002 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg> },
              { name: "TypeScript", color: "#3178C6", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M0 0h256v256H0z" fill="#3178C6"/><path d="M136.6 100.8H96.8v88h-18v-88H39v-15.6h97.6v15.6zm72 43.6c0 16-10.4 28.2-28.8 28.2-13.6 0-24.4-6.4-28-16.6l15.6-9c2.4 6 7.2 9.6 12.6 9.6 7.2 0 10.8-3.6 10.8-9.4 0-5.2-4-7.6-12.8-11.4-12.8-5.4-23.2-11.4-23.2-25.2 0-14.2 10.6-25 26.6-25 12.4 0 21.6 5 25.6 14.6l-14.8 9c-2.4-5.2-6.4-7.6-11-7.6-6.2 0-9 3.6-9 8.2 0 5 3 6.8 12 10.8 14.6 6 24.2 11.8 24.2 26.8z" fill="#fff"/></svg> },
              { name: "JavaScript", color: "#F7DF1E", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M0 0h256v256H0z" fill="#F7DF1E"/><path d="M123.6 166.4c0 14-8.8 23.2-22.4 23.2-12 0-19.6-6-23.2-15l15.6-9.2c2.4 5.2 6 8.2 9.6 8.2 5.2 0 7.8-2.6 7.8-7.8V98.8h12.6v67.6zm78 6.4c0 14.2-9.6 23.2-25.6 23.2-12.6 0-21.4-5.6-25-14.6l15.2-9c2.4 5.2 6.2 7.6 10.2 7.6 5.8 0 8.6-2.6 8.6-7.8 0-4.6-2.6-6.2-11.2-9.8-12-5-20.2-9.8-20.2-22.2 0-12.8 9.6-21.8 23.2-21.8 11.2 0 18.6 4.6 22 12.8l-14.2 8.6c-2-4.4-4.8-6.2-8.2-6.2-4.6 0-6.8 2.6-6.8 6.6 0 4 2 5.4 10.2 9 12.2 5.2 19.8 9.8 19.8 22.8z" fill="#000"/></svg> },
              { name: "Figma", color: "#F24E1E", svg: <svg viewBox="0 0 256 384" className="w-6 h-6 fill-current"><path d="M128 0a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64zm0 128a64 64 0 0 0-64 64 64 64 0 0 0 64 64 64 64 0 0 0 64-64 64 64 0 0 0-64-64zM64 320a64 64 0 0 0 64 64 64 64 0 0 0 64-64V256H64v64zM192 128a64 64 0 0 0 64 64 64 64 0 0 0-64 64V128z" fill="#1ABC9C"/><path d="M64 64a64 64 0 0 0 64 64V0a64 64 0 0 0-64 64zm0 128a64 64 0 0 0 64 64v-128a64 64 0 0 0-64 64z" fill="#F24E1E"/></svg> },
              { name: "Git", color: "#F05032", svg: <svg viewBox="0 0 256 256" className="w-6 h-6 fill-current"><path d="M249.2 119.8L136.2 6.8c-9-9-23.7-9-32.8 0L76.8 33.3l33.8 33.8c7.5-2.5 16.1-.7 22 5.2 5.9 5.9 7.7 14.5 5.2 22l33.8 33.8c7.5-2.5 16.1-.7 22 5.2 9 9 9 23.7 0 32.8-9 9-23.7 9-32.8 0-5.9-5.9-7.7-14.5-5.2-22L122 110.2c2.5-7.5.7-16.1-5.2-22-5.9-5.9-14.5-7.7-22-5.2L61 49.2 6.8 103.4c-9 9-9 23.7 0 32.8l113 113c9 9 23.7 9 32.8 0l116.6-116.6c9-9.1 9-23.8 0-32.8z"/></svg> }
            ].map((tech, idx) => (
              <div 
                key={idx + 100} 
                className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 group cursor-pointer mr-12"
                style={{ "--hover-glow": tech.color } as React.CSSProperties}
              >
                <div className="transition-transform group-hover:scale-110 duration-300" style={{ color: tech.color }}>{tech.svg}</div>
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors tracking-widest">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Grid */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-16"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <span className="text-xs text-[var(--accent-orange)] opacity-80">{cat.icon}</span>
                <h3 className="font-semibold text-sm tracking-[0.2em] text-[var(--text)]">
                  {cat.title}
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                      {skill}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
