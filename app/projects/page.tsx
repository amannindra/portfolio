import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata = {
  title: "Other Projects | Aman Nindra",
  description: "More projects by Aman Nindra.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 py-12 lg:px-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-2">Other Projects</h1>
        <p className="text-muted-foreground mb-10">
          Additional work outside of the featured projects.
        </p>

        <div className="space-y-6">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
