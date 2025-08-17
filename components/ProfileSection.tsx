"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

interface ProfileSectionProps {
  name: string;
  email: string;
  // phone: string;
  // location: string;
  profileImage?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export default function ProfileSection({
  name,
  // email,
  profileImage = "/profile.jpg",
  linkedinUrl,
  githubUrl,
}: ProfileSectionProps) {
  return (
    <div className="relative h-[60vh] lg:h-screen w-full overflow-hidden">
      {/* Background profile image */}
      <Image
        src={profileImage}
        alt={name}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Email link at top-left */}
      {/* <a
        href={`mailto:${email}`}
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
      >
        <Mail size={18} />
        <span className="font-medium text-sm hidden sm:inline">{email}</span>
      </a> */}

      {/* Name centered */}
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl lg:text-5xl font-bold text-white text-center px-4">
        {name}
      </h1>

      {/* Social links bottom-left */}
      <div className="absolute bottom-6 left-6 flex gap-4">
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-white" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-md transition-all"
            aria-label="GitHub"
          >
            <Github size={20} className="text-white" />
          </a>
        )}
      </div>
    </div>
  );
}
