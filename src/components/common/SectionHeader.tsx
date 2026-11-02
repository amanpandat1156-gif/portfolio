"use client";

import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`text-center flex flex-col items-center gap-3 ${className}`}>
      {eyebrow && (
        <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          {eyebrow}
        </p>
      )}

      <div className="group cursor-default inline-flex flex-col items-center gap-2.5">
        <h2 className="font-syne text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-[-0.025em] leading-tight transition-all duration-500 group-hover:tracking-[0.045em] drop-shadow-[0_0_28px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_48px_rgba(255,255,255,0.55)]">
          {title}
        </h2>
        <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-500 group-hover:w-28 group-hover:via-white/75" />
      </div>

      {subtitle && (
        <p className="font-sans text-sm md:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  );
}
