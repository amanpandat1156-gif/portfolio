"use client";

import React, { useState } from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/amanpandat1156@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Portfolio Message from ${formState.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("FormSubmit transmission failed");
      }
    } catch {
      // Direct mailto fallback ensures the message is never lost
      window.location.href = `mailto:amanpandat1156@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
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
          title="Let's Build Together"
          subtitle="Have an opportunity or full-stack project in mind? Reach out directly via form or email."
        />

        {/* Centered Message Submission Form Card */}
        <div className="w-full max-w-xl mx-auto relative rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-md p-6 sm:p-8 shadow-2xl overflow-hidden  hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 group">
          <CornerBrackets />

         

          <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none  focus:bg-white/[0.06] transition-all"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none  focus:bg-white/[0.06] transition-all"
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
                placeholder="Hi Aman, I'd like to discuss..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none  focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`w-full py-3.5 px-6 rounded-xl font-syne font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer ${
                status === "success"
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-black hover:bg-white/90 hover:scale-[1.01] active:scale-[0.99]"
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
              {status === "idle" && (
                <>
                  <Send className="w-3.5 h-3.5 opacity-70" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
