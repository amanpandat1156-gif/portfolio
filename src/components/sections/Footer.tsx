"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="relative bg-black py-8 border-t border-white/[0.08] text-center z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
        <p>© {new Date().getFullYear()} Aman Sharma. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Engineered with Next.js &amp; Tailwind</span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span>Full Stack Developer</span>
        </p>
      </div>
    </footer>
  );
}
