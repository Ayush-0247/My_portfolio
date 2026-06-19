import { motion } from "framer-motion";
import {
  Rocket,
  MonitorSmartphone,
  Zap,
  Download,
} from "lucide-react";
import img from "../assets/img2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 text-slate-900 px-6 md:px-20 py-20 overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">

        {/* LEFT */}
        <motion.div
          className="flex-1 w-full z-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeUp} className="text-sm tracking-widest text-blue-600 mb-6 font-semibold">
            ABOUT ME
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600">Ayush</span>
            <br />
            A Web Developer
          </motion.h1>

          <motion.p variants={fadeUp} className="text-slate-600 mt-8 max-w-xl leading-8 text-lg">
            I build responsive, user-friendly and high-performance web applications.
            I love turning complex problems into simple, beautiful and intuitive designs.
          </motion.p>

          {/* Features */}
          <motion.div variants={container} className="flex flex-wrap gap-8 mt-14">
            <motion.div variants={fadeUp} className="max-w-[170px]">
              <Rocket size={40} className="text-blue-600" />
              <h3 className="font-semibold mt-4 text-slate-900">Clean Code</h3>
              <p className="text-sm text-slate-500 mt-2">Maintainable and scalable code.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-[170px]">
              <MonitorSmartphone size={40} className="text-blue-600" />
              <h3 className="font-semibold mt-4 text-slate-900">Responsive</h3>
              <p className="text-sm text-slate-500 mt-2">Perfect on all devices.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-[170px]">
              <Zap size={40} className="text-cyan-600" />
              <h3 className="font-semibold mt-4 text-slate-900">Performance</h3>
              <p className="text-sm text-slate-500 mt-2">Optimized user experience.</p>
            </motion.div>
          </motion.div>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white transition-shadow duration-300 cursor-pointer shadow-lg shadow-blue-500/25"
          >
            Download CV
            <Download size={18} />
          </motion.button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex-1 relative h-[600px] lg:h-[650px] w-full max-w-[500px] lg:max-w-none"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Soft glow */}
          <div className="absolute right-0 lg:right-10 bottom-6 w-[70%] sm:w-[360px] lg:w-[400px] h-[420px] lg:h-[460px] rounded-full bg-gradient-to-b from-sky-200 to-blue-200 opacity-70 blur-2xl" />

          {/* Code Card */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-24 left-0 z-20 p-6 rounded-3xl border border-blue-100 bg-white/80 backdrop-blur-lg shadow-md hidden sm:block"
          >
            <pre className="text-xs text-blue-700">
{`01 <html>
02 <head>
03 <title>Portfolio</title>
04 </head>
05 <body>
06 <h1>Hi, I'm Ayush</h1>
07 </body>
08 </html>`}
            </pre>
          </motion.div>

          {/* Top Icon — floating loop */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 right-2 lg:right-8 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-500/10 backdrop-blur-lg flex items-center justify-center text-2xl sm:text-4xl text-blue-600 shadow-sm"
          >
            {"{ }"}
          </motion.div>

          {/* Bottom Icon — floating loop, offset delay */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-28 left-6 sm:left-16 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-cyan-500/10 backdrop-blur-lg flex items-center justify-center text-2xl sm:text-3xl text-cyan-600 shadow-sm"
          >
            {"</>"}
          </motion.div>

          {/* Dots */}
          <div
            className="absolute right-2 top-1/2 -translate-y-1/2 w-28 h-28 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#0ea5e9 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />

          {/* Ground shadow */}
          <div className="absolute bottom-3 right-4 lg:right-16 w-[55%] sm:w-[260px] lg:w-[280px] h-6 rounded-full bg-blue-900/15 blur-md" />

          {/* Photo — subtle continuous float */}
          <motion.img
            src={img}
            alt="Ayush Portfolio"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-4 right-0 lg:right-10 z-10 w-[78%] sm:w-[390px] lg:w-[420px] object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;