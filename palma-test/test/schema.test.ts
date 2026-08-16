import { describe, expect, it } from "vitest";
import { applyEpistemicGuardrails, readingQualityIssues } from "../src/index";
import { PALMA_LENSES } from "../src/method";
import {
  normalizePalmaReading,
  parseAnalyzeInput,
  type PalmaReading,
  validatePalmaReading,
} from "../src/schema";

describe("parseAnalyzeInput", () => {
  it("accepts a bounded situation and defaults to English", () => {
    const result = parseAnalyzeInput({ situation: "A".repeat(80) });
    expect(result).toEqual({ ok: true, value: { situation: "A".repeat(80), language: "en" } });
  });

  it("rejects short and oversized submissions", () => {
    expect(parseAnalyzeInput({ situation: "Too short" })).toMatchObject({ ok: false });
    expect(parseAnalyzeInput({ situation: "A".repeat(4001) })).toMatchObject({ ok: false });
  });

  it("does not accept email or unknown fields into the model input", () => {
    const result = parseAnalyzeInput({ situation: "A".repeat(80), email: "person@example.com" });
    expect(result.ok).toBe(true);
    if (result.ok) expect("email" in result.value).toBe(false);
  });
});

describe("validatePalmaReading", () => {
  const valid: PalmaReading = {
    reading_title: "An audience with an open commercial question",
    relationship_type: "audience",
    relationship_type_reason: "Attention is described; reciprocal relationships are not yet evidenced.",
    one_sentence_reading: "The useful next step is to learn which problem this audience already trusts the owner to solve.",
    central_tension: "Several possible offers exist before the relationship has been understood.",
    dimensions: PALMA_LENSES.map((lens) => ({
      id: lens.id,
      question: lens.question,
      signal: "unknown",
      observation: "The submission contains no direct evidence for this lens.",
      evidence: [],
      missing_information: "A concrete example is needed.",
    })),
    follow_up_questions: ["Who returns without being prompted?", "What have people already asked to buy?"],
    decision_to_make: "Choose which relationship to investigate before choosing a product.",
    thirty_day_experiment: {
      name: "Ten decision interviews",
      action: "Interview ten recurring audience members about a recent decision and the help they sought.",
      evidence_to_watch: "Repeated problems, language and signs of willingness to commit time or money.",
    },
    questions_for_the_room: [
      "Who returns without being prompted?",
      "What have people already asked the owner to help them solve?",
      "Which decisions can the people around this practice influence?",
    ],
    limits_of_this_reading: "This reading uses only the submitted description.",
  };

  it("accepts six unique Palma dimensions", () => {
    expect(validatePalmaReading(valid)).toBe(true);
  });

  it("rejects duplicated dimensions", () => {
    const invalid = structuredClone(valid);
    invalid.dimensions[1]!.id = "reciprocity";
    expect(validatePalmaReading(invalid)).toBe(false);
  });

  it("rejects production placeholders in human-facing fields", () => {
    const invalid = structuredClone(valid);
    invalid.dimensions[0]!.missing_information = ">1000 characters";
    expect(validatePalmaReading(invalid)).toBe(false);
  });

  it("restores canonical questions and unknown signals deterministically", () => {
    const modelOutput = {
      ...valid,
      dimensions: valid.dimensions.map((dimension, index) =>
        index === 0 ? { ...dimension, question: "A model paraphrase", signal: "emerging" } : dimension,
      ),
    };
    const normalized = normalizePalmaReading(modelOutput);
    expect(validatePalmaReading(normalized)).toBe(true);
    if (typeof normalized === "object" && normalized !== null && "dimensions" in normalized) {
      const dimensions = normalized.dimensions;
      expect(Array.isArray(dimensions) && dimensions[0]).toMatchObject({
        question: "Does it clap back?",
        signal: "unknown",
      });
    }
  });

  it("removes a second question accidentally merged into one field", () => {
    const modelOutput = {
      ...valid,
      follow_up_questions: [
        "What value already moves in both directions?",
        "Who returns regularly?','What do they ask for?",
      ],
    };
    const normalized = normalizePalmaReading(modelOutput);
    expect(validatePalmaReading(normalized)).toBe(true);
    if (typeof normalized === "object" && normalized !== null && "follow_up_questions" in normalized) {
      expect(normalized.follow_up_questions).toEqual([
        "What value already moves in both directions?",
        "Who returns regularly?",
      ]);
    }
  });

  it("catches community as an unrequested destination", () => {
    const biased = {
      ...valid,
      central_tension: "The audience must evolve into a community before the practice can progress.",
    };
    const input = { situation: "A".repeat(80), language: "en" as const };
    expect(readingQualityIssues(input, biased)).toContain("community_as_default_destination");
  });

  it("catches invented passivity when there is no direct evidence", () => {
    const biased = {
      ...valid,
      dimensions: valid.dimensions.map((dimension, index) =>
        index === 0 ? { ...dimension, observation: "The audience is passive and receives content without responding." } : dimension,
      ),
    };
    const input = { situation: "A".repeat(80), language: "en" as const };
    expect(readingQualityIssues(input, biased)).toContain("absence_of_evidence_treated_as_negative_evidence");
  });

  it("replaces unrequested community framing and unknown observations in code", () => {
    const biased: PalmaReading = {
      ...valid,
      central_tension: "The owner must evolve this audience into a community before selling anything.",
      dimensions: valid.dimensions.map((dimension) => ({
        ...dimension,
        observation: "The passive audience receives content without responding.",
      })),
    };
    const input = { situation: "A".repeat(80), language: "en" as const };
    const guarded = applyEpistemicGuardrails(input, biased);
    expect(guarded.central_tension).not.toContain("community");
    expect(guarded.dimensions[0]?.observation).toContain("no direct evidence");
    expect(readingQualityIssues(input, guarded)).toEqual([]);
  });
});
