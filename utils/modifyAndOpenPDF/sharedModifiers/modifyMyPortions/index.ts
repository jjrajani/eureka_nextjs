import { red } from "utils/modifyAndOpenPDF/colors";
import { MealMasteryCalculatorResult } from "types/types";
import { Text } from "utils/modifyAndOpenPDF/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";

const color = red,
  y = 59,
  macroY = 30.5;

const baseText = {
  color,
  y,
  size: 13,
};

const texts = (results: MealMasteryCalculatorResult) => [
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
  {
    // Carbs - serving size
    ...baseText,
    x: 385,
    text: `${results.handSizes.carbsServing.palms.median} servings`,
  },
  {
    // Carbs - grams
    ...baseText,
    x: 482,
    text: `${results.handSizes.carbsServing.grams.median}g`,
  },
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

const modifyMyPortions = (
  page: PDFPage,
  results: MealMasteryCalculatorResult,
  font: FontType
) => {
  texts(results).forEach((text: Text) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 13,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyPortions;
