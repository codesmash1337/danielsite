import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { RotatingQuote } from "@/components/RotatingQuote";

interface WorkImageProps {
  src?: string;
  alt: string;
  label: string;
  sublabel?: string;
  href?: string;
}

function WorkImage({ src, alt, label, sublabel, href }: WorkImageProps): React.JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden block group"
      >
        {src ? (
          <Image src={src} alt={alt} fill className="object-cover transition-opacity group-hover:opacity-80" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
              image
            </span>
          </div>
        )}
      </a>
      <p className="font-mono text-xs text-neutral-900 dark:text-neutral-100">{label}</p>
      {sublabel && (
        <p className="text-xs text-neutral-500 dark:text-neutral-400">{sublabel}</p>
      )}
    </div>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />

      {/* Two-sentence summary */}
      <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-16">
        <p>
          Rice BS → UIUC MS CS → ML Engineer at{" "}
          <span className="text-neutral-900 dark:text-neutral-200">Doowii</span>{" "}
          → AI Engineer at{" "}
          <span className="text-neutral-900 dark:text-neutral-200">Databricks</span>.
        </p>
        <p>
        I'm an AI engineer at Databricks who builds intelligent systems and studies the underlying theory. 
        My work spans production ML, RAG/LLM systems, and RL. My philosophy is to nail the scope, execute quickly,
        and add complexity as needed: rapid iteration and high-level understanding are key as AI tools become increasingly powerful. 
          
        </p>
      </div>

      {/* Nav buttons */}
      <div className="flex items-center gap-4 mb-16">
        <Link
          href="/work"
          className="font-mono text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="font-mono text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          About Me
        </Link>
      </div>

      {/* Presented works */}
      <div>
        <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">
          selected works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
          <WorkImage
            src="/pokeagent.png"
            alt="PokeAgent — NeurIPS 2025"
            label="PokeAgent"
            sublabel="NeurIPS 2025 · 3rd place"
            href="https://github.com/codesmash1337/pokeagent_ac_mcts"
          />
          <WorkImage
            src="/videosemble.png"
            alt="VideoSemble — UIUC Blender Lab"
            label="VideoSemble"
            sublabel="UIUC Blender Lab · M.S. thesis"
            href="https://www.ideals.illinois.edu/items/128442"
          />
        </div>

        <RotatingQuote />
      </div>
    </>
  );
}
