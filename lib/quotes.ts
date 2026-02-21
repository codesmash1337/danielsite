export interface Quote {
  text: string;
  author?: string;
}

// Edit this file to change the rotating quotes on the home page.
// They display one at a time, typewriter style, rotating every 15 seconds.
export const quotes: Quote[] = [
  {
    text: "The bitter lesson of seventy years of AI research is that general methods which leverage computation ultimately win.",
    author: "Rich Sutton",
  },
  {
    text: "He who has a why to live can bear almost any how.",
    author: "Nietzsche",
  },
  {
    text: "The question is not, can they reason? nor, can they talk? but, can they suffer?",
    author: "Peter Singer",
  },
  {
    text: "Man must be surpassed.",
    author: "Nietzsche",
  },
  {
    text: "You do not rise to the level of your goals. You fall to the level of your systems.",
    author: "James Clear",
  },
];
