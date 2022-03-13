import isMobile from "utils/isMobile";
import downloadPDF from "utils/modifyAndOpenPDF/downloadPDF";
import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import loadFontsToPDF from "utils/modifyAndOpenPDF/utils/loadFontsToPDF";
import getMyDressProfileSlides from "utils/modifyAndOpenPDF/myDressProfile/getSlides";
import setPDFMetadata from "utils/modifyAndOpenPDF/utils/setPDFMetadata";
import modifyCover from "utils/modifyAndOpenPDF/sharedModifiers/modifyCover";
import modifyMyDressProfile from "utils/modifyAndOpenPDF/myDressProfile/modifyPdf/index";
import { CoverPage } from "utils/modifyAndOpenPDF/types";

const modifyAndOpenMyDressProfilePDF = async (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState
) => {
  const pdfDoc = await getMyDressProfileSlides(results, userInput);

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
  modifyMyDressProfile({ pages, results, userInput, font });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;

  // const file = new Blob([pdfBytes], { type: "application/pdf" });
  // const fileUrl = URL.createObjectURL(file);
  // return file;
  // window.open(fileUrl, "_blank");

  // isMobile() ? window.open(fileUrl, "_blank") : downloadPDF(fileUrl);
};

export default modifyAndOpenMyDressProfilePDF;
