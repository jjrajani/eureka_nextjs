import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  Supplement,
  MealMasteryFormState,
} from "types/types";

const tempInitialData: MealMasteryFormState = {
  age: "25",
  weight: "125",
  heightFt: "5",
  heightIn: "5",
  water: "5",
  gender: Gender.FEMALE,
  activity: Activity.LOW,
  goal: Goal.WEIGHT_SUSTAIN,
  dietPreference: DietPreference.MIXED,
  supplementType: Supplement.HORMONE,
};

export default tempInitialData;
