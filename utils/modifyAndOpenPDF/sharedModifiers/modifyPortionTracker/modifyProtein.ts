import { MealMasteryCalculatorResult } from "types/types";
import { PDFPage, PDFFont } from "pdf-lib";
import generateCheckBoxes from "utils/modifyAndOpenPDF/generateCheckBoxes";
import { red } from "utils/modifyAndOpenPDF/colors";

const modifyCarbs = (
  page: PDFPage,
  results: MealMasteryCalculatorResult,
  baseText: { y: number; size: number; font: PDFFont },
  checkboxY: number
) => {
  // page.drawRectangle({
  //   borderColor: red,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 82,
  //   x: 104,
  //   y: 43,
  // });

  page.drawText(`${results.handSizes.proteinServing.palms}`, {
    ...baseText,
    x: 175,
    color: red,
  });

  generateCheckBoxes(
    107,
    checkboxY,
    red,
    results.handSizes.proteinServing.palms,
    page
  );
};

export default modifyCarbs;
