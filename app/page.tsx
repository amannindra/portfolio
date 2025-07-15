"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import Navigation from "@/components/Navigation";
import { portfolioData } from "@/lib/portfolio-data";
import { User, Briefcase, Code2, Mail } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

type Section = "home" | "about" | "experience" | "projects" | "contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  // Define different profile images for each section
  const sectionImages: Record<Section, string> = {
    home: "/profile.jpg",
    about: "/black.jpg", // You can change these to different images
    experience: "/castle.jpg",
    projects: "/cherry.jpg",
    contact: "/tuff.jpg",
  };

  // Define content for each section
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <ContentSection
            about={portfolioData.about}
            experience={portfolioData.experience}
            skills={portfolioData.skills}
            projects={portfolioData.projects}
          />
        );
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left Section - Profile with animated image transitions */}
        <div className="lg:w-1/3 h-[60vh] lg:h-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ProfileSection
                {...portfolioData.personal}
                profileImage={sectionImages[activeSection]}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Section - Content with Navigation */}
        <div className="lg:w-2/3 h-[40vh] lg:h-full overflow-y-auto">
          <div className="flex flex-col h-full">
            <Navigation
              activeSection={activeSection}
              onSectionChange={setActiveSection}
            />
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
