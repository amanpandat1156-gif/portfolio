"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-6 border-t border-neutral-800 text-center text-xs font-mono text-neutral-500">
      <p>© {new Date().getFullYear()} Aman Sharma. All rights reserved.</p>
    </footer>
  );
}
