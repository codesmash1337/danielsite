export type Tag = "ML" | "NLP" | "RL" | "Production Systems" | "Research";
export type Category = "production" | "research" | "creative";

export interface Project {
  id: string;
  title: string;
  company: string;
  role?: string;
  description?: string;
  bullets: string[];
  tags?: string[];
  link?: string;
  year: string;
  sortYear: number;
  category: Category;
}
