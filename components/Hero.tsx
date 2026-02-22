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
      <h1 className="font-mono text-4xl font-bold tracking-tight text-[#E2725B] dark:text-[#E2725B] mb-4">
        <span style={{ color: "#c07a5a" }}>Daniel</span>
      </h1>
      <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        AI Engineer · Databricks
      </p>
    </motion.section>
  );
}
