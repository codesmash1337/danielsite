export type Tag = "ML" | "NLP" | "RL" | "Production Systems" | "Research";

export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  tags: Tag[];
  link?: string;
  year: string;
}
