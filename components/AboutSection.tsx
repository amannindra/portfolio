"use client";

import { portfolioData } from "@/lib/portfolio-data";

export default function AboutSection() {
  return (
    <div className="p-8 lg:p-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
        About Me
      </h2>

      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
        {portfolioData.about}
      </p>

      {/* Current Focus */}
      <div className="mb-10">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
          Currently Working On
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {portfolioData.currentFocus.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-4"
            >
              <p className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                {item.label}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
          Education
        </h3>
        <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              {portfolioData.education.school}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
              {portfolioData.education.degree}
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 rounded-full px-3 py-1 mt-0.5">
            {portfolioData.education.graduationYear}
          </span>
        </div>
      </div>
    </div>
  );
}
