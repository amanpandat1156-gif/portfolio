"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { personalData } from "@/data/personal";
import { socialsData } from "@/data/socials";
import { Github, Linkedin, Mail, Calendar, ArrowDown } from "lucide-react";
import { SiX } from "react-icons/si";

export function HeroSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "x":
        return <SiX className="w-3.5 h-3.5" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "mail":
        return <Mail className="w-4 h-4" />;
      case "calendar":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#0a0a0f] pt-20"
    >
      {/* Dynamic Starfield Canvas */}
      <StarfieldCanvas />

      {/* Grid Drift Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_85%)] animate-grid-flow pointer-events-none z-[3]"
      />

      {/* Glowing Ambient Orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow z-[2]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slower z-[2]"
      />

      {/* Hero Center Content */}
      <div className="relative z-10 text-white max-w-4xl px-6 flex flex-col items-center gap-4">
        {/* Eyebrow */}
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-blue-300/90 font-mono font-medium animate-fade-in">
          {personalData.greeting}
        </p>

        {/* Name with Syne font matching About section */}
        <div className="animate-fade-in-up motion-reduce:animate-none relative group">
          <h1 className="font-syne text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="relative inline-block">
              <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.45)] group-hover:drop-shadow-[0_0_55px_rgba(255,255,255,0.7)] transition-all duration-500 inline-block group-hover:tracking-wider">
                {personalData.name}
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </span>
          </h1>
        </div>


        {/* Intro Subtitle */}
        <p className="font-sans text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed pt-1">
          Learning, coding, and building practical things for the web.
        </p>

        {/* Hero CTA Actions */}
        <div className="flex items-center justify-center gap-3 mt-2 animate-fade-in-up">
         
         
        </div>

        {/* Social Pill Dock */}
        <div className="flex items-center justify-center gap-4 px-6 py-3 rounded-full bg-[#141414]/80 backdrop-blur-xl border border-white/10 shadow-xl mt-3 animate-fade-in-up">
          {socialsData.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
              style={{ color: social.color }}
            >
              {getIcon(social.iconName)}
            </a>
          ))}
        </div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce group cursor-pointer"
      >
        <div className="w-7 h-11 border-2 border-white/30 rounded-full flex justify-center pt-2 bg-white/5 backdrop-blur-md shadow-lg group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-300">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse group-hover:bg-white group-hover:h-4 transition-all duration-300" />
        </div>
      </a>
    </section>
  );
}
