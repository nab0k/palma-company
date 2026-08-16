import { PALMA_LENSES, type LensId } from "./method";

export const RELATIONSHIP_TYPES = [
  "audience",
  "customer_base",
  "network",
  "membership",
  "community",
  "unclear",
] as const;

export const SIGNALS = ["strong", "emerging", "thin", "unknown"] as const;
export const LANGUAGES = ["en", "ru", "uk"] as const;

export type RelationshipType = (typeof RELATIONSHIP_TYPES)[number];
export type Signal = (typeof SIGNALS)[number];
export type Language = (typeof LANGUAGES)[number];

export interface AnalyzeInput {
  situation: string;
  organization?: string;
  role?: string;
  website?: string;
  desired_change?: string;
  language: Language;
}

export interface DimensionReading {
  id: LensId;
  question: string;
  signal: Signal;
  observation: string;
  evidence: string[];
  missing_information: string;
}

export interface PalmaReading {
  reading_title: string;
  relationship_type: RelationshipType;
  relationship_type_reason: string;
  one_sentence_reading: string;
  central_tension: string;
  dimensions: DimensionReading[];
  follow_up_questions: [string, string];
  decision_to_make: string;
  thirty_day_experiment: {
    name: string;
    action: string;
    evidence_to_watch: string;
  };
  questions_for_the_room: [string, string, string];
  limits_of_this_reading: string;
}

export const PALMA_READING_JSON_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: [
    "reading_title",
    "relationship_type",
    "relationship_type_reason",
    "one_sentence_reading",
    "central_tension",
    "dimensions",
    "follow_up_questions",
    "decision_to_make",
    "thirty_day_experiment",
    "questions_for_the_room",
    "limits_of_this_reading",
  ],
  properties: {
    reading_title: { type: "string", minLength: 12 },
    relationship_type: {
      type: "string",
      enum: RELATIONSHIP_TYPES,
      description: "The relationship form supported by current evidence, never a desired future maturity level.",
    },
    relationship_type_reason: {
      type: "string",
      minLength: 20,
      description: "Why the submitted facts support this relationship type without placing types on a hierarchy.",
    },
    one_sentence_reading: { type: "string", minLength: 20 },
    central_tension: { type: "string", minLength: 20 },
    dimensions: {
      type: "array",
      minItems: 6,
      maxItems: 6,
      items: {
        type: "object",
        additionalProperties: false,
        required: ["id", "question", "signal", "observation", "evidence", "missing_information"],
        properties: {
          id: { type: "string", enum: PALMA_LENSES.map((lens) => lens.id) },
          question: { type: "string", minLength: 12 },
          signal: {
            type: "string",
            enum: SIGNALS,
            description: "Use unknown when direct evidence is absent. Thin requires an observed failure or one-sided behaviour.",
          },
          observation: {
            type: "string",
            minLength: 20,
            description: "A cautious interpretation of supplied facts. Never convert missing information into evidence of absence.",
          },
          evidence: {
            type: "array",
            items: { type: "string", minLength: 5 },
            maxItems: 4,
            description: "Only supplied facts that support the signal. Statements that evidence was not provided belong in missing_information, not here.",
          },
          missing_information: { type: "string", minLength: 12 },
        },
      },
    },
    follow_up_questions: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: { type: "string", minLength: 20 },
    },
    decision_to_make: {
      type: "string",
      minLength: 20,
      description: "The owner's next strategic decision in relation to the desired change, not a generic decision to build a community.",
    },
    thirty_day_experiment: {
      type: "object",
      additionalProperties: false,
      required: ["name", "action", "evidence_to_watch"],
      properties: {
        name: { type: "string", minLength: 12 },
        action: { type: "string", minLength: 30 },
        evidence_to_watch: { type: "string", minLength: 20 },
      },
    },
    questions_for_the_room: {
      type: "array",
      minItems: 3,
      maxItems: 3,
      items: { type: "string", minLength: 20 },
    },
    limits_of_this_reading: { type: "string", minLength: 20 },
  },
} as const;

