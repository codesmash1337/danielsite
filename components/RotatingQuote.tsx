"use client";

import { useEffect, useState } from "react";
import { quotes } from "@/lib/quotes";

const TYPING_SPEED_MS = 30;
const HOLD_MS = 15000;

export function RotatingQuote(): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding">("typing");

  useEffect(() => {
    const current = quotes[index].text;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED_MS);
        return () => clearTimeout(t);
      }
      // Finished typing — start hold
      setPhase("holding");
      return;
    }

    // Holding — wait then advance
    const t = setTimeout(() => {
      setDisplayed("");
      setIndex((i) => (i + 1) % quotes.length);
      setPhase("typing");
    }, HOLD_MS);
    return () => clearTimeout(t);
  }, [displayed, index, phase]);

  const quote = quotes[index];

  return (
    <div className="mt-12 pt-10 border-t border-neutral-200 dark:border-neutral-800">
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed min-h-[3rem]">
        &ldquo;{displayed}
        <span
          style={{ animation: "cursor-blink 1s step-end infinite" }}
          className="inline-block w-px h-[1em] bg-current align-middle ml-0.5 translate-y-[-1px]"
        />
        &rdquo;
      </p>
      {phase === "holding" && quote.author && (
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-500 mt-2">
          — {quote.author}
        </p>
      )}
    </div>
  );
}
