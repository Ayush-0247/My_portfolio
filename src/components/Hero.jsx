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
    <div className="relative h-screen flex bg-rose-50">
      <div className="absolute z-10 top-0 left-0 w-full ">
        <div className="flex justify-end p-4 gap-8  w-full">
          <a
            href={`https://wa.me/${phone}?text=Hi%20Ayush,%20I%20visited%20your%20portfolio`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={40} />
          </a>
          <a
            href="https://github.com/Ayush-0247"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin-username/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
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
