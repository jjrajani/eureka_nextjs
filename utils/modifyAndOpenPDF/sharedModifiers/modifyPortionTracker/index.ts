import { MealMasteryCalculatorResult } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import modifyCarbs from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker/modifyCarbs";
import modifyProtein from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker/modifyProtein";
import modifyFat from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker/modifyFat";
import modifyWater from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker/modifyWater";

const modifyPortionTracker = (
  pages: PDFPage[],
  results: MealMasteryCalculatorResult,
  font: FontType
) => {
  const checkboxY = 203;
  const baseText = {
    y: 221,
    size: 16,
    font: font.bold,
  };
  // protein
  modifyProtein(pages[4], results, baseText, checkboxY);
  // carbs
  modifyCarbs(pages[4], results, baseText, checkboxY);
  // fats
  modifyFat(pages[4], results, baseText, checkboxY);
  // water
  modifyWater(pages[4], results, baseText, checkboxY);
};

export default modifyPortionTracker;
