export interface PersonalInfo {
  name: string;
  role: string;
  greeting: string;
  avatar: string;
  statusText: string;
  bioLines: string[];
}

export const personalData: PersonalInfo = {
  name: "Aman Sharma",
  role: "Full Stack Developer",
  greeting: "HELLO, I AM",
  avatar: "/images/avatar.jpg",
  statusText: "OPEN TO WORK",
  bioLines: [
    "I'm Aman Sharma, a Computer Science student and Full Stack Developer who builds practical web projects that solve real problems — from robust backend APIs to clean, responsive modern frontends.",
    "I focus on building resilient software across the stack with Node.js, Express, Next.js, and MongoDB, alongside applied AI and browser automation. Passionate about participating in tech challenges, contributing to developer tooling, and building in public.",
  ],
};
