"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
];

export function Nav(): React.JSX.Element {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setDark(false);
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = (): void => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          daniel
        </Link>
        <div className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-mono transition-colors",
                pathname === href
                  ? "text-teal-600 dark:text-teal-400"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              )}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            {dark ? (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
