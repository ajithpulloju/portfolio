"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, LayoutGrid } from "lucide-react";

interface LeetcodeStats {
  totalSolved: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number | string;
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function ProgressItem({
  label,
  solved,
  total,
  color,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (solved / total) * 100 : 0;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span
          className="text-[10px] uppercase tracking-[0.2em]"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }}
        >
          {label}
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text)" }}
        >
          {solved}
          <span style={{ color: "var(--text-muted)", margin: "0 4px" }}>/</span>
          {total}
        </span>
      </div>
      <div
        className="h-[2px] w-full relative overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className={`h-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function ActivityStreamSection() {
  const [leetcodeData, setLeetcodeData] = useState<LeetcodeStats | null>(null);
  const [lcLoading, setLcLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetcodeStats() {
      try {
        const [solvedRes, profileRes] = await Promise.all([
          fetch("https://alfa-leetcode-api.onrender.com/257yNl9LGP/solved"),
          fetch("https://alfa-leetcode-api.onrender.com/257yNl9LGP"),
        ]);
        const solvedData = await solvedRes.json();
        const profileData = await profileRes.json();

        setLeetcodeData({
          totalSolved: solvedData.solvedProblem ?? 0,
          easySolved: solvedData.easySolved ?? 0,
          totalEasy: solvedData.totalSubmissionNum?.[1]?.count ?? 933,
          mediumSolved: solvedData.mediumSolved ?? 0,
          totalMedium: solvedData.totalSubmissionNum?.[2]?.count ?? 2029,
          hardSolved: solvedData.hardSolved ?? 0,
          totalHard: solvedData.totalSubmissionNum?.[3]?.count ?? 916,
          ranking: profileData.ranking ?? "N/A",
        });
      } catch (err) {
        console.error("LeetCode fetch failed:", err);
      } finally {
        setLcLoading(false);
      }
    }
    fetchLeetcodeStats();
  }, []);

  const stats = leetcodeData ?? {
    totalSolved: 0,
    easySolved: 0,
    totalEasy: 933,
    mediumSolved: 0,
    totalMedium: 2029,
    hardSolved: 0,
    totalHard: 916,
    ranking: "N/A",
  };

  const cardStyle: React.CSSProperties = {
    background: "var(--bg-card)",
    border: "1px solid var(--border)",
    backdropFilter: "blur(24px)",
    WebkitBackdropFilter: "blur(24px)",
    transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 300,
    color: "var(--text)",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  };

  const mutedStyle: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 200,
    color: "var(--text-muted)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    fontSize: "10px",
  };

  return (
    <section id="activity" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        {/* ── Section Label ── */}
        <div className="flex items-center gap-6 mb-12">
          <span className="flex items-center gap-2 text-[10px] font-light-custom tracking-[0.3em] uppercase text-[var(--text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            ACTIVITY STREAM
          </span>
          <div className="flex-1 h-[1px] bg-white/5" />
        </div>

        {/* ── Heading ── */}
        <div className="mb-20">
          <h2 className="font-thin-custom text-[clamp(40px,8vw,100px)] leading-[0.9] tracking-tight text-[var(--text)]">
            Live
            <br />
            <span className="text-[var(--text-muted)] ml-12 sm:ml-24">Activity</span>
          </h2>
        </div>

        {/* ── Cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* ─── GitHub Activity Card ─── */}
          <motion.div variants={itemVariants}>
            <div
              className="p-6 h-full group"
              style={cardStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-3 mb-6 pb-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h3 style={{ ...headingStyle, fontSize: "13px" }}>
                  GitHub Activity_
                </h3>
              </div>

              {/* Chart — dark theme via filter */}
              <div className="flex justify-center overflow-x-auto pb-2">
                <img
                  src="https://ghchart.rshah.org/ajithpulloju"
                  alt="ajithpulloju GitHub contribution chart"
                  className="w-full"
                  style={{
                    minWidth: "260px",
                    filter: "invert(1) hue-rotate(90deg) brightness(0.85) saturate(0.7)",
                    opacity: 0.85,
                  }}
                />
              </div>

              {/* Footer */}
              <div className="mt-4 text-right" style={mutedStyle}>
                {"// contribs over last year"}
              </div>
            </div>
          </motion.div>

          {/* ─── LeetCode Stats Card ─── */}
          <motion.div variants={itemVariants}>
            <div
              className="p-6 flex flex-col h-full group"
              style={cardStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Card Header */}
              <div
                className="flex justify-between items-start mb-6 pb-4"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div>
                  <h3 style={{ ...headingStyle, fontSize: "13px" }}>
                    LeetCode Stats_
                  </h3>
                  <p style={{ ...mutedStyle, marginTop: "6px" }}>
                    {"// @257yNl9LGP"}
                  </p>
                </div>
                <a
                  href="https://leetcode.com/u/257yNl9LGP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-colors duration-300"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                  aria-label="Open LeetCode Profile"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-hover)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-orange)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Stats Body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                {/* Total Solved + Rank */}
                <div
                  className="flex flex-col justify-center items-center p-5 relative overflow-hidden group/inner"
                  style={{
                    border: "1px dashed rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.02)",
                  }}
                >
                  <LayoutGrid
                    className="w-12 h-12 absolute -top-2 -right-2 rotate-12 group-hover/inner:scale-110 transition-transform duration-300"
                    style={{ color: "var(--text-muted)", opacity: 0.08 }}
                  />
                  {lcLoading ? (
                    <div
                      className="w-8 h-8 rounded-full animate-spin"
                      style={{ border: "2px solid var(--border)", borderTopColor: "var(--accent-orange)" }}
                    />
                  ) : (
                    <>
                      <span
                        className="text-5xl leading-none"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 200,
                          color: "var(--text)",
                        }}
                      >
                        {stats.totalSolved}
                      </span>
                      <span className="mt-3" style={mutedStyle}>
                        Solved
                      </span>
                      <div
                        className="mt-5 flex items-center gap-2 px-3 py-1.5"
                        style={{
                          border: "1px solid var(--border)",
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "10px",
                          color: "var(--text-muted)",
                          background: "rgba(255,255,255,0.03)",
                        }}
                      >
                        <Trophy className="w-3 h-3" style={{ color: "var(--accent-orange)" }} />
                        Rank: #
                        {typeof stats.ranking === "number"
                          ? stats.ranking.toLocaleString()
                          : stats.ranking}
                      </div>
                    </>
                  )}
                </div>

                {/* Difficulty Breakdown */}
                <div className="flex flex-col justify-center space-y-6">
                  <ProgressItem
                    label="Easy"
                    solved={stats.easySolved}
                    total={stats.totalEasy}
                    color="bg-green-500"
                  />
                  <ProgressItem
                    label="Med."
                    solved={stats.mediumSolved}
                    total={stats.totalMedium}
                    color="bg-yellow-400"
                  />
                  <ProgressItem
                    label="Hard"
                    solved={stats.hardSolved}
                    total={stats.totalHard}
                    color="bg-red-500"
                  />
                </div>
              </div>

              {!lcLoading && !leetcodeData && (
                <p
                  className="mt-5 text-center italic"
                  style={{ ...mutedStyle, fontSize: "9px", opacity: 0.5 }}
                >
                  * Could not fetch live stats — showing baseline
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
