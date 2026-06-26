"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useAutoRotate(
  total: number,
  intervalMs: number,
  respectReducedMotion = false
) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Tracks how much time is left in the current cycle, so pausing and
  // resuming continues the countdown instead of restarting it from scratch.
  const remainingRef = useRef(intervalMs);
  const startedAtRef = useRef(Date.now());

  useEffect(() => {
    const shouldRun =
      total > 1 && !isPaused && !(respectReducedMotion && shouldReduceMotion);

    if (!shouldRun) return;

    startedAtRef.current = Date.now();
    const timeout = setTimeout(() => {
      setIndex((current) => (current + 1) % total);
      remainingRef.current = intervalMs;
    }, remainingRef.current);

    return () => {
      clearTimeout(timeout);
      const elapsed = Date.now() - startedAtRef.current;
      remainingRef.current = Math.max(remainingRef.current - elapsed, 0);
    };
  }, [index, isPaused, total, intervalMs, respectReducedMotion, shouldReduceMotion]);

  const setIndexAndReset = (newIndex: number) => {
    remainingRef.current = intervalMs;
    setIndex(newIndex);
  };

  return { index, setIndex: setIndexAndReset, isPaused, setIsPaused };
}
