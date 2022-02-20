import { MealMasteryCalculatorResult } from "types/types";
import { PDFPage, PDFFont } from "pdf-lib";
import generateCheckBoxes from "utils/modifyAndOpenPDF/generateCheckBoxes";
import { blue } from "utils/modifyAndOpenPDF/colors";

const modifyFat = (
  page: PDFPage,
  results: MealMasteryCalculatorResult,
  baseText: { y: number; size: number; font: PDFFont },
  checkboxY: number
) => {
  // page.drawRectangle({
  //   borderColor: blue,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 82,
  //   x: 406.5,
  //   y: 43,
  // });

  page.drawText(`${results.handSizes.waterServing}`, {
    ...baseText,
    x: 631,
    color: blue,
  });

  generateCheckBoxes(
    562.5,
    checkboxY,
    blue,
    results.handSizes.waterServing,
    page
  );
};

export default modifyFat;
