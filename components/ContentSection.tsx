"use client";

import { ExternalLink } from "lucide-react";
import SkillBadge from "./SkillBadge"
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import SkillCategoryCard from "./SkillCategoryCard";

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
    certifications?: string[];
    leadership?: string[];
  };
  projects?: Array<{
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
    period?: string;
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
          About
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {about}
        </p>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
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
          Technical Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <SkillCategoryCard
            title="Programming Languages"
            skills={skills.languages}
            type="language"
          />
          <SkillCategoryCard
            title="Frameworks & Libraries"
            skills={skills.frameworks}
            type="framework"
          />
          <SkillCategoryCard
            title="Tools & Technologies"
            skills={skills.tools}
            type="tool"
          />
          {skills.certifications && skills.certifications.length > 0 && (
            <SkillCategoryCard
              title="Certifications"
              skills={skills.certifications}
              type="framework"
            />
          )}
          {skills.leadership && skills.leadership.length > 0 && (
            <SkillCategoryCard
              title="Leadership & Roles"
              skills={skills.leadership}
              type="tool"
            />
          )}
        </div>
      </section>

      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
            {/* <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div> */}
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
          {/* <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div> */}
          Get In Touch
        </h2>
        <div className="text-center">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">

            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to work together!
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Email Card */}
          <a
            href="mailto:amannindra@gmail.com"
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 block"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                <ExternalLink
                  size={24}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                Send me a message
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                amannindra@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/aman-nindra-1b3634270/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 block"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
                <ExternalLink
                  size={24}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                Professional network
              </p>
              <p className="text-purple-600 dark:text-purple-400 font-medium">
                Connect with me
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/amannindra"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 block"
          >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors duration-300">
                <ExternalLink
                  size={24}
                  className="text-green-600 dark:text-green-400"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                GitHub
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                Code repositories
              </p>
              <p className="text-green-600 dark:text-green-400 font-medium">
                View my projects
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
