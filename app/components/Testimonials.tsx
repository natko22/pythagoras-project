import { Star } from "lucide-react";
import { professor } from "../data/professor";
import { testimonials } from "../data/testimonials";
import StaggerContainer from "./StaggerContainer";
import StaggerItem from "./StaggerItem";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 py-20"
    >
      {" "}
      <div className="mx-auto max-w-6xl px-6">
        {" "}
        <div className="mb-12 text-center">
          {" "}
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
            {professor.testimonialsSection.eyebrow}{" "}
          </p>
          <h2 id="testimonials-heading" className="text-4xl font-semibold">
            {professor.testimonialsSection.title}
          </h2>
        </div>
        <StaggerContainer>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <article
                  className="
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--card)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
                >
                  <div
                    className="mb-4 flex gap-1 text-[var(--accent)]"
                    aria-label="5 star review"
                  >
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <blockquote className="mb-6 leading-relaxed text-[var(--muted)]">
                    &quot;{testimonial.review}&quot;
                  </blockquote>

                  <footer>
                    <p className="font-semibold">{testimonial.name}</p>

                    <p className="text-sm text-[var(--muted)]">
                      {testimonial.country}
                    </p>
                  </footer>
                </article>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
