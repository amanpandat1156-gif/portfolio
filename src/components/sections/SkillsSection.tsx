"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { HoverGrid } from "../common/HoverGrid";
import { skillsData, SkillCategory } from "@/data/skills";

function SkillCard({
  category,
  onMouseEnter,
}: {
  category: SkillCategory;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative h-full flex flex-col justify-between rounded-[13px] bg-[#06070a] border border-white/[0.07] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0a0b10] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.65)] group z-[2] overflow-hidden"
    >
      <CornerBrackets />

      <div className="space-y-4">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
            {category.label}
          </p>
          <h3 className="font-syne text-xl font-bold text-white tracking-tight pt-1">
            {category.category}
          </h3>
          <div className="h-[1px] w-12 bg-white/15 my-2.5 group-hover:w-20 group-hover:bg-blue-400/50 transition-all duration-300" />
        </div>

        {/* Skill Items Grid */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          {category.list.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] transition-all"
            >
              {skill.icon ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 object-contain flex-shrink-0"
                  loading="lazy"
                />
              ) : (
                <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-300 font-mono text-[10px] flex items-center justify-center font-bold flex-shrink-0">
                  {skill.mono || "DEV"}
                </div>
              )}
              <span className="font-sans text-xs text-white/80 font-medium truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-white/30">
        <span>Stack Layer</span>
        <span className="text-white/50">{category.list.length} Technologies</span>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#020309] flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="TECHNICAL EXPERTISE"
          title="Skills"
          subtitle="Full-stack engineering, databases, REST architecture, and modern development tooling."
        />

        <HoverGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <SkillCard key={category.category} category={category} />
          ))}
        </HoverGrid>

        <p className="text-center font-mono text-xs text-white/40 tracking-wider">
          Continuously learning &nbsp;·&nbsp; Always building
        </p>
      </div>
    </section>
  );
}
