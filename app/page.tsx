"use client";

import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left Section - Profile */}
        <div className="lg:w-1/3 h-[60vh] lg:h-full relative">
          <ProfileSection
            {...portfolioData.personal}
            profileImage="/profile.jpg"
          />
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-2/3 h-[40vh] lg:h-full overflow-y-auto">
          <div className="flex flex-col min-h-full">
            <div className="flex-1">
              <ContentSection
                about={portfolioData.about}
                experience={portfolioData.experience}
                skills={portfolioData.skills}
                projects={portfolioData.projects}
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
