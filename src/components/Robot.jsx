import React from "react";
import { motion } from "motion/react";

export default function Robot({ className = "" }) {
  return (
    <div className={className}>
      {" "}
      {/* <div className="w-[350px] h-[450px] flex flex-col items-center justify-center select-none font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-r from-[#AECFFF] to-[#5197F7] opacity-90 rounded-full blur-[80px]" /> */}
      <div className="w-[350px] h-[450px] flex flex-col items-center justify-center select-none font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px]  rounded-full blur-[80px]" />

        <div className="relative flex flex-col items-center justify-center scale-95 md:scale-100">
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
            <motion.div
              className="absolute left-[24px] top-[-26px] z-10 origin-bottom"
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
              <div className="w-[10px] h-[80px] bg-gradient-to-r from-[#17191d] via-[#2A2E35] to-[#121417] rounded-full shadow-[inset_-1px_1px_3px_rgba(255,255,255,0.25),1px_3px_6px_rgba(0,0,0,0.3)]" />
              {/* Glowing neon-blue decorative ring band near tip */}
              <div className="absolute bottom-[20px] left-0 right-0 h-[4px] bg-[#3AA3FF] shadow-[0_0_8px_#3AA3FF]" />
              {/* Rounded cap */}
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#2A2E35] rounded-t-full" />
            </motion.div>

            {/* Right Antenna */}
            <motion.div
              className="absolute right-[24px] top-[-26px] z-10 origin-bottom"
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
              <div className="w-[10px] h-[80px] bg-gradient-to-r from-[#17191d] via-[#2A2E35] to-[#121417] rounded-full shadow-[inset_-1px_1px_3px_rgba(255,255,255,0.25),1px_3px_6px_rgba(0,0,0,0.3)]" />
              {/* Glowing neon-blue decorative ring band near tip */}
              <div className="absolute bottom-[20px] left-0 right-0 h-[4px] bg-[#3AA3FF] shadow-[0_0_8px_#3AA3FF]" />
              {/* Rounded cap */}
              <div className="absolute top-0 left-0 right-0 h-[6px] bg-[#2A2E35] rounded-t-full" />
            </motion.div>

            {/* ========================================================= */}
            {/* BIG CHIBI HEAD                                            */}
            {/* ========================================================= */}
            <motion.div
              className="relative w-[345px] h-[305px] bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#DBE3EE] rounded-[138px] z-20 shadow-[0_24px_50px_rgba(14,35,65,0.24),inset_-12px_-12px_28px_rgba(148,163,184,0.38),inset_12px_12px_24px_rgba(255,255,255,0.95)] flex items-center justify-center"
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
              <div className="absolute inset-x-8 bottom-4 h-24 bg-gradient-to-t from-[#BCC6D5]/40 to-transparent rounded-b-[100px] blur-[8px] pointer-events-none" />

              {/* Specular Matte Glossy Curve Highlights (Top) */}
              <div className="absolute top-[8px] left-[45px] w-[255px] h-[95px] bg-gradient-to-b from-white to-transparent opacity-90 rounded-full blur-[1px] pointer-events-none" />

              {/* Forehead Blue Circle Seam/Inlay */}
              <div className="absolute top-[46px] left-1/2 -translate-x-1/2 w-[84px] h-[84px] rounded-full border-[3.5px] border-[#3BA3FF]/80 bg-white/40 shadow-[inset_1px_1px_4px_rgba(0,0,0,0.04),0_1.5px_3px_rgba(255,255,255,0.95)]" />

              {/* Forehead Groove Seam Lines wrapping around Visor */}
              <div className="absolute top-[104px] left-[52px] w-[54px] h-[22px] border-t-2 border-sky-400/40 rounded-full rotate-[-16deg]" />
              <div className="absolute top-[104px] right-[52px] w-[54px] h-[22px] border-t-2 border-sky-400/40 rounded-full rotate-[16deg]" />

              {/* ========================================================= */}
              {/* THE VISOR (Perfect contours matching image exactly)      */}
              {/* ========================================================= */}
              <div className="absolute top-[110px] left-1/2 -translate-x-1/2 w-[310px] h-[130px] z-10">
                {/* Contoured Black Shell Backplate with extreme rounded ends */}
                <div className="relative w-full h-full rounded-[45px] bg-gradient-to-b from-[#0B0D10] to-[#15191F] overflow-hidden shadow-[inset_0_-8px_20px_rgba(0,0,0,0.9),inset_0_8px_16px_rgba(255,255,255,0.18),0_12px_24px_rgba(0,0,0,0.32)]">
                  {/* Diagonal Gloss Plate Reflection Overlay */}
                  <div className="absolute top-[-25px] left-[-30px] w-[380px] h-[45px] bg-gradient-to-b from-white/12 to-transparent -rotate-[14deg] blur-[0.5px] pointer-events-none" />
                  <div className="absolute bottom-1 right-4 w-[160px] h-[25px] bg-gradient-to-t from-white/5 to-transparent blur-[2.5px] pointer-events-none" />

                  {/* Vertical Pill glowing Blue Eyes */}
                  <div className="absolute inset-0 flex items-center justify-between px-[44px]">
                    {/* Left Pill Eye */}
                    <div className="relative w-[35px] h-[58px] bg-gradient-to-b from-[#24A6FF] via-[#007CFF] to-[#0057D9] rounded-[16px] shadow-[0_0_24px_rgba(0,124,255,0.95),inset_-3px_-4px_8px_rgba(0,0,0,0.3),inset_3px_4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center">
                      {/* Real-time subtle eye pulse */}
                      <motion.div
                        className="absolute inset-0 bg-transparent rounded-[16px]"
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
                      <div className="w-[18px] h-[36px] bg-[#75C8FF]/20 rounded-full blur-[1.5px]" />
                      <div className="absolute top-2.5 left-2 w-[8px] h-[16px] bg-white rounded-full opacity-90 blur-[0.3px]" />
                    </div>

                    {/* Right Pill Eye */}
                    <div className="relative w-[35px] h-[58px] bg-gradient-to-b from-[#24A6FF] via-[#007CFF] to-[#0057D9] rounded-[16px] shadow-[0_0_24px_rgba(0,124,255,0.95),inset_-3px_-4px_8px_rgba(0,0,0,0.3),inset_3px_4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center">
                      <motion.div
                        className="absolute inset-0 bg-transparent rounded-[16px]"
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
                      <div className="w-[18px] h-[36px] bg-[#75C8FF]/20 rounded-full blur-[1.5px]" />
                      <div className="absolute top-2.5 left-2 w-[8px] h-[16px] bg-white rounded-full opacity-90 blur-[0.3px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ========================================================= */}
              {/* GLOWING BLUE BOTTOM JAW/CHEEK SEAM LINES                  */}
              {/* ========================================================= */}
              {/* Left Chin-Cheek line */}
              <div className="absolute bottom-[24px] left-[110px] w-[50px] h-[48px] border-l-2 border-b-2 border-[#3BA3FF]/80 rounded-bl-[28px] opacity-90" />
              {/* Right Chin-Cheek line */}
              <div className="absolute bottom-[24px] right-[110px] w-[50px] h-[48px] border-r-2 border-b-2 border-[#3BA3FF]/80 rounded-br-[28px] opacity-90" />
            </motion.div>

            {/* ========================================================= */}
            {/* THE HEADPHONES (Perfect, deep-matte side-clamps)         */}
            {/* ========================================================= */}
            {/* Left Ear Cushion Clamp */}
            <motion.div
              className="absolute left-[-26px] top-[94px] w-[45px] h-[125px] bg-gradient-to-r from-[#0C0E11] to-[#1F242C] rounded-[24px] z-30 shadow-[inset_-4px_4px_8px_rgba(255,255,255,0.1),2px_12px_22px_rgba(0,0,0,0.36)] border-l border-neutral-700/20"
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
              <div className="absolute inset-y-4 right-1 w-[3px] bg-sky-400/45 rounded-full shadow-[0_0_6px_#3AA3FF]" />
            </motion.div>

            {/* Right Ear Cushion Clamp */}
            <motion.div
              className="absolute right-[-26px] top-[94px] w-[45px] h-[125px] bg-gradient-to-l from-[#0C0E11] to-[#1F242C] rounded-[24px] z-30 shadow-[inset_4px_4px_8px_rgba(255,255,255,0.1),-2px_12px_22px_rgba(0,0,0,0.36)] border-r border-neutral-700/20"
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
              <div className="absolute inset-y-4 left-1 w-[3px] bg-sky-400/45 rounded-full shadow-[0_0_6px_#3AA3FF]" />
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
