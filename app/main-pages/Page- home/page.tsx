"use client";
import { motion } from "framer-motion";

const frontendSkills = [
  ["React", "R"],
  ["Next.js", "N"],
  ["JavaScript", "JS"],
  ["HTML5", "5"],
  ["Tailwind CSS", "TW"],
  ["CSS/Bootstrap", "B"],
];

const backendSkills = [
  ["Node.js", "N"],
  ["Express.js", "ex"],
  ["NestJS", "NS"],
];

const databaseSkills = [
  ["MongoDB", "M"],
  ["MySQL", "SQL"],
];

const toolSkills = [
  ["Figma", "F"],
  ["Thunder Client", "TC"],
  ["Git", "G"],
  ["Vercel", "V"],
];

const projects = [
  {
    number: "01",
    label: "SHOP",
    visualTitle: "Nutricart",
    image: "/images/Nutricart-project.jpg",
    type: "MERN Full Stack",
    title: "Nutricart-E-Commerce Platform",
    date: "",
    description:
      "A complete online shopping experience with product catalog, cart management, user authentication, and a responsive checkout flow.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/sreeparvathy-K-A/Nutricart",
    liveUrl: "",
  },
  {
    number: "02",
    label: "LEGAL",
    visualTitle: "CaseMate",
    image: "/images/casemate.jpg",
    type: "Python Full Stack",
    title: "CaseMate — Legal Case Management Web Application",
    date: "Jan 2025 – Mar 2025",
    description:
      "A legal case management platform for clients and advocates, featuring secure registration and login, role-based access, case detail management, appointment scheduling, and communication tools.",
    techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    githubUrl: "https://github.com/sreeparvathy-K-A/CaseMate",
    liveUrl: "",
    hideLiveLink: true,
  },
];

const quickInfo = [
  ["Name", "Sreeparvathy K A"],
  ["Role", "Full Stack Developer (Fresher)"],
  ["Education", "Master of Computer Applications (MCA)"],
  ["Location", "Kottayam, Kerala, India"],
  ["Email", "Sreeparvathyka63@gmail.com"],
  ["Languages", "English, Malayalam"],
];

const heroTechIcons = [
  {
    name: "MongoDB",
    className: "hero-tech-mongodb",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M33 4c8.8 8.4 15.2 18.3 15.2 29.4 0 11.8-7.1 20.6-15.2 25.6C24.9 54 17.8 45.2 17.8 33.4 17.8 22.3 24.2 12.4 33 4Z" fill="#47A248" />
        <path d="M33 12v43" stroke="#023430" strokeLinecap="round" strokeWidth="4" />
      </svg>
    ),
  },
  {
    name: "Express.js",
    className: "hero-tech-express",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="#050505" />
        <path d="M13 36.6c.4 4.1 3.5 6.7 7.6 6.7 3 0 5-1.1 6.5-3.5l4 2.3c-2.4 3.9-5.9 5.8-10.6 5.8-7 0-12.2-4.9-12.2-12s5-12.1 11.9-12.1c7.1 0 11.5 4.9 11.5 12.6H13Zm13-4c-.6-3-2.8-4.8-6-4.8-3.3 0-5.7 1.8-6.7 4.8H26Z" fill="#fff" />
        <path d="M33.3 47.2 42.6 35.6 34 24.5h5.9l5.7 7.5 5.8-7.5h5.8l-8.6 10.9 9.4 11.8h-6l-6.4-8.4-6.4 8.4h-5.9Z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "React",
    className: "hero-tech-react",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="4.8" fill="#61DAFB" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" fill="none" stroke="#61DAFB" strokeWidth="3.5" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="25" ry="9.5" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 32 32)" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    className: "hero-tech-node",
    icon: (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 4 56 17.8v28.4L32 60 8 46.2V17.8L32 4Z" fill="#83CD29" />
        <path d="M32 9.4 51.4 20.6v22.8L32 54.6 12.6 43.4V20.6L32 9.4Z" fill="#3C873A" />
        <path d="M22 42V24h6.4l7.2 10.7V24H42v18h-6.2l-7.4-10.9V42H22Z" fill="#fff" />
      </svg>
    ),
  },
];

