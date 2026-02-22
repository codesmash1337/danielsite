"use client";

import { motion } from "framer-motion";

export function Hero(): React.JSX.Element {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="pb-4"
    >
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-3">
        Hi, I&apos;m
      </p>
      <h1 className="font-mono text-4xl font-bold tracking-tight text-teal-600 dark:text-[#c07a5a] mb-4">
        Daniel
      </h1>
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        AI Engineer · Databricks
      </p>
    </motion.section>
  );
}
