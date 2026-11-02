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
    github: "https://github.com/your-username",
    link: "https://github.com/your-username",
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
    github: "https://github.com/your-username",
    link: "https://cybersafe-india.vercel.app",
    date: "2024",
  },
  {
    title: "Civic Issue Reporting Platform",
    label: "SMART CITY AUTOMATION",
    description:
      "An automated platform to report municipal potholes, garbage, and sewage problems with automated AI image verification and location tracking.",
    features: [
      "Computer vision verification pipeline to validate user-uploaded civic damage photos",
      "Intelligent duplicate detection using geolocation proximity and visual feature matching",
      "Department-wise automatic dispatch and resolution status lifecycle tracking",
    ],
    tech: ["Next.js", "Python", "Tailwind CSS", "MongoDB", "REST APIs", "OpenStreetMap"],
    status: "Live",
    github: "https://github.com/your-username",
    link: "https://github.com/your-username",
    date: "2024",
  },
  {
    title: "YouTube Audio Translator",
    label: "CHROME EXTENSION & AI AUDIO",
    description:
      "A lightweight Chrome extension that translates YouTube video audio into natural Hindi speech in real time with synchronized playback.",
    features: [
      "Browser extension Manifest V3 architecture with background service workers and content scripts",
      "Zero-latency audio stream capture and automated Hindi voice synthesis",
      "Interactive popup controller for volume balancing, pitch, and playback rate sync",
    ],
    tech: ["JavaScript", "Chrome Extensions API", "Web Audio API", "Manifest V3"],
    status: "Completed",
    github: "https://github.com/your-username",
    link: "https://github.com/your-username",
    date: "2024",
  },
  {
    title: "Black Swan",
    label: "FINTECH & MULTI-AGENT INTELLIGENCE",
    description:
      "An AI-powered multi-agent financial decision assistant and risk analysis engine paired with a premium, responsive FinTech analytics dashboard.",
    features: [
      "Autonomous agent workflow for market anomaly detection and risk scoring",
      "Interactive data visualizations, portfolio stress testing, and real-time indicators",
      "Modular microservice integration with low-latency API communication",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "GSAP"],
    status: "In Development",
    github: "https://github.com/your-username",
    link: "https://github.com/your-username",
    date: "2024",
  },
  {
    title: "Home Services Website",
    label: "SERVICE MARKETPLACE PLATFORM",
    description:
      "An on-demand service marketplace connecting homeowners with verified professionals for plumbing, electrical work, painting, and renovation.",
    features: [
      "Real-time service booking workflow with slot availability and instant quotes",
      "Service provider ratings, reviews, and verified skill badges",
      "Mobile-first responsive interface with search filtering and direct customer dispatch",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    status: "Live",
    github: "https://github.com/your-username",
    link: "https://github.com/your-username",
    date: "2023",
  },
];
