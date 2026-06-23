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

/* ── Particle Canvas — denser, more visible web ── */
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
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      pts = Array.from({ length: Math.max(count, 55) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2.2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        glow.addColorStop(0, `rgba(59,130,246,0.55)`);
        glow.addColorStop(1, `rgba(59,130,246,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,0.85)`;
        ctx.fill();
      });

      pts.forEach((a, i) =>
        pts.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 145;
          if (d < maxDist) {
            const alpha = 0.18 * (1 - d / maxDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.7;
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
    <div className="rounded-2xl overflow-hidden border border-blue-200 shadow-xl shadow-blue-100/60">
      {/* title bar */}
      <div className="bg-[#1a2540] px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
          <span className="w-3 h-3 rounded-full bg-[#34d399]" />
        </div>
        <span className="text-[11px] font-mono text-slate-400 ml-2">
          ayush@portfolio ~ zsh
        </span>
      </div>
      {/* body */}
      <div className="bg-[#0f1729]/95 backdrop-blur px-5 py-5 min-h-[220px] font-mono text-[12.5px] leading-7">
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
            <div key={i} className="text-slate-400 pl-5">
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

/* ── Stat Card ── */
function StatCard({ icon, value, label }) {
  return (
    <div className="group flex items-center gap-3 bg-white/80 backdrop-blur border border-blue-100 hover:border-blue-300 rounded-2xl px-4 py-3 shadow-sm hover:shadow-blue-100 hover:-translate-y-0.5 transition-all duration-200">
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="text-[13px] font-bold text-slate-800">{value}</div>
        <div className="text-[11px] text-slate-400">{label}</div>
      </div>
    </div>
  );
}

/* ── Social Icon ── */
function SocialLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/80 backdrop-blur border border-blue-100 text-slate-500 hover:text-blue-500 hover:border-blue-400 hover:-translate-y-0.5 transition-all shadow-sm"
    >
      <Icon size={17} />
    </a>
  );
}

/* ── Hero ── */
export default function Hero({ onButtonClick }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let t;
    if (!isDeleting && displayText === NAME) {
      t = setTimeout(() => setIsDeleting(true), 2200);
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
    <div className="relative min-h-screen flex flex-col bg-[#eef5ff] overflow-hidden">
      {/* ── Particle web fills the full canvas ── */}
      <ParticleCanvas />

      {/* ── Soft radial vignette to make center pop ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(220,235,255,0.55) 100%)",
        }}
      />

      {/* ── Accent blobs (subtler, behind particles) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full bg-blue-200 opacity-25 blur-[80px]" />
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full bg-sky-100 opacity-30 blur-[70px]" />
      </div>

      {/* ── Nav ── */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5">
        {/* Logo mark */}
        <div className="flex items-center gap-2"></div>

        {/* Social links */}
        <div className="flex gap-2">
          <SocialLink
            href={`https://wa.me/${phone}`}
            Icon={FaWhatsapp}
            label="WhatsApp"
          />
          <SocialLink
            href="https://github.com/Ayush-0247"
            Icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://linkedin.com/in/your-linkedin"
            Icon={FaLinkedin}
            label="LinkedIn"
          />
          <SocialLink
            href="mailto:you@example.com"
            Icon={HiMail}
            label="Email"
          />
        </div>
      </nav>

      {/* ── Main body ── */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 sm:px-10 lg:px-16 py-8 lg:py-0">
        {/* ── Left ── */}
        <div className="flex-1 max-w-[520px]">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur text-blue-600 text-[11.5px] font-semibold tracking-wide border border-blue-200 px-4 py-1.5 rounded-full mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for opportunities
          </div> */}

          {/* Headline */}
          <div className="mb-2">
            <h1 className="text-[clamp(38px,5.5vw,62px)] font-black text-[#0f172a] leading-[1.05] tracking-tight">
              I&apos;m{" "}
              <span className="relative inline-block">
                <span className="text-blue-500">{displayText}</span>
                <span className="inline-block w-[3px] h-[0.8em] bg-blue-500 ml-1 align-middle rounded-sm animate-pulse" />
                {/* underline accent */}
                <span
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-blue-200"
                  style={{
                    width: `${(displayText.length / NAME.length) * 100}%`,
                    transition: "width 0.1s",
                  }}
                />
              </span>
            </h1>
          </div>

          {/* Sub-title */}
          <p className="text-[15px] leading-relaxed text-slate-500 max-w-[440px] mb-8 mt-4">
            ECE undergrad &amp; Founder of{" "}
            <span className="text-blue-600 font-semibold">
              CipherVest Capital
            </span>{" "}
            — I build intelligent fintech platforms, craft scalable backends,
            and turn mockups into pixel-perfect UIs.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 mb-9">
            <button
              onClick={onButtonClick}
              className="flex items-center gap-2 bg-[#1e3a5f] text-white text-[13px] font-semibold px-6 py-3 rounded-full hover:bg-blue-300 active:scale-95 transition-all shadow-md shadow-blue-900/20"
            >
              Know about me
              <span className="text-blue-300">→</span>
            </button>
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-white/70 backdrop-blur text-[#1e3a5f] text-[13px] font-semibold px-6 py-3 rounded-full border border-blue-200 hover:border-blue-400 hover:text-blue-500 transition-all shadow-sm"
            >
              Resume
              <span className="text-blue-400">↓</span>
            </a>
          </div>

          {/* Stat chips */}
          {/* <div className="flex flex-wrap gap-2.5">
            <StatCard icon="🚀" value="CipherVest" label="Founder & CTO" />
            <StatCard
              icon="⚡"
              value="Full-Stack"
              label="React · Node · Prisma"
            />
            <StatCard
              icon="🎓"
              value="ECE"
              label="KIET Group of Institutions"
            />
          </div> */}
        </div>

        {/* ── Right — Terminal floats ── */}
        <div
          className="flex-1 w-full max-w-[460px] flex flex-col gap-4"
          style={{ animation: "heroFloat 5s ease-in-out infinite" }}
        >
          <style>{`
            @keyframes heroFloat {
              0%, 100% { transform: translateY(0px); }
              50%       { transform: translateY(-14px); }
            }
          `}</style>

          {/* decorative corner label */}
          <div className="flex items-center justify-between mb-1 px-1">
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
              // live terminal
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              connected
            </span>
          </div>

          <Terminal />

          {/* Quick-connect strip */}
          <div className="flex items-center gap-3 bg-white/60 backdrop-blur border border-blue-100 rounded-2xl px-4 py-3 mt-1 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
              <FaGithub size={16} className="text-[#1e3a5f]" />
            </div>
            <div className="flex-1">
              <div className="text-[12px] font-semibold text-slate-700">
                github.com/Ayush-0247
              </div>
              <div className="text-[10px] text-slate-400">
                Open to collabs &amp; contributions
              </div>
            </div>
            <a
              href="https://github.com/Ayush-0247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-blue-500 hover:text-blue-600 transition-colors"
            >
              View →
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="relative z-10 flex items-center gap-3 px-6 sm:px-10 lg:px-16 pb-7">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-blue-400 animate-bounce" />
        </div>
        <span className="text-[10.5px] font-medium tracking-widest text-slate-400 uppercase">
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
