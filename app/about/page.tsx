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

export default function AboutPage(): React.JSX.Element {
  return (
    <article>
      <h1
        className="font-mono text-2xl font-bold mb-12"
        style={{ color: "#c07a5a" }}
      >
        About Me
      </h1>

      <Section title="background">
      <div className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <p>
            My first exposure to ML was AlphaZero, in the midst of my senior year of high school.
            It left an indelible impression on me: mastery through self-play and
            inference-time search. Both immensely technical and efficient algorithms, yet still
            beautifully human at their core. I developed an interest in reinforcement learning, machine learning, and game theory. 
           </p><p>  I went on to
            study CS at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Rice</span>
            , where I worked on bioinformatics and founded the competitive Smash
            club Smash shaped how I think about
            problems: identify the outcomes, figure out how actions relate to
            them, and judge decisions on expected value, not just results.
          </p>
          <p>
            After graduating, I attended{" "}
            <span className="text-neutral-900 dark:text-neutral-200">UIUC</span>{" "}
            for an MS focused on ML. My thesis work was on multimodal video
            understanding, fusing vision, language, and audio in a single
            transformer.
          </p>
          <p>
            I came out of school right as LLMs were hitting the bleeding edge
            and started at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Doowii</span>
            , a ten-person education analytics startup where I built a NL→SQL
            system back when context windows were still 1024 tokens. How far we've come!
             Now I'm
            at{" "}
            <span className="text-neutral-900 dark:text-neutral-200">Databricks</span>
            , translating research into enterprise-scale products: work that
            lets me pull from my research background, engineering, and
            analytical instincts all at once.
          </p>
          <p>
            Outside of work, I competed in the{" "}
            <span className="text-neutral-900 dark:text-neutral-200">
              NeurIPS 2025 PokeAgent
            </span>{" "}
            competition, applying actor-critic methods with Monte Carlo tree
            search to competitive Pokémon. A full-circle moment: AlphaZero's
            ideas applied to a game I've been deeply invested in as a
            competitor.
          </p>
          <p>
            Finally, I spend a lot of time with philosophy. As intelligence
            becomes a cheap commodity, the questions that matter are
            increasingly human ones. What does it mean to create when AI can do
            it more efficiently — and in some ways (what ways?) more powerfully? 
            How does AI shape the nature of humanity? 
          </p>
        </div>
      </Section>



      <Section title="reading list">
        <div className="space-y-5 text-sm text-neutral-500 dark:text-neutral-500 italic">
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide not-italic">
              currently
            </span>
            <p className="mt-2">Beyond Good and Evil — Nietzsche</p>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide not-italic">
              recent
            </span>
            <div className="mt-2 space-y-1">
              <p>RLHF — Lambert</p>
              <p>Build a Large Language Model From Scratch — Raschka</p>
              <p>Intro to Reinforcement Learning — Sutton &amp; Barto</p>
              <p>Hands-On Machine Learning — Géron</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="music">
        <div className="space-y-5 text-sm text-neutral-500 dark:text-neutral-500 italic">
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide not-italic">
              current
            </span>
            <p className="mt-2">The Fall Off — J. Cole</p>
          </div>
          <div>
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wide not-italic">
              all-time
            </span>
            <div className="mt-2 space-y-1">
              <p>The Stranger — Billy Joel</p>
              <p>Beauty Behind the Madness — The Weeknd</p>
              <p>The Rise and Fall of a Midwest Princess — Chappell Roan</p>
              <p>Ballads 1 — Joji</p>
              <p>Plus — Ed Sheeran</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="creative work">
        <div className="space-y-1 text-sm text-neutral-500 dark:text-neutral-500 italic">
          <p>Coming soon :)</p>
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
