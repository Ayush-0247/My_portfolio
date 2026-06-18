import {
  Rocket,
  MonitorSmartphone,
  Zap,
  Download,
} from "lucide-react";
import img from "../assets/img3.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-900 px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* TOP */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="flex-1 w-full z-10">
          <p className="text-sm tracking-widest text-blue-600 mb-6 font-semibold">
            ABOUT ME
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Ayush
            </span>
            <br />
            A Web Developer
          </h1>

          <p className="text-slate-600 mt-8 max-w-xl leading-8 text-lg">
            I build responsive, user-friendly and
            high-performance web applications.
            I love turning complex problems into
            simple, beautiful and intuitive designs.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-8 mt-14">
            <div className="max-w-[170px]">
              <Rocket
                size={40}
                className="text-blue-600"
              />
              <h3 className="font-semibold mt-4 text-slate-900">
                Clean Code
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Maintainable and scalable code.
              </p>
            </div>

            <div className="max-w-[170px]">
              <MonitorSmartphone
                size={40}
                className="text-blue-600"
              />
              <h3 className="font-semibold mt-4 text-slate-900">
                Responsive
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Perfect on all devices.
              </p>
            </div>

            <div className="max-w-[170px]">
              <Zap
                size={40}
                className="text-cyan-600"
              />
              <h3 className="font-semibold mt-4 text-slate-900">
                Performance
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Optimized user experience.
              </p>
            </div>
          </div>
<a href="/cv.pdf" download="Ayush_Raj_Resume.pdf"> <button
            className="
              mt-10
              flex items-center gap-2
              px-7 py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              hover:scale-105
              transition-transform
              duration-300
              cursor-pointer
              shadow-lg shadow-blue-500/25
            "
          >
            Download CV
            <Download size={18} />
          </button></a>
         
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative h-[600px] lg:h-[650px] w-full max-w-[500px] lg:max-w-none">

          {/* Code Card */}
          <div
            className="
              absolute
              top-32
              left-0
              z-20
              p-6
              rounded-3xl
              border border-blue-100
              bg-white/70
              backdrop-blur-lg
              shadow-sm
              hidden sm:block
            "
          >
            <pre className="text-xs text-blue-700">
{`01 <html>
02 <head>
03 <title>Portfolio</title>
04 </head>
05 <body>
06 <h1>Hi, I'm Ayush</h1>
07 </body>
08 </html>`}
            </pre>
          </div>

          {/* Top Icon */}
          <div
            className="
              absolute
              top-32
              right-0 lg:right-4
              z-20
              w-16 h-16 sm:w-20 sm:h-20
              rounded-2xl
              bg-blue-500/10
              backdrop-blur-lg
              flex items-center justify-center
              text-2xl sm:text-4xl
              text-blue-600
            "
          >
            {"{ }"}
          </div>

          {/* Bottom Icon */}
          <div
            className="
              absolute
              bottom-36
              left-10 sm:left-20
              z-20
              w-16 h-16 sm:w-20 sm:h-20
              rounded-2xl
              bg-cyan-500/10
              backdrop-blur-lg
              flex items-center justify-center
              text-2xl sm:text-3xl
              text-cyan-600
            "
          >
            {"</>"}
          </div>

          {/* Dots */}
          <div
            className="
              absolute
              right-0
              top-72
              w-36 h-36
              opacity-40
            "
            style={{
              backgroundImage:
                "radial-gradient(#0ea5e9 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Your Image */}
          <img
            src={img}
            alt="Ayush Portfolio"
            className="
              absolute
              bottom-30
              right-0 lg:right-10
              z-10
              w-[100%] sm:w-[380px] lg:w-[710px]
              object-contain object-bottom
            "
          />
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          mt-20
          max-w-7xl
          mx-auto
          rounded-3xl
          border border-blue-100
          bg-white/70
          backdrop-blur-md
          p-8
        "
      >
        <h3 className="text-slate-500 mb-8 font-medium tracking-wider text-sm">
          TECHNOLOGIES I WORK WITH
        </h3>

        <div className="flex flex-wrap justify-center sm:justify-between gap-8 items-center">
          <img className="w-12 h-12" alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img className="w-12 h-12" alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img className="w-12 h-12" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img className="w-12 h-12" alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img className="w-12 h-12" alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <img className="w-12 h-12" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          <img className="w-12 h-12" alt="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        </div>
      </div>
    </section>
  );
}

export default About;