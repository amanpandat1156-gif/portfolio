"use client";

import React, { useState, useEffect } from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { personalData } from "@/data/personal";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export function EducationSection() {
  const edu = personalData.education;
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressWidth(edu.percentage);
    }, 400);
    return () => clearTimeout(timer);
  }, [edu.percentage]);

  return (
    <section
      id="education"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#020309] flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Foundational computer science education, engineering principles, and core competencies."
        />

        {/* Education Tech Card */}
        <div className="relative rounded-2xl bg-[#06070a]/90 border border-white/10 p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          <CornerBrackets />

          {/* Top Row: Institute & Degree */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <GraduationCap className="w-4 h-4" />
                <span>{edu.institute}</span>
              </div>
              <h3 className="font-syne text-xl sm:text-2xl font-bold text-white tracking-tight">
                {edu.degree}
              </h3>
            </div>
            <div className="self-start sm:self-center px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-medium">
              {edu.status}
            </div>
          </div>

          {/* Completion Progress Bar */}
          <div className="py-7 space-y-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-white/60">Degree Completion Timeline</span>
              <span className="text-white font-medium">{edu.percentage}% Complete</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-white/40">
              <span>{edu.startYear}</span>
              <span>{edu.endYear} (Expected)</span>
            </div>
          </div>

          {/* Stats Footer Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <Award className="w-5 h-5 text-yellow-400/80" />
              <div>
                <p className="font-mono text-[10px] uppercase text-white/40">Current Status</p>
                <p className="font-syne text-sm font-semibold text-white">Undergraduate</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <Calendar className="w-5 h-5 text-blue-400/80" />
              <div>
                <p className="font-mono text-[10px] uppercase text-white/40">Graduation</p>
                <p className="font-syne text-sm font-semibold text-white">{edu.endYear}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
              <BookOpen className="w-5 h-5 text-emerald-400/80" />
              <div>
                <p className="font-mono text-[10px] uppercase text-white/40">Major Domain</p>
                <p className="font-syne text-sm font-semibold text-white">Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
