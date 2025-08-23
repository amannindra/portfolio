"use client";

import { Button } from "@/components/ui/button";

export default function ResumeSection() {
  const pdfPath = "/Aman_Nindra_Web.pdf";

  return (
    <section id="resume" className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
        Resume
      </h2>

      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
        <iframe
          src={`${pdfPath}#view=FitH`}
          className="w-full h-[720px]"
          title="Aman Nindra Resume"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <Button variant="outline" asChild>
          <a href={pdfPath} target="_blank" rel="noopener noreferrer">
            Open in new tab
          </a>
        </Button>
        <Button asChild>
          <a href={pdfPath} download>
            Download PDF
          </a>
        </Button>
      </div>
    </section>
  );
}
