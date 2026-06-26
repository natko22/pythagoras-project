"use client";

import { motion, AnimatePresence } from "motion/react";
import { useAutoRotate } from "../hooks/useAutoRotate";
import { WORD_OF_DAY } from "../data/heroDecorations";

const ROTATE_INTERVAL_MS = 3500;

export default function WordOfDay() {
  const { index: wordIndex, setIsPaused } = useAutoRotate(
    WORD_OF_DAY.length,
    ROTATE_INTERVAL_MS,
    true
  );

  const word = WORD_OF_DAY[wordIndex];

  return (
    <p
      className="min-h-12 w-full rounded text-center text-base text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] lg:text-left"
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
