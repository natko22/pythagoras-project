"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { professor } from "../data/professor";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08, x: -15, y: -10 }}
          animate={
            shouldReduceMotion
              ? { scale: 1.08, x: -15, y: -10 }
              : { scale: 1, x: 0, y: 0 }
          }
          transition={{
            duration: 20,
            repeat: shouldReduceMotion ? 0 : Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/greek-desk.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50 saturate-[1.2]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/70 to-[var(--background)]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-sm rounded-[28px] bg-[var(--background)] p-3 shadow-xl lg:max-w-md">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/pythagoras.webp"
                  alt={professor.hero.imageAlt}
                  width={600}
                  height={700}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="h-auto w-full object-cover hover:scale-[1.02]
transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-2xl space-y-6 text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
              {professor.hero.eyebrow}
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
              {professor.name}
            </h1>

            <p className="text-xl text-[var(--muted)]">{professor.title}</p>

            <p className="mx-auto max-w-xl text-lg leading-relaxed text-[var(--muted)] lg:mx-0">
              {professor.intro}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--muted)] lg:justify-start">
              {professor.hero.highlights.map((highlight, index) => (
                <span key={index}>✓ {highlight}</span>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={`mailto:${professor.email}`}
                className="
                  rounded-xl
                  bg-[var(--accent)]
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--accent-hover)]
                  hover:shadow-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[var(--accent)]
                  focus:ring-offset-2
                "
              >
                Get in Touch
              </a>

              <a
                href="#services"
                className="
                  rounded-xl
                  border-2
                  border-[var(--accent)]
                  bg-[var(--background)]
                  px-6
                  py-3
                  font-medium
                  text-[var(--foreground)]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--accent)]
                  hover:text-white
                  hover:shadow-md
                "
              >
                View Lessons
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
