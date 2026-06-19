import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/img2.png";

const NAME = "AYUSH RAJ";
const TYPE_SPEED = 130;
const DELETE_SPEED = 70;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

const PARAGRAPH =
  "Founder & CTO of CipherVest Capital, building fintech and crypto intelligence tools. I turn complex backend logic into clean, fast, beautiful interfaces.";

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.4, ease: "easeOut" },
  }),
};
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
    <div className="h-screen flex relative bg-gradient-to-br from-white via-sky-50 to-blue-50 overflow-hidden">

      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-blue-200/40 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-cyan-200/40 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
   <div className=" absolute top-3 right-5 flex gap-10">
      <a href="https://github.com/Ayush-0247" target="_blank">
        <GithubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/your-linkedin-username/"
        target="_blank"
      >
        <LinkedinIcon />
      </a>
    </div>
      {/* left side */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 relative z-10">
        
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-widest text-blue-600 uppercase"
        >
          Hey! I am
        </motion.span>

        <h1 className="mt-3 text-5xl lg:text-7xl font-extrabold tracking-tight min-h-[1.2em]">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700"
            style={{ backgroundSize: "200% auto", animation: "gradientMove 4s linear infinite" }}
          >
            {displayText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-1 h-12 lg:h-14 bg-blue-600 ml-1 align-middle"
          />
        </h1>

        <p className="mt-6 max-w-md text-sm lg:text-base leading-relaxed text-slate-600 flex flex-wrap">
          {PARAGRAPH.split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="show"
              variants={wordVariants}
              className="mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.button
          onClick={onButtonClick}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          whileHover={{ scale: 1.06, boxShadow: "0 10px 30px -8px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 w-fit bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full shadow-lg shadow-blue-500/25"
        >
          KNOW ABOUT ME →
        </motion.button>
      </div>

      {/* right side */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        {/* Pulsing glow ring behind photo */}
        <motion.div
          className="absolute w-[380px] h-[380px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-b from-sky-300 to-blue-400 opacity-40 blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating code chip */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[10%] z-20 w-16 h-16 rounded-2xl bg-blue-500/10 backdrop-blur-lg border border-blue-100 flex items-center justify-center text-3xl text-blue-600 shadow-sm"
        >
          {"{ }"}
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute bottom-[20%] left-[6%] z-20 w-16 h-16 rounded-2xl bg-cyan-500/10 backdrop-blur-lg border border-cyan-100 flex items-center justify-center text-2xl text-cyan-600 shadow-sm"
        >
          {"</>"}
        </motion.div>

        <motion.img
          src={img}
          alt="Ayush Raj"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-[75%] lg:w-[420px] object-contain"
        />
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}

export default Hero;