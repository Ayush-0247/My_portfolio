// import React from "react";
import { ExternalLink, Globe, ShieldCheck, Cpu, Database } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "ciphervest",
    title: "CipherVest Capital",
    subtitle: "Fintech & Automated Assets",
    description:
      "An intelligent asset and portfolio monitoring system engineered for high-throughput transactional records. Deployed secure backend processing models to evaluate digital asset trends with granular transparency.",
    tech: ["React", "Node.js", "Prisma", "TypeScript", "Solidity"],
    liveUrl: "https://www.ciphervestcapital.in/",
    githubUrl: "https://github.com/Ayush-0247/ciphervest-backend",
    featured: true,
    metric: { label: "Launch Target", value: "Q2 2026" },
  },
  {
    id: "flinque",
    title: "Flinque",
    subtitle: "Influencer Marketplace Platform",
    description:
      "An influencer marketplace connecting brands and creators. Built 15+ influencer analytics tools and a comprehensive admin dashboard for tracking platform engagement, sales, revenue, and business insights.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    liveUrl: "https://platform.flinque.com/",
    githubUrl: "https://github.com/TG3-Agency/flinque-frontend",
    featured: false,
    metric: { label: "Impact", value: "15+ Analytics Tools" },
  },
  {
    id: "real-time-chat-app",
    title: "Real Time Chat App",
    subtitle: "WebSockets",
    description:
      "A real-time group chat application built with Socket.io that enables instant messaging, typing indicators, and seamless bidirectional communication between multiple users. Developed using React.js, Express.js, and Node.js with a responsive Tailwind CSS interface for a smooth chat experience.",
    tech: [
      "React.js",
      "Socket.io",
      "Express.js",
      "Node.js",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Ayush-0247/web-socke-group-chat",
    featured: false,
    metric: { label: "Timeline", value: "Jun 2025 – Jul 2025" },
  },
  {
    id: "ai-cv-scanner",
    title: "AI CV Scanner",
    subtitle: "AI-Powered Resume Analysis",
    description:
      "An AI-powered resume scanner that analyzes CVs for ATS compatibility, skills, missing keywords, and improvement suggestions using Google AI Studio (Gemini) API and Claude AI.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Google AI Studio",
      "Gemini API",
      "Claude AI",
      "JavaScript",
      "Tailwind CSS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Ayush-0247/your-repository-name",
    featured: false,
    metric: { label: "Status", value: "AI Powered" },
  },
  {
    id: "mission-control-lite",
    title: "Satellite Telemetry Syatem",
    subtitle: "Satellite Telemetry Monitoring System",
    description:
      "Built a real-time dashboard to track and visualize sensor data including computational temperatures, load points, and operational line voltage thresholds. Uses JWT-secured RESTful APIs and a scalable backend architecture for continuous analytics.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Chart.js",
      "WebSockets",
    ],
    liveUrl: "https://satellite-telemetry-frontend-qr67.vercel.app/",
    githubUrl: "https://github.com/Ayush-0247/satellite-data-telemetry-project",
    featured: false,
    metric: { label: "Timeline", value: "Dec 2025 – Feb 2026" },
  },
  // {
  //   id: "border-surveillance",
  //   title: "Smart Border Surveillance Simulation",
  //   subtitle: "Real-Time Detection & Alert System",
  //   description:
  //     "Developed a real-time monitoring system featuring automated alert generation and multi-category detection logic for humans, vehicles, and animals utilizing a scalable database structure.",
  //   tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
  //   liveUrl: null,
  //   githubUrl: "https://github.com/Ayush-0247/border-surveillance",
  //   featured: false,
  //   metric: { label: "Timeline", value: "Aug 2025 – Oct 2025" },
  // },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-tr from-blue-50 via-sky-50 to-white text-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 py-20 md:py-28 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-blue-100/60 pb-6">
          <div className="space-y-2">
            <p className="text-xs md:text-sm tracking-widest text-blue-600 font-bold uppercase">
              SELECTED WORKS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Engineering{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm md:text-base max-w-xs md:text-right">
            Production-focused web frameworks, data systems, and modular web
            interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {PROJECTS_DATA.filter((p) => p.featured).map((proj) => (
            <div
              key={proj.id}
              className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-white/70 backdrop-blur-md border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm transition-all hover:border-blue-300"
            >
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-bold tracking-wide px-3 py-1 rounded-full uppercase">
                      <ShieldCheck size={12} /> Featured Project
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded">
                      {proj.metric.label}: {proj.metric.value}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-wide mt-0.5">
                      {proj.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl">
                    {proj.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200/40 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex lg:flex-col justify-between items-end lg:justify-center gap-4 lg:border-l lg:border-slate-100 lg:pl-8 pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-100/80">
                <div className="hidden lg:block w-full text-left space-y-1">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Deployment Hub
                  </span>
                  <div className="text-xs font-mono font-bold text-slate-600 truncate">
                    {proj.liveUrl}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 w-full lg:justify-start">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1e3a5f] text-white text-[12px] font-bold px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-sm"
                    >
                      <Globe size={14} /> Live Platform
                    </a>
                  )}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-slate-700 border border-slate-200 hover:border-blue-400 hover:text-blue-600 text-[12px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-xs"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS_DATA.filter((p) => !p.featured).map((proj) => (
            <div
              key={proj.id}
              className="bg-white/60 backdrop-blur-md border border-blue-100/80 rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all hover:border-blue-300 shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2 bg-blue-500/10 text-blue-600 rounded-xl">
                    {proj.id === "flinque" ? (
                      <Cpu size={20} />
                    ) : (
                      <Database size={20} />
                    )}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {proj.metric.value}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-blue-600/90 font-semibold text-xs mt-0.5">
                    {proj.subtitle}
                  </p>
                </div>

                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-slate-100 pt-4 text-[12px] font-bold">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#1e3a5f] hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors"
                  >
                    Code Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
