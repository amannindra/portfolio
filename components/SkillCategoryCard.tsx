"use client";

import SkillBadge from "./SkillBadge";

interface SkillCategoryCardProps {
  title: string;
  skills: string[];
  /**
   * The type is reused from SkillBadge to map to color scheme.
   * "framework" is also used for certifications because of the purple palette.
   */
  type: "language" | "framework" | "tool";
}

export default function SkillCategoryCard({
  title,
  skills,
  type,
}: SkillCategoryCardProps) {
  const getGradientClasses = () => {
    switch (type) {
      case "language":
        return {
          overlay: "from-blue-600 to-violet-600",
          iconWrapper:
            "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
        };
      case "framework":
        return {
          overlay: "from-blue-600 to-violet-600",
          iconWrapper:
            "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
        };
      case "tool":
        return {
          overlay: "from-blue-600 to-violet-600",
          iconWrapper:
            "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
        };
      default:
        return {
          overlay: "from-blue-600 to-violet-600",
          iconWrapper:
            "bg-blue-100 dark:bg-blue-900/30 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50",
        };
    }
  };

  const { overlay } = getGradientClasses();

  return (
    <div className="group relative p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${overlay} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
      ></div>

      <h3 className="relative text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4">
        {title}
      </h3>

      <div className="relative flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} type={type} />
        ))}
      </div>
    </div>
  );
}
