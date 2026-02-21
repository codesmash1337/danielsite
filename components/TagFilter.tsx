"use client";

import { useState } from "react";
import type { Tag, Project } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const ALL_TAGS: Tag[] = ["ML", "NLP", "RL", "Production Systems", "Research"];

interface TagFilterProps {
  projects: Project[];
}

export function TagFilter({ projects }: TagFilterProps): React.JSX.Element {
  const [active, setActive] = useState<Tag | null>(null);

  const filtered = active
    ? projects.filter((p) => p.tags?.includes(active))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive(null)}
          className={cn(
            "font-mono text-xs px-3 py-1 border transition-colors",
            active === null
              ? "border-teal-500 text-teal-600 dark:text-teal-400"
              : "border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-neutral-500 dark:hover:border-neutral-500"
          )}
        >
          all
        </button>
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(active === tag ? null : tag)}
            className={cn(
              "font-mono text-xs px-3 py-1 border transition-colors",
              active === tag
                ? "border-teal-500 text-teal-600 dark:text-teal-400"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-neutral-500 dark:hover:border-neutral-500"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
