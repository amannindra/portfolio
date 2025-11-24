"use client";

interface SkillBadgeProps {
  skill: string;
  type: "language" | "framework" | "tool";
}

export default function SkillBadge({ skill, type }: SkillBadgeProps) {
  const getColorClasses = () => {
    switch (type) {
      case "language":
        // Violet/Purple (Primary Theme Color)
        return "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20";
      case "framework":
        // Blue/Cyan
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 hover:bg-blue-500/20";
      case "tool":
        // Emerald/Teal
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-600 dark:text-slate-400 border border-slate-500/20";
    }
  };

  return (
    <span
      className={`
        inline-block px-4 py-2 rounded-full text-sm font-medium
        transition-all duration-300 cursor-default
        hover:scale-105 hover:shadow-md
        ${getColorClasses()}
      `}
    >
      {skill}
    </span>
  );
}
