import { PDFPage } from "pdf-lib";
import {
  DietPreference,
  MealMasteryCalculatorResult,
  MealMasteryFormState,
  Supplement,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { dietPrefText } from "cms/strings";
import { red, white } from "utils/modifyAndOpenPDF/colors";

const modifyMasteryProfile = ({
  font,
  page,
  results,
  userInput,
}: {
  font: FontType;
  page: PDFPage;
  results: MealMasteryCalculatorResult;
  userInput: MealMasteryFormState;
}) => {
  const y = 326;
  // Diet Type
  page.drawText(`${dietPrefText[userInput.dietPreference as DietPreference]}`, {
    size: 14,
    color: red,
    font: font.bold,
    x: 7,
    y: 326,
  });

  // Daily Portions
  const protein = results.handSizes.proteinServing.palms;
  const carbs = results.handSizes.carbsServing.palms.median;
  const fat = results.handSizes.fatServing.palms;
  const water = results.handSizes.waterServing;

  let x;
  let text = "";
  if (userInput.supplementType === Supplement.GI) {
    x = 130;
    text = `${protein}       ${carbs}       ${fat}        ${water}`;
  } else if (userInput.supplementType === Supplement.ENERGY) {
    x = 134;
    text = `${protein}        ${carbs}       ${fat}         ${water}`;
  } else if (userInput.supplementType === Supplement.HORMONE) {
    x = 123;
    text = `${protein}       ${carbs}       ${fat}        ${water}`;
  }

  page.drawText(text, {
    size: 14,
    color: red,
    font: font.bold,
    x,
    y,
  });

  // const underlinXes = [117, 149, 181, 213];
  // underlinXes.forEach((x) => {
  //   page.drawRectangle({
  //     color: white,
  //     x,
  //     y: y - 2,
  //     height: 1,
  //     width: 24,
  //   });
  // });
};

export default modifyMasteryProfile;
