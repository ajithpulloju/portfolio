import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ActivityStreamSection from "@/components/ActivityStreamSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientWorkSection from "@/components/ClientWorkSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import InternshipsSection from "@/components/InternshipsSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SplashScreenWrapper from "@/components/SplashScreenWrapper";

export default function Home() {
  return (
    <SplashScreenWrapper>
      <HeroSection />
      {/* AboutSection sits normally below HeroSection */}
      <div className="relative w-full z-0">
        <AboutSection />
      </div>
      <SkillsSection />
      <ActivityStreamSection />
      <ProjectsSection />
      <ClientWorkSection />
      <EducationSection />
      <CertificationsSection />
      <InternshipsSection />
      <ExperienceSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </SplashScreenWrapper>
  );
}
