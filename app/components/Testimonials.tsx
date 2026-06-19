import { Star } from "lucide-react";
import { professor } from "../data/professor";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--accent)">
            {professor.testimonialsSection.eyebrow}
          </p>

          <h2 id="testimonials-heading" className="text-4xl font-semibold">
            {professor.testimonialsSection.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
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
              {/* Stars */}
              <div
                className="mb-4 flex gap-1 text-[(--accent)]"
                aria-label="5 star review"
              >
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <blockquote className="mb-6 leading-relaxed text-[(--muted)]">
                &quot;{testimonial.review}&quot;
              </blockquote>

              {/* Author */}
              <footer>
                <p className="font-semibold">{testimonial.name}</p>

                <p className="text-sm text-[(--muted)]">
                  {testimonial.country}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
