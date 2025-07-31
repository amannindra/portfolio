"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Section = "home" | "about" | "experience" | "projects" | "contact";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: Array<{ name: string; icon: LucideIcon; section: Section }> =
    [
      { name: "Home", icon: Home, section: "home" },
      { name: "About", icon: User, section: "about" },
      { name: "Experience", icon: Briefcase, section: "experience" },
      { name: "Projects", icon: Code2, section: "projects" },
      { name: "Contact", icon: Mail, section: "contact" },
    ];

  const handleSectionChange = (section: Section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/*  Top bar  */}
      <nav className="flex items-center justify-center  px-5 py-4 backdrop-blur-md dark:bg-slate-900/70 lg:px-10">
        {/*  Brand / Logo placeholder  */}

        {/*  Desktop links  */}
        <ul className="hidden gap-10 lg:flex">
          {navItems.map(({ name, section }) => (
            <li key={name}>
              <button
                onClick={() => handleSectionChange(section)}
                className={`relative text-sm font-medium transition-all after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
                  activeSection === section
                    ? "text-blue-600 after:w-full dark:text-blue-400"
                    : "text-slate-700 after:w-0 hover:text-blue-600 hover:after:w-full dark:text-slate-300 dark:hover:text-blue-400"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        {/*  Mobile menu button  */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-md p-2 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800 lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/*  Mobile overlay + sliding menu  */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/*  Dimmed overlay  */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setIsMenuOpen(false)}
            />

            {/*  Sliding drawer  */}
            <motion.nav
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-6 overflow-y-auto bg-white px-6 pb-20 pt-24 shadow-xl dark:bg-slate-900"
            >
              {navItems.map(({ name, section, icon: Icon }) => (
                <motion.div
                  key={name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => handleSectionChange(section)}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 transition-all ${
                      activeSection === section
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                        : "text-slate-700 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{name}</span>
                  </button>
                </motion.div>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
