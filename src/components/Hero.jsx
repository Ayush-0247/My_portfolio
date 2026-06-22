import { useState, useEffect, useRef } from "react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
const NAME = "AYUSH RAJ";

const TERM_LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "ayush_raj — ECE Engineer & Fintech Builder" },
  { type: "cmd", text: "cat skills.json" },
  { type: "out", text: "React, Node.js, Prisma, Tailwind, TypeScript" },
  { type: "cmd", text: "ls projects/" },
  { type: "out", text: "CipherVest/  Flinque/  Portfolio/" },
  { type: "cmd", text: "echo $STATUS" },
  { type: "out", text: "✓ Open to work — let's build something cool" },
  { type: "cursor" },
];

/* ── Particle canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let pts = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      pts = Array.from({ length: 42 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.2)";
        ctx.fill();
      });
      pts.forEach((a, i) =>
        pts.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.07 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }),
      );
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ── Terminal ── */
function Terminal() {
  const [rendered, setRendered] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= TERM_LINES.length) return;
    const current = TERM_LINES[lineIdx];

    if (current.type === "cursor") {
      setRendered((prev) => [...prev, current]);
      return;
    }

    if (current.type === "cmd") {
      if (charIdx < current.text.length) {
        const t = setTimeout(
          () => setCharIdx((c) => c + 1),
          55 + Math.random() * 40,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRendered((prev) => [...prev, current]);
          setLineIdx((i) => i + 1);
          setCharIdx(0);
        }, 280);
        return () => clearTimeout(t);
      }
    }

    if (current.type === "out") {
      const t = setTimeout(() => {
        setRendered((prev) => [...prev, current]);
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, 80);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  const currentCmd =
    TERM_LINES[lineIdx]?.type === "cmd"
      ? TERM_LINES[lineIdx].text.slice(0, charIdx)
      : null;

  return (
    <div className="rounded-2xl overflow-hidden border border-[#1e3a5f] shadow-2xl">
      {/* title bar */}
      <div className="bg-[#1a2540] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
          <span className="w-3 h-3 rounded-full bg-[#34d399]" />
        </div>
        <span className="text-[11px] font-mono text-slate-500 ml-2">
          ayush@portfolio ~ zsh
        </span>
      </div>

      {/* body */}
      <div className="bg-[#0f1729] px-5 py-5 min-h-[220px] font-mono text-[12.5px] leading-7">
        {rendered.map((line, i) => {
          if (line.type === "cursor")
            return (
              <div key={i} className="flex gap-2.5">
                <span className="text-blue-400">❯</span>
                <span className="inline-block w-[7px] h-[14px] bg-blue-400 align-middle rounded-[1px] animate-pulse" />
              </div>
            );
          if (line.type === "cmd")
            return (
              <div key={i} className="flex gap-2.5">
                <span className="text-blue-400 select-none">❯</span>
                <span className="text-slate-100">{line.text}</span>
              </div>
            );
          return (
            <div key={i} className="text-slate-400">
              {line.text}
            </div>
          );
        })}

        {currentCmd !== null && (
          <div className="flex gap-2.5">
            <span className="text-blue-400 select-none">❯</span>
            <span className="text-slate-100">
              {currentCmd}
              <span className="inline-block w-[7px] h-[13px] bg-blue-400 align-middle rounded-[1px] animate-pulse ml-0.5" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Hero ── */
export default function Hero({ onButtonClick }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let t;
    if (!isDeleting && displayText === NAME) {
      t = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      t = setTimeout(() => setIsDeleting(false), 400);
    } else {
      const next = isDeleting
        ? NAME.slice(0, displayText.length - 1)
        : NAME.slice(0, displayText.length + 1);
      t = setTimeout(() => setDisplayText(next), isDeleting ? 65 : 120);
    }
    return () => clearTimeout(t);
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
            className="text-[13px] font-semibold bg-[#1e3a5f] text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-colors"
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

      {/* scroll hint */}
      <div className="relative z-10 flex items-center gap-3 px-6 sm:px-10 lg:px-16 pb-6">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
        <span className="text-[11px] font-medium tracking-widest text-slate-400 uppercase">
          Scroll down
        </span>
      </div>
    </div>
  );
}
