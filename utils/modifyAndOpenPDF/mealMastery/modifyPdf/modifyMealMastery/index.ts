import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import modifyMyInfo from "./modifyMyInfo";
import modifyMyNumbers from "./modifyMyNumbers";
import modifyMyPortions from "./modifyMyPortions";
import modifyMyDietType from "./modifyMyDietType";
import modifyPortionTracker from "./modifyPortionTracker";
import modifyMasteryProfile from "./modifyMasteryProfile";

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
  console.log("userInput", userInput);
  console.log("results", results);

  modifyMyInfo(pages[2], userInput, font);
  modifyMyNumbers(pages[2], results, font);
  modifyMyPortions(pages[2], results, font);
  modifyMyDietType({ page: pages[3], results, font, userInput });
  modifyPortionTracker(pages, results, font);
  modifyMasteryProfile({ page: pages[8], font, results, userInput });
};

export default modifyMealMastery;
