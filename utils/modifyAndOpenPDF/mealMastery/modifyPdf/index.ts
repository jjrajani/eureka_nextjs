import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import modifyMyInfo from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyInfo";
import modifyMyNumbers from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyNumbers";
import modifyMyPortions from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyPortions";
import modifyMyDietType from "utils/modifyAndOpenPDF/sharedModifiers/modifyMyDietType";
import modifyPortionTracker from "utils/modifyAndOpenPDF/sharedModifiers/modifyPortionTracker";
import modifyMasteryProfile from "utils/modifyAndOpenPDF/mealMastery/modifyPdf/modifyMasteryProfile";

interface ModifyMealMasteryArgs {
  font: FontType;
  pages: PDFPage[];
  results: MealMasteryCalculatorResult;
  userInput: MealMasteryFormState;
}

const modifyMealMastery = ({
  font,
  pages,
  results,
  userInput,
}: ModifyMealMasteryArgs) => {
  modifyMyInfo(pages[2], userInput, font);
  modifyMyNumbers(pages[2], results, font);
  modifyMyPortions(pages[2], results, font);
  modifyMyDietType({ page: pages[3], results, font, userInput });
  modifyPortionTracker(pages, results, font);
  modifyMasteryProfile({ page: pages[8], font, results, userInput });
};

export default modifyMealMastery;
