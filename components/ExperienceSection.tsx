"use client";

import { portfolioData } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
        Professional Experience
      </h2>
      <div className="space-y-6">
        {portfolioData.experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              {exp.position}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              {exp.description}
            </p>
            {exp.skills && (
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
