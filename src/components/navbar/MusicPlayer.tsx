"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesize low ambient space drone sound using Web Audio API
  const togglePlay = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioContextRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(
          0,
          audioContextRef.current.currentTime,
          0.1
        );
        setTimeout(() => {
          oscillatorNodeRef.current?.stop();
          oscillatorNodeRef.current?.disconnect();
          oscillatorNodeRef.current = null;
        }, 150);
      }
      setIsPlaying(false);
    } else {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = audioContextRef.current || new AudioCtx();
        audioContextRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // 110Hz ambient space tone (A2 note)
        osc.type = "sine";
        osc.frequency.setValueAtTime(110, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        oscillatorNodeRef.current = osc;
        gainNodeRef.current = gain;
        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio Context init blocked:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscillatorNodeRef.current?.stop();
      oscillatorNodeRef.current?.disconnect();
      audioContextRef.current?.close();
    };
  }, []);

  const barDurations = ["0.45s", "0.60s", "0.35s", "0.55s", "0.42s"];
  const barHeights = [6, 13, 9, 15, 7];

  return (
    <button
      onClick={togglePlay}
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      title={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
      className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors text-white/60 hover:text-white"
    >
      <div className="flex items-end gap-[2px] h-4 w-4 justify-center">
        {barDurations.map((dur, i) => (
          <span
            key={i}
            className={`w-[2px] bg-red-400 rounded-full transition-all ${
              isPlaying ? "animate-pulse" : "opacity-40"
            }`}
            style={{
              height: isPlaying ? `${barHeights[i]}px` : "3px",
              animationDuration: dur,
            }}
          />
        ))}
      </div>
      <span className="text-[11px] font-mono tracking-wider hidden sm:inline">
        {isPlaying ? "LIVE" : "AUDIO"}
      </span>
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-red-400" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 text-white/40" />
      )}
    </button>
  );
}
