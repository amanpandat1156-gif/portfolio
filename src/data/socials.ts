export interface SocialLink {
  label: string;
  href: string;
  color?: string;
  iconName: "github" | "x" | "linkedin" | "mail" | "code";
}

export const socialsData: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/amanpandat1156-gif",
    color: "#e2e8f0",
    iconName: "github",
  },
  {
    label: "X",
    href: "https://x.com/amanpandat1156",
    color: "#ffffff",
    iconName: "x",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman-sharma-99a429360/",
    color: "#0a66c2",
    iconName: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:amanpandat1156@gmail.com",
    color: "#f87171",
    iconName: "mail",
  },
];
