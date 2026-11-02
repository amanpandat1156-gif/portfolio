"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Briefcase, Wrench, ChevronRight } from "lucide-react";

interface MobileMenuProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

interface NavLink {
  name: string;
  href: string;
}

interface MoreLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAVIGATION_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const MORE_LINKS: MoreLink[] = [
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Wrench },
];

export function MobileMenu({ id = "mobile-nav-panel", isOpen, onClose, activeSection }: MobileMenuProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const isClosingRef = useRef(false);

  // Keep items ref array fresh each render
  itemsRef.current = [];

  const addNodeToRefs = (el: HTMLAnchorElement | null) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  // Lock body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // Open / Close animation and rendering lifecycle
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isOpen) {
      isClosingRef.current = false;
      setShouldRender(true);
    } else if (shouldRender) {
      if (prefersReducedMotion) {
        setShouldRender(false);
        return;
      }

      isClosingRef.current = true;
      const container = containerRef.current;
      const validItems = itemsRef.current.filter(Boolean);

      if (!container) {
        setShouldRender(false);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          isClosingRef.current = false;
          setShouldRender(false);
        },
      });

      if (validItems.length > 0) {
        tl.to(validItems, {
          opacity: 0,
          y: -4,
          duration: 0.12,
          ease: "power2.in",
        });
      }

      tl.to(
        container,
        {
          height: 0,
          opacity: 0,
          duration: 0.22,
          ease: "power2.inOut",
        },
        "<0.04"
      );
    }
  }, [isOpen, shouldRender]);

  // Expand and stagger-in animation when mounted
  useEffect(() => {
    if (!shouldRender || !isOpen || isClosingRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = containerRef.current;
    const inner = innerRef.current;
    const validItems = itemsRef.current.filter(Boolean);

    if (!container || !inner) return;

    if (prefersReducedMotion) {
      gsap.set(container, { height: "auto", opacity: 1 });
      if (validItems.length > 0) {
        gsap.set(validItems, { opacity: 1, y: 0 });
      }
      return;
    }

    // Measure target height cleanly
    gsap.killTweensOf([container, ...validItems]);
    gsap.set(container, { height: "auto", opacity: 1 });
    const targetHeight = inner.offsetHeight;
    gsap.set(container, { height: 0, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(container, {
      height: targetHeight,
      opacity: 1,
      duration: 0.26,
      ease: "power3.out",
      onComplete: () => {
        // Allow dynamic sizing once expanded
        gsap.set(container, { height: "auto" });
      },
    });

    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { opacity: 0, y: -8 },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.035,
          ease: "power2.out",
        },
        "-=0.18"
      );
    }

    return () => {
      tl.kill();
    };
  }, [shouldRender, isOpen]);

  // Focus trap & Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && containerRef.current) {
        const focusable = Array.from(
          containerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();

    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      id={id}
      ref={containerRef}
      className="md:hidden overflow-hidden will-change-[height,opacity]"
      role="region"
      aria-label="Mobile Navigation Menu"
    >
      <div ref={innerRef} className="px-2 pt-0.5 pb-3 flex flex-col gap-0.5">
        {/* Top divider separating navbar row from drawer */}
        <div
          className="h-px mx-1 mb-1.5 mt-0.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)",
          }}
        />

        {/* Section 1: NAVIGATION */}
        <div className="px-3.5 pt-1 pb-1 text-[10px] font-medium tracking-[0.08em] uppercase text-white/30 select-none font-mono">
          NAVIGATION
        </div>

        {NAVIGATION_LINKS.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.name}
              ref={addNodeToRefs}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all duration-150 select-none border ${
                isActive
                  ? "text-white bg-white/[0.08] border-white/10 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  : "text-white/65 hover:text-white hover:bg-white/[0.06] border-transparent"
              }`}
            >
              <span className="text-[13.5px] tracking-normal font-sans">{link.name}</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-all duration-150 ${
                  isActive
                    ? "text-white/75 translate-x-0.5"
                    : "text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5"
                }`}
              />
            </a>
          );
        })}

        {/* Divider between NAVIGATION and MORE */}
        <div
          className="h-px mx-1 my-1.5"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 20%, rgba(255,255,255,0.12) 80%, transparent)",
          }}
        />

        {/* Section 2: MORE */}
        <div className="px-3.5 pt-1 pb-1 text-[10px] font-medium tracking-[0.08em] uppercase text-white/30 select-none font-mono">
          MORE
        </div>

        {MORE_LINKS.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.name}
              ref={addNodeToRefs}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`group flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-150 select-none border ${
                isActive
                  ? "text-white bg-white/[0.08] border-white/10 font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]"
                  : "text-white/65 hover:text-white hover:bg-white/[0.06] border-transparent"
              }`}
            >
              <div className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center bg-white/[0.07] border border-white/[0.08] text-white/45 group-hover:bg-white/[0.12] group-hover:text-white/85 transition-colors flex-shrink-0">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="flex-1 text-[13.5px] tracking-normal font-sans">{link.name}</span>
              <ChevronRight
                className={`w-3.5 h-3.5 transition-all duration-150 ${
                  isActive
                    ? "text-white/75 translate-x-0.5"
                    : "text-white/20 group-hover:text-white/50 group-hover:translate-x-0.5"
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
