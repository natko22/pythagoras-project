"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WORD_OF_DAY } from "../data/heroDecorations";

const ROTATE_INTERVAL_MS = 3500;

export default function WordOfDay() {
  const shouldReduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % WORD_OF_DAY.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  const word = WORD_OF_DAY[wordIndex];

  return (
    <p
      className="rounded text-center text-base text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] lg:text-left"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
        Word of the day
      </span>
      {"  "}
      <AnimatePresence mode="wait">
        <motion.span
          key={wordIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          <span className="font-serif text-lg text-[var(--foreground)]">
            {word.greek}
          </span>{" "}
          <span className="italic">({word.latin})</span> — {word.meaning}
        </motion.span>
      </AnimatePresence>
    </p>
  );
}
