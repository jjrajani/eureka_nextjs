export enum Gender {
  FEMALE = "female",
  MALE = "male",
}

export enum Activity {
  NONE = "none",
  LOW = "low",
  MODERATE = "moderate",
  HIGH = "high",
}

export enum Goal {
  WEIGHT_LOSS = "weightLoss",
  WEIGHT_GAIN = "weightGain",
  WEIGHT_SUSTAIN = "weightSustain",
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

export enum Supplement {
  ENERGY = "energy",
  GI = "gi",
  HORMONE = "hormone",
}

export enum RestRx {
  POOR = "poor",
  FAIR = "fair",
  GOOD = "good",
}

export enum ExerciseFITT {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced”",
}

export enum ReastingHeartRate {
  FIFTY = "50",
  FIFTY_FIVE = "55",
  SIXTEY = "60",
  SIXTEY_FIVE = "65",
  SEVENTY = "70",
  SEVENTY_FIVE = "75",
  EIGHTY = "80",
  EIGHTY_FIVE = "85",
  NINETY = "90",
  NINETY_FIVE = "95",
  HUNDRED = "100",
  HUNDRED_FIVE = "105",
  HUNDRED_TEN = "110",
}

export enum StressStage {
  ACUTE = "Acute",
  COMPENSATORY = "Compensatory",
  EXHAUSTION = "Exhaustion",
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

export interface UserFormState {
  email: string;
  first: string;
  last: string;
}

export interface MealMasteryFormState extends UserFormState {
  age: string;
  gender: "null" | Gender;
  weight: string;
  heightFt: string;
  heightIn: string;
  water: string;
  activity: "null" | Activity;
  goal: "null" | Goal;
  dietPreference: "null" | DietPreference;
  supplementType: "null" | Supplement;
}

export interface MetabolicMasteryFormState extends UserFormState {
  age: string;
  gender: "null" | Gender;
  weight: string;
  heightFt: string;
  heightIn: string;
  water: string;
  activity: "null" | Activity;
  goal: "null" | Goal;
  dietPreference: "null" | DietPreference;
  restRx: "null" | RestRx;
  exerciseFitt: "null" | ExerciseFITT;
  rhr: "null" | ReastingHeartRate;
  stress: "null" | StressStage;
}
