"use client";

import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
        About Me
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {portfolioData.about}
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
          Education
        </h3>
        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-300">
            <strong>{portfolioData.education.degree}</strong> in{" "}
            {portfolioData.education.major}
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            {portfolioData.education.school} • Class of{" "}
            {portfolioData.education.graduationYear}
          </p>
        </div>
      </div>
    </div>
  );
}
