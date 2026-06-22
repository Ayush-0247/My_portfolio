// import React from "react";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const TIMELINE_DATA = [
  {
    id: "ciphervest",
    type: "work",
    role: "Founder & CTO",
    organization: "CipherVest Capital (Prince Group)",
    duration: "Mar 2026 — Present",
    description:
      "Spearheading engineering, technical vision, and platform infrastructure for automated crypto/stock portfolio architecture. Designing low-latency system data pipelines and modular analytics schemas.",
    icon: Briefcase,
    highlight: true,
    badges: ["System Architecture", "Fintech API", "Team Leadership"],
  },
  {
    id: "ece-undergrad",
    type: "education",
    role: "Electronics & Communication Engineering",
    organization: "Engineering Undergrad",
    duration: "2024 — Present",
    description:
      "Focusing on hardware-software boundaries, core computational networks, and telemetric signals. Partnering on multi-year development builds using real-time edge processing stacks.",
    icon: GraduationCap,
    highlight: false,
    badges: ["Network Logic", "Telemetry Infrastructure", "Embedded Systems"],
  },
];

const Experiences = ({ onButtonClick }) => {
  return (
    <section
      id="experiences"
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 py-20 md:py-28 flex flex-col justify-center overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-blue-100/60 pb-6">
          <div className="space-y-2">
            <p className="text-xs md:text-sm tracking-widest text-blue-600 font-bold uppercase">
              JOURNEY &amp; MILESTONES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Timeline
              </span>
            </h2>
          </div>
          <div>
            <button
              onClick={onButtonClick}
              className="group inline-flex items-center gap-2 text-sm font-bold bg-white text-[#1e3a5f] border border-blue-100 px-5 py-2.5 rounded-full hover:border-blue-400 hover:text-blue-600 shadow-xs transition-all cursor-pointer"
            >
              View Projects
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>

        <div className="relative border-l-2 border-blue-100/80 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
          {TIMELINE_DATA.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group">
                <div
                  className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center transition-colors z-10 ${
                    item.highlight
                      ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-white border-blue-200 text-slate-400 group-hover:border-blue-400 group-hover:text-blue-500"
                  }`}
                >
                  <IconComponent size={item.highlight ? 14 : 13} />
                </div>

                <div
                  className={`p-6 md:p-8 rounded-2xl border transition-all ${
                    item.highlight
                      ? "bg-white border-blue-200 shadow-md shadow-blue-900/[0.02]"
                      : "bg-white/60 border-blue-100/70 hover:border-blue-200 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                          {item.role}
                        </h3>
                        {item.highlight && (
                          <span className="inline-flex items-center gap-1 bg-cyan-500/10 text-cyan-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide">
                            <ShieldCheck size={10} /> Active Build
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-semibold text-sm">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400 font-mono text-xs font-bold sm:pt-1">
                      <Calendar size={12} />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-3xl mb-5">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`text-[10.5px] font-mono font-bold px-2.5 py-1 rounded-md ${
                          item.highlight
                            ? "bg-slate-100 text-slate-600 border border-slate-200/30"
                            : "bg-blue-500/5 text-slate-500 border border-blue-500/5"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     
    </section>
  );
};

export default Experiences;
