"use client";

import Image from "next/image";
import { LinkedinIcon, GithubIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  name: string;
  email: string;
  role: string;
  summary: string;
  resumePdfPath: string;
  profileImage?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function ProfileSection({
  name,
  email,
  role,
  summary,
  resumePdfPath,
  profileImage = "/main.jpeg",
  linkedinUrl,
  githubUrl,
}: ProfileSectionProps) {
  return (
    <div className="relative flex min-h-[50vh] w-full flex-col justify-end overflow-hidden lg:h-full">
      {/* Background profile image */}
      <Image
        src={profileImage || ""}
        alt={name}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

      {/* Intro content */}
      <div className="relative p-6 pb-8 lg:p-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-white">{name}</h1>
        <p className="mt-2 text-sm lg:text-base font-medium tracking-wide text-white/90">
          {role}
        </p>
        <p className="mt-3 max-w-md leading-relaxed text-white/80">{summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="bg-white text-slate-900 hover:bg-white/90"
          >
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white"
          >
            <a href={resumePdfPath} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white rounded-full backdrop-blur-md transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={20} className="text-white" />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white rounded-full backdrop-blur-md transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} className="text-white" />
            </a>
          )}
          <a
            href={`mailto:${email}`}
            className="p-3 bg-white/20 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white rounded-full backdrop-blur-md transition-all"
            aria-label={`Email ${name}`}
          >
            <Mail size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
