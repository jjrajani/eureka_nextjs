import isMobile from "utils/isMobile";
import downloadPDF from "../downloadPDF";
import {
  MetabolicMasteryCalculatorResult,
  MetabolicMasteryFormState,
} from "types/types";
import loadFontsToPDF from "../utils/loadFontsToPDF";
import getMetabolicMasterySlides from "./getSlides";
import setPDFMetadata from "utils/modifyAndOpenPDF/utils/setPDFMetadata";
import modifyCover from "utils/modifyAndOpenPDF/sharedModifiers/modifyCover";
import modifyMetabolicMastery from "./modifyPdf";
import { CoverPage } from "utils/modifyAndOpenPDF/types";

const modifyAndOpenMetabolicMasteryPDF = async (
  results: MetabolicMasteryCalculatorResult,
  userInput: MetabolicMasteryFormState
) => {
  const pdfDoc = await getMetabolicMasterySlides(results, userInput);

  // Doc Metadata
  const title = "Metabolic Mastery Plan";
  const subject =
    "A Metabolic Mastery Plan to help you keep your health on track.";
  setPDFMetadata({ pdfDoc, subject, title, userInput });

  const font = await loadFontsToPDF(pdfDoc);
  const pages = pdfDoc.getPages();

  // Cover Page
  modifyCover({ pages, formState: userInput, font, type: CoverPage.METABOLIC });

  // My Metabolic Mastery
  modifyMetabolicMastery({ pages, results, userInput, font });

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: "application/pdf" });
  const fileUrl = URL.createObjectURL(file);
  window.open(fileUrl, "_blank");

  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMetabolicMasteryPDF;
