import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  RestRx,
  ExerciseFITT,
  StressStage,
} from "types/types";

const tempInitialData = {
  age: "25",
  gender: Gender.FEMALE,
  weight: "125",
  heightFt: "5",
  heightIn: "5",
  water: "5",
  activity: Activity.LOW,
  goal: Goal.WEIGHT_SUSTAIN,
  dietPreference: DietPreference.KETO,
  restRx: RestRx.FAIR,
  exerciseFitt: ExerciseFITT.INTERMEDIATE,
  rhr: "150",
  stress: StressStage.ACUTE,
};

export default tempInitialData;
