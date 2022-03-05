import { red } from "utils/modifyAndOpenPDF/colors";
import addCommasToNumber from "utils/addCommasToNumber";
import {
  MealMasteryCalculatorResult,
  MyDressProfileCalculatorResult,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";

const color = red;
const y = 138;

const texts = (
  results: MealMasteryCalculatorResult | MyDressProfileCalculatorResult
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
  results: MealMasteryCalculatorResult | MyDressProfileCalculatorResult,
  font: FontType
) => {
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
