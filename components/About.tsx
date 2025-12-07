"use client";
import React from "react";
import { motion } from "motion/react";

const categories = [
  "Startup of the Year",
  "Founder of the Year",
  "Investor of the Year",
  "Best Accelerator Award",
  "Best Incubator Award",
  "Ecosystem Hero of the Year",
  "Best Green Tech Startup",
  "Social Enterprise Startup",
  "Best AI Innovation",
  "Best E-commerce Startup",
  "Creative Startup",
  "Sustainability Champion Award",
  "Rural Innovator Award",
  "Rural Innovation Award",
  "Social Innovator Award",
  "Social Innovation Award",
  "Women-Led Innovation Award",
  "Accessibility Innovation Award",
  "Pride of Hyderabad",
  "Future Founder Award",
  "Best creator",
];

const steps = [
  {
    step: "01",
    title: "Select Your Category",
    body: "Choose from 21 award categories celebrating innovation, leadership, creativity, impact, and entrepreneurial excellence across sectors.",
    meta: "Deadline: 20th Dec, 2025",
  },
  {
    step: "02",
    title: "Submit Your Application",
    body: "Complete the nomination form with the required details, achievements, and supporting documents.",
    meta: "Nomination fee: ₹1,000 per category.",
  },
  {
    step: "03",
    title: "Jury Evaluation",
    body: "All submissions will undergo a thorough review by our expert jury panel comprising industry leaders, investors, and ecosystem champions. Shortlisted nominees will be contacted for the next round.",
  },
  {
    step: "04",
    title: "Final Winners Announced",
    body: "Winners for each category will be announced one week before Founders’ Fest.",
  },
];

// smooth ease
const defaultEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: defaultEase,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      ease: defaultEase,
    },
  },
};

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white pt-32 pb-24">
      {/* soft animated glows */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-[120px]"
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-104 w-104 rounded-full bg-white/5 blur-[120px]"
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Intro + Why */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
        >
          <motion.span
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.1em] text-white/60 backdrop-blur-sm"
            variants={fadeUp}
          >
            Founders Fest Awards
          </motion.span>

          <motion.h1
            className="mt-6 text-3xl md:text-6xl font-bold leading-tight"
            variants={fadeUp}
            transition={{ delay: 0.05, duration: 0.8, ease: defaultEase }}
          >
            About FF Awards 2025
          </motion.h1>

          <motion.p
            className="mt-8 max-w-3xl text-base md:text-lg text-neutral-200"
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.8, ease: defaultEase }}
          >
            To celebrate the spirit of entrepreneurship, the late nights, the
            risks, the resilience, and the relentless belief that ideas can
            change the world.
          </motion.p>
          <motion.p
            className="mt-4 max-w-3xl text-base md:text-lg text-neutral-200"
            variants={fadeUp}
            transition={{ delay: 0.25, duration: 0.8, ease: defaultEase }}
          >
            These awards honour founders, innovators, and teams who are building
            with purpose, creating impact, and shaping the future of India’s
            startup ecosystem.
          </motion.p>
          <motion.p
            className="mt-4 max-w-3xl text-base md:text-lg text-neutral-300"
            variants={fadeUp}
            transition={{ delay: 0.35, duration: 0.8, ease: defaultEase }}
          >
            It’s our way of recognising the people who don’t always get the
            spotlight, but always do the work.
          </motion.p>
        </motion.section>

        {/* Why these awards matter */}
        <motion.section
          className="mt-16 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-2xl font-semibold">
              Why these awards matter?
            </h2>
            <p className="mt-4 text-sm md:text-base text-neutral-300">
              Founders’ Fest Awards is built for the builders — the ones making
              payroll work, pitching between flights, and quietly compounding
              impact. These awards exist to put them at the centre of the
              story, even if just for one night.
            </p>
            <p className="mt-4 text-sm md:text-base text-neutral-300">
              Every nomination is a story of courage: an experiment that worked,
              a product that clicked, a team that refused to quit. We celebrate
              that journey just as much as the outcome.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.1rem] text-yellow-300">
              Snapshot
            </h3>
            <p className="mt-3 text-sm text-neutral-200">
              A curated stage for India’s founders, operators, creators, and
              ecosystem heroes who are building with intent — not just chasing
              the next headline.
            </p>
          </motion.div>
        </motion.section>
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            variants={fadeUp}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Award Categories
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-300">
                From early-stage disruptors to ecosystem enablers,{" "}
                <span className="font-semibold">
                  21 categories recognise innovation, leadership, creativity,
                  sustainability, and impact
                </span>{" "}
                across India’s startup landscape.
              </p>
            </div>
            <p className="text-xs md:text-sm text-neutral-400">
              Each category is a different way of answering the same question:
              <br className="hidden md:block" />
              <span className="italic">
                “How did you make the ecosystem better this year?”
              </span>
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
          >
            {categories.map((cat) => (
              <motion.div
                key={cat}
                className="rounded-xl border hover:bg-gray-600/10 transition-all duration-300 border-white/10 bg-white/5 px-4 py-3 text-sm md:text-base text-neutral-100 backdrop-blur-sm"
                variants={fadeUp}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 18,
                }}
              >
                {cat}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        <motion.section
        className="mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-semibold"
          variants={fadeUp}
        >
          How to Nominate
        </motion.h2>

        <motion.p
          className="mt-3 max-w-2xl text-sm md:text-base text-neutral-300"
          variants={fadeUp}
        >
          A simple, transparent process to help you share your journey — not
          just your metrics.
        </motion.p>
        <div
          className="
            relative mt-10 space-y-8 pl-10
            before:absolute before:left-5 before:top-0 before:h-full before:w-px
            before:bg-white/15
          "
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-md"
            >
              <motion.div
                className="
                  absolute -left-7 top-6
                  flex h-9 w-9 items-center justify-center rounded-full
                  bg-yellow-400 text-xs font-semibold text-black
                "
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                {item.step}
              </motion.div>

              {/* CONTENT */}
              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-neutral-200">
                  {item.body}
                </p>
                {item.meta && (
                  <p className="mt-2 text-xs md:text-sm text-yellow-300">
                    {item.meta}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        </motion.section>
        <motion.section
          className="mt-20 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Who Can Nominate?
            </h2>
            <p className="mt-4 text-sm md:text-base text-neutral-200">
              The awards are open to all:
            </p>

            <motion.ul
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base text-neutral-200"
              variants={staggerContainer}
            >
              {[
                "Startup founders",
                "Small business owners",
                "Women-led enterprises",
                "Deeptech innovators",
                "Social impact organisations",
                "Student entrepreneurs",
                "MSMEs",
                "Solo founders and teams",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <p className="mt-6 text-sm md:text-base text-neutral-300">
              Anyone building something meaningful, at any stage, is welcome to
              nominate. If you’re a founder or a business creating value,
              solving problems, or innovating in any form, these awards are for
              you.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-dashed border-yellow-400/60 bg-yellow-400/10 px-6 py-6 backdrop-blur-md"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.1rem] text-yellow-300">
              Built for the doers
            </h3>
            <p className="mt-3 text-sm md:text-base text-neutral-100">
              Whether you&apos;re shipping your first MVP or scaling to new
              markets, Founders’ Fest Awards is a space to pause, reflect, and
              be recognised for the work you put in every single day.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
};

export default About;
