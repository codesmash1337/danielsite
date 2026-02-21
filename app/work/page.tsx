import { projects } from "@/lib/projects";
import type { Project } from "@/lib/types";

export const metadata = {
  title: "Work — Daniel",
  description: "ML engineering, research, and competition work.",
};

interface YearGroup {
  label: string;
  sortYear: number;
  items: Project[];
}

function groupByYear(items: Project[]): YearGroup[] {
  const map = new Map<number, YearGroup>();
  for (const item of items) {
    const existing = map.get(item.sortYear);
    if (existing) {
      existing.items.push(item);
    } else {
      map.set(item.sortYear, {
        label: item.year,
        sortYear: item.sortYear,
        items: [item],
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.sortYear - a.sortYear);
}

export default function WorkPage(): React.JSX.Element {
  const groups = groupByYear(projects);

  return (
    <section>
      <h1 className="font-mono text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-12">
        work
      </h1>

      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group.sortYear}>
            {/* Year label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 shrink-0">
                {group.label}
              </span>
              <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
            </div>

            {/* Projects in this year */}
            <div className="space-y-12">
              {group.items.map((project) => (
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
