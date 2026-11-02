export interface SocialLink {
  label: string;
  href: string;
  color?: string;
  iconName: "github" | "linkedin" | "mail" | "calendar" | "code";
}

export const socialsData: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    color: "#e2e8f0",
    iconName: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    color: "#0a66c2",
    iconName: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:your-email@example.com",
    color: "#f87171",
    iconName: "mail",
  },
  {
    label: "Schedule Call",
    href: "https://cal.com/your-username",
    color: "#38bdf8",
    iconName: "calendar",
  },
];
