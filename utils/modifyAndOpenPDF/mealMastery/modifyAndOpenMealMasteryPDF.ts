import isMobile from 'utils/isMobile';
import modifyCover from 'utils/modifyAndOpenPDF/sharedModifiers/modifyCover';
import modifyMealMastery from 'utils/modifyAndOpenPDF/mealMastery/modifyPdf';
import downloadPDF from 'utils/modifyAndOpenPDF/downloadPDF';
import { MealMasteryCalculatorResult, MealMasteryFormState } from 'types/types';
import loadFontsToPDF from 'utils/modifyAndOpenPDF/utils/loadFontsToPDF';
import getMealMasterySlides from 'utils/modifyAndOpenPDF/mealMastery/getSlides';
import setPDFMetadata from 'utils/modifyAndOpenPDF/utils/setPDFMetadata';
import { CoverPage } from 'utils/modifyAndOpenPDF/types';

const modifyAndOpenMealMasteryPDF = async (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState
) => {
  const pdfDoc = await getMealMasterySlides(results, userInput);

  // Doc Metadata
  const title = 'Meal Mastery Plan';
  const subject = 'A Meal Mastery Plan to help you keep your diet on track.';
  setPDFMetadata({ pdfDoc, subject, title, userInput });

  const font = await loadFontsToPDF({ baseUrl: 'FIX ME', pdfDoc });
  const pages = pdfDoc.getPages();

  // Cover Page
  modifyCover({ pages, formState: userInput, font, type: CoverPage.MEAL });

  // My Meal Mastery
  modifyMealMastery({ pages, results, userInput, font });

  const pdfBytes = await pdfDoc.save();
  const file = new Blob([pdfBytes], { type: 'application/pdf' });
  const fileUrl = URL.createObjectURL(file);
  isMobile() ? window.open(fileUrl, '_blank') : downloadPDF(fileUrl);
};

export default modifyAndOpenMealMasteryPDF;
