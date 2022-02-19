import isMobile from "utils/isMobile";
import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import {
  modifyProtein,
  modifyCarbs,
  modifyFats,
  modifyWater,
} from "../modifyServings";
import modifyMyInfo from "../modifyMyInfo";
import modifyMyNumbers from "../modifyMyNumbers";
import modifyMyMealPlan from "../modifyMyMealPlan";
import downloadPDF from "../downloadPDF";
import {
  MetabolicMasteryCalculatorResult,
  MetabolicMasteryFormState,
} from "types/types";
import loadFontsToPDF from "../utils/loadFontsToPDF";
import getMetabolicMasterySlides from "./getSlides";

const modifyAndOpenMetabolicMasteryPDF = async (
  results: MetabolicMasteryCalculatorResult,
  userInput: MetabolicMasteryFormState
) => {
  console.log("results", results);

  // const existingPdf = await fetch("/meal_planner.pdf").then((res) =>
  //   res.arrayBuffer()
  // );
  const pdfDoc = await getMetabolicMasterySlides(results, userInput);
  // const pdfDoc = await PDFDocument.load(existingPdf);
  pdfDoc.registerFontkit(fontkit);

  const font = await loadFontsToPDF(pdfDoc);
  const pages = pdfDoc.getPages();

  // // proteins
  // modifyProtein(pages, results.handSizes.proteinServing.palms, font);
  //
  // // carbs
  // modifyCarbs(pages, results.handSizes.carbsServing.palms.median, font);
  //
  // // fats
  // modifyFats(pages, results.handSizes.fatServing.palms, font);
  //
  // // water
  // modifyWater(pages, results.handSizes.waterServing, font);
  //
  // // myInfo
  // modifyMyInfo(pages[0], userInput, font);
  //
  // // myNumbers
  // modifyMyNumbers(pages[0], results, font);
  //
  // // myMealPlan
  // modifyMyMealPlan(pages, results, font);

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);
  window.open(fileUrl, "_blank");

  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMetabolicMasteryPDF;
