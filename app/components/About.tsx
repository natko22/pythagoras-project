import {
  BookOpen,
  PenTool,
  Globe,
  Users,
  Sparkles,
  Languages,
  Plane,
  Heart,
  Star,
} from "lucide-react";

import { professor } from "../data/professor";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const icons = [BookOpen, PenTool, Globe, Users];

const timelineIcons = [Sparkles, Languages, Plane, Heart, Star];

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
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[var(--accent)]/40
                  hover:shadow-md
                "
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]/10">
                    <Icon size={24} className="text-[var(--accent)]" />
                  </div>
                </div>

                <p className="text-3xl font-semibold">{stat.value}</p>

                <p className="mt-2 text-[var(--muted)]">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Biography */}
        <div className="mx-auto max-w-3xl">
          <StaggerContainer>
            <div className="relative">
              <div className="absolute left-6 top-2 h-[calc(100%-2.5rem)] w-px bg-[var(--border)]" />

              {professor.about.map((paragraph, index) => {
                const Icon = timelineIcons[index % timelineIcons.length];

                return (
                  <StaggerItem key={index}>
                    <div className="relative mb-8 flex gap-5 last:mb-0">
                      <div
                        className="
                          relative z-10 flex h-12 w-12 flex-shrink-0
                          items-center justify-center rounded-full
                          border border-[var(--border)] bg-[var(--background)]
                        "
                      >
                        <Icon size={20} className="text-[var(--accent)]" />
                      </div>

                      <p className="pt-2 text-lg leading-8 text-[var(--muted)]">
                        {paragraph}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
