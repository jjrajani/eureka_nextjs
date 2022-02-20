import { MealMasteryCalculatorResult } from "types/types";
import { PDFPage, PDFFont } from "pdf-lib";
import generateCheckBoxes from "utils/modifyAndOpenPDF/generateCheckBoxes";
import { green } from "utils/modifyAndOpenPDF/colors";

const modifyCarbs = (
  page: PDFPage,
  results: MealMasteryCalculatorResult,
  baseText: { y: number; size: number; font: PDFFont },
  checkboxY: number
) => {
  // page.drawRectangle({
  //   borderColor: green,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 82,
  //   x: 255.5,
  //   y: 43,
  // });

  page.drawText(`${results.handSizes.carbsServing.palms.median}`, {
    ...baseText,
    x: 329,
    color: green,
  });

  generateCheckBoxes(
    260,
    checkboxY,
    green,
    results.handSizes.carbsServing.palms.median,
    page
  );
};

export default modifyCarbs;
