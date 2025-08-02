"use client";

interface SkillBadgeProps {
  skill: string;
  type: "language" | "framework" | "tool";
}

export default function SkillBadge({ skill, type }: SkillBadgeProps) {
  const getColorClasses = () => {
    switch (type) {
      case "language":
        return "bg-gray-100 text-black-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "framework":
        return "bg-gray-100 text-black-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "tool":
        return "bg-gray-100 text-black-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-black-800 dark:bg-gray-900/30 dark:text-gray-300";
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
