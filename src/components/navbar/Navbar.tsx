"use client";

import React, { useState, useEffect } from "react";
import { MusicPlayer } from "./MusicPlayer";
import { NavLogo } from "@/components/layout/NavLogo";
import {
  Menu,
  X,
  FolderGit2,
  Wrench,
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
  { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Wrench className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex items-center justify-between px-3 md:px-5 py-2.5 transition-all duration-300 ${
            mobileMenuOpen ? "rounded-2xl" : "rounded-full"
          }`}
          style={{
            minHeight: "56px",
            background: isScrolled ? "rgba(5, 5, 8, 0.90)" : "rgba(9, 9, 12, 0.76)",
            backdropFilter: "blur(28px) saturate(175%) brightness(1.04)",
            WebkitBackdropFilter: "blur(28px) saturate(175%) brightness(1.04)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
            boxShadow: `
              0 24px 72px rgba(0, 0, 0, 0.70),
              0 8px 28px rgba(0, 0, 0, 0.38),
              0 1px 0 rgba(255, 255, 255, 0.32) inset,
              1px 0 0 rgba(255, 255, 255, 0.08) inset,
              0 -1px 0 rgba(0, 0, 0, 0.35) inset,
              0 0 0 1.5px rgba(0, 0, 0, 0.45)
            `,
          }}
        >
          {/* Stylized 'A' Logo with Egg Flip & Launch Tooltip */}
          <NavLogo />

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-full px-2 py-1 shadow-inner">
            {PRIMARY_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-[0_2px_12px_rgba(255,255,255,0.45)] scale-[1.02]"
                      : "text-white/65 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Tools (Ambient Music Player + Mobile Hamburger) */}
          <div className="flex items-center gap-2">
            <MusicPlayer />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white/85"
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
          className="fixed inset-0 z-40 bg-black/85 backdrop-blur-2xl flex flex-col justify-center px-6 md:hidden animate-fade-in"
        >
          <div className="flex flex-col gap-2.5 max-w-sm mx-auto w-full">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 px-2">
              <span className="font-syne text-sm font-bold text-white">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-white/5 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.1] transition-all text-sm font-medium"
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
    </>
  );
}
