import Image from "next/image";
import { professor } from "../data/professor";

export default function Hero() {
  return (
    <section className="bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <div className="max-w-sm overflow-hidden rounded-3xl shadow-lg lg:max-w-md">
              <Image
                src="/images/pythagoras.webp"
                alt={professor.hero.imageAlt}
                width={600}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
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
                  border
                  border-[var(--border)]
                  px-6
                  py-3
                  font-medium
                  text-[var(--foreground)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--card)]
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
