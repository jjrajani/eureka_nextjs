import { red } from "utils/modifyAndOpenPDF/colors";
import {
  MealMasteryCalculatorResult,
  MetabolicMasteryCalculatorResult,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";

const color = red,
  y = 59,
  macroY = 30.5;

const baseText = {
  color,
  y,
  size: 13,
};

const carbServingSize = (
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult
): Text => {
  const text = `${results.handSizes.carbsServing.palms.low}-${results.handSizes.carbsServing.palms.high}`;
  let x = 381;
  if (text.length === 4) {
    x = 377;
  }
  if (text.length === 5) {
    x = 373;
  }
  return {
    ...baseText,
    x,
    text: `${text} servings`,
  };
};

const carbGramSize = (
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult
): Text => {
  const text = `${results.handSizes.carbsServing.grams.low}-${results.handSizes.carbsServing.grams.high}`;
  let x = 469;
  if (text.length === 8) {
    x = 466;
  }
  if (text.length === 9) {
    x = 463;
  }
  return {
    // Carbs - grams
    ...baseText,
    x,
    text: `${text}g`,
  };
};

const texts = (
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult
): Text[] => [
  {
    // Proteins - serving size
    ...baseText,
    x: `${results.handSizes.proteinServing.palms}`.length === 1 ? 38 : 34,
    text: `${results.handSizes.proteinServing.palms} servings`,
  },
  {
    // Proteins - grams
    ...baseText,
    x: `${results.handSizes.proteinServing.grams}`.length === 2 ? 141 : 138,
    text: `${results.handSizes.proteinServing.grams}g`,
  },
  {
    // Proteins - macro
    ...baseText,
    x: 59,
    text: `${results.macro.protein * 100}% daily intake`,
    y: macroY,
  },
  {
    // Fats - serving size
    ...baseText,
    x: `${results.handSizes.fatServing.palms}`.length === 1 ? 210.75 : 208,
    text: `${results.handSizes.fatServing.palms} servings`,
  },
  {
    // Fats - grams
    ...baseText,
    x: `${results.handSizes.fatServing.grams}`.length === 2 ? 314 : 310,
    text: `${results.handSizes.fatServing.grams}g`,
  },
  {
    // Fats - macro
    ...baseText,
    x: 233,
    text: `${results.macro.fats * 100}% daily intake`,
    y: macroY,
  },
  carbServingSize(results),
  carbGramSize(results),
  {
    // Carbs - macro
    ...baseText,
    x: 407,
    text: `${results.macro.carbs * 100}% daily intake`,
    y: macroY,
  },
  {
    // Water
    ...baseText,
    x: `${results.handSizes.waterServing}`.length === 1 ? 592 : 405,
    text: `${results.handSizes.waterServing} servings`,
  },
];

const modifyMyMealPlan = (
  pages: PDFPage[],
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult,
  font: FontType
) => {
  texts(results).forEach((text: Text) => {
    pages[2].drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 13,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyMealPlan;
