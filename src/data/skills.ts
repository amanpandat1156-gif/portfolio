export interface SkillItem {
  name: string;
  mono?: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  label: string;
  list: SkillItem[];
}

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    label: "INTERFACE & CLIENT-SIDE",
    list: [
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Next.js", icon: `${DI}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "GSAP", mono: "GS" },
    ],
  },
  {
    category: "Backend & Systems",
    label: "SERVERS & DATABASES",
    list: [
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DI}/express/express-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "Mongoose", mono: "MG" },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "REST APIs", mono: "API" },
    ],
  },
  {
    category: "DevOps & Tooling",
    label: "ENVIRONMENT & PLATFORMS",
    list: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "GitHub", icon: `${DI}/github/github-original.svg` },
      { name: "VS Code", icon: `${DI}/vscode/vscode-original.svg` },
      { name: "Postman", icon: `${DI}/postman/postman-original.svg` },
      { name: "Vercel", icon: `${DI}/vercel/vercel-original.svg` },
      { name: "Chrome Extensions", mono: "CRX" },
    ],
  },
];
