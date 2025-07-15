"use client";

import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail, Code2 } from "lucide-react";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "#about" },
    { name: "Experience", icon: Briefcase, href: "#experience" },
    { name: "Projects", icon: Code2, href: "#projects" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-slate-900 shadow-xl p-6 pt-16">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon size={20} />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop navigation - can be expanded later */}
      <nav className={`hidden lg:block ${className}`}>
        {/* Add desktop navigation items here if needed */}
      </nav>
    </>
  );
}
