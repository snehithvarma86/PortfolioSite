import React from "react";
import { motion } from "motion/react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="grid">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <p className="text-secondary font-headline font-bold text-lg tracking-widest uppercase">
            Full-Stack Web Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight text-glow ">
            Hey, I'm <span className="text-primary">Snehith Varma.</span>
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
            Crafting scalable full-stack applications using React, modern
            JavaScript, Node.js, and AI technologies. Bridging the gap between
            complex backend logic and pixel-perfect user interfaces.
          </p>
        </motion.div>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://github.com/snehithvarma86?tab=repositories"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            className="hero-gradient px-8 py-4 rounded-md font-headline font-bold uppercase tracking-wider text-on-primary shadow-[0_10px_30px_rgba(126,81,255,0.3)]"
          >
            View Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-4 rounded-md font-headline font-bold uppercase tracking-wider border border-outline-variant text-white hover:bg-white/5 transition-all flex items-center gap-y-2.5"
            href="/Snehith_Resume.pdf"
            download
          >
            <Download size={18} />
            Grab Resume
          </motion.a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 3 }}
        className="relative flex justify-center"
        transition={{ duration: 1 }}
      >
        <div className="w-72 h-72 rounded-3xl overflow-hidden glass-card p-4 hover:rotate-0 transition-transform duration-1000">
          <img
            src="/src/assets/snehith.jpeg"
            alt="Sai Snehith Portfolio"
            className="w-full h-full object-cover rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 w-32 h-32 glass-card rounded-full p-2 flex items-center justify-center -rotate-12">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#262626"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="210"
              strokeLinecap="round"
              className="text-primary orbit-gradient"
            />
            <defs>
              <linearGradient
                id="orbitGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#00e3fd" />
                <stop offset="100%" stopColor="#b6a0ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold font-headline text-secondary">
              3+ YRS
            </span>
            <span className="text-[8px] text-on-surface-variant font-bold uppercase">
              Exp
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
