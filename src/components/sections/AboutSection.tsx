"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { personalData } from "@/data/personal";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-black flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-10">
        <SectionHeader
          title="About Me"
        />

        {/* Centered Terminal Bio Card */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-[#06070a]/95 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            <CornerBrackets />

            {/* Terminal Titlebar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-white/[0.03] border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span>~/about.md</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
               
                
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-8 font-mono text-xs sm:text-sm text-white/70 space-y-5 leading-relaxed">
              <p className="flex items-center gap-2 text-white/90">
                <span className="text-blue-400 font-bold">$</span>
                <span className="text-white font-medium">about.md</span>
              </p>

              <div className="space-y-4 font-sans text-sm sm:text-base">
                <p className="text-white/95 leading-relaxed">
                  I turn complex logic into clean, working reality.
                </p>
                <p className="text-white/80 leading-relaxed">
                  CS undergrad building production-grade web systems. From resilient backend architecture to high-octane dark UI—focused entirely on speed, scale, and zero fluff.
                </p>
              </div>

              <p className="flex items-center gap-2 pt-2 text-white/60">
                <span className="text-blue-400 font-bold">$</span>
                <span className="w-2.5 h-4 bg-white/80 animate-blink inline-block" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
