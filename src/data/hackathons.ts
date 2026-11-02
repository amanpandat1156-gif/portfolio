export interface HackathonCard {
  title: string;
  badge: string;
  metric: string;
  detail: string;
  link: string;
  accentColor: string;
}

export interface MetricDataPoint {
  c: string; // contest or sprint
  r: number; // impact rating / milestone points
}

export const hackathonsData = {
  teamName: "Dark Horses",
  eyebrow: "INNOVATION & HACKATHONS",
  title: "Hackathons & Impact",
  subtitle: "Building rapid prototypes and impactful civic & developer solutions under competitive hackathon environments.",
  cards: [
    {
      title: "Civic Tech & Public Good",
      badge: "Track: Civic Impact",
      metric: "CyberSafe & Civic Hub",
      detail: "Developed AI-guided public portals for complaint tracking, image verification, and victim assistance.",
      link: "https://github.com/your-username",
      accentColor: "#38bdf8",
    },
    {
      title: "Developer Tooling",
      badge: "Track: Web & Tools",
      metric: "Browser & Productivity",
      detail: "Engineered browser extensions and modular REST backends with zero-latency audio pipelines.",
      link: "https://github.com/your-username",
      accentColor: "#4ade80",
    },
    {
      title: "Applied AI & Agents",
      badge: "Track: AI & FinTech",
      metric: "Multi-Agent Systems",
      detail: "Prototyped financial risk assistants and Gemini-powered smart automated triage systems.",
      link: "https://github.com/your-username",
      accentColor: "#facc15",
    },
  ],
  trajectoryChart: [
    { c: "Sprint 1", r: 1200 },
    { c: "Sprint 2", r: 1380 },
    { c: "Hack 1", r: 1540 },
    { c: "Sprint 3", r: 1620 },
    { c: "Hack 2", r: 1780 },
    { c: "Sprint 4", r: 1890 },
    { c: "Dark Horses", r: 2050 },
  ],
};
