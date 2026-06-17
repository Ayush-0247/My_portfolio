import { useState, useEffect } from "react";
import img from "../assets/img.jpg";

const NAME = "AYUSH RAJ";
const TYPE_SPEED = 130;
const DELETE_SPEED = 70;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function Hero() {
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
        isDeleting ? DELETE_SPEED : TYPE_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <div className="h-screen flex bg-rose-50">
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
          Voluptatibus, unde mollitia! Accusantium, quidem. Cumque
          consequuntur, saepe velit maiores aliquid veritatis adipisci.
          Libero amet asperiores odio voluptatibus fugit accusantium
          similique consequuntur omnis, cumque ad exercitationem quia iste
          reiciendis dicta velit excepturi perferendis inventore dolorem?
          Corporis nihil cum, voluptate laborum hic temporibus vel
          praesentium perspiciatis dolorum id assumenda voluptatem facilis.
        </p>

        <button className="mt-8 w-fit bg-slate-800 text-rose-50 text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full hover:bg-slate-700 transition-colors">
          KNOW ABOUT ME →
        </button>
      </div>

      {/* right side */}
      <div className="flex-1 relative flex items-center justify-center bg-rose-100 overflow-hidden">
        <div className="mb-5" />
        <img
          src={img}
          className="relative z-10 h-4/5 w-auto max-w-sm object-cover shadow-xl"
          alt="Ayush Raj"
        />
      </div>
    </div>
  );
}

export default Hero;