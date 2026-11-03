"use client";

import React, { useState, useEffect } from "react";
import { NavLogo } from "@/components/layout/NavLogo";
import { MobileMenu } from "@/components/layout/MobileMenu";

interface NavItem {
  name: string;
  href: string;
}

const PRIMARY_LINKS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
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

  // Auto-close mobile menu when resizing to desktop viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Background dimming backdrop on mobile when menu is expanded */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] md:hidden animate-fade-in"
        />
      )}

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto relative transition-all duration-300 overflow-hidden ${
            mobileMenuOpen
              ? "rounded-[22px] max-w-md md:max-w-5xl md:rounded-full"
              : "rounded-full max-w-5xl"
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
          {/* Subtle top specular glass reflection */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-[6%] right-[6%] h-[1px] rounded-full z-10"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 8%, rgba(255,255,255,0.38) 28%, rgba(255,255,255,0.38) 72%, rgba(255,255,255,0.08) 92%, transparent 100%)",
            }}
          />

          {/* Top Row: Logo, Desktop Links & Mobile Burger Button */}
          <div className="flex items-center justify-between px-3 md:px-5 py-2.5 min-h-[56px] relative z-20">
            {/* Stylized 'A' Logo with Flip & Tooltip */}
            <div className="flex items-center">
              <NavLogo />
            </div>

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

            {/* Right: Mobile Burger Toggle (balanced placeholder for desktop) */}
            <div className="flex items-center justify-end md:w-11">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-panel"
                className="md:hidden w-9 h-9 rounded-[10px] flex items-center justify-center bg-white/[0.07] hover:bg-white/[0.12] active:bg-white/[0.15] border border-white/[0.11] text-white/70 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 select-none"
              >
                {mobileMenuOpen ? (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 3l10 10M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Integrated Single-Panel Mobile Menu Drawer */}
          <MobileMenu
            id="mobile-nav-panel"
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            activeSection={activeSection}
          />
        </nav>
      </header>
    </>
  );
}
