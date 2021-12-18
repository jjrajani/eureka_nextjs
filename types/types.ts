export enum Gender {
  FEMALE = "female",
  MALE = "male",
}

export enum Activity {
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
}

export enum Goal {
  WEIGHT_LOSS = "weightLoss",
  IMPROVE_HEALTH = "improveHealth",
  BODY_RECOMP = "bodyRecomp",
}

export enum DietPreference {
  ANYTHING = "anything",
  ETHNIC_SPECIFIC = "ethnicSpecific",
  GLUTEN_FREE = "glutenFree",
  KETO = "keto",
  LOW_CARB = "lowCarb",
  PESCATARIAN = "pescatarian",
  VEGAN = "vegan",
  VEGETARIAN = "vegetarian",
}

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

export interface MealPlannerFormState {
  age: string;
  gender: "none" | Gender;
  weight: string;
  heightFt: string;
  heightIn: string;
  water: string;
  activity: "none" | Activity;
  goal: "none" | Goal;
  dietPreference: "none" | DietPreference;
}
