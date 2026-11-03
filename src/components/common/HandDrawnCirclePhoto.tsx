"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

export interface HandDrawnCirclePhotoProps {
  /**
   * Optional custom child elements (e.g. customized image wrapper, ring, or avatar).
   * If provided, children will receive the lighted hover effect.
   */
  children?: React.ReactNode;
  /**
   * Image URL if using as a standalone image.
   */
  src?: string;
  /**
   * Image alt text.
   */
  alt?: string;
  /**
   * Extra classes for the container wrapper.
   */
  className?: string;
  /**
   * Hand-drawn circle stroke color. Default: "#ff3b3b" (red).
   */
  color?: string;
  /**
   * Stroke width in pixels. Default: 3.
   */
  strokeWidth?: number;
  /**
   * Spacing between photo boundary and circle in px. Default: 12.
   */
  padding?: number;
  /**
   * Pen drawing animation duration in milliseconds. Default: 650.
   */
  duration?: number;
  /**
   * Easing function for the pen drawing stroke. Default: "cubic-bezier(0.65, 0.05, 0.36, 1)".
   */
  easing?: string;
  /**
   * Overshoot turns (1.08 = 388 degrees for natural overlap). Default: 1.08.
   */
  overshootTurns?: number;
}

/**
 * Generates an organic, wobbly, hand-drawn circle SVG path.
 * Uses a combination of multiple sine/cosine harmonics and an overshoot loop
 * that slightly diverges at the end, exactly mimicking a pen drawing on paper.
 */
function generateHandDrawnCirclePath(
  width: number,
  height: number,
  padding: number = 12,
  overshootTurns: number = 1.08
): { path: string; estimatedLength: number } {
  const cx = width / 2;
  const cy = height / 2;
  const baseRadius = Math.max(width, height) / 2 + padding;

  const steps = 56;
  const totalAngle = Math.PI * 2 * overshootTurns;

  // Natural start near top with slight human variance (-90 deg +/- 20 deg)
  const startAngle = -Math.PI / 2 + (Math.random() - 0.5) * 0.55;

  // Randomized harmonic parameters for unique organic wobbliness on each hover
  const phase1 = Math.random() * Math.PI * 2;
  const phase2 = Math.random() * Math.PI * 2;
  const phase3 = Math.random() * Math.PI * 2;

  const amp1 = 1.8 + Math.random() * 1.6; // gentle oval deformation
  const amp2 = 1.0 + Math.random() * 1.2; // medium waviness
  const amp3 = 0.4 + Math.random() * 0.8; // subtle micro-jitter

  // Pen stroke overlap divergence (start and end lines do not overlap identically)
  const overlapDirection = Math.random() > 0.5 ? 1 : -1;
  const overlapOffset = overlapDirection * (2.2 + Math.random() * 2.0);

  const points: { x: number; y: number }[] = [];

  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const theta = startAngle + t * totalAngle;

    // Multi-harmonic wobble
    let wobble =
      amp1 * Math.sin(2 * theta + phase1) +
      amp2 * Math.sin(3 * theta + phase2) +
      amp3 * Math.cos(5 * theta + phase3);

    // Smooth spiral divergence in the final 15% overlap
    if (t > 0.85) {
      const progress = (t - 0.85) / 0.15;
      wobble += overlapOffset * Math.pow(progress, 1.4);
    }

    const r = baseRadius + wobble;
    const x = cx + r * Math.cos(theta);
    const y = cy + r * Math.sin(theta);
    points.push({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
  }

  // Smooth quadratic Bézier interpolation through midpoints for fluid curve
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length - 1; i++) {
    const xc = Number(((points[i].x + points[i + 1].x) / 2).toFixed(2));
    const yc = Number(((points[i].y + points[i + 1].y) / 2).toFixed(2));
    d += ` Q ${points[i].x} ${points[i].y}, ${xc} ${yc}`;
  }
  const last = points[points.length - 1];
  const secondLast = points[points.length - 2];
  d += ` Q ${secondLast.x} ${secondLast.y}, ${last.x} ${last.y}`;

  // Approximate arc length
  const estimatedLength = Math.PI * 2 * baseRadius * overshootTurns * 1.02;

  return { path: d, estimatedLength };
}

