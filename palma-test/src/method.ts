export const PALMA_LENSES = [
  {
    id: "reciprocity",
    question: "Does it clap back?",
    meaning: "Look for exchange. What do people receive, contribute, repeat, or return?",
  },
  {
    id: "belonging",
    question: "Who gets to say “we”?",
    meaning: "Look for a boundary people recognise and a reason they identify with one another.",
  },
  {
    id: "agency",
    question: "Can people change what happens?",
    meaning: "Look for influence over decisions, formats, priorities, or outcomes.",
  },
  {
    id: "rhythm",
    question: "What happens again and again?",
    meaning: "Look for recurring practices, rituals, expectations, and moments of return.",
  },
  {
    id: "dissent",
    question: "Can disagreement survive?",
    meaning: "Look for room to disagree without ending the relationship or being pushed out.",
  },
  {
    id: "mutual_value",
    question: "Would both sides miss it?",
    meaning: "Look for dependence and value that run in both directions.",
  },
] as const;

export type LensId = (typeof PALMA_LENSES)[number]["id"];

export const METHOD_VERSION = "palma-test/0.1";

export const METHOD_PRINCIPLES = [
  "Treat the brief as evidence. Find the decision the communication must make possible.",
  "An audience is not automatically a community. Reach, followers, and engagement do not prove belonging or mutual dependence.",
  "Separate what the person stated, what can reasonably be inferred, and what is still unknown.",
  "Never invent facts, motives, audience behaviour, metrics, or commercial outcomes.",
  "Do not score the situation. Describe its shape, tensions, and useful next decision.",
  "Recommend one bounded experiment that can produce evidence within thirty days.",
  "Write like an experienced human adviser: direct, warm, precise, and economical.",
  "Avoid slogans, inflated certainty, generic marketing advice, and the formula ‘not X, but Y’.",
] as const;
