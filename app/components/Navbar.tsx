"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#why-choose-me", label: "Why Choose Me" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Branding */}
          <a href="#top" className="group">
            <p className="font-heading text-2xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
              Pythagoras
            </p>

            <p className="text-xs uppercase tracking-[0.15em] text-[var(--accent)]">
              Greek Language Teacher
            </p>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 text-sm md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-lg p-2 transition hover:bg-[var(--card)] md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-[var(--border)] py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
