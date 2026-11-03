import type { Metadata, Viewport } from "next";
import { Syne, Instrument_Sans, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aman Sharma | Portfolio",
  description:
    "Portfolio of Aman Sharma, Full Stack Developer and B.Tech CSE student at BSA College of Engineering and Technology, Mathura.",
  openGraph: {
    title: "Aman Sharma | Portfolio",
    description:
      "Portfolio of Aman Sharma, Full Stack Developer and B.Tech CSE student at BSA College of Engineering and Technology, Mathura.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Sharma | Portfolio",
    description:
      "Portfolio of Aman Sharma, Full Stack Developer and B.Tech CSE student at BSA College of Engineering and Technology, Mathura.",
  },
  keywords: [
    "Aman Sharma",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
  ],
  authors: [{ name: "Aman Sharma" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${instrument.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-black text-white antialiased min-h-screen selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
