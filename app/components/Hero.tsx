"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { professor } from "../data/professor";
import FloatingLetters from "./animations/FloatingLetters";
import WordOfDay from "./WordOfDay";

export default function Hero() {
  return (
    <section className=" relative overflow-hidden">
      <FloatingLetters />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="w-full max-w-sm lg:max-w-md">
              <Image
                src="/images/pythagoras.webp"
                alt={professor.hero.imageAlt}
                width={600}
                height={700}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 90vw, 600px"
                className="h-auto w-full rounded-3xl object-cover shadow-xl transition-all duration-500 hover:scale-[1.02]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <WordOfDay />
            </motion.div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-2xl space-y-6 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {professor.hero.eyebrow}
            </motion.p>

            <motion.h1
              className="text-5xl font-semibold leading-tight md:text-6xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {professor.name}
            </motion.h1>

            <motion.p
              className="text-xl text-[var(--muted)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {professor.title}
            </motion.p>

            <motion.p
              className="mx-auto max-w-xl text-lg leading-relaxed text-[var(--muted)] lg:mx-0"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {professor.intro}
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm text-[var(--muted)] lg:justify-start lg:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {professor.hero.highlights.map((highlight, index) => (
                <span key={index}>✓ {highlight}</span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href={`mailto:${professor.email}`}
                className="rounded-xl bg-[var(--accent)] px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 lg:px-8 lg:py-4 lg:text-lg"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="rounded-xl border border-[var(--border)] bg-transparent px-6 py-3 font-medium text-[var(--foreground)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:px-8 lg:py-4 lg:text-lg"
              >
                View Lessons
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
