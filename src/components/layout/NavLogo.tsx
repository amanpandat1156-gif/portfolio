"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Stylized clean bold geometric "A" vector logo.
 * White, modern, and perfectly balanced for the navbar.
 */
function LogoGlyphA({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-7 h-7 text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] ${className}`}
      aria-hidden="true"
    >
      {/* Sleek architectural 'A' with sharp apex & precise inner negative triangle */}
      <path
        d="M18 3.5L32.5 31H25.2L20.6 21.8H15.4L10.8 31H3.5L18 3.5ZM18 13.2L15.9 17.5H20.1L18 13.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Easter Egg icon matching reference styling with radial gradient lighting and highlights.
 */
function EggGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-7 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="egg-shell-grad" cx="38%" cy="28%" r="62%" fx="38%" fy="28%">
          <stop offset="0%" stopColor="#fffef8" />
          <stop offset="35%" stopColor="#f5f0e4" />
          <stop offset="75%" stopColor="#e8dfc8" />
          <stop offset="100%" stopColor="#c8b89a" />
        </radialGradient>
        <radialGradient id="egg-shadow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
        </radialGradient>
        <radialGradient id="egg-shine-1" cx="35%" cy="22%" r="28%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.78)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="egg-shine-2" cx="70%" cy="72%" r="18%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <path
        d="M30 4 C 14 4, 4 22, 4 40 C 4 56, 15 68, 30 68 C 45 68, 56 56, 56 40 C 56 22, 46 4, 30 4 Z"
        fill="url(#egg-shell-grad)"
      />
      <path
        d="M30 4 C 14 4, 4 22, 4 40 C 4 56, 15 68, 30 68 C 45 68, 56 56, 56 40 C 56 22, 46 4, 30 4 Z"
        fill="url(#egg-shadow-grad)"
      />
      <ellipse
        cx="22"
        cy="17"
        rx="9"
        ry="7"
        fill="url(#egg-shine-1)"
        transform="rotate(-20 22 17)"
      />
      <ellipse
        cx="41"
        cy="52"
        rx="5"
        ry="3.5"
        fill="url(#egg-shine-2)"
        transform="rotate(15 41 52)"
      />
    </svg>
  );
}

export function NavLogo() {
  const [isEgg, setIsEgg] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseEnter = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsEgg(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsEgg(false);
    setShowTooltip(false);
  };

  const handleTouchStart = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsEgg(true);
    setShowTooltip(true);
  };

  const handleTouchEnd = () => {
    touchTimerRef.current = setTimeout(() => {
      setIsEgg(false);
      setShowTooltip(false);
    }, 1200);
  };

  const handleClick = () => {
    const homeEl = document.getElementById("home");
    if (homeEl) {
      homeEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        onKeyDown={handleKeyDown}
        aria-label="Aman Sharma home"
        title="Prepare for Launch"
        className="relative flex items-center justify-center p-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 cursor-pointer select-none group"
        style={{ perspective: "1000px" }}
      >
        {/* Subtle radial hover glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-8px] rounded-full bg-radial-gradient from-white/10 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* 3D Morph / Flip container */}
        <div
          className="relative w-8 h-8 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transition: prefersReducedMotion
              ? "none"
              : "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: isEgg ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Face: Stylized 'A' Logo */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              opacity: isEgg ? 0 : 1,
              transition: prefersReducedMotion ? "none" : "opacity 0.22s ease-out",
            }}
          >
            <LogoGlyphA />
          </div>

          {/* Back Face: Easter Egg */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              opacity: isEgg ? 1 : 0,
              transition: prefersReducedMotion ? "none" : "opacity 0.22s ease-out",
            }}
          >
            <EggGlyph />
          </div>
        </div>
      </button>

      {/* "Prepare for Launch" Tooltip Box */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute top-[calc(100%+10px)] left-0 sm:left-1/2 sm:-translate-x-1/2 px-2.5 py-1 bg-black border border-white text-white text-[11px] font-mono tracking-wider uppercase whitespace-nowrap rounded-none shadow-[0_4px_20px_rgba(0,0,0,0.95)] z-50 pointer-events-none select-none animate-fade-in"
        >
          Prepare for Launch
        </div>
      )}
    </div>
  );
}
