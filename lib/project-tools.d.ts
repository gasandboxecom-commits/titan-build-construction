export type ProjectType = "residential" | "commercial" | "renovation";
export type FinishLevel = "essential" | "standard" | "premium";
export const SAMPLE_RATES: Record<ProjectType, number>;
export const FINISH_MULTIPLIERS: Record<FinishLevel, number>;
export function estimateBudget(projectType: ProjectType, area: number, finishLevel: FinishLevel): { area: number; rate: number; multiplier: number; base: number; total: number };
export function validateQuoteStep(step: number, data: { name: string; contact: string; projectType: string; area: string; description: string }): boolean;
