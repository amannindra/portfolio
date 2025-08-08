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

          {skills.certifications && skills.certifications.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.certifications.map((cert) => (
                  <SkillBadge key={cert} skill={cert} type="framework" />
                ))}
              </div>
            </div>
          )}

          {skills.leadership && skills.leadership.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
                Leadership & Roles
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.leadership.map((role) => (
                  <SkillBadge key={role} skill={role} type="tool" />
                ))}
              </div>
            </div>
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
            I'm always interested in new opportunities and collaborations. Feel
            free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:amannindra@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/aman-nindra-1b3634270/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/amannindra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink size={18} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
