export const metadata = {
  title: "About — Daniel",
  description: "Background, interests, and contact.",
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps): React.JSX.Element {
  return (
    <div className="mb-12">
      <h2 className="font-mono text-xs text-teal-600 dark:text-teal-400 uppercase tracking-widest mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function AboutPage(): React.JSX.Element {
  return (
    <article>
      <h1 className="font-mono text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-10">
        about
      </h1>

      <Section title="background">
        <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            BS from{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Rice</span>
            , MS CS from{" "}
            <span className="text-neutral-900 dark:text-neutral-200">UIUC</span>
            . Spent grad school doing ML research and building things that
            actually ship.
          </p>
          <p>
            Did ML engineering at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Doowii</span>
            {" "}— natural language to SQL, RAG pipelines, production systems
            at scale. Now at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              Databricks
            </span>{" "}
            as an AI Field Development Engineer, working at the intersection of
            research and enterprise ML deployment.
          </p>
          <p>
            I care about systems that are actually useful, not just technically
            interesting.
          </p>
        </div>
      </Section>

      <Section title="interests">
        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
          <li className="flex gap-3">
            <span className="font-mono text-neutral-400 shrink-0 w-32">philosophy</span>
            <span>
              Nietzsche, pre-Socratics, the Greeks generally. What it means to
              live well under conditions of uncertainty.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-neutral-400 shrink-0 w-32">gaming</span>
            <span>
              Competitive Pokémon and Smash. The intersection of game theory and
              mechanical execution.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-neutral-400 shrink-0 w-32">music</span>
            <span>Production, rap. Making things that feel right before they make sense.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-neutral-400 shrink-0 w-32">other</span>
            <span>Pickleball. Strength training. Building and breaking things.</span>
          </li>
        </ul>
      </Section>

      <Section title="contact">
        <div className="flex flex-col gap-2 text-sm font-mono">
          <a
            href="https://github.com/premo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            github →
          </a>
          <a
            href="https://linkedin.com/in/danielpremo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            linkedin →
          </a>
          <a
            href="mailto:daniel@example.com"
            className="text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            email →
          </a>
        </div>
      </Section>
    </article>
  );
}
