"use client";

import React, { useState } from "react";
import StarfieldCanvas from "../canvas/StarfieldCanvas";
import { SectionHeader } from "../common/SectionHeader";
import { CornerBrackets } from "../common/CornerBrackets";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "e8ce9d01-9be7-432c-9861-4b5efc0d45ec";

    // If access key is missing, notify visitor and offer direct email
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Contact key not configured. Opening your mail app...");
      window.location.href = `mailto:amanpandat1156@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
          from_name: "Portfolio Inquiry Gateway",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Failed to transmit message");
      }
    } catch (err: unknown) {
      console.error("Web3Forms transmission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Transmission failed. Please reach out directly via email."
      );
      setTimeout(() => setStatus("idle"), 6000);
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
        <div className="w-full max-w-xl mx-auto relative rounded-2xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-md p-6 sm:p-8 shadow-2xl overflow-hidden hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 group">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:bg-white/[0.06] transition-all"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:bg-white/[0.06] transition-all"
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
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/20 text-sm font-sans focus:outline-none focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className={`w-full py-3.5 px-6 rounded-xl font-syne font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer ${
                status === "success"
                  ? "bg-emerald-600 text-white"
                  : status === "error"
                  ? "bg-red-600/90 text-white hover:bg-red-600"
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
              {status === "error" && (
                <>
                  <AlertCircle className="w-4 h-4 text-white" />
                  <span>Failed to Transmit — Retry</span>
                </>
              )}
              {status === "idle" && (
                <>
                  <Send className="w-3.5 h-3.5 opacity-70" />
                  <span>Transmit Message</span>
                </>
              )}
            </button>

            {status === "error" && errorMessage && (
              <p className="text-xs text-red-400 text-center font-mono pt-1">
                {errorMessage}
              </p>
            )}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/40">
              <span>Direct inquiries:</span>
              <a
                href="mailto:amanpandat1156@gmail.com"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                amanpandat1156@gmail.com
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
