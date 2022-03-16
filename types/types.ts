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
  PROTIEN = "PROTIEN",
  CARB = "CARB",
  MIXED = "MIXED",
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

export enum StressStage {
  ACUTE = "Acute",
  COMPENSATORY = "Compensatory",
  EXHAUSTION = "Exhaustion",
}

export interface Range {
  low: number;
  high: number;
}

export interface CalorieIntake extends Range {
  median: number;
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

export interface CalorieHandServing {
  palms: CalorieIntake;
  grams: CalorieIntake;
}

export interface ServingSizes {
  proteinServing: HandServing;
  carbsServing: CalorieHandServing;
  fatServing: HandServing;
  waterServing: number;
}

export interface MealMasteryCalculatorResult {
  bmi: string;
  bmr: string;
  calorieIntake: CalorieIntake;
  macro: Macro;
  handSizes: ServingSizes;
}

export interface PercentDuration {
  duration: number;
  percent: number;
}

export interface ExerciseFITTCalcRes {
  strength: PercentDuration; // time to spend on strength exercise
  duration: number;
  endurance: PercentDuration; // time to spend on endurance exercise
  flexibility: PercentDuration; // time to spend on flexibility exercise
  frequency: string;
  intensity: string;
  time: string;
  type: string;
}

export interface MyDressProfileCalculatorResult {
  bmi: string;
  bmr: string;
  calorieIntake: CalorieIntake;
  exerciseFitt: ExerciseFITTCalcRes;
  macro: Macro;
  handSizes: ServingSizes;
  targetHeartRate: number;
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

export interface MyDressProfileFormState extends UserFormState {
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
  rhr: string;
  stress: "null" | StressStage;
  supplementType: "null" | Supplement;
}
