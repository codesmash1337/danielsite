"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

const TABS: { id: Category; label: string }[] = [
  { id: "production", label: "production" },
  { id: "research", label: "research" },
  { id: "creative", label: "creative" },
];

export default function WorkPage(): React.JSX.Element {
  const [active, setActive] = useState<Category>("production");

  const filtered = projects
    .filter((p) => p.category === active)
    .sort((a, b) => b.sortYear - a.sortYear);

  return (
    <section>
      <h1 className="font-mono text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
        work
      </h1>

      {/* Tabs */}
      <div className="flex gap-0 border-b border-neutral-200 dark:border-neutral-800 mb-10">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={cn(
              "font-mono text-sm px-4 py-2 -mb-px border-b-2 transition-colors",
              active === id
                ? "border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100"
                : "border-transparent text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-12">
        {filtered.map((project) => (
          <div key={project.id}>
            <div className="flex items-baseline justify-between gap-4 mb-1">
              <div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  <h2 className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h2>
                )}
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {project.role
                    ? `${project.role} · ${project.company}`
                    : project.company}
                </p>
              </div>
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                {project.year}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {project.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                >
                  <span className="text-neutral-300 dark:text-neutral-600 shrink-0 mt-0.5">
                    –
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
            nothing here yet.
          </p>
        )}
      </div>
    </section>
  );
}
