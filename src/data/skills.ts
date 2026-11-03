export type ReactIconKey =
  | "nextjs"
  | "express"
  | "github"
  | "vercel"
  | "gsap"
  | "antigravity";

export interface SkillItem {
  name: string;
  mono?: string;
  icon?: string;
  reactIcon?: ReactIconKey;
}

export interface SkillCategory {
  category: string;
  label: string;
  list: SkillItem[];
}

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillsData: SkillCategory[] = [
  {
    category: "Web Frameworks",
    label: "INTERFACE & CLIENT-SIDE",
    list: [
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Next.js", reactIcon: "nextjs" },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "GSAP", reactIcon: "gsap", mono: "GS" },
    ],
  },
  {
    category: "Backend & Systems",
    label: "SERVERS & DATABASES",
    list: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", reactIcon: "express" },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Mongoose", icon: `${DI}/mongoose/mongoose-original.svg`, mono: "MG" },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
     // { name: "REST APIs", mono: "API" },
    ],
  },
  {
    category: "Dev Tools",
    label: "ENVIRONMENT & PLATFORMS",
    list: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", reactIcon: "github" },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "Vercel", reactIcon: "vercel" },
      { name: "Firebase", icon: `${DI}/firebase/firebase-original.svg` },
      { name: "Antigravity", reactIcon: "antigravity" },
    ],
  },
];
