import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from 'types/types';
import loadFontsToPDF from 'utils/modifyAndOpenPDF/utils/loadFontsToPDF';
import getMyDressProfileSlides from 'utils/modifyAndOpenPDF/MyDressProfile/getSlides';
import setPDFMetadata from 'utils/modifyAndOpenPDF/utils/setPDFMetadata';
import modifyCover from 'utils/modifyAndOpenPDF/sharedModifiers/modifyCover';
import modifyMyDressProfile from 'utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/index';
import { CoverPage } from 'utils/modifyAndOpenPDF/types';

interface ModifyAndOpenMyDressProfilePDFArgs {
  baseUrl: string;
  results: MyDressProfileCalculatorResult;
  userInput: MyDressProfileFormState;
}

const modifyAndOpenMyDressProfilePDF = async ({
  baseUrl,
  results,
  userInput,
}: ModifyAndOpenMyDressProfilePDFArgs) => {
  const pdfDoc = await getMyDressProfileSlides({ baseUrl, userInput });

  // Doc Metadata
  const title = 'Metabolic Mastery Plan';
  const subject =
    'A Metabolic Mastery Plan to help you keep your health on track.';
  setPDFMetadata({ pdfDoc, subject, title, userInput });

  const font = await loadFontsToPDF({ baseUrl, pdfDoc });
  const pages = pdfDoc.getPages();

  // Cover Page
  modifyCover({ pages, formState: userInput, font, type: CoverPage.METABOLIC });

  // My Metabolic Mastery
  modifyMyDressProfile({ pages, results, userInput, font });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
};

export default modifyAndOpenMyDressProfilePDF;
