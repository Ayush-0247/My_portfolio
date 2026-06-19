// Preloader.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import { Rocket } from "lucide-react";

const ARC_EASE = [0.65, 0, 0.35, 1];

function Preloader({ onComplete }) {
  const [stage, setStage] = useState("chart");
  const [exiting, setExiting] = useState(false);

  const barHeights = [40, 70, 35, 90, 55, 100, 65];

  const handleChartDone = () => {
    setExiting(true);
    setTimeout(() => onComplete?.(), 600);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: ARC_EASE },
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-white via-sky-50 to-blue-50 overflow-hidden"
        >
          {/* ambient blobs */}
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-200/40 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-cyan-200/40 blur-3xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ROCKET STAGE */}
          {/* {stage === "rocket" && (
            <motion.div
              className="absolute"
              style={{ left: "50%", top: "100%", x: "-50%", y: "-50%" }}
              animate={{
                left: ["50%", "50%", "48%", "58%", "82%"],
                top: ["100%", "45%", "40%", "35%", "16%"],
                rotate: [0, -8, 0, 35, 360],
                scale: [0.8, 1, 1, 1, 0.9],
              }}
              transition={{
                duration: 2.6,
                times: [0, 0.3, 0.5, 0.72, 1],
                ease: [ARC_EASE, "easeInOut", "easeIn", ARC_EASE],
              }}
              onAnimationComplete={() => setStage("chart")}
            >
              <div className="relative flex items-center justify-center">
               
                <motion.div
                  className="absolute w-10 h-10 rounded-full bg-blue-400/30 blur-xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <Rocket size={52} className="relative text-blue-600 -rotate-45" strokeWidth={1.8} />

              
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-2 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
                  animate={{ height: [10, 42, 14], opacity: [0.9, 0.35, 0.9] }}
                  transition={{ duration: 0.35, repeat: Infinity, ease: "easeOut" }}
                />
              </div>

              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-blue-400"
                  style={{
                    width: 6 - i * 0.7,
                    height: 6 - i * 0.7,
                    left: -2,
                    top: 30 + i * 7,
                  }}
                  animate={{ opacity: [0.8, 0], scale: [1, 0.2] }}
                  transition={{
                    duration: 0.55,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )} */}

          {/* CHART STAGE */}
          <AnimatePresence>
            {stage === "chart" && (
              <motion.div
                key="chart-stage"
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, ease: ARC_EASE }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                onAnimationComplete={() => {
                  setTimeout(handleChartDone, 950);
                }}
              >
                <div className="flex items-end gap-2 h-28">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0, opacity: 0.4 }}
                      animate={{ height: `${h}%`, opacity: 1 }}
                      transition={{
                        height: {
                          type: "spring",
                          stiffness: 120,
                          damping: 14,
                          delay: 0.15 + i * 0.07,
                        },
                        opacity: { duration: 0.2, delay: 0.15 + i * 0.07 },
                      }}
                      className="w-3 rounded-t-full bg-gradient-to-t from-blue-600 to-cyan-400"
                    />
                  ))}
                </div>

                <motion.div
                  className="mt-6 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                    Crunching numbers
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
