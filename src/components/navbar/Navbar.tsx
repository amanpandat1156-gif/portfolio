"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MusicPlayer } from "./MusicPlayer";
import {
  Menu,
  X,
  Sparkles,
  Rocket,
  FolderGit2,
  GraduationCap,
  Wrench,
  Trophy,
  Mail,
  User,
  Home as HomeIcon,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const PRIMARY_LINKS: NavItem[] = [
  { name: "Home", href: "#home", icon: <HomeIcon className="w-4 h-4" /> },
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Education", href: "#education", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Wrench className="w-4 h-4" /> },
  { name: "Hackathons", href: "#hackathons", icon: <Trophy className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [eggFired, setEggFired] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const sections = PRIMARY_LINKS.map((link) => link.href.substring(1));
      const currentScroll = scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerEasterEgg = () => {
    setEggFired(true);
    setTimeout(() => setEggFired(false), 2400);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between px-3 md:px-5 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#06070a]/85 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              : "bg-[#141414]/60 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Logo & Easter Egg Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={triggerEasterEgg}
              aria-label="Aman Sharma Portfolio"
              title="Click for warp launch easter egg"
              className="relative flex items-center gap-2 group outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform">
                AS
              </div>
              <span className="font-syne font-bold text-sm tracking-tight text-white hidden sm:inline group-hover:text-blue-300 transition-colors">
                Aman Sharma
              </span>
              <Rocket
                className={`w-3.5 h-3.5 text-blue-400 transition-transform duration-500 ${
                  eggFired ? "-translate-y-3 translate-x-3 rotate-45" : "group-hover:rotate-12"
                }`}
              />
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-2 py-1">
            {PRIMARY_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-[0_2px_10px_rgba(255,255,255,0.4)]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Tools (Music + Mobile Hamburger) */}
          <div className="flex items-center gap-2">
            <MusicPlayer />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white/80"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-3 max-w-sm mx-auto w-full">
            <p className="font-mono text-xs text-white/40 uppercase tracking-widest px-3">
              Navigation
            </p>
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.1] transition-all text-base font-medium"
              >
                <span className="p-2 rounded-lg bg-white/5 text-blue-400">
                  {link.icon}
                </span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Easter Egg Overlay notification */}
      {eggFired && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-blue-600/90 text-white text-xs font-mono backdrop-blur-md border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.6)] animate-bounce flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Warp Drive Engaged! 🚀 Welcome to Aman&apos;s Portfolio</span>
        </div>
      )}
    </>
  );
}
