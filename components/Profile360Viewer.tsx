"use client";
import React, { useState, useEffect, useRef } from "react";
import { useInView, useScroll } from "framer-motion";

interface Profile360ViewerProps {
  className?: string;
}

const TOTAL_FRAMES = 51;

export default function Profile360Viewer({ className = "" }: Profile360ViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const { scrollY } = useScroll();

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  
  const isLoaded = loadedCount === TOTAL_FRAMES;

  // Preload images
  useEffect(() => {
    if (!isInView) return;

    let loaded = 0;
    const loadedImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, "0");
      img.src = `/images/360/ezgif-frame-${frameStr}.png`;
      
      const onLoadOrError = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      
      img.onload = () => {
        loadedImages[i - 1] = img;
        onLoadOrError();
      };
      img.onerror = onLoadOrError;
    }
    
    setImages(loadedImages);
  }, [isInView]);

  // Bind scroll position to frame index
  useEffect(() => {
    if (!isLoaded) return;

    const updateFrame = () => {
      const section = document.getElementById("hero-section");
      const sticky = document.getElementById("hero-sticky");
      
      if (!section || !sticky) {
        // Fallback if IDs are not found
        const maxScroll = typeof window !== "undefined" ? window.innerHeight * 2 : 1600;
        let progress = scrollY.get() / maxScroll;
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        setCurrentFrame(Math.floor(progress * (TOTAL_FRAMES - 1)));
        return;
      }

      const rect = section.getBoundingClientRect();
      
      // Because we use `sticky top-0`, the sticky phase begins exactly when the top of the section hits the top of the viewport (0)
      // If there's a navbar offset, we might want to start at the navbar height, but top-0 means it sticks at 0.
      const stickStart = 0;
      
      // The sticky phase ends exactly when the bottom of the section touches the bottom of the viewport.
      const stickEnd = window.innerHeight - rect.height;

      // If we haven't reached the sticking point, keep at frame 0
      if (rect.top > stickStart) {
        setCurrentFrame(0);
        return;
      }

      // If we passed the sticking phase entirely, keep at last frame
      if (rect.top <= stickEnd) {
        setCurrentFrame(TOTAL_FRAMES - 1);
        return;
      }

      // We are inside the sticking phase! Calculate progress from 0 to 1
      const scrollDistance = stickStart - stickEnd;
      const currentScroll = stickStart - rect.top;
      
      let progress = currentScroll / scrollDistance;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      const targetFrame = Math.floor(progress * (TOTAL_FRAMES - 1));
      setCurrentFrame(targetFrame);
    };

    // Initialize with current scroll
    updateFrame();

    return scrollY.on("change", updateFrame);
  }, [scrollY, isLoaded]);

  // Draw to canvas when frame changes
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const img = images[currentFrame];
    if (!img) return; // In case of error loading this specific frame

    // Set canvas dimensions to match image natural dimensions on first draw
    if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, [currentFrame, isLoaded, images]);

  return (
    <div
      ref={containerRef}
      className={`relative select-none focus:outline-none pointer-events-none ${className}`}
      aria-label="360 Degree Interactive Profile View"
      role="img"
    >
      {/* Canvas provides 60fps smooth frame rendering without DOM mutations */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full object-contain transition-all duration-300 opacity-100`}
      />
    </div>
  );
}
