import { Navbar } from "@/components/navbar/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { HackathonsSection } from "@/components/sections/HackathonsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { ChatbotWidget } from "@/components/chatbot/ChatbotWidget";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <HackathonsSection />
      <ContactSection />
      <Footer />
      <ChatbotWidget />
    </main>
  );
}
