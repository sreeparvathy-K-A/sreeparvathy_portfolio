"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05060c]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="min-w-0 truncate text-lg font-bold tracking-wide text-white sm:text-2xl"
        >
          Sreeparvathy
        </Link>

        {/* Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-gray-300 transition hover:text-[#c8922a]"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="text-sm font-medium text-gray-300 transition hover:text-[#c8922a]"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-sm font-medium text-gray-300 transition hover:text-[#c8922a]"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-sm font-medium text-gray-300 transition hover:text-[#c8922a]"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 transition hover:text-[#c8922a]"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Resume Button */}
        <a
          href="/images/Sreeparvathy_KA_Resume.pdf"
          download
          className="shrink-0 rounded-lg bg-[#c8922a] px-3 py-2 text-xs font-semibold text-black transition hover:bg-[#d9a63f] sm:px-5 sm:text-sm"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
