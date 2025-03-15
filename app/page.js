import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AchievementsSection from "./components/AchievementsSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="flex-grow container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer className="mt-auto" />
    </main>
  );
}
