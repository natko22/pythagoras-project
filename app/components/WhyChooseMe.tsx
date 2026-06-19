import { Sparkles, Target, BookOpen, Plane, Handshake } from "lucide-react";

import { professor } from "../data/professor";

const icons = [Sparkles, Target, BookOpen, Plane, Handshake];

export default function WhyChooseMe() {
  return (
    <section
      id="why-choose-me"
      aria-labelledby="why-choose-me-heading"
      className="scroll-mt-24 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {professor.whyChooseMe.eyebrow}
          </p>

          <h2 id="why-choose-me-heading" className="text-4xl font-semibold">
            {professor.whyChooseMe.title}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-10">
          {professor.whyChooseMe.paragraphs.map((paragraph, index) => {
            const Icon = icons[index];

            return (
              <div key={paragraph} className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <Icon size={24} className="text-[var(--accent)]" />
                </div>

                <p className="text-lg leading-8 text-[var(--muted)]">
                  {paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
