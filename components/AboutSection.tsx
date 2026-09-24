"use client";

import { FileDown, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";


const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="font-semibold text-foreground">{children}</strong>
);

// Renders **bold** markers in data strings as styled <strong> elements.
function renderBold(text: string) {
  return text
    .split("**")
    .map((part, i) => (i % 2 === 1 ? <B key={i}>{part}</B> : part));
}

interface AboutSectionProps {
  resumePdfPath?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string
}

export default function AboutSection({
  resumePdfPath,
  email,
  linkedinUrl,
  githubUrl,

}: AboutSectionProps) {
  const {
    aboutHeadings: headings,
    about,
    currentFocus,
    education,
  } = portfolioData;

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-6">
        {headings.about}
      </h2>

      <div className="space-y-4 mb-8">
        {about.split(/\n\s*\n/).map((paragraph, i) => (
          <p
            key={i}
            className="text-base text-muted-foreground leading-relaxed"
          >
            {renderBold(paragraph)}
          </p>
        ))}
      </div>

      {(resumePdfPath || email || linkedinUrl) && (
        <div className="flex flex-wrap gap-3 mb-10">
          {resumePdfPath && (
            <a
              href={resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <FileDown size={16} className="text-primary" />
              Resume
            </a>
          )}


          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gaGet In Touch
p-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <LinkedinIcon size={16} className="text-primary" />
              LinkedIn
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <GithubIcon size={16} className="text-primary" />
              GitHub
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-lg text-card-foreground font-medium text-sm hover:shadow-md transition-all focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail size={16} className="text-primary" />
              Send Email
            </a>
          )}
        </div>
      )}

      {currentFocus.length > 0 && (
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {headings.currentFocus}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentFocus.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-card p-4"
              >
                <p className="font-semibold text-card-foreground text-sm mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {renderBold(item.detail)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          {headings.education}
        </h3>

        <div className="space-y-3">
          {education.map((entry) => (
            <div
              key={`${entry.school}-${entry.degree}`}
              className="rounded-lg border border-border bg-card p-5 flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div>
                <p className="font-semibold text-card-foreground">
                  {entry.school}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {entry.degree}
                </p>
              </div>
              <span className="shrink-0 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1 mt-0.5">
                {entry.graduationYear}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