function SkillIcon({ name }: { name: string }) {
  const iconClassName = "h-9 w-9";

  switch (name) {
    case "React":
      return heroTechIcons[2].icon;
    case "Next.js":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <circle cx="32" cy="32" r="28" fill="#fff" />
          <path d="M20 43V21h5.4l13.4 15.9V21H44v22h-5.2L25.2 26.8V43H20Z" fill="#050505" />
          <path d="m39.2 36.8 4.8 6.1V29.2l-4.8-5.8v13.4Z" fill="#050505" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M8 8h48v48H8z" fill="#F7DF1E" />
          <path d="M25.5 44.2c1 1.6 2.1 2.6 4 2.6 1.7 0 2.8-.8 2.8-2.3V24h5.5v20.6c0 5.2-3.1 7.5-7.7 7.5-4.1 0-6.5-2.1-7.7-4.7l3.1-3.2Z" fill="#111" />
          <path d="M41.2 43.9c1.4 2.2 3.2 3.4 6.3 3.4 2.6 0 4.2-1 4.2-2.6 0-1.9-1.5-2.5-4.5-3.8l-1.6-.7c-4.3-1.8-7.1-4.1-7.1-8.9 0-4.4 3.4-7.7 8.6-7.7 3.7 0 6.4 1.3 8.3 4.7l-4.5 2.9c-1-1.8-2.1-2.5-3.8-2.5s-2.8 1.1-2.8 2.5c0 1.8 1.1 2.5 3.7 3.6l1.6.7c5 2.1 7.8 4.3 7.8 9.2 0 5.3-4.2 8.2-9.7 8.2-5.5 0-9-2.6-10.7-6l4.2-3Z" fill="#111" transform="scale(.74) translate(13 10)" />
        </svg>
      );
    case "HTML5":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M12 6h40l-3.6 45L32 58l-16.4-7L12 6Z" fill="#E44D26" />
          <path d="M32 10h16.3l-3 37.8L32 53.4V10Z" fill="#F16529" />
          <path d="M22 20h10v5h-9.5l.5 6H32v5h-13l-1.4-16H22Zm-1.4 19h5.2l.4 4.4 5.8 2.1v5.3l-10.7-3.9-.7-7.9Z" fill="#EBEBEB" />
          <path d="M42 20v5H32v-5h10Zm-.5 11-.4 5H32v-5h9.5Zm-1 8-.7 7.9L32 50.8v-5.3l5.8-2.1.4-4.4h2.3Z" fill="#fff" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M18 30c3.7-9.8 9.9-14.7 18.5-14.7 5.2 0 9.1 1.9 11.8 5.8 1.5 2.2 3.3 3.4 5.7 3.4 3 0 5.3-1.5 7-4.5-3.7 9.8-9.9 14.7-18.5 14.7-5.2 0-9.1-1.9-11.8-5.8-1.5-2.2-3.3-3.4-5.7-3.4-3 0-5.3 1.5-7 4.5Zm-15 14c3.7-9.8 9.9-14.7 18.5-14.7 5.2 0 9.1 1.9 11.8 5.8 1.5 2.2 3.3 3.4 5.7 3.4 3 0 5.3-1.5 7-4.5-3.7 9.8-9.9 14.7-18.5 14.7-5.2 0-9.1-1.9-11.8-5.8-1.5-2.2-3.3-3.4-5.7-3.4-3 0-5.3 1.5-7 4.5Z" fill="#38BDF8" />
        </svg>
      );
    case "CSS/Bootstrap":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M8 8h22l-2 43-8 5-8-5L8 8Z" fill="#1572B6" />
          <path d="M34 8h22v48H34z" fill="#7952B3" />
          <path d="M14 20h12l-.4 5h-7l.2 4h6.5l-.7 13-4.6 2-4.5-2-.4-5h3.8l.1 2 1 .4 1-.4.2-5h-6.5L14 20Z" fill="#fff" />
          <path d="M40 19h7c3.5 0 5.5 1.7 5.5 4.5 0 1.8-.9 3.1-2.6 3.7 2.1.6 3.3 2.1 3.3 4.4 0 3.2-2.3 5.1-6.1 5.1H40V19Zm4.2 7h2.3c1.1 0 1.8-.6 1.8-1.6s-.7-1.5-1.9-1.5h-2.2V26Zm0 6.8H47c1.3 0 2-.6 2-1.8s-.8-1.8-2.1-1.8h-2.7v3.6Z" fill="#fff" />
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <circle cx="24" cy="16" r="10" fill="#F24E1E" />
          <circle cx="40" cy="16" r="10" fill="#FF7262" />
          <circle cx="24" cy="32" r="10" fill="#A259FF" />
          <circle cx="40" cy="32" r="10" fill="#1ABCFE" />
          <circle cx="24" cy="48" r="10" fill="#0ACF83" />
        </svg>
      );
    case "Node.js":
      return heroTechIcons[3].icon;
    case "Express.js":
      return heroTechIcons[1].icon;
    case "NestJS":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M32 5 54 17.5v21.8L32 59 10 39.3V17.5L32 5Z" fill="#E0234E" />
          <path d="M22 43V21h6.2l8.8 13.3V21h5v22h-5.8L27 29.1V43h-5Z" fill="#fff" />
          <path d="M18 18 32 10l14 8-14 8-14-8Z" fill="#ff6b88" opacity=".55" />
        </svg>
      );
    case "MongoDB":
      return heroTechIcons[0].icon;
    case "MySQL":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <ellipse cx="32" cy="15" rx="22" ry="8" fill="#00758F" />
          <path d="M10 15v22c0 4.4 9.8 8 22 8s22-3.6 22-8V15c0 4.4-9.8 8-22 8s-22-3.6-22-8Z" fill="#F29111" />
          <path d="M10 25c0 4.4 9.8 8 22 8s22-3.6 22-8" fill="none" stroke="#fff" strokeOpacity=".65" strokeWidth="3" />
          <path d="M10 35c0 4.4 9.8 8 22 8s22-3.6 22-8" fill="none" stroke="#fff" strokeOpacity=".65" strokeWidth="3" />
        </svg>
      );
    case "Thunder Client":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M38 4 14 35h16l-4 25 24-33H34l4-23Z" fill="#7C3AED" />
          <path d="M36 8 19 32h15l-3 18 15-21H31l5-21Z" fill="#FBBF24" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M59 29.2 34.8 5c-1.6-1.6-4.1-1.6-5.7 0L24 10.1l6.4 6.4c1.7-.6 3.7-.2 5 1.2 1.4 1.4 1.8 3.5 1.1 5.3l6.2 6.2c1.8-.6 3.9-.2 5.3 1.2 2.1 2.1 2.1 5.5 0 7.6s-5.5 2.1-7.6 0c-1.5-1.5-1.9-3.7-1.1-5.6l-5.8-5.8v15.3c.5.3 1 .6 1.4 1 2.1 2.1 2.1 5.5 0 7.6s-5.5 2.1-7.6 0-2.1-5.5 0-7.6c.5-.5 1-.8 1.6-1.1V26.5c-.6-.3-1.1-.6-1.6-1.1-1.6-1.6-2-4.1-1-6l-6.3-6.3L5 28.9c-1.6 1.6-1.6 4.1 0 5.7L29.2 59c1.6 1.6 4.1 1.6 5.7 0L59 34.9c1.6-1.6 1.6-4.1 0-5.7Z" fill="#F05032" />
        </svg>
      );
    case "Vercel":
      return (
        <svg viewBox="0 0 64 64" className={iconClassName} aria-hidden="true">
          <path d="M32 10 58 55H6L32 10Z" fill="#fff" />
        </svg>
      );
    default:
      return null;
  }
}

