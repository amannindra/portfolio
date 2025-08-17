"use client";

interface SkillBadgeProps {
  skill: string;
  type: "language" | "framework" | "tool";
}

export default function SkillBadge({ skill, type }: SkillBadgeProps) {
  const getColorClasses = () => {
    switch (type) {
      case "language":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50";
      case "framework":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50";
      case "tool":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
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
