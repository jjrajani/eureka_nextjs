import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  Supplement,
} from "types/types";

const tempInitialData = {
  age: "25",
  weight: "125",
  heightFt: "5",
  heightIn: "5",
  water: "5",
  gender: Gender.FEMALE,
  activity: Activity.LOW,
  goal: Goal.WEIGHT_SUSTAIN,
  dietPreference: DietPreference.KETO,
  supplementType: Supplement.GI,
};

export default tempInitialData;
