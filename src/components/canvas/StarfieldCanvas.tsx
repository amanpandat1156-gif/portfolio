"use client";

import React, { useEffect, useRef } from "react";

const TWO_PI = Math.PI * 2;

interface Star {
  x: number;
  y: number;
  r: number;
  pa: number;
  fs: string;
  fl: number;
  hl: number;
  dl: number;
  t: number;
  tick: number;
}

const makeStar = (): Star => {
  const cr = Math.random();
  const [r, g, b] =
    cr > 0.93 ? [190, 215, 255] : cr > 0.86 ? [255, 238, 195] : [255, 255, 255];
  const fl = 20 + Math.floor(Math.random() * 28);
  const hl = 12 + Math.floor(Math.random() * 45);
  const dl = 38 + Math.floor(Math.random() * 75);
  const t = fl * 2 + hl + dl;
  return {
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 0.85 + 0.2,
    pa: 0.35 + Math.random() * 0.5,
    fs: `rgb(${r},${g},${b})`,
    fl,
    hl,
    dl,
    t,
    tick: -Math.floor(Math.random() * t),
  };
};

export default function StarfieldCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let lastT = 0;
    let rz: NodeJS.Timeout;
    let stars: Star[] = [];
    let lmx = 0;
    let lmy = 0;
    const FPS = 1000 / 30;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rc = canvas.getBoundingClientRect();
      canvas.width = rc.width * dpr;
      canvas.height = rc.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(380, Math.floor((rc.width * rc.height) / 4500));
      stars = Array.from({ length: count }, makeStar);
    };

    resize();

    const onR = () => {
      clearTimeout(rz);
      rz = setTimeout(resize, 150);
    };

    const onM = (e: MouseEvent) => {
      lmx = (e.clientX / window.innerWidth - 0.5) * 6;
      lmy = (e.clientY / window.innerHeight - 0.5) * 6;
    };

    window.addEventListener("resize", onR, { passive: true });
    window.addEventListener("mousemove", onM, { passive: true });

    const draw = (ts: number) => {
      animRef.current = requestAnimationFrame(draw);
      const el = ts - lastT;
      if (el < FPS) return;
      lastT = ts - (el % FPS);

      const W = canvas.width / (window.devicePixelRatio || 1);
      const H = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.tick++;
        const ct = ((s.tick % s.t) + s.t) % s.t;
        let a = 0;
        if (ct < s.fl) a = (ct / s.fl) * s.pa;
        else if (ct < s.fl + s.hl) a = s.pa;
        else if (ct < s.fl * 2 + s.hl) a = (1 - (ct - s.fl - s.hl) / s.fl) * s.pa;

        if (a < 0.01) continue;

        ctx.globalAlpha = a;
        ctx.fillStyle = s.fs;
        ctx.beginPath();
        ctx.arc(s.x * W + lmx * s.r, s.y * H + lmy * s.r, s.r, 0, TWO_PI);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      clearTimeout(rz);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onR);
      window.removeEventListener("mousemove", onM);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none block z-[2] ${className}`}
    />
  );
}
