import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "databricks",
    title: "AI Field Development Engineer",
    company: "Databricks",
    description:
      "Building and demoing ML/AI solutions with enterprise clients. Translating cutting-edge research into production-ready demos across LLMs, RAG, and agent frameworks.",
    tags: ["ML", "Production Systems"],
    year: "2024–present",
  },
  {
    id: "doowii",
    title: "ML Engineer",
    company: "Doowii",
    description:
      "Built NL→SQL agents handling 50k+ requests, RAG pipelines, and churn prediction (XGBoost). Maintained 99.6% uptime on a production system.",
    tags: ["ML", "NLP", "Production Systems"],
    year: "2023–2024",
  },
  {
    id: "pokeagent",
    title: "NeurIPS 2025 PokeAgent — 3rd Place",
    company: "NeurIPS Competition",
    description:
      "Designed and trained an actor-critic agent with MCTS for competitive Pokémon. Placed 3rd internationally.",
    tags: ["RL", "Research"],
    year: "2025",
  },
  {
    id: "blenderlab",
    title: "Research Engineer",
    company: "UIUC Blender Lab",
    description:
      "Contributed to VideoSemble, a multimodal video understanding and generation research project at UIUC.",
    tags: ["ML", "Research"],
    year: "2023",
  },
  {
    id: "canvas-analytics",
    title: "Canvas LMS Predictive Analytics",
    company: "Instructure",
    description:
      "Cross-client ML pipeline for student dropout prediction across 300+ organizations. Built the data pipeline and XGBoost classifier from scratch.",
    tags: ["ML", "Production Systems", "Research"],
    year: "2022",
  },
];
