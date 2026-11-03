"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { HoverGrid } from "../common/HoverGrid";
import { skillsData, SkillCategory, SkillItem } from "@/data/skills";
import {
  SiNextdotjs,
  SiExpress,
  SiGithub,
  SiVercel,
  SiGreensock,
  SiGooglegemini,
} from "react-icons/si";

function renderSkillIcon(skill: SkillItem) {
  if (skill.reactIcon) {
    switch (skill.reactIcon) {
      case "nextjs":
        return <SiNextdotjs className="w-6 h-6 sm:w-7 sm:h-7 text-white object-contain flex-shrink-0" />;
      case "express":
        return <SiExpress className="w-6 h-6 sm:w-7 sm:h-7 text-white object-contain flex-shrink-0" />;
      case "github":
        return <SiGithub className="w-6 h-6 sm:w-7 sm:h-7 text-white object-contain flex-shrink-0" />;
      case "vercel":
        return <SiVercel className="w-5 h-5 sm:w-6 sm:h-6 text-white object-contain flex-shrink-0" />;
      case "gsap":
        return <SiGreensock className="w-6 h-6 sm:w-7 sm:h-7 text-[#88CE02] object-contain flex-shrink-0" />;
      case "antigravity":
        return <SiGooglegemini className="w-6 h-6 sm:w-7 sm:h-7 text-[#4285F4] object-contain flex-shrink-0" />;
    }
  }

  if (skill.icon) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={skill.icon}
        alt={skill.name}
        width={28}
        height={28}
        className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
        loading="lazy"
      />
    );
  }

  return (
    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] bg-white/[0.05] border border-white/10 text-white/70 font-mono text-[9px] sm:text-[10px] font-bold flex items-center justify-center tracking-wider transition-all duration-200 group-hover/item:border-blue-400/60 group-hover/item:text-white group-hover/item:bg-blue-500/10">
      {skill.mono || "DEV"}
    </div>
  );
}

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
      className="relative h-full flex flex-col justify-between rounded-[13px] border border-white/[0.068] bg-[#06070a] p-4 sm:p-[20px_18px_18px] transition-all duration-300 hover:border-white/[0.14] hover:bg-[#0a0b10] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] group z-[2] overflow-hidden animate-fade-in-up"
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
        {/* Top Header: Monospace Label */}
        <div className="flex items-center justify-between gap-2 min-h-[18px]">
          <p className="font-mono text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] uppercase text-white/35 m-0">
            {category.label}
          </p>
        </div>

        {/* Title & Micro Divider Accent */}
        <div className="pt-1.5">
          <h3 className="font-syne text-[14.5px] sm:text-[15.5px] font-bold text-white/90 tracking-[-0.01em] leading-snug m-0 group-hover:text-white transition-colors">
            {category.category}
          </h3>
          <div className="h-[1.5px] w-7 bg-blue-500/50 group-hover:w-12 group-hover:bg-blue-400 transition-all duration-300 mt-1.5 mb-3.5" />
        </div>

        {/* Skill Items Grid (Logo above name layout matching reference) */}
        <div className="grid grid-cols-4 gap-x-1.5 sm:gap-x-2 gap-y-3.5 sm:gap-y-4 pt-1 flex-1 items-start">
          {category.list.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className="flex flex-col items-center justify-start text-center group/item cursor-pointer p-1.5 rounded-lg hover:bg-white/[0.03] transition-all"
            >
              {/* Icon Container with scale effect on hover */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-200 group-hover/item:scale-110">
                {renderSkillIcon(skill)}
              </div>

              {/* Muted Text Label below icon */}
              <div className="min-h-[22px] flex items-center justify-center mt-1.5">
                <span className="font-mono text-[9px] sm:text-[10px] text-white/60 group-hover/item:text-white leading-tight text-center transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
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
          title="Skills"
          subtitle="The modern stack I use to turn ideas into fast, scalable software."
        />

        <HoverGrid className="grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:1fr] gap-3.5">
          {skillsData.map((category, idx) => (
            <SkillCard key={category.category} category={category} index={idx} />
          ))}
        </HoverGrid>

        <p className="text-center font-mono text-[11px] text-white/30 tracking-wider">
         
        </p>
      </div>
    </section>
  );
}
