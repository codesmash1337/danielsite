import { TagFilter } from "@/components/TagFilter";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work — Daniel",
  description: "Projects and roles across ML, NLP, RL, and production systems.",
};

export default function WorkPage(): React.JSX.Element {
  return (
    <section>
      <h1 className="font-mono text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
        work
      </h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
        projects and roles. filter by tag.
      </p>
      <TagFilter projects={projects} />
    </section>
  );
}
