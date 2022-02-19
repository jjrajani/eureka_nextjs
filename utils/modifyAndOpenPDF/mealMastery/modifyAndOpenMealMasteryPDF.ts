import isMobile from "utils/isMobile";
import { PDFDocument } from "pdf-lib";
import modifyCover from "./modifyPdf/modifyCover";
import modifyMealMastery from "./modifyPdf/modifyMealMastery";
import modifyMyDietType from "../modifyMyDietType";
import modifyMySupplementType from "../modifyMySupplementType";
import downloadPDF from "../downloadPDF";
import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import loadFontsToPDF from "../utils/loadFontsToPDF";
import getMealMasterySlides from "./getSlides";

const modifyAndOpenMealMasteryPDF = async (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState
) => {
  console.log("results", results);

  const pdfDoc = await getMealMasterySlides(results, userInput);

  const font = await loadFontsToPDF(pdfDoc);
  const pages = pdfDoc.getPages();

  // Cover Page
  modifyCover({ pages, formState: userInput, font });

  // My Meal Mastery
  modifyMealMastery({ pages, results, userInput, font });

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);
  window.open(fileUrl, "_blank");
  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMealMasteryPDF;