export function HandDrawnCirclePhoto({
  children,
  src,
  alt = "Profile Photo",
  className = "",
  color = "#ff3b3b",
  strokeWidth = 3,
  padding = 12,
  duration = 650,
  easing = "cubic-bezier(0.65, 0.05, 0.36, 1)",
  overshootTurns = 1.08,
}: HandDrawnCirclePhotoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const animationRef = useRef<Animation | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pathData, setPathData] = useState<string>("");
  const [pathLength, setPathLength] = useState<number>(680);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Pre-generate a default path on mount so DOM node is always available
  useEffect(() => {
    const el = containerRef.current;
    const w = el ? el.offsetWidth || 176 : 176;
    const h = el ? el.offsetHeight || 176 : 176;
    const initial = generateHandDrawnCirclePath(w, h, padding, overshootTurns);
    setPathData(initial.path);
    setPathLength(initial.estimatedLength);
  }, [padding, overshootTurns]);

  // Check user preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseEnter = useCallback(() => {
    const el = containerRef.current;
    const w = el ? el.offsetWidth || 176 : 176;
    const h = el ? el.offsetHeight || 176 : 176;

    // Har hover par randomly naya hand-drawn path
    const { path, estimatedLength } = generateHandDrawnCirclePath(
      w,
      h,
      padding,
      overshootTurns
    );

    setPathData(path);
    setPathLength(estimatedLength);
    setIsVisible(true);
    setIsHovered(true);

    // Cancel any ongoing animation
    if (animationRef.current) {
      animationRef.current.cancel();
    }

    if (reducedMotion) {
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = "0";
      }
      return;
    }

    // Trigger stroke-dashoffset drawing via Web Animations API for 100% reliable frame timing
    requestAnimationFrame(() => {
      const pathEl = pathRef.current;
      if (!pathEl) return;

      let len = estimatedLength;
      try {
        const exact = pathEl.getTotalLength();
        if (exact > 0) len = exact;
      } catch {
        // use estimated
      }

      pathEl.style.strokeDasharray = `${len}`;
      pathEl.style.strokeDashoffset = `${len}`;

      // Animate stroke from full length to 0
      try {
        const anim = pathEl.animate(
          [
            { strokeDashoffset: `${len}` },
            { strokeDashoffset: "0" },
          ],
          {
            duration,
            easing,
            fill: "forwards",
          }
        );
        animationRef.current = anim;
      } catch {
        // Fallback to CSS transition
        pathEl.style.transition = `stroke-dashoffset ${duration}ms ${easing}`;
        pathEl.style.strokeDashoffset = "0";
      }
    });
  }, [padding, overshootTurns, duration, easing, reducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsVisible(false);

    // Fade out hone ke baad animation reset karna
    setTimeout(() => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = `${pathLength}`;
      }
    }, 220);
  }, [pathLength]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none group ${className}`}
    >
      {/* 1. Photo Lighting Effect (0.25s smooth transition) */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          filter: isHovered
            ? "brightness(1.18) saturate(1.12) drop-shadow(0 0 18px rgba(255, 255, 255, 0.35))"
            : "brightness(1) saturate(1) drop-shadow(0 0 0px rgba(255, 255, 255, 0))",
          transform: isHovered ? "scale(1.02)" : "scale(1)",
          transition: "filter 0.25s ease-out, transform 0.25s ease-out",
        }}
      >
        {children ? (
          children
        ) : src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* 2. Hand-Drawn SVG Overlay (Absolute, Pointer-Events None) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full overflow-visible z-30"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: isHovered ? "opacity 0.12s ease-in" : "opacity 0.20s ease-out",
        }}
      >
        {pathData && (
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: reducedMotion ? 0 : pathLength,
            }}
          />
        )}
      </svg>
    </div>
  );
}

export default HandDrawnCirclePhoto;
