"use client";

import { motion, useReducedMotion } from "motion/react";
import { GREEK_LETTERS, LETTER_POSITIONS } from "../../data/heroDecorations";

export default function FloatingLetters() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div aria-hidden="true">
      {GREEK_LETTERS.map((letter, index) => {
        const pos = LETTER_POSITIONS[index];
        const minRem = (pos.size * 0.45).toFixed(2);
        const maxRem = pos.size;

        return (
          <motion.span
            key={letter}
            className="pointer-events-none absolute select-none font-serif text-[var(--foreground)]"
            style={{
              top: pos.top,
              left: pos.left,
              fontSize: `clamp(${minRem}rem, ${(maxRem * 1.6).toFixed(2)}vw, ${maxRem}rem)`,
              opacity: pos.opacity,
            }}
            animate={{ y: [0, -28, 0], x: [0, pos.driftX, 0] }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: pos.delay,
            }}
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  );
}