type ParseResult = { ok: true; value: AnalyzeInput } | { ok: false; error: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const optionalString = (
  record: Record<string, unknown>,
  key: string,
  maxLength: number,
): { ok: true; value?: string } | { ok: false; error: string } => {
  const value = record[key];
  if (value === undefined || value === null || value === "") return { ok: true };
  if (typeof value !== "string") return { ok: false, error: `${key} must be a string` };
  const trimmed = value.trim();
  if (trimmed.length > maxLength) return { ok: false, error: `${key} is too long` };
  return { ok: true, value: trimmed };
};

export function parseAnalyzeInput(value: unknown): ParseResult {
  if (!isRecord(value)) return { ok: false, error: "Request body must be a JSON object" };

  const situation = value.situation;
  if (typeof situation !== "string") return { ok: false, error: "situation is required" };
  const trimmedSituation = situation.trim();
  if (trimmedSituation.length < 80) return { ok: false, error: "situation must contain at least 80 characters" };
  if (trimmedSituation.length > 4000) return { ok: false, error: "situation must contain at most 4000 characters" };

  const organization = optionalString(value, "organization", 160);
  const role = optionalString(value, "role", 160);
  const website = optionalString(value, "website", 500);
  const desiredChange = optionalString(value, "desired_change", 1000);
  if (!organization.ok) return organization;
  if (!role.ok) return role;
  if (!website.ok) return website;
  if (!desiredChange.ok) return desiredChange;

  const rawLanguage = value.language ?? "en";
  if (typeof rawLanguage !== "string" || !LANGUAGES.includes(rawLanguage as Language)) {
    return { ok: false, error: "language must be one of: en, ru, uk" };
  }

  return {
    ok: true,
    value: {
      situation: trimmedSituation,
      ...(organization.value === undefined ? {} : { organization: organization.value }),
      ...(role.value === undefined ? {} : { role: role.value }),
      ...(website.value === undefined ? {} : { website: website.value }),
      ...(desiredChange.value === undefined ? {} : { desired_change: desiredChange.value }),
      language: rawLanguage as Language,
    },
  };
}

const isStringArray = (value: unknown, length?: number): value is string[] =>
  Array.isArray(value) && (length === undefined || value.length === length) && value.every((item) => typeof item === "string");

const PLACEHOLDER_TEXT = /^(?:[<>]?\s*\d+\s*(?:characters?|words?)|n\/?a|none|not provided|placeholder)$/i;

const isSubstantiveString = (value: unknown, minLength = 12): value is string =>
  typeof value === "string" && value.trim().length >= minLength && !PLACEHOLDER_TEXT.test(value.trim());

const isSubstantiveStringArray = (value: unknown, length: number, minLength = 20): value is string[] =>
  isStringArray(value, length) && value.every((item) => item.trim().length >= minLength);

export function normalizePalmaReading(value: unknown): unknown {
  if (!isRecord(value) || !Array.isArray(value.dimensions)) return value;

  const normalizeQuestion = (question: unknown): unknown => {
    if (typeof question !== "string") return question;
    const compact = question.replace(/\s+/g, " ").trim();
    const firstQuestionMark = compact.indexOf("?");
    return firstQuestionMark === -1 ? compact : compact.slice(0, firstQuestionMark + 1);
  };

  const dimensions = value.dimensions.map((dimension) => {
    if (!isRecord(dimension) || typeof dimension.id !== "string") return dimension;
    const lens = PALMA_LENSES.find((candidate) => candidate.id === dimension.id);
    if (!lens) return dimension;
    const hasNoEvidence = Array.isArray(dimension.evidence) && dimension.evidence.length === 0;
    return {
      ...dimension,
      question: lens.question,
      ...(hasNoEvidence ? { signal: "unknown" } : {}),
    };
  });

  return {
    ...value,
    dimensions,
    ...(Array.isArray(value.follow_up_questions)
      ? { follow_up_questions: value.follow_up_questions.map(normalizeQuestion) }
      : {}),
    ...(Array.isArray(value.questions_for_the_room)
      ? { questions_for_the_room: value.questions_for_the_room.map(normalizeQuestion) }
      : {}),
  };
}

export function validatePalmaReading(value: unknown): value is PalmaReading {
  if (!isRecord(value)) return false;
  const dimensions = value.dimensions;
  if (!Array.isArray(dimensions) || dimensions.length !== PALMA_LENSES.length) return false;

  const seen = new Set<string>();
  for (const dimension of dimensions) {
    if (!isRecord(dimension)) return false;
    if (typeof dimension.id !== "string") return false;
    const lens = PALMA_LENSES.find((candidate) => candidate.id === dimension.id);
    if (!lens) return false;
    if (seen.has(dimension.id)) return false;
    seen.add(dimension.id);
    if (dimension.question !== lens.question || !isSubstantiveString(dimension.observation, 20)) return false;
    if (!isSubstantiveString(dimension.missing_information) || !isStringArray(dimension.evidence)) return false;
    if (typeof dimension.signal !== "string" || !SIGNALS.includes(dimension.signal as Signal)) return false;
    if (dimension.evidence.length === 0 && dimension.signal !== "unknown") return false;
  }

  const experiment = value.thirty_day_experiment;
  if (!isRecord(experiment)) return false;
  if (
    !isSubstantiveString(experiment.name) ||
    !isSubstantiveString(experiment.action, 30) ||
    !isSubstantiveString(experiment.evidence_to_watch, 20)
  ) return false;

  return (
    isSubstantiveString(value.reading_title) &&
    typeof value.relationship_type === "string" &&
    RELATIONSHIP_TYPES.includes(value.relationship_type as RelationshipType) &&
    isSubstantiveString(value.relationship_type_reason, 20) &&
    isSubstantiveString(value.one_sentence_reading, 20) &&
    isSubstantiveString(value.central_tension, 20) &&
    isSubstantiveStringArray(value.follow_up_questions, 2) &&
    isSubstantiveString(value.decision_to_make, 20) &&
    isSubstantiveStringArray(value.questions_for_the_room, 3) &&
    isSubstantiveString(value.limits_of_this_reading, 20)
  );
}
