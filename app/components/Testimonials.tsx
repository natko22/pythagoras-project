"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";
import { useAutoRotate } from "../hooks/useAutoRotate";
import { professor } from "../data/professor";
import { testimonials, type Testimonial } from "../data/testimonials";

const ROTATE_INTERVAL_MS = 9000;
const CARD_WIDTH = 480;
const GAP = 32;
const SLOT = CARD_WIDTH + GAP;
const TOTAL = testimonials.length;
const ANCHOR = TOTAL;

// Three copies laid side by side give enough clones in both directions so the
// track can always slide the short way around, even right at the wrap point.
const TRACK = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-[30rem] flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8">
      <div
        className="mb-4 flex gap-1 text-[var(--accent)]"
        role="img"
        aria-label="5 out of 5 stars"
      >
        {[...Array(5)].map((_, index) => (
          <Star key={index} size={18} fill="currentColor" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="mb-6 leading-relaxed text-[var(--muted)]">
        &quot;{testimonial.review}&quot;
      </blockquote>

      <footer className="mt-auto">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="text-sm text-[var(--muted)]">{testimonial.country}</p>
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [containerWidth, setContainerWidth] = useState(0);
  const [trackPosition, setTrackPosition] = useState(ANCHOR);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);

  const { index, setIndex, setIsPaused } = useAutoRotate(
    TOTAL,
    ROTATE_INTERVAL_MS
  );

  const transitionDuration = shouldReduceMotion || skipAnimation ? 0 : 0.6;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Move the track by the shortest direction (forward or backward), never by
  // the full sweep across every card, even right when wrapping past the end.
  useEffect(() => {
    const prev = prevIndexRef.current;
    prevIndexRef.current = index;
    if (prev === index) return;

    const rawDelta = (index - prev + TOTAL) % TOTAL;
    const signedDelta = rawDelta > TOTAL / 2 ? rawDelta - TOTAL : rawDelta;
    setSkipAnimation(false);
    setTrackPosition((position) => position + signedDelta);
  }, [index]);

  // Once a full lap has been made, snap invisibly back to the middle copy
  // of the track so the position never drifts out of range.
  useEffect(() => {
    const drift = trackPosition - ANCHOR;
    if (Math.abs(drift) < TOTAL) return;

    const timeout = setTimeout(() => {
      setSkipAnimation(true);
      setTrackPosition((position) => position - Math.sign(drift) * TOTAL);
    }, transitionDuration * 1000 + 30);

    return () => clearTimeout(timeout);
  }, [trackPosition, transitionDuration]);

  const offsetX = (containerWidth - CARD_WIDTH) / 2 - trackPosition * SLOT;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 bg-[var(--accent)]/8 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {professor.testimonialsSection.eyebrow}
          </p>
          <h2 id="testimonials-heading" className="text-4xl font-semibold">
            {professor.testimonialsSection.title}
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto max-w-5xl overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8"
            animate={{ x: offsetX }}
            transition={{ duration: transitionDuration, ease: "easeInOut" }}
          >
            {TRACK.map((testimonial, i) => {
              const isActive = i === trackPosition;
              return (
                <motion.div
                  key={`${testimonial.name}-${i}`}
                  className={`shrink-0 ${isActive ? "drop-shadow-xl" : ""}`}
                  style={{ width: CARD_WIDTH }}
                  animate={{
                    scale: isActive ? 1 : 0.85,
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: transitionDuration, ease: "easeInOut" }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {TOTAL > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                  i === index
                    ? "bg-[var(--accent)]"
                    : "bg-[var(--border)] hover:bg-[var(--accent)]/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
