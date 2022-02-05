import { red } from "utils/modifyAndOpenPDF/colors";
import addCommasToNumber from "../../addCommasToNumber";
import {
  MealMasteryCalculatorResult,
  MetabolicMasteryCalculatorResult,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";

const color = red;
const y = 138;

const texts = (
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult
) => [
  // Calories
  {
    text: `${addCommasToNumber(results.calorieIntake.low)}-${addCommasToNumber(
      results.calorieIntake.high
    )}`,
    x: 577,
  },
  // BMI
  {
    text: `${results.bmi}`,
    x: 136,
  },
  // BMR
  {
    text: `${results.bmr}`,
    x: 340.5,
  },
];

const modifyMyNumbers = (
  page: PDFPage,
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult,
  font: FontType
) => {
  console.log("results.calorieIntake", results.calorieIntake);
  texts(results).forEach((text) => {
    page.drawText(text.text, {
      x: text.x,
      y,
      size: 18,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyNumbers;
