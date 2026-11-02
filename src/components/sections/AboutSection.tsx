"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { personalData } from "@/data/personal";
import { User, Terminal as TerminalIcon } from "lucide-react";

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

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="PROFILE & BACKGROUND"
          title="About Me"
          subtitle="Computer Science student engineer building at the intersection of full-stack engineering and intelligent systems."
        />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Photo & Open to work card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-2xl bg-[#06070a] border border-white/10 p-6 flex flex-col items-center gap-5 shadow-2xl overflow-hidden group">
              <CornerBrackets />

              <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center text-white/80 overflow-hidden">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <User className="w-16 h-16 text-blue-400/80 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-syne font-bold text-xs tracking-wider text-white/90">
                      AMAN SHARMA
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-medium shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personalData.statusText}</span>
              </div>

              <div className="text-center font-mono text-xs text-white/40 pt-1">
                Based in India · B.Tech CSE (AKTU)
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Bio */}
          <div className="lg:col-span-8 flex flex-col justify-center">
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
                  <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                  <span>~/portfolio/about.md</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-8 font-mono text-xs sm:text-sm text-white/70 space-y-5 leading-relaxed">
                <p className="flex items-center gap-2 text-white/90">
                  <span className="text-blue-400 font-bold">$</span>
                  <span className="text-white font-medium">cat about.md</span>
                </p>

                <div className="space-y-4 font-sans text-sm sm:text-base">
                  <p className="text-white/95 leading-relaxed">
                    I&apos;m <strong className="text-white font-semibold">Aman Sharma</strong>, a
                    Computer Science student and Full Stack Developer at{" "}
                    <span className="text-blue-300">
                      B.S.A. College of Engineering and Technology, Mathura (AKTU)
                    </span>
                    . I build practical, real-world web applications from end to end — architecting
                    scalable backend systems and crafting clean, responsive user interfaces.
                  </p>

                  <p className="text-white/75 leading-relaxed">
                    My core expertise spans <span className="text-white">Node.js, Express.js, MongoDB</span>,
                    and modern frontend frameworks like <span className="text-white">React, Next.js</span>, and{" "}
                    <span className="text-white">Tailwind CSS</span>. I enjoy tackling complex workflows such as
                    media processing with Multer &amp; Cloudinary, Chrome extension engineering with Manifest V3, and
                    integrating generative AI APIs.
                  </p>

                  <p className="text-white/75 leading-relaxed">
                    Beyond writing code that ships, I actively participate in hackathons with team{" "}
                    <span className="text-white font-medium">&quot;Dark Horses&quot;</span>, build civic automation tools,
                    and continuously explore artificial intelligence and developer productivity tooling.
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
      </div>
    </section>
  );
}
