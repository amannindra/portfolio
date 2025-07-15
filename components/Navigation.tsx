"use client";

import { useState } from "react";
import { Menu, X, Home, User, Briefcase, Mail, Code2 } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

export default function Navigation() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-red-200">
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
  // <div className=" w-full z-50 bg-white dark:bg-slate-900">
  //   <div className="flex justify-between items-center p-4">
  //     <div className="text-2xl font-bold">Aman Nindra</div>
  //     <div className="flex items-center gap-4">
  //       <Link href="/">Home</Link>
  //       <Link href="/about">About</Link>
  //     </div>
  //   </div>
  // </div>

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navItems = [
  //   { name: "Home", icon: Home, href: "/" },
  //   { name: "About", icon: User, href: "#about" },
  //   { name: "Experience", icon: Briefcase, href: "#experience" },
  //   { name: "Projects", icon: Code2, href: "#projects" },
  //   { name: "Contact", icon: Mail, href: "/contact" },
  // ];

  // return (
  //   <>
  //     {/* Mobile menu button */}
  //     <button
  //       onClick={() => setIsMenuOpen(!isMenuOpen)}
  //       className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white dark:bg-slate-800 rounded-lg shadow-lg"
  //       aria-label="Toggle menu"
  //     >
  //       {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  //     </button>

  //     {/* Mobile navigation overlay */}
  //     {isMenuOpen && (
  //       <div
  //         className="lg:hidden fixed inset-0 z-40 bg-black/50"
  //         onClick={() => setIsMenuOpen(false)}
  //       >
  //         <nav className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-slate-900 shadow-xl p-6 pt-16">
  //           <ul className="space-y-4">
  //             {navItems.map((item) => (
  //               <li key={item.name}>
  //                 <Link
  //                   href={item.href}
  //                   className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
  //                   onClick={() => setIsMenuOpen(false)}
  //                 >
  //                   <item.icon size={20} />
  //                   <span>{item.name}</span>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </nav>
  //       </div>
  //     )}

  //     {/* Desktop navigation - can be expanded later */}
  //     <nav className={`hidden lg:block fixed top-8 right-8 z-40 ${className}`}>
  //       <ul className="flex gap-6 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-6 py-3 rounded-full shadow-md">
  //         {navItems.map((item) => (
  //           <li key={item.name}>
  //             <Link
  //               href={item.href}
  //               className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
  //             >
  //               <item.icon size={18} />
  //               <span className="font-medium text-sm">{item.name}</span>
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>
  //   </>
}
