"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)] shadow-md backdrop-blur-md">
      <nav className="mx-auto max-w-screen px-6">
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
          <ul className="hidden items-center gap-8 text-base font-medium lg:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="
                    relative pb-1 text-[var(--foreground)] transition-colors
                    after:absolute after:bottom-0 after:left-0 after:h-[2px]
                    after:w-0 after:bg-[var(--accent)] after:transition-all
                    after:duration-300
                    hover:text-[var(--accent)] hover:after:w-full
                  "
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
            className="cursor-pointer rounded-lg p-2 transition hover:bg-[var(--card)] lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full rounded-b-2xl border-t border-[var(--border)] bg-[var(--card)] px-4 py-3 shadow-lg lg:hidden"
            >
              <ul className="flex flex-col gap-1 text-base font-medium">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-lg px-3 py-3 text-[var(--foreground)] transition-colors hover:bg-[var(--accent)]/10 hover:text-[var(--accent)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
