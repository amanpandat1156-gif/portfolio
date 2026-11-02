"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, User, Terminal } from "lucide-react";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const QUICK_CHIPS = [
  { label: "Projects", query: "Tell me about your projects" },
  { label: "Skills", query: "What technologies do you use?" },
  { label: "Hackathons", query: "Tell me about Team Dark Horses" },
  { label: "Education", query: "Where do you study?" },
  { label: "Contact", query: "How can I contact Aman?" },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: `Hi! I'm Aman's AI assistant. Ask me anything about his projects, skills, education, or hackathons!`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const endOfChatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    const q = userText.toLowerCase();
    let reply = "";

    if (q.includes("project") || q.includes("work") || q.includes("vidtube") || q.includes("cybersafe")) {
      const topNames = projectsData.slice(0, 3).map((p) => p.title).join(", ");
      reply = `Aman has built several full-stack projects including ${topNames}, YouTube Audio Translator, and Black Swan FinTech AI assistant. You can check the Projects section to see live demos and code repositories!`;
    } else if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
      reply = `Aman specializes in TypeScript, JavaScript, Node.js, Express.js, MongoDB, React, Next.js, and Tailwind CSS, along with Python, Java, REST APIs, and Chrome Extension development.`;
    } else if (q.includes("hackathon") || q.includes("dark horse") || q.includes("team")) {
      reply = `Aman competes with team "Dark Horses" focusing on Civic Tech, developer tooling, and applied AI systems!`;
    } else if (q.includes("education") || q.includes("college") || q.includes("degree")) {
      reply = `Aman is pursuing B.Tech in Computer Science & Engineering at B.S.A. College of Engineering and Technology, Mathura (AKTU), graduating in 2026.`;
    } else if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
      reply = `You can email Aman directly at your-email@example.com or connect with him on LinkedIn & GitHub via the Contact section below.`;
    } else {
      reply = `Aman is a passionate Full Stack Developer who enjoys building scalable backends, clean user experiences, and innovative AI solutions. Feel free to explore the sections or ask more specific questions!`;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: reply,
        },
      ]);
    }, 500);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
          title="Chat with Aman's Assistant"
          className="relative group p-3.5 rounded-full bg-[#0a0a0f] border border-blue-500/40 text-blue-400 hover:text-white hover:border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] transition-all duration-300"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500" />
          {isOpen ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
        </button>
      </div>

      {/* Expanded Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-[#06070a]/95 border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden flex flex-col h-[480px] animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-syne font-bold text-xs text-white">Aman&apos;s Assistant</p>
                <p className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/50 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-300 flex-shrink-0 mt-0.5">
                    <Terminal className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-xl max-w-[80%] leading-relaxed ${
                    m.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-xs"
                      : "bg-white/[0.05] border border-white/10 text-white/90 rounded-bl-xs"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endOfChatRef} />
          </div>

          {/* Quick Chips */}
          <div className="px-3 py-2 border-t border-white/5 bg-white/[0.02] flex gap-1.5 overflow-x-auto no-scrollbar">
            {QUICK_CHIPS.map((chip) => (
              <button
                key={chip.label}
                onClick={() => handleSend(chip.query)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[10px] font-mono text-white/70 hover:text-white transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 border-t border-white/10 flex items-center gap-2 bg-[#06070a]"
          >
            <input
              type="text"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-blue-400/60"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
