import isMobile from "utils/isMobile";
import { PDFDocument } from "pdf-lib";
import modifyCoverPage from "./modifyCoverPage";
import {
  modifyProtein,
  modifyCarbs,
  modifyFats,
  modifyWater,
} from "../modifyServings";
import modifyMyInfo from "../modifyMyInfo";
import modifyMyNumbers from "../modifyMyNumbers";
import modifyMyMealPlan from "../modifyMyMealPlan";
import modifyMyDietType from "../modifyMyDietType";
import modifyMySupplementType from "../modifyMySupplementType";
import downloadPDF from "../downloadPDF";
import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import loadFontsToPDF from "../utils/loadFontsToPDF";
import getMealMasterySlides from "./getSlides/getMealMasterySlides";

const modifyAndOpenMealMasteryPDF = async (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState
) => {
  console.log("results", results);

  // const existingPdf = await fetch("/meal_mastery.pdf").then((res) =>
  //   res.arrayBuffer()
  // );
  const pdfDoc = await getMealMasterySlides(results, userInput);
  // const pdfDoc = await PDFDocument.load(existingPdf);

  const font = await loadFontsToPDF(pdfDoc);
  const pages = pdfDoc.getPages();

  // // Cover Page
  // modifyCoverPage({ pages, formState: userInput, font });
  //
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
  // modifyMyInfo(pages[2], userInput, font);
  //
  // // myNumbers
  // modifyMyNumbers(pages[2], results, font);
  //
  // // myMealPlan
  // modifyMyMealPlan(pages, results, font);
  //
  // // myDietType
  // modifyMyDietType(pages[3], userInput, results, font);
  //
  // // mySupplementType
  // modifyMySupplementType(pages[7], userInput, font);

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);
  window.open(fileUrl, "_blank");
  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMealMasteryPDF;