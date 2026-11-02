"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { HoverGrid } from "../common/HoverGrid";
import { projectsData, Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";

function ProjectCard({
  project,
  onMouseEnter,
}: {
  project: Project;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative h-full flex flex-col justify-between rounded-[13px] bg-[#06070a] border border-white/[0.07] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0a0b10] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.65)] group z-[2] overflow-hidden"
    >
      <CornerBrackets />

      {/* Top Header & Status Badge */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[10px] font-semibold tracking-widest text-blue-400 uppercase">
            {project.label}
          </p>
          {project.status && (
            <div
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                project.status === "Live"
                  ? "bg-emerald-950/70 border border-emerald-500/30 text-emerald-300"
                  : "bg-white/[0.04] border border-white/10 text-white/50"
              }`}
            >
              {project.status === "Live" && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              )}
              <span>{project.status}</span>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-syne text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <div className="h-[1px] w-12 bg-white/15 my-2.5 group-hover:w-20 group-hover:bg-blue-400/50 transition-all duration-300" />
        </div>

        <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
          {project.description}
        </p>

        {/* Feature Highlights */}
        <ul className="space-y-2 pt-1">
          {project.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80 mt-1.5 flex-shrink-0" />
              <span className="leading-snug">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Tech Pills & Action Links */}
      <div className="pt-6 space-y-4 border-t border-white/[0.06] mt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-white/60 group-hover:border-white/15 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          {project.date ? (
            <span className="font-mono text-[11px] text-white/30">{project.date}</span>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live Preview`}
                className="flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#020309] flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="FEATURED WORK"
          title="Projects"
          subtitle="Building practical software across full-stack architectures, civic technology, and applied AI."
        />

        <HoverGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </HoverGrid>
      </div>
    </section>
  );
}
