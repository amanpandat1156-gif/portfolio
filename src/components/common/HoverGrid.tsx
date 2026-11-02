"use client";

import React, { useRef } from "react";

const EXTRA = 12;

export function HoverGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const highlightRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const h = highlightRef.current;
    if (!h) return;
    h.style.opacity = "1";
    h.style.width = card.offsetWidth + EXTRA * 2 + "px";
    h.style.height = card.offsetHeight + EXTRA * 2 + "px";
    h.style.left = card.offsetLeft - EXTRA + "px";
    h.style.top = card.offsetTop - EXTRA + "px";
  };

  const handleMouseLeave = () => {
    const h = highlightRef.current;
    if (!h) return;
    h.style.opacity = "0";
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={`relative grid gap-3.5 p-3 ${className}`}
    >
      <div
        ref={highlightRef}
        aria-hidden="true"
        className="pointer-events-none absolute rounded-[18px] opacity-0 transition-[left,top,width,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(120,180,255,0.28), rgba(80,120,255,0.18))",
          filter: "blur(2px)",
        }}
      />
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          onMouseEnter: handleMouseEnter,
        });
      })}
    </div>
  );
}
