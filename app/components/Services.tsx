import { User, Globe, GraduationCap } from "lucide-react";

import { professor } from "../data/professor";
import StaggerContainer from "./StaggerContainer";
import StaggerItem from "./StaggerItem";

const icons = [User, Globe, GraduationCap];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-[var(--card)] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {professor.servicesSection.eyebrow}
          </p>

          <h2 id="services-heading" className="mb-6 text-4xl font-semibold">
            {professor.servicesSection.title}
          </h2>

          <p className="mx-auto mb-4 max-w-3xl text-lg text-[var(--muted)]">
            {professor.servicesSection.intro}
          </p>

          <p className="mx-auto max-w-3xl text-lg text-[var(--muted)]">
            {professor.servicesSection.description}
          </p>
        </div>

        <StaggerContainer>
          <div className="grid gap-6 lg:grid-cols-3">
            {professor.servicesSection.categories.map((category, index) => {
              const Icon = icons[index];

              return (
                <StaggerItem key={category.title}>
                  <div
                    className="
                        group
                        rounded-2xl
                        border border-[var(--border)]
                        bg-[var(--background)]
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:shadow-lg
                      "
                  >
                    <div className="mb-4">
                      <Icon
                        size={30}
                        className="
                            text-[var(--accent)]
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                      />
                    </div>

                    <h3 className="mb-4 text-xl font-semibold">
                      {category.title}
                    </h3>

                    <ul className="space-y-3">
                      {category.services.map((service) => (
                        <li
                          key={service}
                          className="flex gap-2 leading-relaxed text-[var(--muted)]"
                        >
                          <span className="text-[var(--accent)]">✓</span>

                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-[var(--muted)]">
          {professor.servicesSection.conclusion}
        </p>
      </div>
    </section>
  );
}
