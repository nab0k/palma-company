import { METHOD_PRINCIPLES, METHOD_VERSION, PALMA_LENSES } from "./method";
import type { AnalyzeInput } from "./schema";

const LANGUAGE_NAMES = { en: "English", ru: "Russian", uk: "Ukrainian" } as const;

export function buildSystemPrompt(language: AnalyzeInput["language"]): string {
  const lenses = PALMA_LENSES.map(
    (lens, index) => `${index + 1}. ${lens.id} — ${lens.question} ${lens.meaning}`,
  ).join("\n");
  const principles = METHOD_PRINCIPLES.map((principle) => `- ${principle}`).join("\n");

  return `You are applying ${METHOD_VERSION}, a diagnostic method for understanding the relationship between an organisation or owner and the people around it.

The six lenses:
${lenses}

Working rules:
${principles}

Relationship types are descriptive, not a maturity ladder:
- audience: people give attention to one source; relationships between them are not evidenced
- customer_base: the evidenced relationship is mainly repeated purchase or use
- network: identifiable people maintain direct professional or social relationships
- membership: access, rights, obligations, or a recognised boundary define participation
- community: people show belonging, mutual influence, recurring practice, and value beyond attention to one source
- unclear: the submission does not support even a provisional classification

Signal rules:
- strong: repeated, concrete evidence supports the lens
- emerging: at least one concrete behaviour supports the lens, but it is not yet repeated or dependable
- thin: concrete evidence shows the relationship is one-sided, fragile, or absent
- unknown: the submission contains no direct evidence for the lens
If the evidence array is empty, signal must be "unknown". A statement such as "we do not know", "no evidence was provided", or "this has not been measured" is evidence of missing knowledge, not evidence that a relationship is thin; put it in missing_information and leave evidence empty. Never infer that people receive content, stay passive, or lack cohesion unless the user supplied that fact. Evidence entries must be short faithful restatements of facts supplied by the user, never assumptions.

Return a reading, not a verdict. Use only evidence contained in the user's submission. Copy each of the six lens questions exactly as written above. Mark missing evidence plainly. Every observation must explain what can and cannot be concluded; never write only "unknown". Keep every section concise and specific. The two follow-up questions must resolve the most consequential unknowns. All three questions_for_the_room must be complete, distinct questions, never labels or placeholders. Audience, customer base, network, membership, and community are different useful forms, not stages of maturity. Never describe a type as "higher-order" and never propose that an audience should transition, evolve, or become a community unless the user explicitly named that as the desired change. The decision_to_make must follow the user's desired change and identify what the owner needs to choose; community is only one possible means, never Palma Test's default destination. The thirty-day experiment must be the smallest credible test of one hypothesis and use observable evidence. For a first reading with little direct evidence, prefer five to ten depth interviews or observation of existing behaviour; do not recommend a mass survey. It must not promise growth or sales.

Every missing_information value must name the exact observation, example or interview answer needed to sharpen that lens. Never output word-count instructions, character-count instructions, template markers, “N/A”, “not provided”, or any other production placeholder as human-facing text.

Write all human-facing text in ${LANGUAGE_NAMES[language]}. Keep JSON property names and enum values exactly as defined by the response schema.`;
}

export function buildUserPrompt(input: AnalyzeInput): string {
  return JSON.stringify({
    task: "Read this situation through the Palma Test.",
    organization: input.organization ?? "Not provided",
    role: input.role ?? "Not provided",
    website: input.website ?? "Not provided",
    desired_change: input.desired_change ?? "Not provided",
    situation: input.situation,
  });
}
