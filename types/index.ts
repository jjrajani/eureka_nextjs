export type Gender = "female" | "male";

export type Activity = "low" | "moderate" | "high";

export type Goal = "weightLoss" | "improveHealth" | "bodyRecomp";

export type DietPreference =
  | "anything"
  | "ethnicSpecific"
  | "glutenFree"
  | "keto"
  | "lowCard"
  | "pescatarian"
  | "vegan"
  | "vegetarian";

export interface Macro {
  protein: number;
  carbs: number;
  fats: number;
}

export interface HandServing {
  palms: number;
  grams: number;
}

export interface ServingSizes {
  proteinServing: HandServing;
  carbsServing: HandServing;
  fatServing: HandServing;
  waterServing: number;
}

export interface CalculatorResult {
  bmi: string;
  bmr: string;
  calorieIntake: string;
  macro: Macro;
  handSizes: ServingSizes;
}
