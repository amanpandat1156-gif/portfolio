"use client";

import React from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { HoverGrid } from "../common/HoverGrid";
import { hackathonsData, HackathonCard } from "@/data/hackathons";
import { Trophy, TrendingUp, ExternalLink } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function CustomChartTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#06070a]/95 border border-white/20 rounded-lg p-2.5 font-mono text-xs text-white shadow-xl">
        <p className="text-white/40 tracking-wider text-[10px] uppercase mb-1">{label}</p>
        <p className="font-semibold text-blue-400">Score: {payload[0].value}</p>
      </div>
    );
  }
  return null;
}

function HackCard({
  item,
  onMouseEnter,
}: {
  item: HackathonCard;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className="relative h-full flex flex-col justify-between rounded-[13px] bg-[#06070a] border border-white/[0.07] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#0a0b10] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.65)] group z-[2] overflow-hidden"
    >
      <CornerBrackets />

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-syne font-bold text-lg text-white group-hover:text-blue-300 transition-colors">
            {item.title}
          </span>
          <span
            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border"
            style={{
              color: item.accentColor,
              borderColor: `${item.accentColor}40`,
              backgroundColor: `${item.accentColor}10`,
            }}
          >
            {item.badge}
          </span>
        </div>

        <div className="font-mono text-sm font-semibold text-white/90">
          {item.metric}
        </div>

        <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
          {item.detail}
        </p>
      </div>

      <div className="pt-4 border-t border-white/[0.05] mt-4 flex items-center justify-between">
        <span className="font-mono text-[10px] text-white/40">Team Dark Horses</span>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>View Repo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export function HackathonsSection() {
  return (
    <section
      id="hackathons"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#020309] flex flex-col justify-center items-center overflow-hidden"
    >
      <StarfieldCanvas />

      {/* Grid Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none z-[3]"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          eyebrow={hackathonsData.eyebrow}
          title={hackathonsData.title}
          subtitle={hackathonsData.subtitle}
        />

        {/* 3 Hackathon Track Cards */}
        <HoverGrid className="grid-cols-1 md:grid-cols-3">
          {hackathonsData.cards.map((item) => (
            <HackCard key={item.title} item={item} />
          ))}
        </HoverGrid>

        {/* Performance & Milestone Graph Card */}
        <div className="relative rounded-2xl bg-[#06070a]/90 border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden">
          <CornerBrackets />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                <TrendingUp className="w-4 h-4" />
                <span>TEAM DARK HORSES · DEVELOPMENT TRAJECTORY</span>
              </div>
              <h3 className="font-syne text-lg sm:text-xl font-bold text-white">
                Sprint Velocity &amp; Innovation Score
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full">
              <Trophy className="w-3.5 h-3.5" />
              <span>Active Hackathon Competitor</span>
            </div>
          </div>

          <div className="h-64 sm:h-72 w-full pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={hackathonsData.trajectoryChart}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="3 3" />
                <XAxis
                  dataKey="c"
                  stroke="rgba(255,255,255,0.2)"
                  tick={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    fill: "rgba(255,255,255,0.4)",
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(255,255,255,0.2)"
                  tick={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    fill: "rgba(255,255,255,0.4)",
                  }}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomChartTooltip />} />
                <Line
                  type="monotone"
                  dataKey="r"
                  stroke="#38bdf8"
                  strokeWidth={2.5}
                  dot={{ fill: "#38bdf8", r: 3, strokeWidth: 0 }}
                  activeDot={{
                    r: 6,
                    strokeWidth: 2,
                    stroke: "#ffffff",
                    fill: "#38bdf8",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
