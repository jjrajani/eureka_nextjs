import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  RestRx,
  ExerciseFITT,
  StressStage,
  Supplement,
  MetabolicMasteryFormState,
} from "types/types";

const tempInitialData: MetabolicMasteryFormState = {
  age: "25",
  gender: Gender.FEMALE,
  weight: "125",
  heightFt: "5",
  heightIn: "5",
  water: "5",
  activity: Activity.LOW,
  goal: Goal.WEIGHT_SUSTAIN,
  dietPreference: DietPreference.PROTIEN,
  restRx: RestRx.FAIR,
  exerciseFitt: ExerciseFITT.INTERMEDIATE,
  rhr: "150",
  stress: StressStage.ACUTE,
  supplementType: Supplement.GI,
};

export default tempInitialData;
