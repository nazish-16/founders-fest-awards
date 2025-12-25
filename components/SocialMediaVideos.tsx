/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";

const REELS = [
  "https://www.instagram.com/reel/DSpx9ECATfa/",
  "https://www.instagram.com/reel/DSnhA9ekmtf/",
  "https://www.instagram.com/reel/DSceykEEwAP/",
  "https://www.instagram.com/reel/DSIhwH5ErEK/",
  "https://www.instagram.com/reel/DRunBv8gTQX/",
  "https://www.instagram.com/reel/DRjBN7ugV6i/",
];

function ensureInstagramScript() {
  const existing = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
  if (existing) return;

  const script = document.createElement("script");
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}

const SocialMediaVideos = () => {
  useEffect(() => {
    ensureInstagramScript();

    // Ask Instagram to re-scan blockquotes after render
    const t = setTimeout(() => {
      // @ts-ignore
      if (window?.instgrm?.Embeds?.process) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    }, 300);

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-20 md:py-28">
      {/* CTA-style glow blobs */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.1rem] text-white/60 backdrop-blur-sm"
        >
          Social Proof
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
          className="mt-6 text-3xl md:text-5xl font-bold leading-tight"
        >
          Watch our latest{" "}
          <span className="text-yellow-300">Instagram Reels</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="mt-5 max-w-2xl text-sm md:text-lg text-neutral-200"
        >
          Highlights, moments, and stories from Founders Fest, all in one place.
        </motion.p>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {REELS.map((url, idx) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.06 }}
              className="ig-embed-dark rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="ig-embed-dark overflow-hidden rounded-xl">
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: 12,
                    margin: 0,
                    width: "100%",
                    }}
                />
                </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-neutral-400">Reel #{idx + 1}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-medium text-yellow-300 hover:text-yellow-200"
                >
                  Open on Instagram →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaVideos;
