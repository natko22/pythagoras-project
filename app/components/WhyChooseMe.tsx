import { professor } from "../data/professor";

export default function WhyChooseMe() {
  return (
    <section aria-labelledby="why-choose-me-heading" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
            {professor.whyChooseMe.eyebrow}
          </p>

          <h2 id="why-choose-me-heading" className="text-4xl font-semibold">
            {professor.whyChooseMe.title}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-(--muted)">
          {professor.whyChooseMe.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
