import { professor } from "../data/professor";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--accent)] py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-heading text-2xl text-white">{professor.name}</p>

        <p className="mt-3 text-white/90">{professor.title}</p>
        <p className="mt-2 text-sm text-white/80">London • Online Worldwide</p>

        <div className="mt-5 flex justify-center gap-4">
          <a
            href={professor.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="inline-block text-white/80 transition-all duration-200 hover:scale-110 hover:text-white focus-visible:scale-110 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.92 4.92 0 0 1 1.77 1.15 4.92 4.92 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.92 4.92 0 0 1-1.15 1.77 4.92 4.92 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.92 4.92 0 0 1-1.77-1.15 4.92 4.92 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.92 4.92 0 0 1 1.15-1.77 4.92 4.92 0 0 1 1.77-1.15c.46-.16 1.26-.35 2.43-.4 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a6.92 6.92 0 0 0-2.5 1.63 6.92 6.92 0 0 0-1.63 2.5c-.3.76-.5 1.63-.56 2.91C-.01 8.33 0 8.74 0 12s-.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91a6.92 6.92 0 0 0 1.63 2.5 6.92 6.92 0 0 0 2.5 1.63c.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a6.92 6.92 0 0 0 2.5-1.63 6.92 6.92 0 0 0 1.63-2.5c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a6.92 6.92 0 0 0-1.63-2.5 6.92 6.92 0 0 0-2.5-1.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
              <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.4 4.2a1.44 1.44 0 1 0 1.44 1.44A1.44 1.44 0 0 0 18.4 4.2z" />
            </svg>
          </a>
          <a
            href={professor.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe on YouTube"
            className="inline-block text-white/80 transition-all duration-200 hover:scale-110 hover:text-white focus-visible:scale-110 focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.27 3.6z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <p className="text-sm italic text-white/90">
            Designed and Developed by
            <br className="sm:hidden" />{" "}
            <a
              href="https://www.chaptersbyanastasia.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              Anastasia Tsapanidou Kornilaki
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
