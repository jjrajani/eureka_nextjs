import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
// import modifyMyNumbers from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyNumbers";
// import modifyMyPortions from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyPortions";
import modifyMyDietType from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyDietType";
import modifyPortionTracker from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker";
import modifyDressProfile from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyDressProfile";
import modifyMyDietTypeMacros from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyMyDietTypeMacros";
import modifyMyRestRx from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyMyRestRx";
import modifyExerciseFITT from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyExerciseFITT";
import modifyStressStage from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyStressStage";
import modifyDressDashboard from "utils/modifyAndOpenPDF/MyDressProfile/modifyPdf/modifyDressDashboard";

interface ModifyMyDressProfileArgs {
  font: FontType;
  pages: PDFPage[];
  results: MyDressProfileCalculatorResult;
  userInput: MyDressProfileFormState;
}

const modifyMyDressProfile = ({
  font,
  pages,
  results,
  userInput,
}: ModifyMyDressProfileArgs) => {
  modifyDressProfile({ page: pages[2], results, font, userInput });
  // modifyMyNumbers(pages[2], results, font);
  // modifyMyPortions(pages[2], results, font);
  modifyMyDietTypeMacros({page: pages[3], results, font})
  modifyMyDietType({ page: pages[3], results, font, userInput });
  modifyPortionTracker(pages, results, font);
  modifyMyRestRx({ page: pages[8], font, userInput });
  modifyExerciseFITT({ page: pages[9], results, font, userInput });
  modifyStressStage({ page: pages[11], font, userInput });
  modifyDressDashboard({ page: pages[13], font, userInput, results });
  // Slides todo.
  // modifyMyRestRx()
  // modifyFITTracker()
  // modifyDressDashboard()

  // modifyMasteryProfile({ page: pages[8], font, results, userInput });
};

export default modifyMyDressProfile;
