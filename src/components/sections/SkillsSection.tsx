"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { HoverGrid } from "../common/HoverGrid";
import { skillsData, SkillCategory } from "@/data/skills";

function SkillCard({
  category,
  index,
  onMouseEnter,
}: {
  category: SkillCategory;
  index: number;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      style={{ animationDelay: `${index * 70}ms` }}
      className="relative h-full flex flex-col justify-between rounded-[13px] border border-white/[0.068] bg-[#06070a] p-4 sm:p-[18px_16px_16px] transition-all duration-300 hover:border-white/[0.14] hover:bg-[#0a0b10] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] group z-[2] overflow-hidden animate-fade-in-up"
    >
      {/* HUD Corner Accents */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-[7px] left-[7px] w-[11px] h-[11px] border-t-[1.5px] border-l-[1.5px] border-white/[0.13] group-hover:w-[16px] group-hover:h-[16px] group-hover:border-white/30 transition-all duration-300 z-10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[7px] right-[7px] w-[11px] h-[11px] border-b-[1.5px] border-r-[1.5px] border-white/[0.13] group-hover:w-[16px] group-hover:h-[16px] group-hover:border-white/30 transition-all duration-300 z-10"
      />

      {/* Top Subtle Specular Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-10"
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Top Header: Label */}
        <div className="flex items-center justify-between gap-2 min-h-[22px]">
          <p className="font-mono text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] uppercase text-white/30 m-0">
            {category.label}
          </p>
        </div>

        {/* Title & Micro Divider */}
        <div className="pt-2">
          <h3 className="font-syne text-[14.5px] sm:text-[15px] font-bold text-white/90 tracking-[-0.01em] leading-snug m-0 group-hover:text-white transition-colors">
            {category.category}
          </h3>
          <div className="h-[1px] w-7 bg-gradient-to-r from-white/20 to-transparent group-hover:w-12 transition-all duration-300 mt-1.5 mb-2.5" />
        </div>

        {/* Skill Items Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1 flex-1">
          {category.list.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-[8px] bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.05] transition-all"
            >
              {skill.icon ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4 h-4 object-contain flex-shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-4 h-4 rounded-[5px] bg-white/[0.06] border border-white/10 text-white/60 font-mono text-[8.5px] flex items-center justify-center font-medium flex-shrink-0">
                  {skill.mono || "DEV"}
                </div>
              )}
              <span className="font-sans text-[11.5px] sm:text-xs text-white/75 font-normal truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned Bottom Footer */}
      <div className="pt-2.5 mt-3 border-t border-white/[0.05] flex items-center justify-between text-[8.5px] sm:text-[9px] font-mono text-white/25 tracking-wider">
        <span>Stack Layer</span>
        <span className="text-white/45">{category.list.length} Technologies</span>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#020309] flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-[1160px] mx-auto flex flex-col gap-10 md:gap-12">
        <SectionHeader
          eyebrow="TECHNICAL EXPERTISE"
          title="Skills"
          subtitle="Full-stack engineering, databases, REST architecture, and modern development tooling."
        />

        <HoverGrid className="grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:1fr] gap-3.5">
          {skillsData.map((category, idx) => (
            <SkillCard key={category.category} category={category} index={idx} />
          ))}
        </HoverGrid>

        <p className="text-center font-mono text-[11px] text-white/30 tracking-wider">
          Continuously learning &nbsp;·&nbsp; Always building
        </p>
      </div>
    </section>
  );
}
