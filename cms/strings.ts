import {
  Activity,
  DietPreference,
  ExerciseFITT,
  Gender,
  Goal,
  RestRx,
  StressStage,
  Supplement,
} from "types/types";

export const genderText = {
  [Gender.FEMALE]: "Female",
  [Gender.MALE]: "Male",
};

export const activityLevelText = {
  [Activity.LOW]: "Low",
  [Activity.MODERATE]: "Moderate",
  [Activity.HIGH]: "High",
  [Activity.NONE]: "None",
};

export const goalText = {
  [Goal.BODY_RECOMP]: "Body Recomposition",
  [Goal.IMPROVE_HEALTH]: "Improve Health",
  [Goal.WEIGHT_LOSS]: "Weight Loss",
  [Goal.WEIGHT_SUSTAIN]: "Weight Sustain",
  [Goal.WEIGHT_GAIN]: "Weight Gain",
};

export const dietPrefText = {
  [DietPreference.PROTIEN]: "Protien",
  [DietPreference.CARB]: "Carb",
  [DietPreference.MIXED]: "Mixed",
};

export const fittText = {
  [ExerciseFITT.BEGINNER]: "Beginner",
  [ExerciseFITT.INTERMEDIATE]: "Intermediate",
  [ExerciseFITT.ADVANCED]: "Advanced",
};

export const restRxText = {
  [RestRx.POOR]: "Poor",
  [RestRx.FAIR]: "Fair",
  [RestRx.GOOD]: "Good",
};

export const stressStageText = {
  [StressStage.ACUTE]: "Acute",
  [StressStage.COMPENSATORY]: "Compensatory",
  [StressStage.EXHAUSTION]: "Exhaustion",
};

export const supplementText = {
  [Supplement.ENERGY]: "Energy",
  [Supplement.GI]: "GI",
  [Supplement.HORMONE]: "Hormone",
};
