"use client";

import React from "react";

export function CornerBrackets({
  cornerColor = "rgba(255,255,255,0.45)",
  size = 9,
  thickness = 1.5,
}: {
  cornerColor?: string;
  size?: number;
  thickness?: number;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 transition-opacity duration-300 z-10"
        style={{
          width: size,
          height: size,
          borderTop: `${thickness}px solid ${cornerColor}`,
          borderLeft: `${thickness}px solid ${cornerColor}`,
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 transition-opacity duration-300 z-10"
        style={{
          width: size,
          height: size,
          borderBottom: `${thickness}px solid ${cornerColor}`,
          borderRight: `${thickness}px solid ${cornerColor}`,
        }}
      />
    </>
  );
}
