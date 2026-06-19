// Preloader.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";

function Preloader({ onComplete }) {
  const [stage, setStage] = useState("rocket"); // rocket -> chart
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
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
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
          {stage === "rocket" && (
            <motion.div
              className="absolute"
              style={{ left: "50%", top: "100%", x: "-50%", y: "-50%" }}
              animate={{
                left: ["50%", "50%", "50%", "50%", "50%", "82%"],
                top: ["100%", "48%", "48%", "48%", "48%", "16%"],
                rotate: [0, 0, 360, 720, 1080, 1080],
              }}
              transition={{
                duration: 3.2,
                times: [0, 0.22, 0.42, 0.62, 0.82, 1],
                ease: ["easeOut", "easeIn", "linear", "easeOut", "easeInOut"],
              }}
              onAnimationComplete={() => setStage("chart")}
            >
              <div className="relative flex items-center justify-center">
                <Rocket size={52} className="text-blue-600 -rotate-45" strokeWidth={1.8} />

                {/* exhaust trail, tumbles with the rocket for the spin phase */}
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-2 rounded-full bg-gradient-to-b from-cyan-400 to-transparent"
                  animate={{ height: [10, 40, 16], opacity: [0.9, 0.4, 0.9] }}
                  transition={{ duration: 0.4, repeat: Infinity, ease: "easeOut" }}
                />
              </div>

              {/* trailing particles */}
              {[...Array(4)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                  style={{ left: -2, top: 30 + i * 6 }}
                  animate={{ opacity: [0.8, 0], scale: [1, 0.3] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.12,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}

          {/* CHART STAGE */}
          <AnimatePresence>
            {stage === "chart" && (
              <motion.div
                key="chart-stage"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                onAnimationComplete={() => {
                  // wait for bars to finish growing, then close
                  setTimeout(handleChartDone, 900);
                }}
              >
                <div className="flex items-end gap-2 h-28">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                      className="w-3 rounded-t-full bg-gradient-to-t from-blue-600 to-cyan-400"
                    />
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-sm font-semibold tracking-widest text-blue-600 uppercase"
                >
                  Crunching numbers
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;