export interface Project {
  title: string;
  label: string;
  description: string;
  features: string[];
  tech: string[];
  status?: "Live" | "Completed" | "In Development";
  github?: string;
  link?: string;
  date?: string;
}

export const projectsData: Project[] = [
  {
    title: "VidTube",
    label: "FULL-STACK BACKEND ARCHITECTURE",
    description:
      "A production-ready YouTube-style video sharing backend system engineered with comprehensive REST APIs, JWT authentication, and secure media pipelines.",
    features: [
      "Custom JWT authentication flow with refresh tokens and cookie security",
      "Media processing pipeline using Multer multipart handling and Cloudinary CDN storage",
      "Robust MongoDB aggregation pipelines for watch history, video metrics, and channel subscriptions",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Multer", "Cloudinary", "JWT"],
    status: "Completed",
    github: "https://github.com/amanpandat1156-gif/backend-for-VIDTUBE",
    link: "https://github.com/amanpandat1156-gif/backend-for-VIDTUBE",
    date: "2024",
  },
  {
    title: "CyberSafe India",
    label: "CIVIC TECH & CYBER RESILIENCE",
    description:
      "A national-focused civic and cyber crime reporting portal designed for rapid incident reporting, complaint categorization, and safety awareness.",
    features: [
      "AI-driven incident triage utilizing Gemini API to categorize reports and assist victims",
      "Responsive, accessible portal with guided reporting steps and high data confidentiality",
      "Automated advisory generation and real-time incident status tracking dashboard",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Vercel"],
    status: "Live",
    github: "https://github.com/amanpandat1156-gif",
    link: "https://cybersafe-india.vercel.app",
    date: "2024",
  },
];
