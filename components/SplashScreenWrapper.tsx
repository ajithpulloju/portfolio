"use client";
import React, { useState, useEffect } from "react";

export default function SplashScreenWrapper({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Lock body scroll while splash screen is active
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0); // Ensure we start at the top
    }

    const timer = setTimeout(() => {
      setShowSplash(false);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 w-[100vw] h-[100vh] flex items-center justify-center bg-black z-[99999]">
          <h1 className="font-thin-custom text-4xl sm:text-6xl text-white tracking-[0.2em] uppercase animate-pulse">
            Loading...
          </h1>
        </div>
      )}
      
      {/* 
        We use opacity instead of conditional rendering to preserve SEO and allow
        the inner components (like the 360 viewer) to mount and preload their assets in the background.
      */}
      <div 
        style={{ 
          opacity: showSplash ? 0 : 1, 
          visibility: showSplash ? "hidden" : "visible",
          transition: "opacity 0.8s ease-in-out" 
        }}
      >
        {children}
      </div>
    </>
  );
}
