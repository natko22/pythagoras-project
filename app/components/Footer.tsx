import { professor } from "../data/professor";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--accent)] py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-heading text-2xl text-white">{professor.name}</p>

        <p className="mt-3 text-white/90">{professor.title}</p>
        <p className="mt-2 text-sm text-white/80">London • Online Worldwide</p>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

          <p className="text-sm italic text-white/90">
            Developed by{" "}
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
