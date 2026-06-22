import {
  Rocket,
  MonitorSmartphone,
  Zap,
  Download,
  Terminal as TerminalIcon,
} from "lucide-react";
import img from "../assets/img3.png";

function About({ onButtonClick }) {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-900 px-4 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 overflow-hidden flex flex-col justify-center"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8 z-10 text-center lg:text-left">
            <div>
              <p className="text-xs md:text-sm tracking-widest text-blue-600 font-bold uppercase mb-3">
                ABOUT ME
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Ayush
                </span>
                <br />
                An ECE Undergrad &amp; Developer
              </h1>
            </div>

            <p className="text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base md:text-lg font-medium">
              I specialize in building production-ready architectures, crafting
              fast interfaces, and designing scalable system pipelines. I bridge
              computational logic and modern frontend paradigms into clean,
              fluid interactive products.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="p-4 bg-white/60 backdrop-blur-md border border-blue-100/50 rounded-2xl shadow-sm">
                <Rocket size={32} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-sm md:text-base text-slate-900">
                  Clean Patterns
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                  Highly maintainable code structures.
                </p>
              </div>

              <div className="p-4 bg-white/60 backdrop-blur-md border border-blue-100/50 rounded-2xl shadow-sm">
                <MonitorSmartphone size={32} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-sm md:text-base text-slate-900">
                  Fluid Adaptive
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                  Engineered to scale on every layout viewport.
                </p>
              </div>

              <div className="p-4 bg-white/60 backdrop-blur-md border border-blue-100/50 rounded-2xl shadow-sm">
                <Zap size={32} className="text-cyan-600 mb-3" />
                <h3 className="font-bold text-sm md:text-base text-slate-900">
                  Optimization
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed">
                  Fast interactive delivery metrics.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/cv.pdf"
                download="Ayush_Raj_Resume.pdf"
                className="inline-block"
              >
                <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1e3a5f] text-white text-sm font-semibold hover:bg-blue-600 active:scale-95 shadow-md shadow-blue-900/10 transition-all cursor-pointer">
                  Download CV
                  <Download size={16} />
                </button>
              </a>{" "}
              <button
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1e3a5f] text-white text-sm font-semibold hover:bg-blue-600 active:scale-95 shadow-md shadow-blue-900/10 transition-all cursor-pointer"
                onClick={onButtonClick}
              >
                Show Experiences
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[360px] sm:min-h-[440px] md:min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl opacity-70 pointer-events-none scale-90" />

            <div className="absolute top-4 left-4 sm:left-8 md:left-12 z-20 p-4 rounded-2xl border border-blue-100 bg-white/80 backdrop-blur-xl shadow-lg shadow-blue-900/[0.03] max-w-[200px] sm:max-w-xs scale-90 sm:scale-100 transform transition-transform hover:scale-105">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2 mb-2">
                <TerminalIcon size={14} className="text-blue-500" />
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  meta.json
                </span>
              </div>
              <pre className="text-[11px] font-mono leading-relaxed text-blue-700 overflow-x-auto whitespace-pre-wrap">
                {`{
  "role": "Fintech Builder",
  "stack": "MERN",
  "engine": "V8"
}`}
              </pre>
            </div>

            <div className="absolute top-12 right-4 sm:right-8 z-20 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-md flex items-center justify-center font-mono font-bold text-sm sm:text-base text-blue-600 shadow-sm">
              {"{ Prisma }"}
            </div>

            <div className="absolute bottom-12 left-8 sm:left-16 z-20 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md flex items-center justify-center font-mono font-bold text-sm sm:text-base text-cyan-600 shadow-sm">
              {"</> Solidity"}
            </div>

            <div
              className="absolute right-6 bottom-4 w-24 h-24 opacity-30 hidden sm:block"
              style={{
                backgroundImage:
                  "radial-gradient(#0ea5e9 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-full aspect-square flex items-end justify-center z-10 mt-auto">
              <img
                src={img}
                alt="Ayush Portfolio Portrait"
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-blue-100 bg-white/60 backdrop-blur-md p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h3 className="text-slate-500 font-bold tracking-wider text-xs uppercase shrink-0 text-center md:text-left">
              CORE TOOLKIT &amp; TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 xl:gap-10">
              {[
                { alt: "HTML5", src: "html5/html5-original.svg" },
                { alt: "CSS3", src: "css3/css3-original.svg" },
                {
                  alt: "JavaScript",
                  src: "javascript/javascript-original.svg",
                },
                {
                  alt: "TypeScript",
                  src: "typescript/typescript-original.svg",
                },
                { alt: "React", src: "react/react-original.svg" },
                { alt: "Node.js", src: "nodejs/nodejs-original.svg" },
                { alt: "Git", src: "git/git-original.svg" },
                { alt: "GitHub", src: "github/github-original.svg" },
              ].map((icon) => (
                <div key={icon.alt} className="group relative">
                  <img
                    className="w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:-translate-y-1 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 object-contain"
                    alt={icon.alt}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.src}`}
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-sans font-medium">
                    {icon.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
