"use client";

import { Calendar, Building2 } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string;
  skills?: string[];
}

export default function ExperienceCard({
  company,
  position,
  duration,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {position}
            </h3>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mt-1">
              <Building2 size={16} />
              <span className="font-medium">{company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
            <Calendar size={16} />
            <span className="text-sm">{duration}</span>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          {description}
        </p>

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
