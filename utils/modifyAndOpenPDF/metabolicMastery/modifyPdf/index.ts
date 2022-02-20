import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import {
  MetabolicMasteryCalculatorResult,
  MetabolicMasteryFormState,
} from "types/types";
import modifyMyInfo from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyInfo";
import modifyMyNumbers from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyNumbers";
import modifyMyPortions from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyPortions";
import modifyMyDietType from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyDietType";
import modifyPortionTracker from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker";
import modifyMyRestRx from "utils/modifyAndOpenPDF/metabolicMastery/modifyPdf/modifyMyRestRx";
import modifyExerciseFITT from "utils/modifyAndOpenPDF/metabolicMastery/modifyPdf/modifyExerciseFITT";
import modifyStressStage from "utils/modifyAndOpenPDF/metabolicMastery/modifyPdf/modifyStressStage";
import modifyDressDashboard from "utils/modifyAndOpenPDF/metabolicMastery/modifyPdf/modifyDressDashboard";

interface ModifyMetabolicMasteryArgs {
  font: FontType;
  pages: PDFPage[];
  results: MetabolicMasteryCalculatorResult;
  userInput: MetabolicMasteryFormState;
}

const modifyMetabolicMastery = ({
  font,
  pages,
  results,
  userInput,
}: ModifyMetabolicMasteryArgs) => {
  modifyMyInfo(pages[2], userInput, font);
  modifyMyNumbers(pages[2], results, font);
  modifyMyPortions(pages[2], results, font);
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

export default modifyMetabolicMastery;
