"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { HoverGrid } from "../common/HoverGrid";
import { projectsData, Project } from "@/data/projects";
import { Github, ArrowUpRight } from "lucide-react";

function ProjectCard({
  project,
  index,
  onMouseEnter,
}: {
  project: Project;
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
        {/* Top Row: Category label on left, Status badge on right */}
        <div className="flex items-center justify-between gap-2 min-h-[22px]">
          <p className="font-mono text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] uppercase text-white/30 m-0">
            {project.label}
          </p>
          {project.status && (
            <div
              className={`font-mono text-[7.5px] sm:text-[8px] font-medium tracking-[0.2em] uppercase px-2 py-0.5 rounded-[5px] inline-flex items-center gap-1.5 flex-shrink-0 ${
                project.status === "Live"
                  ? "bg-emerald-400/[0.08] border border-emerald-400/[0.28] text-emerald-400"
                  : "bg-white/[0.04] border border-white/10 text-white/40"
              }`}
            >
              {project.status === "Live" && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 shadow-[0_0_5px_rgba(74,222,128,0.7)]" />
              )}
              <span>{project.status}</span>
            </div>
          )}
        </div>

        {/* Title & Micro Divider */}
        <div className="pt-2">
          <h3 className="font-syne text-[14.5px] sm:text-[15px] font-bold text-white/90 tracking-[-0.01em] leading-snug m-0 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <div className="h-[1px] w-7 bg-gradient-to-r from-white/20 to-transparent group-hover:w-12 transition-all duration-300 mt-1.5 mb-2.5" />
        </div>

        {/* Description */}
        <p className="font-sans text-[12px] text-white/45 leading-[1.65] m-0">
          {project.description}
        </p>

        {/* Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <ul className="flex flex-col gap-1.5 pt-2.5 flex-1 m-0 p-0 list-none">
            {project.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 font-sans text-[11.5px] text-white/35 leading-[1.55]"
              >
                <span className="w-1 h-1 rounded-full bg-white/25 mt-1.5 flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Chips */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 mt-auto">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-[5px] border border-white/[0.09] bg-white/[0.03] text-[8.5px] font-mono tracking-wide text-white/35 group-hover:border-white/[0.14] group-hover:text-white/50 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Pinned Bottom Footer */}
      <div className="pt-2.5 mt-3 border-t border-white/[0.05] flex items-center justify-between">
        {project.date ? (
          <span className="font-mono text-[8.5px] text-white/25 tracking-wider">
            {project.date}
          </span>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-1.5 ml-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex items-center gap-1 font-mono text-[9px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-[6px] border border-white/10 bg-white/[0.04] text-white/45 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all group/btn"
            >
              <Github className="w-3 h-3" />
              <span>GitHub</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} Live Preview`}
              className="inline-flex items-center gap-1 font-mono text-[9px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-[6px] border border-emerald-400/20 bg-emerald-400/[0.04] text-emerald-400/70 hover:text-emerald-400 hover:border-emerald-400/45 hover:bg-emerald-400/[0.08] transition-all group/btn"
            >
              <span>Live</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
          eyebrow="FEATURED WORK"
          title="Projects"
          subtitle="Building practical software across full-stack architectures, civic technology, and applied AI."
        />

        <HoverGrid className="grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 [grid-auto-rows:1fr] gap-3.5">
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </HoverGrid>
      </div>
    </section>
  );
}
