import test from "node:test";
import assert from "node:assert/strict";
import { estimateBudget, validateQuoteStep } from "../lib/project-tools.js";

test("estimator applies sample rate and finish multiplier", () => {
  assert.deepEqual(estimateBudget("residential", 100, "premium"), { area: 100, rate: 28000, multiplier: 1.3, base: 2800000, total: 3640000 });
});

test("estimator constrains floor area to documented range", () => {
  assert.equal(estimateBudget("commercial", 5, "standard").area, 20);
  assert.equal(estimateBudget("renovation", 5000, "essential").area, 2000);
});

test("quote validation requires usable contact and project details", () => {
  const valid = { name: "Maria Cruz", contact: "maria@example.com", projectType: "residential", area: "85", description: "A practical three-bedroom family home." };
  assert.equal(validateQuoteStep(0, valid), true);
  assert.equal(validateQuoteStep(1, valid), true);
  assert.equal(validateQuoteStep(2, valid), true);
  assert.equal(validateQuoteStep(2, { ...valid, description: "Too short" }), false);
});
