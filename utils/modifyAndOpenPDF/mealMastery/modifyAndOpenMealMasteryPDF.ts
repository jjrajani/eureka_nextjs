import isMobile from "utils/isMobile";
import { PDFDocument } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
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
import { FontType } from "utils/modifyAndOpenPDF/types";

const modifyAndOpenMealMasteryPDF = async (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState
) => {
  // console.log("results", results);
  const asapRegFontBytes = await fetch("/fonts/Asap-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );
  const asapBoldFontBytes = await fetch("/fonts/Asap-Bold.ttf").then((res) =>
    res.arrayBuffer()
  );

  const existingPdf = await fetch("/meal_mastery.pdf").then((res) =>
    res.arrayBuffer()
  );
  const pdfDoc = await PDFDocument.load(existingPdf);
  pdfDoc.registerFontkit(fontkit);
  const asapFont = await pdfDoc.embedFont(asapRegFontBytes);
  const asapFontBold = await pdfDoc.embedFont(asapBoldFontBytes);
  const pages = pdfDoc.getPages();

  const font: FontType = {
    regular: asapFont,
    bold: asapFontBold,
  };

  // Cover Page
  modifyCoverPage({ pages, formState: userInput, font });

  // proteins
  modifyProtein(pages, results.handSizes.proteinServing.palms, font);

  // carbs
  modifyCarbs(pages, results.handSizes.carbsServing.palms.median, font);

  // fats
  modifyFats(pages, results.handSizes.fatServing.palms, font);

  // water
  modifyWater(pages, results.handSizes.waterServing, font);

  // myInfo
  modifyMyInfo(pages[2], userInput, font);

  // myNumbers
  modifyMyNumbers(pages[2], results, font);

  // myMealPlan
  modifyMyMealPlan(pages, results, font);

  // myDietType
  modifyMyDietType(pages[3], userInput, results, font);

  // mySupplementType
  modifyMySupplementType(pages[7], userInput, font);

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);
  window.open(fileUrl, "_blank");
  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMealMasteryPDF;
