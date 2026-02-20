"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero(): React.JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="py-20"
    >
      <p className="font-mono text-sm text-teal-600 dark:text-teal-400 mb-3">
        hey, I&apos;m
      </p>
      <h1 className="font-mono text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
        Daniel
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl leading-relaxed">
        AI Field Development Engineer at{" "}
        <span className="text-neutral-900 dark:text-neutral-200 font-medium">
          Databricks
        </span>
        . I build and ship ML systems — from NL→SQL agents to RL competition
        bots. UIUC MS CS.
      </p>
      <div className="flex items-center gap-6">
        <Link
          href="/work"
          className="font-mono text-sm text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 px-4 py-2 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          view work →
        </Link>
        <Link
          href="/about"
          className="font-mono text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          about me
        </Link>
      </div>
    </motion.section>
  );
}
