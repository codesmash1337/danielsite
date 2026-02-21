import Image from "next/image";
import { Hero } from "@/components/Hero";

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
          <Image src={src} alt={alt} fill className="object-cover" />
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

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />

      {/* Two-sentence summary */}
      <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-16">
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

      {/* Presented works */}
      <div>
        <h2 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-6">
          presented works
        </h2>
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
      </div>
    </>
  );
}
