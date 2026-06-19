import { BookOpen, PenTool, Globe, Users } from "lucide-react";

import { professor } from "../data/professor";

const icons = [BookOpen, PenTool, Globe, Users];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-[var(--card)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {professor.aboutSection.eyebrow}
          </p>

          <h2 id="about-heading" className="text-4xl font-semibold">
            {professor.aboutSection.title}
          </h2>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {professor.stats.map((stat, index) => {
            const Icon = icons[index];

            return (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  border border-[var(--border)]
                  bg-[var(--background)]
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={28} className="text-[var(--accent)]" />
                </div>

                <p className="text-3xl font-semibold">{stat.value}</p>

                <p className="mt-2 text-[var(--muted)]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Biography */}
        <div className="mx-auto max-w-4xl">
          {professor.about.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-lg leading-8 text-[var(--muted)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
