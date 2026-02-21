import Image from "next/image";

export const metadata = {
  title: "About — Daniel",
  description: "Background, work, and what I'm into.",
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps): React.JSX.Element {
  return (
    <div className="mb-14">
      <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}

interface WorkImageProps {
  src?: string;
  alt: string;
  label: string;
  sublabel?: string;
}

function WorkImage({ src, alt, label, sublabel }: WorkImageProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
              image
            </span>
          </div>
        )}
      </div>
      <p className="font-mono text-xs text-neutral-900 dark:text-neutral-100">{label}</p>
      {sublabel && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{sublabel}</p>
      )}
    </div>
  );
}

export default function AboutPage(): React.JSX.Element {
  return (
    <article>
      <h1
        className="font-mono text-2xl font-bold mb-6"
        style={{ color: "#c07a5a" }}
      >
        About Me
      </h1>

      <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-14">
        <p>
          Rice BS → UIUC MS CS → ML Engineer at{" "}
          <span className="text-neutral-900 dark:text-neutral-200">Doowii</span>{" "}
          → AI Field Development Engineer at{" "}
          <span className="text-neutral-900 dark:text-neutral-200">Databricks</span>.
        </p>
        <p>
          I build ML systems that ship — NL→SQL agents, RAG pipelines, RL
          agents. I care about things that are actually useful, not just
          technically interesting.
        </p>
      </div>

      <Section title="presented works">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <WorkImage
            alt="PokeAgent — NeurIPS 2025"
            label="PokeAgent"
            sublabel="NeurIPS 2025 · 3rd place"
          />
          <WorkImage
            alt="VideoSemble — UIUC Blender Lab"
            label="VideoSemble"
            sublabel="UIUC Blender Lab · M.S. thesis"
          />
          <WorkImage
            alt="NL→SQL Agent — Doowii"
            label="NL→SQL Agent"
            sublabel="Doowii · 50k+ req/yr"
          />
        </div>
      </Section>

      <Section title="background">
        <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            Started at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Rice</span>{" "}
            for CS, then UIUC for an MS focused on ML. Thesis work was on multimodal video
            understanding — fusing vision, language, and audio in a single
            transformer.
          </p>
          <p>
            Went straight into production ML at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Doowii</span>{" "}
            — built and shipped the NL→SQL system and the multi-tenant dropout
            prediction pipeline. Now at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Databricks</span>{" "}
            translating research into things enterprises can actually use.
          </p>
        </div>
      </Section>

      <Section title="reading list">
        <div className="space-y-5 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              currently
            </span>
            <p className="mt-2 text-neutral-500 dark:text-neutral-500 italic">
              —
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              have read
            </span>
            <p className="mt-2 text-neutral-500 dark:text-neutral-500 italic">
              —
            </p>
          </div>
        </div>
      </Section>

      <Section title="inspiration">
        <ul className="space-y-4 text-sm">
          <li className="flex gap-4">
            <span className="font-mono text-neutral-900 dark:text-neutral-100 shrink-0 w-24">
              Sutton
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Rich Sutton. The bitter lesson: scale and general methods win.
              &ldquo;The Bitter Lesson&rdquo; is the most important essay in AI.
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-neutral-900 dark:text-neutral-100 shrink-0 w-24">
              Lambert
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              —
            </span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-neutral-900 dark:text-neutral-100 shrink-0 w-24">
              Singer
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Peter Singer. Practical ethics, expanding the moral circle.
              Forces you to think clearly about what you actually value.
            </span>
          </li>
        </ul>
      </Section>

      <Section title="music">
        <div className="space-y-5 text-sm text-neutral-600 dark:text-neutral-400">
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              current
            </span>
            <p className="mt-2 text-neutral-500 dark:text-neutral-500 italic">
              —
            </p>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide">
              favorites
            </span>
            <p className="mt-2 text-neutral-500 dark:text-neutral-500 italic">
              —
            </p>
          </div>
        </div>
      </Section>

      <Section title="contact">
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:danielpremochristl@gmail.com"
            className="font-mono text-neutral-600 dark:text-neutral-400 hover:text-[#c07a5a] transition-colors"
          >
            danielpremochristl@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/daniel-christl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-neutral-600 dark:text-neutral-400 hover:text-[#c07a5a] transition-colors"
          >
            linkedin.com/in/daniel-christl ↗
          </a>
          <a
            href="https://github.com/codesmash1337"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-neutral-600 dark:text-neutral-400 hover:text-[#c07a5a] transition-colors"
          >
            github.com/codesmash1337 ↗
          </a>
        </div>
      </Section>
    </article>
  );
}
