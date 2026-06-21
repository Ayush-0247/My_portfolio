import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { askAI } from "../gemini";
export default function Robot({ className = "", message = "" }) {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(message);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!question.trim()) return;

    try {
      setLoading(true);

      const reply = await askAI(question);

      setResponse(reply);
      setQuestion("");
    } catch (error) {
      console.error(error);
      setResponse("Sorry, I couldn't process that.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("New message:", message);
    setResponse(message);
  }, [message]);

  return (
    <div className={className}>
      {" "}
      <div className="w-[350px] h-[450px] flex flex-col items-center justify-center select-none font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px]  rounded-full blur-[80px]" />

        <div className="relative flex flex-col items-center justify-center scale-95 md:scale-100">
          {/* Chat Bubble */}
          <motion.div
            className="absolute -top-32 left-1/2 -translate-x-1/2
  w-fit min-w-[400px] max-w-[600px]
  bg-white/90 backdrop-blur-md
  text-slate-800 px-5 py-3 rounded-2xl
  shadow-xl border border-slate-200 z-50"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="mb-3 max-h-[200px] overflow-y-auto">
              <p className="text-lg text-center break-words">
                {loading ? "Thinking..." : response}
              </p>
            </div>
            <input
              type="text"
              placeholder="Ask me anything..."
              className="w-full text-center text-2xl py-3 outline-none placeholder:text-2xl"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  await handleAskAI();
                }
              }}
            />

            {/* Bubble Tail */}
            <div
              className="absolute left-1/2 -translate-x-1/2
               -bottom-2 w-4 h-4 bg-white
               border-r border-b border-slate-200
               rotate-45"
            />
          </motion.div>

          <motion.div
            className="relative flex flex-col items-center"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Left Antenna */}
            <motion.div
              className="absolute left-[18px] top-[-20px] z-10 origin-bottom"
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Dark metal rod with glossy highlights */}
              <div className="w-[8px] h-[60px] bg-gradient-to-r from-[#17191d] via-[#2A2E35] to-[#121417] rounded-full shadow-[inset_-1px_1px_3px_rgba(255,255,255,0.25),1px_3px_6px_rgba(0,0,0,0.3)]" />
              {/* Glowing neon-blue decorative ring band near tip */}
              <div className="absolute bottom-[15px] left-0 right-0 h-[3px] bg-[#3AA3FF] shadow-[0_0_8px_#3AA3FF]" />
              {/* Rounded cap */}
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#2A2E35] rounded-t-full" />
            </motion.div>

            {/* Right Antenna */}
            <motion.div
              className="absolute right-[18px] top-[-20px] z-10 origin-bottom"
              animate={{
                rotate: [2, -2, 2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              {/* Dark metal rod with glossy highlights */}
              <div className="w-[8px] h-[60px] bg-gradient-to-r from-[#17191d] via-[#2A2E35] to-[#121417] rounded-full shadow-[inset_-1px_1px_3px_rgba(255,255,255,0.25),1px_3px_6px_rgba(0,0,0,0.3)]" />
              {/* Glowing neon-blue decorative ring band near tip */}
              <div className="absolute bottom-[15px] left-0 right-0 h-[3px] bg-[#3AA3FF] shadow-[0_0_8px_#3AA3FF]" />
              {/* Rounded cap */}
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-[#2A2E35] rounded-t-full" />
            </motion.div>

            {/* ========================================================= */}
            {/* BIG CHIBI HEAD (reduced)                                  */}
            {/* ========================================================= */}
            <motion.div
              className="relative w-[260px] h-[230px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#DBE3EE] rounded-[104px] z-20 shadow-[0_24px_50px_rgba(14,35,65,0.24),inset_-12px_-12px_28px_rgba(148,163,184,0.38),inset_12px_12px_24px_rgba(255,255,255,0.95)] flex items-center justify-center"
              animate={{
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Soft Ambient Inner Bottom Shadow for Head depth */}
              <div className="absolute inset-x-6 bottom-3 h-[72px] bg-gradient-to-t from-[#BCC6D5]/40 to-transparent rounded-b-[80px] blur-[8px] pointer-events-none" />

              {/* Specular Matte Glossy Curve Highlights (Top) */}
              <div className="absolute top-[6px] left-[34px] w-[191px] h-[71px] bg-gradient-to-b from-white to-transparent opacity-90 rounded-full blur-[1px] pointer-events-none" />

              {/* Forehead Blue Circle Seam/Inlay */}
              <div className="absolute top-[35px] left-1/2 -translate-x-1/2 w-[63px] h-[63px] rounded-full border-[3px] border-[#3BA3FF]/80 bg-white/40 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.04),0_1.5px_3px_rgba(255,255,255,0.95)]" />

              {/* Forehead Groove Seam Lines wrapping around Visor */}
              <div className="absolute top-[78px] left-[39px] w-[41px] h-[17px] border-t-2 border-sky-400/40 rounded-full rotate-[-16deg]" />
              <div className="absolute top-[78px] right-[39px] w-[41px] h-[17px] border-t-2 border-sky-400/40 rounded-full rotate-[16deg]" />

              {/* ========================================================= */}
              {/* THE VISOR (scaled down)                                   */}
              {/* ========================================================= */}
              <div className="absolute top-[83px] left-1/2 -translate-x-1/2 w-[233px] h-[98px] z-10">
                {/* Contoured Black Shell Backplate with extreme rounded ends */}
                <div className="relative w-full h-full rounded-[34px] bg-gradient-to-b from-[#0B0D10] to-[#15191F] overflow-hidden shadow-[inset_0_-8px_20px_rgba(0,0,0,0.9),inset_0_8px_16px_rgba(255,255,255,0.18),0_12px_24px_rgba(0,0,0,0.32)]">
                  {/* Diagonal Gloss Plate Reflection Overlay */}
                  <div className="absolute top-[-19px] left-[-23px] w-[285px] h-[34px] bg-gradient-to-b from-white/12 to-transparent -rotate-[14deg] blur-[0.5px] pointer-events-none" />
                  <div className="absolute bottom-1 right-3 w-[120px] h-[19px] bg-gradient-to-t from-white/5 to-transparent blur-[2.5px] pointer-events-none" />

                  {/* Vertical Pill glowing Blue Eyes */}
                  <div className="absolute inset-0 flex items-center justify-between px-[33px]">
                    {/* Left Pill Eye */}
                    <div className="relative w-[26px] h-[44px] bg-gradient-to-b from-[#24A6FF] via-[#007CFF] to-[#0057D9] rounded-[12px] shadow-[0_0_24px_rgba(0,124,255,0.95),inset_-3px_-4px_8px_rgba(0,0,0,0.3),inset_3px_4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center">
                      {/* Real-time subtle eye pulse */}
                      <motion.div
                        className="absolute inset-0 bg-transparent rounded-[12px]"
                        animate={{
                          boxShadow: [
                            "inset 0 0 0px rgba(58,163,255,0)",
                            "inset 0 0 10px rgba(58,163,255,0.5)",
                            "inset 0 0 0px rgba(58,163,255,0)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Inner core brightness */}
                      <div className="w-[14px] h-[27px] bg-[#75C8FF]/20 rounded-full blur-[1.5px]" />
                      <div className="absolute top-2 left-1.5 w-[6px] h-[12px] bg-white rounded-full opacity-90 blur-[0.3px]" />
                    </div>

                    {/* Right Pill Eye */}
                    <div className="relative w-[26px] h-[44px] bg-gradient-to-b from-[#24A6FF] via-[#007CFF] to-[#0057D9] rounded-[12px] shadow-[0_0_24px_rgba(0,124,255,0.95),inset_-3px_-4px_8px_rgba(0,0,0,0.3),inset_3px_4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center">
                      <motion.div
                        className="absolute inset-0 bg-transparent rounded-[12px]"
                        animate={{
                          boxShadow: [
                            "inset 0 0 0px rgba(58,163,255,0)",
                            "inset 0 0 10px rgba(58,163,255,0.5)",
                            "inset 0 0 0px rgba(58,163,255,0)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.1,
                        }}
                      />
                      <div className="w-[14px] h-[27px] bg-[#75C8FF]/20 rounded-full blur-[1.5px]" />
                      <div className="absolute top-2 left-1.5 w-[6px] h-[12px] bg-white rounded-full opacity-90 blur-[0.3px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* GLOWING BLUE BOTTOM JAW/CHEEK SEAM LINES                  */}
              {/* ========================================================= */}
              {/* Left Chin-Cheek line */}
              <div className="absolute bottom-[18px] left-[83px] w-[38px] h-[36px] border-l-2 border-b-2 border-[#3BA3FF]/80 rounded-bl-[21px] opacity-90" />
              {/* Right Chin-Cheek line */}
              <div className="absolute bottom-[18px] right-[83px] w-[38px] h-[36px] border-r-2 border-b-2 border-[#3BA3FF]/80 rounded-br-[21px] opacity-90" />
            </motion.div>

            {/* ========================================================= */}
            {/* THE HEADPHONES (scaled to match smaller head)            */}
            {/* ========================================================= */}
            {/* Left Ear Cushion Clamp */}
            <motion.div
              className="absolute left-[-20px] top-[70px] w-[34px] h-[94px] bg-gradient-to-r from-[#0C0E11] to-[#1F242C] rounded-[18px] z-30 shadow-[inset_-4px_4px_8px_rgba(255,255,255,0.1),2px_12px_22px_rgba(0,0,0,0.36)] border-l border-neutral-700/20"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Highlight line on inner band */}
              <div className="absolute inset-y-3 right-1 w-[2px] bg-sky-400/45 rounded-full shadow-[0_0_6px_#3AA3FF]" />
            </motion.div>

            {/* Right Ear Cushion Clamp */}
            <motion.div
              className="absolute right-[-20px] top-[70px] w-[34px] h-[94px] bg-gradient-to-l from-[#0C0E11] to-[#1F242C] rounded-[18px] z-30 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),-2px_12px_22px_rgba(0,0,0,0.36)] border-r border-neutral-700/20"
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              {/* Highlight line on inner band */}
              <div className="absolute inset-y-3 left-1 w-[2px] bg-sky-400/45 rounded-full shadow-[0_0_6px_#3AA3FF]" />
            </motion.div>

            {/* ========================================================= */}
            {/* TINY NECK                                                 */}
            {/* ========================================================= */}
            <div className="w-[34px] h-[12px] bg-gradient-to-r from-[#171A1F] via-[#2A313C] to-[#121417] rounded-full shadow-inner z-10 -mt-1" />

            {/* ========================================================= */}
            {/* THE BODY / TORSO                                          */}
            {/* ========================================================= */}
            <div className="relative w-[116px] h-[100px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#DBE3EE] rounded-[48px] z-10 -mt-1 shadow-[0_12px_28px_rgba(14,35,65,0.18),inset_-6px_-6px_14px_rgba(148,163,184,0.3),inset_6px_6px_14px_rgba(255,255,255,0.95)] flex flex-col items-center justify-start pt-4">
              {/* Body Shoulder seam line running up to chest */}
              <div className="absolute inset-x-5 top-5 h-[1.5px] bg-sky-400/35" />

              {/* Glass Globe Active Reactor Core */}
              <div className="relative w-[48px] h-[48px] rounded-full bg-slate-200/50 shadow-[inset_1px_2px_4px_rgba(0,0,0,0.15),_0_2px_2px_rgba(255,255,255,0.85)] border border-slate-300/60 flex items-center justify-center">
                {/* Spherical Glowing Blue Orb (Glass Marble Look) */}
                <motion.div
                  className="relative w-[36px] h-[36px] rounded-full bg-gradient-to-b from-[#38BDF8] via-[#0284C7] to-[#0369A1] shadow-[0_0_18px_rgba(2,132,199,0.85),inset_-2px_-3px_6px_rgba(0,0,0,0.4),inset_2px_3px_6px_rgba(255,255,255,0.7)] flex items-center justify-center"
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Glossy Reflection Highlight */}
                  <div className="absolute top-1 left-2.5 w-[14px] h-[8px] bg-white opacity-85 rounded-full blur-[0.2px]" />
                  <div className="absolute bottom-1 right-2 w-[6px] h-[6px] bg-sky-200 opacity-60 rounded-full blur-[0.4px]" />
                </motion.div>
              </div>

              {/* Dynamic Bottom Belt Grooves */}
              <div className="absolute bottom-2.5 inset-x-5 h-[3px] bg-[#3BA3FF]/80 rounded-full opacity-90 shadow-[0_0_4px_rgba(59,163,255,0.4)]" />

              <motion.div
                className="absolute left-[-16px] top-[14px] w-[22px] h-[52px] bg-gradient-to-b from-white via-slate-50 to-[#DBE3EE] rounded-full shadow-[2px_6px_12px_rgba(0,0,0,0.14)] origin-top border-t border-white"
                animate={{
                  rotate: [5, 12, 5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Joint ring seam */}
                <div className="w-full h-[3px] bg-[#3BA3FF]/80 absolute top-[16px]" />
              </motion.div>

              {/* Right Arm */}
              <motion.div
                className="absolute right-[-16px] top-[14px] w-[22px] h-[52px] bg-gradient-to-b from-white via-slate-50 to-[#DBE3EE] rounded-full shadow-[-2px_6px_12px_rgba(0,0,0,0.14)] origin-top border-t border-white"
                animate={{
                  rotate: [-5, -12, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.25,
                }}
              >
                {/* Joint ring seam */}
                <div className="w-full h-[3px] bg-[#3BA3FF]/80 absolute top-[16px]" />
              </motion.div>

              {/* ========================================================= */}
              {/* COMPACT CUTE LEGS                                         */}
              {/* ========================================================= */}
              {/* Left Leg */}
              <div className="absolute left-[18px] bottom-[-32px] w-[26px] h-[40px] bg-gradient-to-b from-white via-slate-100 to-[#D4DCE8] rounded-b-full shadow-[2px_6px_12px_rgba(0,0,0,0.12)] border-t border-slate-200">
                <div className="w-full h-[3px] bg-[#3BA3FF]/85 absolute top-[12px]" />
              </div>

              {/* Right Leg */}
              <div className="absolute right-[18px] bottom-[-32px] w-[26px] h-[40px] bg-gradient-to-b from-white via-slate-100 to-[#D4DCE8] rounded-b-full shadow-[-2px_6px_12px_rgba(0,0,0,0.12)] border-t border-slate-200">
                <div className="w-full h-[3px] bg-[#3BA3FF]/85 absolute top-[12px]" />
              </div>
            </div>
          </motion.div>

          {/* Ambient Drop Floor Shadow Matching Float Rhythm */}
          <motion.div
            className="absolute pointer-events-none w-[170px] h-[16px] bg-[#16509D]/35 blur-md rounded-full"
            style={{ bottom: "-120px" }}
            animate={{
              scaleX: [1, 0.88, 1],
              opacity: [0.75, 0.45, 0.75],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}
