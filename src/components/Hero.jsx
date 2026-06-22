import { useState, useEffect } from "react";
import img from "../assets/img2.png";
const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
import { FaWhatsapp } from "react-icons/fa";
const NAME = "AYUSH RAJ";
const TYPE_SPEED = 130;
const DELETE_SPEED = 70;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function GithubIcon({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  );
}
function LinkedinIcon({ size = 40 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function Hero({ onButtonClick }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const phone = import.meta.env.VITE_WHATSAPP_NUMBER;

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText === NAME) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE);
    } else {
      const next = isDeleting
        ? NAME.slice(0, displayText.length - 1)
        : NAME.slice(0, displayText.length + 1);
      timeout = setTimeout(
        () => setDisplayText(next),
        isDeleting ? DELETE_SPEED : TYPE_SPEED,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#f0f6ff] overflow-hidden">
      {/* soft blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-28 -right-20 w-[500px] h-[500px] rounded-full bg-blue-200 opacity-35 blur-[60px]" />
        <div className="absolute bottom-16 -left-16 w-[350px] h-[350px] rounded-full bg-sky-100 opacity-40 blur-[60px]" />
        <div className="absolute top-1/2 left-[42%] w-48 h-48 rounded-full bg-blue-100 opacity-30 blur-[50px]" />
      </div>

      <ParticleCanvas />

      {/* nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        <div className="text-lg font-bold text-[#1e3a5f] tracking-tight">
          AR<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Projects", "Skills"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[13px] font-medium text-slate-500 hover:text-blue-500 transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href={`https://wa.me/${phone}?text=Hi%20Ayush,%20I%20visited%20your%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire me
          </a>
        </div>
      </nav>

      {/* body */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-10 px-6 sm:px-10 lg:px-16 py-8 lg:py-0">
        {/* left */}
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-[12px] font-semibold tracking-wide border border-blue-200 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-[clamp(36px,5vw,58px)] font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-5">
            Hi, I&apos;m
            <br />
            <span className="text-blue-500">{displayText}</span>
            <span className="inline-block w-[3px] h-[0.85em] bg-blue-500 ml-1 align-middle rounded-sm animate-pulse" />
          </h1>

          <p className="text-[15px] leading-relaxed text-slate-500 max-w-[440px] mb-8">
            ECE undergrad &amp; Founder of{" "}
            <span className="text-blue-600 font-medium">
              CipherVest Capital
            </span>{" "}
            — I build intelligent fintech platforms, craft scalable backends,
            and turn mockups into pixel-perfect UIs.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={onButtonClick}
              className="flex items-center gap-2 bg-[#1e3a5f] text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-blue-500 active:scale-95 transition-all"
            >
              Know about me →
            </button>
            <a
              href="/cv.pdf"
              className="flex items-center gap-2 bg-transparent text-[#1e3a5f] text-[13px] font-semibold px-6 py-3 rounded-full border-[1.5px] border-blue-200 hover:border-blue-400 hover:text-blue-500 transition-all"
            >
              Resume ↓
            </a>
          </div>

          <div className="flex gap-3">
            {[
              {
                href: `https://wa.me/${phone}`,
                Icon: FaWhatsapp,
                label: "WhatsApp",
              },
              {
                href: "https://github.com/Ayush-0247",
                Icon: FaGithub,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/your-linkedin",
                Icon: FaLinkedin,
                label: "LinkedIn",
              },
              { href: "mailto:you@example.com", Icon: HiMail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-blue-100 text-slate-500 hover:text-blue-500 hover:border-blue-400 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* right — terminal */}
        <div
          className="flex-1 w-full max-w-[440px]"
          style={{ animation: "heroFloat 4s ease-in-out infinite" }}
        >
          <style>{`
            @keyframes heroFloat {
              0%,100% { transform: translateY(0px); }
              50%      { transform: translateY(-12px); }
            }
          `}</style>

          <Terminal />

          <div className="flex gap-3 mt-4 flex-wrap">
            {[
              { icon: "", val: "CipherVest", lbl: "Founder & CTO" },
              { icon: "", val: "Full-Stack", lbl: "React · Node · Prisma" },
            ].map(({ icon, val, lbl }) => (
              <div
                key={val}
                className="flex items-center gap-3 bg-white border border-blue-100 rounded-xl px-4 py-2.5 shadow-sm"
              >
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-[14px] font-bold text-slate-800">
                    {val}
                  </div>
                  <div className="text-[11px] text-slate-500">{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* left side */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-16">
        <span className="text-sm font-semibold tracking-widest text-rose-400 uppercase">
          Hey! I am
        </span>

        <h1 className="mt-3 text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight min-h-[1.2em]">
          {displayText}
          <span className="inline-block w-1 h-12 bg-slate-800 ml-1 align-middle animate-pulse" />
        </h1>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, unde mollitia! Accusantium, quidem. Cumque consequuntur,
          saepe velit maiores aliquid veritatis adipisci. Libero amet asperiores
          odio voluptatibus fugit accusantium similique consequuntur omnis,
          cumque ad exercitationem quia iste reiciendis dicta velit excepturi
          perferendis inventore dolorem? Corporis nihil cum, voluptate laborum
          hic temporibus vel praesentium perspiciatis dolorum id assumenda
          voluptatem facilis.
        </p>

        <button
          onClick={onButtonClick}
          className="mt-8 w-fit bg-slate-800 text-rose-50 text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full hover:bg-slate-700 transition-colors"
        >
          KNOW ABOUT ME →
        </button>
      </div>

      {/* right side */}
      <div className="flex-1 relative flex items-center justify-center bg-rose-100 overflow-hidden">
        <div className="mb-5" />
        <img src={img} className="" alt="Ayush Raj" />
      </div>
    </div>
  );
}

export default Hero;
