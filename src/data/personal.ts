export interface PersonalInfo {
  name: string;
  role: string;
  greeting: string;
  avatar: string;
  statusText: string;
  bioLines: string[];
  education: {
    institute: string;
    degree: string;
    status: string;
    startYear: string;
    endYear: string;
    percentage: number;
    metrics: { label: string; value: string }[];
  };
}

export const personalData: PersonalInfo = {
  name: "Aman Sharma",
  role: "Full Stack Developer",
  greeting: "HELLO, I AM",
  avatar: "/images/avatar.jpg",
  statusText: "OPEN TO WORK",
  bioLines: [
    "I'm Aman Sharma, a Computer Science student and Full Stack Developer who builds practical web projects that solve real problems — from robust backend APIs to clean, responsive modern frontends.",
    "I focus on building resilient software across the stack with Node.js, Express, Next.js, and MongoDB, alongside applied AI and browser automation. Passionate about participating in hackathons, contributing to developer tooling, and building in public.",
  ],
  education: {
    institute: "B.S.A. College of Engineering and Technology, Mathura",
    degree: "B.Tech in Computer Science & Engineering (AKTU)",
    status: "ENROLLED",
    startYear: "2022",
    endYear: "2026",
    percentage: 82,
    metrics: [
      { label: "Status", value: "Pursuing" },
      { label: "Expected Graduation", value: "2026" },
      { label: "Affiliation", value: "Dr. A.P.J. Abdul Kalam Technical University" },
    ],
  },
};
