import { portfolioData } from "@/lib/portfolio-data";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
  <div className="p-8 lg:p-16 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
      <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
      Get In Touch
    </h2>
    <div className="space-y-6">
      <p className="text-lg text-slate-600 dark:text-slate-300">
        I&apos;m always interested in hearing about new opportunities and
        collaborations. Feel free to reach out!
      </p>
      <div className="space-y-4">
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <Mail size={20} />
          <span>{portfolioData.personal.email}</span>
        </a>
        {portfolioData.personal.linkedinUrl && (
          <a
            href={portfolioData.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span>LinkedIn Profile</span>
          </a>
        )}
        {portfolioData.personal.githubUrl && (
          <a
            href={portfolioData.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span>GitHub Profile</span>
          </a>
        )}
      </div>
    </div>
    </div>
  );
}
