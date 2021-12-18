import { red } from "utils/modifyAndOpenPDF/colors";
import { CalculatorResult } from "types/types";
import { PDFFont, PDFPage } from "pdf-lib";

const color = red,
  y = 89.25,
  macroY = 56.5;

const texts = (results: CalculatorResult) => [
  {
    // Proteins - serving size
    x: `${results.handSizes.proteinServing.palms}`.length === 1 ? 41.5 : 35.5,
    value: results.handSizes.proteinServing.palms,
  },
  {
    // Proteins - grams
    x: `${results.handSizes.proteinServing.grams}`.length === 1 ? 138 : 130,
    value: `${results.handSizes.proteinServing.grams}g`,
  },
  {
    // Proteins - macro
    x: 67.5,
    value: `${results.macro.protein * 100}%`,
    y: macroY,
    size: 14,
  },
  {
    // Fats - serving size
    x: `${results.handSizes.fatServing.palms}`.length === 1 ? 227.75 : 220,
    value: results.handSizes.fatServing.palms,
  },
  {
    // Fats - grams
    x: `${results.handSizes.fatServing.grams}`.length === 3 ? 324 : 329,
    value: `${results.handSizes.fatServing.grams}g`,
  },
  {
    // Fats - macro
    x: 253.5,
    value: `${results.macro.fats * 100}%`,
    y: macroY,
    size: 14,
  },
  {
    // Carbs - serving size
    x: `${results.handSizes.carbsServing.palms}`.length === 1 ? 414 : 406,
    value: results.handSizes.carbsServing.palms,
  },
  {
    // Carbs - grams
    x: 510,
    value: `${results.handSizes.carbsServing.grams}g`,
  },
  {
    // Carbs - macro
    x: 439.5,
    value: `${results.macro.carbs * 100}%`,
    y: macroY,
    size: 14,
  },
  {
    // Water
    x: `${results.handSizes.waterServing}`.length === 2 ? 645 : 667,
    value: results.handSizes.waterServing,
  },
];

const modifyMyMealPlan = (
  page: PDFPage,
  results: CalculatorResult,
  font: { bold: PDFFont }
) => {
  console.log("results", results);
  console.log("texts", texts(results));
  texts(results).forEach((text) => {
    page.drawText(`${text.value}`, {
      x: text.x,
      y: text.y || y,
      size: text.size || 18,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyMealPlan;
