"use client";

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

export default function AboutSection() {
  const { aboutHeadings: headings, about, currentFocus, education } =
    portfolioData;

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-6">
        {headings.about}
      </h2>

      <div className="space-y-4 mb-10">
        {about.split(/\n\s*\n/).map((paragraph, i) => (
          <p
            key={i}
            className="text-base text-muted-foreground leading-relaxed"
          >
            {renderBold(paragraph)}
          </p>
        ))}
      </div>

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

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          {headings.education}
        </h3>

        <div className="rounded-lg border border-border bg-card p-5 flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold text-card-foreground">
              {education.school}
            </p>
            <p className="text-sm text-muted-foreground mt-0.5">
              {education.degree}
            </p>
          </div>
          <span className="shrink-0 text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1 mt-0.5">
            {education.graduationYear}
          </span>
        </div>
      </div>
    </div>
  );
}
