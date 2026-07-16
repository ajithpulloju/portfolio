"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BurnTransition() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this transition area
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // The burn effect blooms (fades in) as it enters the center of the screen, and fades out as it leaves.
  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  
  // Scale expands outward to simulate a burst of light/heat
  const scaleY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.1, 1.5, 0.1]);
  const scaleX = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.2, 0.8]);

  return (
    <div ref={ref} className="relative w-full h-[30vh] flex items-center justify-center overflow-visible bg-black z-50">
      
      {/* SVG Filter for Film Burn / Heat Distortion Noise */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <filter id="film-burn">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.05" numOctaves="3" result="noise" />
          <feColorMatrix type="matrix" values="
            1 0 0 0 0  
            0 0.4 0 0 0  
            0 0.1 0 0 0  
            0 0 0 1 0" in="noise" result="coloredNoise" />
          <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
          <feBlend mode="screen" in="composite" in2="SourceGraphic" />
        </filter>
      </svg>

      <motion.div 
        style={{ opacity, scaleX, scaleY }}
        className="absolute w-[150vw] h-[60vh] flex items-center justify-center pointer-events-none mix-blend-screen"
      >
        {/* Core hot white line (the "burn" crack) */}
        <div className="absolute w-full h-[4px] bg-white opacity-90" style={{ boxShadow: "0 0 40px 5px #fff", filter: "blur(2px)" }} />
        
        {/* Intense Gold/Orange Glow */}
        <div className="absolute w-full h-[100px] bg-[var(--accent-orange)] opacity-60" style={{ filter: "blur(30px)" }} />
        
        {/* Ambient Purple/Red Heat Aura */}
        <div className="absolute w-full h-[250px] bg-[var(--accent-purple)] opacity-40" style={{ filter: "blur(60px)" }} />

        {/* Noise Layer applied to give it the fiery/film-burn texture */}
        <div 
          className="absolute inset-0 w-full h-full opacity-80"
          style={{ 
            filter: "url(#film-burn)", 
            background: "linear-gradient(to bottom, transparent, var(--accent-orange), transparent)" 
          }}
        />
      </motion.div>
    </div>
  );
}
