import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
  ML: "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  NLP: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  RL: "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  "Production Systems":
    "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
  Research: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): React.JSX.Element {
  const Wrapper = project.link ? "a" : "div";
  const linkProps = project.link
    ? {
        href: project.link,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "block p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950",
        project.link &&
          "hover:border-teal-400 dark:hover:border-teal-500 transition-colors cursor-pointer"
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-tight">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            {project.company}
          </p>
        </div>
        <span className="font-mono text-xs text-neutral-400 shrink-0">
          {project.year}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={cn(
              "text-xs px-2 py-0.5 font-mono",
              tagColors[tag]
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
