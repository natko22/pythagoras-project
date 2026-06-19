import { professor } from "../data/professor";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--accent)] py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="font-heading text-2xl text-white">{professor.name}</p>

        <p className="mt-3 text-white/90">{professor.title}</p>
        <p className="mt-2 text-sm text-white/80">London • Online Worldwide</p>

        <p className="mt-6 text-xs text-white/70">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
