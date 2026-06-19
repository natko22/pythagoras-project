import { professor } from "../data/professor";
import EmailCopy from "./EmailCopy";

export default function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="bg-[(--card)] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[(--accent)]">
          {professor.contactSection.eyebrow}
        </p>

        <h2 id="contact-heading" className="mb-6 text-4xl font-semibold">
          {professor.contactSection.title}
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[(--muted)]">
          {professor.contactSection.description}
        </p>

        <a
          href={`mailto:${professor.email}`}
          className="
            inline-flex
            items-center
            rounded-xl
            bg-[(--accent)]
            px-8
            py-4
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[(--accent-hover)]
            hover:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-[(--accent)]
            focus:ring-offset-2
          "
        >
          {professor.contactSection.buttonText}
        </a>

        <EmailCopy email={professor.email} />
      </div>
    </section>
  );
}
