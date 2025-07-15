import ProfileSection from "@/components/ProfileSection";
import ContentSection from "@/components/ContentSection";
import Navigation from "@/components/Navigation";
import { portfolioData } from "@/lib/portfolio-data";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-slate-50 dark:bg-slate-900">
      <div className="flex h-full flex-col lg:flex-row">
        {/* Left Section - Profile */}
        <div className="lg:w-1/3 h-[60vh] lg:h-full">
          <ProfileSection {...portfolioData.personal} />
        </div>

        {/* Right Section - Content */}
        <div className="flex flex-col bg-blue-200">
          <Navigation />
          <div className="lg:w-2/3 h-[40vh] lg:h-full overflow-y-auto bg-red-500">
            <ContentSection
              about={portfolioData.about}
              experience={portfolioData.experience}
              skills={portfolioData.skills}
              projects={portfolioData.projects}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
