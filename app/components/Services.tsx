import { professor } from "../data/professor";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-(--card) py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
            {professor.servicesSection.eyebrow}
          </p>

          <h2 id="services-heading" className="mb-6 text-4xl font-semibold">
            {professor.servicesSection.title}
          </h2>

          <p className="mx-auto mb-4 max-w-3xl text-lg text-(--muted)">
            {professor.servicesSection.intro}
          </p>

          <p className="mx-auto max-w-3xl text-lg text-(--muted)">
            {professor.servicesSection.description}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {professor.servicesSection.categories.map((category) => (
            <div
              key={category.title}
              className="
        rounded-2xl
        border border-(--border)
        bg-(--card)
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
            >
              <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>

              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="flex gap-2 leading-relaxed text-(--muted)"
                  >
                    <span className="text-(--accent)">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-4xl text-center text-lg leading-8 text-(--muted)">
          {professor.servicesSection.conclusion}
        </p>
      </div>
    </section>
  );
}