function SkillList({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[][];
}) {
  return (
    <div className="skill-group-card rounded-xl bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-6">
      <div className="border-b border-black/10 pb-5">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#ff7800]">{title}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-[#53606c]">{description}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {items.map(([skill]) => (
          <article
            key={skill}
            className="group rounded-lg border border-black/5 bg-[#f7f7f7] p-4 transition hover:-translate-y-1 hover:border-[#ff7800]/25 hover:bg-white hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3">
              <span className="skill-card-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#101010] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <SkillIcon name={skill} />
              </span>
              <p className="text-xs font-black text-[#101010] sm:text-sm">{skill}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function PageHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <header className="portfolio-header absolute inset-x-0 top-0 px-3 py-3 sm:px-8 lg:px-12">
        <nav className="portfolio-nav mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="#home" className="portfolio-brand" aria-label="Sreeparvathy home">
            Sreeparvathy<span>.</span>
          </a>
          <details className="mobile-nav relative ml-auto w-fit sm:hidden">
            <summary
              className="mobile-nav-button flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg"
              aria-label="Open navigation menu"
            >
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-nav-panel absolute right-0 top-12 grid min-w-40 overflow-hidden rounded-xl p-2 text-[11px] font-bold uppercase tracking-[0.1em]">
              <a href="#home" className="nav-link-hover">Home</a>
              <a href="#about" className="nav-link-hover">About</a>
              <a href="#skills" className="nav-link-hover">Skills</a>
              <a href="#projects" className="nav-link-hover">Projects</a>
              <a href="#contact" className="nav-link-hover">Contact</a>
            </div>
          </details>

          <div className="nav-menu-panel ml-auto hidden items-center gap-4 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#15110e] sm:flex sm:w-fit sm:justify-end">
            <a href="#home" className="nav-link-hover">
              Home
            </a>
            <a href="#about" className="nav-link-hover">
              About
            </a>
            <a href="#skills" className="nav-link-hover">
              Skills
            </a>
            <a href="#projects" className="nav-link-hover">
              Projects
            </a>
            <a href="#experience" className="nav-link-hover">
              Experience
            </a>
           
          </div>
          <a href="#contact" className="nav-contact-cta hidden sm:inline-flex">
            Contact Me
          </a>
        </nav>
      </header>

      <main
        id="home"
        className="hero-photo-layout relative flex min-h-[100svh] scroll-mt-24 items-center justify-center overflow-hidden px-4 pb-16 pt-32 text-center sm:px-8 sm:pb-24 sm:pt-36 lg:px-10"
      >
        <div className="hero-grid absolute inset-0 opacity-15" />

        <section className="hero-layout hero-reference-layout relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-0 py-8 text-left sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-12">
          <div className="hero-name-aura" />
          <motion.div
            className="hero-left-copy hero-content-card hero-reference-copy flex min-w-0 max-w-4xl flex-col items-start text-left"
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero-kicker mb-4 text-[10px] font-black uppercase tracking-[0.24em] sm:mb-5 sm:text-xs sm:tracking-[0.32em]">
              Hi, I am
            </p>
            <h1 className="reference-hero-title max-w-3xl text-left font-extrabold">
              SREEPARVATHY K A
            </h1>
            <h2 className="reference-hero-role w-full text-center">Full Stack Developer</h2>
            <p className="mt-6 max-w-2xl text-[12px] font-medium leading-6 text-white/75 sm:text-base sm:leading-7">
              MCA graduate and MERN Stack Developer focused on building responsive web applications, RESTful APIs, and modern user experiences using React, Node.js, Express.js, and MongoDB.
            </p>
            <div className="hero-actions mt-7 w-full max-w-sm sm:mt-8 sm:w-auto sm:max-w-none">
              <a
                href="/Sreeparvathy-K-A-CV.pdf"
                download
                className="hero-primary-cta inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-[#ff7800] px-5 py-3 text-[9px] font-black uppercase tracking-[0.08em] text-black transition sm:px-6 sm:text-xs sm:tracking-[0.14em]"
              >
                Download Resume <span aria-hidden="true">↓</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-photo-wrap hero-reference-photo"
            aria-label="Portrait of Sreeparvathy K A"
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-photo-lines" aria-hidden="true" />
            <div className="hero-photo-glow" aria-hidden="true" />
            <div className="hero-photo-frame" />
          </motion.div>

        </section>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-xs font-black uppercase tracking-[0.28em] text-white/45 transition hover:text-[#ff7800] sm:block"
        >
      
        </a>
      </main>

      <section id="about" className="portfolio-section reveal-section scroll-mt-24 border-t border-[#ff7800]/20 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-16">
          <div className="section-copy">
            <div className="flex items-center gap-5">
              <p className="text-xs font-black uppercase tracking-[0.42em] text-[#ff7800]">Get To Know Me</p>
              <span className="h-px w-20 bg-[#ff7800]/70" />
            </div>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-[#101010] sm:text-5xl">
              About <span className="text-[#ff7800]">Me</span>
            </h2>
            <div className="mt-7 max-w-3xl space-y-4 text-base leading-8 text-[#53606c]">
              <p>
                Hi! I&apos;m <span className="font-black text-[#101010]">Sreeparvathy K A</span>, a MERN Stack Developer and MCA graduate from Kottayam, Kerala. I build responsive, user-friendly web applications with clean interfaces and reliable backend logic.
              </p>
              <p>
                I have hands-on experience with MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS, and MySQL. I&apos;m eager to contribute to real-world projects, collaborate with teams, and keep growing as a software developer.
              </p>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-black/5 border-l-4 border-l-[#ff7800] bg-[#f7f7f7] px-4 py-3">
                <p className="text-xl font-black text-[#101010]">MERN</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-[#53606c]">Stack Focus</p>
              </div>
              <div className="rounded-lg border border-black/5 border-l-4 border-l-[#ff7800] bg-[#f7f7f7] px-4 py-3">
                <p className="text-xl font-black text-[#101010]">Fresher</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-[#53606c]">Open To Work</p>
              </div>
              <div className="rounded-lg border border-black/5 border-l-4 border-l-[#ff7800] bg-[#f7f7f7] px-4 py-3">
                <p className="text-xl font-black text-[#101010]">Full Stack</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-[#53606c]">Developer</p>
              </div>
            </div>
          </div>

          <aside className="quick-info-card w-full rounded-xl border border-black/5 bg-[#f7f7f7] p-5 shadow-[0_14px_32px_rgba(0,0,0,0.07)] sm:p-6 lg:justify-self-end">
            <div className="flex items-center gap-4">
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#ff7800]">Quick Info</p>
              <span className="h-px flex-1 bg-[#ff7800]/50" />
            </div>
            <div className="mt-4 divide-y divide-black/10">
              {quickInfo.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[105px_1fr] sm:items-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff7800]">{label}</p>
                  <p className="break-words text-sm leading-6 text-[#101010]">{value}</p>
                </div>
              ))}
              <div className="grid gap-1 py-3 sm:grid-cols-[105px_1fr] sm:items-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff7800]">Status</p>
                <p className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to Work
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="skills" className="portfolio-section reveal-section scroll-mt-24 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-5">
               
                
              </div>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-[#101010] sm:text-5xl">
                Skills &amp; <span className="text-[#ff7800]">Technologies</span>
              </h2>
            </div>
           
          </div>

          <div className="skills-showcase mt-10 grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <SkillList
              title="Frontend"
              description="Interfaces, layouts, styling, browser behavior, and design handoff."
              items={frontendSkills}
            />
            <SkillList
              title="Backend"
              description="APIs, server-side logic, routes, controllers, and application structure."
              items={backendSkills}
            />
            <SkillList
              title="Database"
              description="Data modeling, querying, storing application data, and connecting apps to databases."
              items={databaseSkills}
            />
            <SkillList
              title="Tools"
              description="Design handoff, API testing, source control, and everyday development workflow."
              items={toolSkills}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section reveal-section scroll-mt-24 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[0.05em] text-[#ff7800] sm:text-5xl">
            Projects
          </h2>

          <div className="projects-showcase mt-12 grid gap-8">
            {projects.map((project) => (
              <article
                key={project.title}
                className="project-showcase-card group grid w-full overflow-hidden rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transition hover:-translate-y-1 md:grid-cols-[1.05fr_0.95fr]"
              >
                <div
                  className="project-card-visual relative flex min-h-[280px] items-center justify-center overflow-hidden bg-cover bg-center px-6 py-8 text-center text-white md:min-h-[360px]"
                  style={{ backgroundImage: `url("${project.image}")` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/15 transition group-hover:via-black/40" />
                  <div className="relative z-10 w-full">
                    <p className="text-xs font-black uppercase tracking-[0.38em] text-[#ff7800]">{project.type}</p>
                    <p className="mt-4 text-4xl font-black uppercase tracking-[0.14em] text-white">{project.label}</p>
                    <div className="mx-auto mt-5 h-1 w-20 bg-[#ff7800]" />
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-white/60">{project.visualTitle}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-xl text-xl font-black leading-tight text-[#101820] sm:text-2xl">{project.title}</h3>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-[#ff7800]">{project.number}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#263444]">{project.description}</p>
                  {project.date && (
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#ff7800]">{project.date}</p>
                  )}

                  <div className="mt-5">
                    <p className="text-sm font-black text-[#101820]">Tech Stack:</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="rounded-md bg-[#f2f2f2] px-3 py-2 text-xs font-bold text-[#101820]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-5 text-sm font-black">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[#ff7800] transition hover:text-black">
                        Go Live →
                      </a>
                    ) : !("hideLiveLink" in project && project.hideLiveLink) ? (
                      <span className="text-[#ff7800]/55">Go Live →</span>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#ff7800] transition hover:text-black"
                      >
                        GitHub →
                      </a>
                    ) : (
                      <span className="text-[#ff7800]/55">
                        GitHub →
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="portfolio-section reveal-section scroll-mt-20 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-5">
            <h2 className="text-4xl font-black uppercase leading-[0.9] text-[#101010] sm:text-5xl">
              <span className="block">Work</span>
              <span className="block text-[#ff7800]">Experience</span>
            </h2>
            <span className="h-px w-20 bg-[#ff7800]/70" />
          </div>
          <div className="mt-8 max-w-4xl">
            <article className="experience-card rounded-xl border-l-4 border-[#ff7800] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.08)] sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-black text-[#101010]">MERN Stack Developer Intern</h3>
                  <p className="mt-2 text-sm font-semibold text-[#ff7800]">SMEC Technologies - Kochi, Kerala</p>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#53606c]">08/2025 - 03/2026</p>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#53606c]">
                Worked on full-stack web applications using React.js, Node.js, Express.js, and MongoDB, with focus on reusable UI components, REST APIs, and request testing using Thunder Client.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="education" className="portfolio-section reveal-section scroll-mt-20 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="flex items-center gap-5">
                <p className="text-xs font-black uppercase tracking-[0.42em] text-[#ff7800]">Education</p>
                <span className="h-px w-20 bg-[#ff7800]/70" />
              </div>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] text-[#101010] sm:text-5xl">
                Academic <span className="text-[#ff7800]">Background</span>
              </h2>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-[#f7f7f7] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-8">
            <div className="divide-y divide-black/10">
              <article className="grid gap-5 py-6 first:pt-0 last:pb-0 lg:grid-cols-[1fr_220px] lg:items-start">
                <div>
                  <h3 className="text-2xl font-black leading-tight text-[#101010]">Master of Computer Applications (MCA)</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff7800]">College</p>
                      <p className="mt-2 text-sm font-black leading-7 text-[#101010]">School of Technology and Applied Sciences, Pullarikunnu,Kottayam</p>
                    </div>
                    <div className="sm:pl-10 lg:pl-16">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff7800]">University</p>
                      <p className="mt-2 text-sm font-black leading-7 text-[#101010]">Mahatma Gandhi University</p>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <p className="inline-flex rounded-full bg-[#101010] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    2023 - 2025
                  </p>
                </div>
              </article>
              <article className="grid gap-5 py-6 first:pt-0 last:pb-0 lg:grid-cols-[1fr_220px] lg:items-start">
                <div>
                  <h3 className="text-2xl font-black leading-tight text-[#101010]">Bachelor of Computer Applications (BCA)</h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff7800]">College</p>
                      <p className="mt-2 text-sm font-black leading-7 text-[#101010]">School of Technology and Applied Sciences, Pullarikunnu,Kottayam</p>
                    </div>
                    <div className="sm:pl-10 lg:pl-16">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff7800]">University</p>
                      <p className="mt-2 text-sm font-black leading-7 text-[#101010]">Mahatma Gandhi University</p>
                    </div>
                  </div>
                </div>
                <div className="lg:text-right">
                  <p className="inline-flex rounded-full bg-[#101010] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    2020 - 2023
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="portfolio-section reveal-section scroll-mt-20 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="reference-cert-title">Certifications</h2>
          <div className="certification-grid mt-14 grid gap-8 md:grid-cols-2">
            <article className="certification-card relative overflow-hidden rounded-xl border border-black/10 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ff7800]" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#ff7800]">Issued May 2026</p>
              <h3 className="mt-4 text-2xl font-black text-[#101010]">Certified MERN Stack Developer</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#53606c]">SMEC Technologies</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#101010]">Credential ID: SMT69</p>
              <a
                href="/images/mernstack_certifcate.jpeg"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-[#ff7800] transition hover:text-[#101010]"
              >
                View Certificate
              </a>
            </article>
            <article className="certification-card relative overflow-hidden rounded-xl border border-black/10 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ff7800]" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#ff7800]">Issued Feb 2026</p>
              <h3 className="mt-4 text-2xl font-black text-[#101010]">Software Engineering</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#53606c]">Saylor University</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#101010]">Credential ID: 6865094860SK</p>
              <a
                href="https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1771849670/6865094860SK.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-[#ff7800] transition hover:text-[#101010]"
              >
                View Certificate
              </a>
            </article>
            <article className="certification-card relative overflow-hidden rounded-xl border border-black/10 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ff7800]" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#ff7800]">Issued Dec 2025</p>
              <h3 className="mt-4 text-2xl font-black text-[#101010]">Web Design &amp; Development</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#53606c]">National Skill Development Corporation</p>
              <a
                href="https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2025113049444639-0e985123-f259-488a-9a41-a316980ea081"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-[#ff7800] transition hover:text-[#101010]"
              >
                View Certificate
              </a>
            </article>
            <article className="certification-card relative overflow-hidden rounded-xl border border-black/10 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[#ff7800]" />
              <p className="text-xs font-black uppercase tracking-[0.32em] text-[#ff7800]">Issued Mar 2025</p>
              <h3 className="mt-4 text-2xl font-black text-[#101010]">Software Testing</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#53606c]">NPTEL</p>
              <a
                href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS66S43820051901390323"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex text-sm font-black uppercase tracking-[0.18em] text-[#ff7800] transition hover:text-[#101010]"
              >
                View Certificate
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-section reveal-section scroll-mt-24 bg-white px-5 py-16 text-[#101010] sm:px-10 sm:py-24 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1400px] text-center">
          <div className="contact-heading reference-contact-heading">
            <h2>Get in Touch</h2>
            <span>Let&apos;s turn ideas into reality together.</span>
          </div>

          <div className="contact-grid reference-contact-grid mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <a href="https://github.com/sreeparvathy-K-A" target="_blank" rel="noreferrer" className="contact-social group">
              <span className="contact-social-icon">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M32 7C18.2 7 7 18.4 7 32.5c0 11.2 7.2 20.7 17.1 24.1 1.2.2 1.7-.5 1.7-1.2v-4.5c-7 1.6-8.5-3.1-8.5-3.1-1.1-3-2.8-3.8-2.8-3.8-2.3-1.6.2-1.6.2-1.6 2.6.2 4 2.7 4 2.7 2.3 4 6 2.8 7.4 2.2.2-1.7.9-2.8 1.6-3.5-5.6-.7-11.5-2.9-11.5-12.7 0-2.8 1-5.1 2.6-6.9-.3-.7-1.1-3.4.3-6.9 0 0 2.1-.7 7 2.6 2-.6 4.2-.8 6.3-.8s4.3.3 6.3.8c4.9-3.3 7-2.6 7-2.6 1.4 3.5.6 6.2.3 6.9 1.6 1.8 2.6 4.1 2.6 6.9 0 9.9-5.9 12-11.5 12.7.9.8 1.8 2.5 1.8 5v7.5c0 .7.4 1.5 1.8 1.2C49.8 53.2 57 43.7 57 32.5 57 18.4 45.8 7 32 7Z" fill="currentColor" />
                </svg>
              </span>
              <span className="mt-7 block text-sm font-black uppercase tracking-[0.18em] text-[#ff7800]">GitHub</span>
              <span className="mt-3 block text-sm text-[#101010]">View my work</span>
            </a>
            <a href="https://linkedin.com/in/sreeparvathyka17" target="_blank" rel="noreferrer" className="contact-social group">
              <span className="contact-social-icon">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M17 24h9v28h-9V24Zm4.5-13c2.9 0 5.2 2.1 5.2 4.9s-2.3 5-5.2 5-5.2-2.2-5.2-5S18.6 11 21.5 11ZM31 24h8.6v3.8h.1c1.2-2.2 4.2-4.5 8.6-4.5 9.2 0 10.9 6 10.9 13.9V52h-9V38.8c0-3.2-.1-7.2-4.4-7.2s-5.1 3.4-5.1 6.9V52H31V24Z" fill="currentColor" />
                </svg>
              </span>
              <span className="mt-7 block text-sm font-black uppercase tracking-[0.18em] text-[#ff7800]">LinkedIn</span>
              <span className="mt-3 block text-sm text-[#101010]">Connect with me</span>
            </a>
            <a href="mailto:Sreeparvathyka63@gmail.com" className="contact-social group">
              <span className="contact-social-icon">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M12 18h40c2.8 0 5 2.2 5 5v24c0 2.8-2.2 5-5 5H12c-2.8 0-5-2.2-5-5V23c0-2.8 2.2-5 5-5Zm20 19 20-13.2V23H12v.8L32 37Zm0 5.7L12 29.6V47h40V29.6L32 42.7Z" fill="currentColor" />
                </svg>
              </span>
              <span className="mt-7 block text-sm font-black uppercase tracking-[0.18em] text-[#ff7800]">Gmail</span>
              <span className="mt-3 block text-sm text-[#101010]">Send an email</span>
            </a>
            <div className="contact-social">
              <span className="contact-social-icon">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <path d="M32 6c-9.4 0-17 7.6-17 17 0 12.3 17 35 17 35s17-22.7 17-35C49 13.6 41.4 6 32 6Zm0 24.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" fill="currentColor" />
                </svg>
              </span>
              <span className="mt-7 block text-sm font-black uppercase tracking-[0.18em] text-[#ff7800]">Location</span>
              <span className="mt-3 block text-sm text-[#101010]">Kottayam, Kerala</span>
            </div>
          </div>

          <p className="contact-footer mt-16 text-sm text-[#53606c]">© 2026 Sreeparvathy K A. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
