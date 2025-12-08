"use client";
import React from "react";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-black text-white py-20 md:py-28">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-[-10%] h-72 w-72 rounded-full bg-yellow-400/10 blur-[110px]"
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] right-[-10%] h-80 w-80 rounded-full bg-white/5 blur-[120px]"
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.1rem] text-white/60 backdrop-blur-sm"
        >
          Nominations Now Open
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-6 text-3xl md:text-5xl font-bold leading-tight"
        >
          Be part of the<br />{" "}
          <span className="text-yellow-300">Founders Fest Awards.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-5 max-w-2xl text-sm md:text-lg text-neutral-200"
        >
          Nominate yourself, your startup, or a team you believe in. Whether
          you&apos;re just getting started or already scaling, this is your
          moment to step into the spotlight and share your journey with the
          ecosystem.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-6 grid gap-3 text-sm md:text-base text-neutral-300 md:grid-cols-3"
        >
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 text-[10px] rounded-full bg-yellow-400" />
            Awards across innovation & leadership.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 text-[10px] rounded-full bg-yellow-400" />
            Open to founders, creators, and teams.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 text-[10px] rounded-full bg-yellow-400" />
            Get recognised by investors & operators.
          </li>
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <motion.a
            href="https://forms.gle/nuSCX6ieKjg8TjqHA"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-sm md:text-base font-semibold text-black transition"
          >
            Nominate
          </motion.a>
          <p className="text-xs md:text-sm text-neutral-400">
            It only takes a few minutes to submit your nomination.{" "}
            <span className="text-neutral-200">
              Your story deserves to be heard.
            </span>
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
          className="mt-8 text-xs md:text-sm text-neutral-500"
        >
          By submitting the form, you confirm that the information shared is
          accurate to the best of your knowledge and agree to be contacted by
          the Founders Fest Awards team regarding your nomination.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
