"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05060c]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
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
          href="/resume.pdf"
          className="rounded-lg bg-[#c8922a] px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#d9a63f]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}