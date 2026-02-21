import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "pokeagent",
    title: "RL-based PokeAgent",
    company: "NeurIPS 2025 Competition",
    year: "Jul – Nov 2025",
    sortYear: 2025,
    category: "creative",
    link: "https://github.com/codesmash1337/pokeagent_ac_mcts",
    bullets: [
      "Placed 3rd in PokeAgent, a NeurIPS 2025 competition.",
      "Trained a 200M-parameter actor–critic via behavior cloning on 950k reconstructed replays, then offline RL on diverse self-play trajectories.",
      "Integrated AlphaZero-style MCTS; optimized game engine and state construction in Rust (batched inference, virtual loss) for low-latency search.",
      "Designed team selection using k-dueling bandits (iterative halving) with Bradley–Terry scores; contextual bandits (UCB w/ BT priors) for on-the-fly team ranking at tournament time.",
    ],
  },
  {
    id: "doowii-nlsql",
    title: "NL→SQL AI Agent",
    company: "Doowii",
    role: "Machine Learning Engineer",
    year: "Aug 2023 – present",
    sortYear: 2023,
    category: "production",
    bullets: [
      "Engineered a production FastAPI system serving 50,000+ requests annually with 99.6% uptime; optimized end-to-end latency to 14.8s (p95).",
      "Architected multi-model RAG pipeline in LangGraph with multi-node workflow orchestration, failover mechanisms, and strict latency guarantees.",
      "Improved first-pass query accuracy from 62% to 78% on 600+ prod queries using hybrid retrieval (sparse + dense + re-rank; Pinecone) and schema-aware NER/entity linking.",
      "Cut token costs by 31% and reduced p50 latency (10.3s → 8.0s) via Redis caching and an intent classifier routing simple queries to smaller models.",
    ],
  },
  {
    id: "doowii-churn",
    title: "Multi-Tenant Dropout Risk",
    company: "Doowii",
    role: "Machine Learning Engineer",
    year: "Aug 2023 – present",
    sortYear: 2023,
    category: "production",
    bullets: [
      "Scaled student churn prediction to 300+ universities via an automated model factory — validates data sufficiency, merges schemas, trains and deploys per-org XGBoost models via Vertex AI.",
      "Designed a cold/hot feature store on BigQuery with point-in-time joins across heterogeneous tenant schemas; scored 3M+ records/day.",
      "Enforced promotion gates (Precision > 0.6, F1 > 0.4); shipped isotonic-calibrated probabilities with SHAP-based feature importance for educator-facing interpretability.",
      "Built multi-tenant monitoring (JSD drift + null-rate checks) with zero-touch onboarding for new tenants in <24h.",
    ],
  },
  {
    id: "blenderlab",
    title: "VideoSemble",
    company: "UIUC Blender Lab",
    role: "Graduate Research Assistant",
    year: "Aug 2022 – Aug 2023",
    sortYear: 2022,
    category: "research",
    link: "https://www.ideals.illinois.edu/items/128442",
    bullets: [
      "Architected VideoSemble, a decoder-only transformer fusing frozen CLIP, T5, and Wav2Vec2 embeddings via concatenation and learned temporal modeling, optimized with a contrastive alignment objective.",
      "Built a distributed pipeline processing 1.8M YouTube videos (32B tokens) using Ray and DeepLake; Hamming distance filtering for frame deduplication and Whisper for audio-text alignment.",
      "Achieved 60.23% accuracy on the TVQA benchmark; ablations showed +3.5% lift specifically from audio modality integration.",
    ],
  },
];
