import { professor } from "../data/professor";

export default function About() {
  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="bg-(--card) py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
            {professor.aboutSection.eyebrow}
          </p>

          <h2 id="about-heading" className="text-4xl font-semibold">
            {professor.aboutSection.title}
          </h2>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {professor.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-(--border) p-6 text-center"
            >
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-(--muted)">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Biography */}
        <div className="mx-auto max-w-4xl">
          {professor.about.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-8 text-(--muted)">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
