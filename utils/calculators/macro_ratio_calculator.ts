import { DietPreference, Macro } from 'types/types';

const MacroRatioCalculator = (dietType: DietPreference): Macro => {
  let protein = 0,
    carbs = 0,
    fats = 0;

  if (dietType === DietPreference.CARB) {
    // Carb Type: P- 25   C - 60   F - 15
    protein = 0.25;
    carbs = 0.6;
    fats = 0.15;
  }
  if (dietType === DietPreference.MIXED) {
    // Mixed Type: P - 30  C - 50  F - 20
    protein = 0.3;
    carbs = 0.5;
    fats = 0.2;
  }
  if (dietType === DietPreference.PROTIEN) {
    // Protein Type: P - 30  C - 40  F - 30
    protein = 0.3;
    carbs = 0.4;
    fats = 0.3;
  }

  return {
    protein,
    carbs,
    fats,
  };
};

export default MacroRatioCalculator;
