import { Gender, Activity, Goal, DietPreference } from "types";

export interface FormState {
  age: number;
  gender: "none" | Gender;
  weight: number;
  heightFt: number;
  heightIn: number;
  water: number;
  activity: "none" | Activity;
  goal: "none" | Goal;
  dietPreference: "none" | DietPreference;
}
