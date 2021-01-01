import { Macro, HandServing, ServingSizes, CalorieIntake } from "types/types";
// (Portion Amounts: 4 calories per gram of protein and carb. /  9 calories per gram of fat)
// Grams per day = serving sizes (would like to include both the gram numbers and portion equivalents)
//
//               Protein serving size: (1 oz = 28.35 grams or 3-5 oz.) = 1 palm
//               Carb serving size: (15 net carbs or 20-25 grams) =  1 cupped handful
//               Fat serving size: (1TBS or 12.78 grams) = 1 thumb
//               Water: (8 oz = 1 glass) = ½ body weight in oz. per day with max at 100 oz.
//
// -----------------
//
// Calorie intake is calculated, say 1500.
// The macro ratios are selected as body-recomp: 45/25/30.
// For protein I would take 45% of 1500: 675 (percent of macro intake ratio)
// Then divide that by 4: 168.75 (calories per gram of protein)
// Then divide that by 28.35: 5.9523... (grams per palm size)
// Then show 6 palm servings of protein required.

const ProteinServingSizeCalculator = (
  calorieIntake: CalorieIntake,
  proteinPercent: number
): HandServing => {
  let proteinCalories = calorieIntake.median * proteinPercent;
  let caloriesPerGram = proteinCalories / 4;
  let palmCount = caloriesPerGram / 28.35;

  return { palms: Math.round(palmCount), grams: Math.round(caloriesPerGram) };
};

const CarbServingsSizeCalculator = (
  calorieIntake: CalorieIntake,
  carbsPercent: number
): HandServing => {
  let carbCalories = calorieIntake.median * carbsPercent;
  let caloriesPerGram = carbCalories / 4;
  let palmCount = caloriesPerGram / 22.5;

  return { palms: Math.round(palmCount), grams: Math.round(caloriesPerGram) };
};

const FatServingsSizeCalculator = (
  calorieIntake: CalorieIntake,
  fatsPercent: number
): HandServing => {
  let fatCalories = calorieIntake.median * fatsPercent;
  let caloriesPerGram = fatCalories / 9;
  let palmCount = caloriesPerGram / 12.78;

  return { palms: Math.round(palmCount), grams: Math.round(caloriesPerGram) };
};

const WaterServingCalculator = (weight: number): number => {
  let waterIntake = weight / 2;

  if (waterIntake > 100) {
    waterIntake = 100;
  }
  let glassesPerDay = Math.round(waterIntake / 8);

  if (glassesPerDay > 12) {
    return 12;
  } else {
    return glassesPerDay;
  }
};

interface HandServingSizeCalculatorArgs {
  calorieIntake: CalorieIntake;
  macro: Macro;
  weight: number;
}

const HandServingSizeCalculator = ({
  calorieIntake,
  macro,
  weight,
}: HandServingSizeCalculatorArgs): ServingSizes => {
  const { protein, carbs, fats } = macro;

  let proteinServing = ProteinServingSizeCalculator(calorieIntake, protein),
    carbsServing = CarbServingsSizeCalculator(calorieIntake, carbs),
    fatServing = FatServingsSizeCalculator(calorieIntake, fats),
    waterServing = WaterServingCalculator(weight);

  return {
    proteinServing,
    carbsServing,
    fatServing,
    waterServing,
  };
};

export default HandServingSizeCalculator;
