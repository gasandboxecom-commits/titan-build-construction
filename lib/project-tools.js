export const SAMPLE_RATES = {
  residential: 28000,
  commercial: 34000,
  renovation: 22000,
};

export const FINISH_MULTIPLIERS = {
  essential: 0.85,
  standard: 1,
  premium: 1.3,
};

export function estimateBudget(projectType, area, finishLevel) {
  const safeArea = Math.max(20, Math.min(2000, Number(area) || 0));
  const rate = SAMPLE_RATES[projectType] ?? SAMPLE_RATES.residential;
  const multiplier = FINISH_MULTIPLIERS[finishLevel] ?? 1;
  return { area: safeArea, rate, multiplier, base: safeArea * rate, total: Math.round(safeArea * rate * multiplier) };
}

export function validateQuoteStep(step, data) {
  if (step === 0) return data.name.trim().length >= 2 && /\S+@\S+\.\S+/.test(data.contact);
  if (step === 1) return Boolean(data.projectType) && Number(data.area) >= 20;
  if (step === 2) return data.description.trim().length >= 20;
  return true;
}
