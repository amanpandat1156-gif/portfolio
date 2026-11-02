"use client";

import React, { useState } from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { Mail, Calendar, ArrowRight, Github, Linkedin, Radio, CheckCircle2, Loader2 } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable form submission
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
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
          eyebrow="GET IN TOUCH"
          title="Contact Me"
          subtitle="Have an opportunity, hackathon idea, or full-stack project in mind? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Space Telemetry HUD & Direct Connect */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Space Telemetry HUD Card */}
            <div className="relative rounded-2xl bg-[#06070a]/90 border border-white/10 p-6 shadow-2xl overflow-hidden">
              <CornerBrackets />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold tracking-wider">LIVE TELEMETRY</span>
                </div>
                <span className="font-mono text-[10px] text-white/40">ORBITAL HUD</span>
              </div>

              <div className="grid grid-cols-2 gap-3 py-4 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <p className="text-white/40 text-[10px]">CURRENT TIMEZONE</p>
                  <p className="text-white font-medium">IST (UTC +5:30)</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <p className="text-white/40 text-[10px]">COMM CHANNEL</p>
                  <p className="text-emerald-400 font-medium">UPLINK ACTIVE</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <p className="text-white/40 text-[10px]">LOCATION</p>
                  <p className="text-white font-medium">Mathura / Remote</p>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                  <p className="text-white/40 text-[10px]">RESPONSE RATE</p>
                  <p className="text-blue-400 font-medium">&lt; 24 Hours</p>
                </div>
              </div>
            </div>

            {/* Direct Link Cards */}
            <div className="space-y-3">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#06070a] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.04] transition-all shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-syne text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                      Email
                    </p>
                    <p className="font-mono text-xs text-white/50">your-email@example.com</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://cal.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-[#06070a] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.04] transition-all shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-syne text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Schedule a Call
                    </p>
                    <p className="font-mono text-xs text-white/50">cal.com · 30 min meeting</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Social Pills */}
            <div className="flex gap-3">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-xs font-mono text-white/80 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.08] text-xs font-mono text-white/80 transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Panel: Cyber Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative rounded-2xl bg-[#06070a]/95 border border-white/10 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
              <CornerBrackets />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/50 tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:border-blue-400/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs uppercase text-white/50 tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:border-blue-400/60 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs uppercase text-white/50 tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hi Aman, I'd like to talk about a project or opportunity..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:border-blue-400/60 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className={`w-full py-3.5 px-6 rounded-xl font-syne font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl ${
                    status === "success"
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-black hover:bg-white/90 hover:scale-[1.01]"
                  }`}
                >
                  {status === "submitting" && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Message Dispatched Successfully!</span>
                    </>
                  )}
                  {status === "idle" && <span>Transmit Message</span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
