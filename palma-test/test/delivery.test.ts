import { describe, expect, it } from "vitest";
import { parseDeliverReadingInput } from "../src/delivery";

describe("parseDeliverReadingInput", () => {
  const requestId = "123e4567-e89b-12d3-a456-426614174000";

  it("normalizes a bounded email address", () => {
    expect(parseDeliverReadingInput({ request_id: requestId, email: "  Owner@Example.com " })).toEqual({
      ok: true,
      value: { request_id: requestId, email: "owner@example.com" },
    });
  });

  it("rejects invalid identifiers and addresses", () => {
    expect(parseDeliverReadingInput({ request_id: "guessable", email: "owner@example.com" })).toMatchObject({ ok: false });
    expect(parseDeliverReadingInput({ request_id: requestId, email: "not-an-address" })).toMatchObject({ ok: false });
  });

  it("bounds the optional verification token", () => {
    expect(parseDeliverReadingInput({
      request_id: requestId,
      email: "owner@example.com",
      turnstile_token: "x".repeat(2049),
    })).toMatchObject({ ok: false });
  });
});
