"use client";

import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background lg:h-screen lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:h-full">
        {/* Left Section - Profile */}
        <div className="lg:w-1/3 relative lg:h-full">
          <ProfileSection
            {...portfolioData.personal}
            role={portfolioData.hero.role}
            summary={portfolioData.hero.summary}
            resumePdfPath={portfolioData.resume.pdfPath}
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-2/3 lg:h-full lg:overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <div className="flex-1">
              <ContentSection
                about={portfolioData.about}
                currentFocus={portfolioData.currentFocus}
                experience={portfolioData.experience}
                skills={portfolioData.skills}
                featuredProjects={portfolioData.featuredProjects}
                projects={portfolioData.projects}
resumePdfPath={portfolioData.resume.pdfPath}
                linkedinUrl={portfolioData.personal.linkedinUrl}
                githubUrl={portfolioData.personal.githubUrl}
                email={portfolioData.personal.email}
                contactDescription={portfolioData.contactDescription}
              />
            </div>
            {/* Footer */}
            <footer className="mt-auto py-6 px-8 lg:px-16 border-t border-border bg-background">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Aman Nindra. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
