import {
  Gender,
  Activity,
  Goal,
  DietPreference,
  RestRx,
  ExerciseFITT,
  StressStage,
  Supplement,
  MyDressProfileFormState,
} from "types/types";

const tempInitialData: MyDressProfileFormState = {
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
  exerciseFitt: ExerciseFITT.ADVANCED,
  rhr: "150",
  stress: StressStage.ACUTE,
  supplementType: Supplement.GI,
  email: "jjrajani@gmail.com",
  first: "Jenna",
  last: "Rajani",
};

export default tempInitialData;
