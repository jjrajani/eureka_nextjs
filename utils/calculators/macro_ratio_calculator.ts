import { Goal, Macro } from "types";

const MacroRatioCalculator = (goal: Goal): Macro => {
  let protein = 0,
    carbs = 0,
    fats = 0;

  if (goal === "weightLoss") {
    protein = 0.3;
    carbs = 0.25;
    fats = 0.45;
  } else if (goal === "improveHealth") {
    protein = 0.3;
    carbs = 0.4;
    fats = 0.3;
  } else if (goal === "bodyRecomp") {
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
