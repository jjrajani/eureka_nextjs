import { red } from "utils/modifyAndOpenPDF/colors";
import addCommasToNumber from "../../addCommasToNumber";
import { CalculatorResult } from "types/types";
import { PDFFont, PDFPage } from "pdf-lib";

const color = red;
const y = 204;

const texts = (results: CalculatorResult) => [
  // Calories
  {
    text: `${addCommasToNumber(parseInt(results.calorieIntake, 10))}`,
    x: 153,
  },
  // BMI
  {
    text: `${results.bmi}`,
    x: 406.5,
  },
  // BMR
  {
    text: `${results.bmr}`,
    x: 658,
  },
];

const modifyMyNumbers = (
  page: PDFPage,
  results: CalculatorResult,
  font: { bold: PDFFont }
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
