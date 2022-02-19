import { MealMasteryCalculatorResult } from "types/types";
import { PDFPage, PDFFont } from "pdf-lib";
import generateCheckBoxes from "utils/modifyAndOpenPDF/generateCheckBoxes";
import { yellow } from "utils/modifyAndOpenPDF/colors";

const modifyFat = (
  page: PDFPage,
  results: MealMasteryCalculatorResult,
  baseText: { y: number; size: number; font: PDFFont },
  checkboxY: number
) => {
  // page.drawRectangle({
  //   borderColor: yellow,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 82,
  //   x: 406.5,
  //   y: 43,
  // });

  page.drawText(`${results.handSizes.fatServing.palms}`, {
    ...baseText,
    x: 478,
    color: yellow,
  });

  generateCheckBoxes(
    409.5,
    checkboxY,
    yellow,
    results.handSizes.fatServing.palms,
    page
  );
};

export default modifyFat;
