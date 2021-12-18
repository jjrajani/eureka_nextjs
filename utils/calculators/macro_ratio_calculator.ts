import { Goal, Macro } from "types/types";

const MacroRatioCalculator = (goal: Goal): Macro => {
  let protein = 0,
    carbs = 0,
    fats = 0;

  if (goal === Goal.WEIGHT_LOSS) {
    protein = 0.3;
    carbs = 0.25;
    fats = 0.45;
  } else if (goal === Goal.IMPROVE_HEALTH) {
    protein = 0.3;
    carbs = 0.4;
    fats = 0.3;
  } else if (goal === Goal.BODY_RECOMP) {
    protein = 0.45;
    carbs = 0.25;
    fats = 0.3;
  }

  return {
    protein,
    carbs,
    fats,
  };
};

export default MacroRatioCalculator;
