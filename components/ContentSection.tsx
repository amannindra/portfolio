"use client";

import { Calendar, Building2, Code2, ExternalLink } from "lucide-react";
import SkillBadge from "./SkillBadge";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

interface ContentSectionProps {
  about: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
    skills?: string[];
  }>;
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  projects?: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }>;
}

export default function ContentSection({
  about,
  experience,
  skills,
  projects,
}: ContentSectionProps) {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
          About
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {about}
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
          Professional Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
          Technical Skills
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="language" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="framework" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <SkillBadge key={skill} skill={skill} type="tool" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
