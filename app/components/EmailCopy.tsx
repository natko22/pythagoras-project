"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type EmailCopyProps = {
  email: string;
};

export default function EmailCopy({ email }: EmailCopyProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      <p className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]">
        {email}{" "}
      </p>
      <div className="relative">
        <button
          type="button"
          onClick={copyEmail}
          aria-label={
            copied ? "Email copied to clipboard" : "Copy email address"
          }
          className="
        cursor-pointer
        rounded-lg
        p-2
        transition-all
        hover:bg-[var(--card)]
        focus:outline-none
      "
        >
          {copied ? (
            <Check size={18} className="text-[var(--accent)]" />
          ) : (
            <Copy size={18} className="text-[var(--muted)]" />
          )}
        </button>

        {copied && (
          <span
            className="
          absolute
          -top-10
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-md
          bg-[var(--foreground)]
          px-2
          py-1
          text-xs
          text-white
          shadow-md
        "
          >
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
