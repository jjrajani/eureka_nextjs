import { red, gray } from "utils/modifyAndOpenPDF/colors";
import {
  MealMasteryCalculatorResult,
  MetabolicMasteryCalculatorResult,
  MealMasteryFormState,
  MetabolicMasteryFormState,
} from "types/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { dietPrefText } from "cms/strings";
import { DietPreference } from "types/types";
import moment from "moment";
import { FontType } from "utils/modifyAndOpenPDF/types";

const color = red,
  y = 277;

const baseText = {
  color,
  y,
  size: 18,
};

const dietPrefTitleXPos = (dietPref: DietPreference): number => {
  if (dietPref === DietPreference.KETO) {
    return 296;
  } else if (dietPref === DietPreference.ANYTHING) {
    return 320;
  } else if (dietPref === DietPreference.ETHNIC_SPECIFIC) {
    return 298;
  } else if (dietPref === DietPreference.GLUTEN_FREE) {
    return 309;
  } else if (dietPref === DietPreference.LOW_CARB) {
    return 318.5;
  } else if (dietPref === DietPreference.PESCATARIAN) {
    return 309;
  } else if (dietPref === DietPreference.VEGETARIAN) {
    return 309;
  } else if (dietPref === DietPreference.VEGAN) {
    return 322;
  }

  return 296;
};

const texts = (
  userInput: MealMasteryFormState | MetabolicMasteryFormState,
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult
): Text[] => [
  {
    // Member Name
    ...baseText,
    color: gray,
    text: `${userInput.first} ${userInput.last}`,
    y: 389.5,
    x: 88,
    size: 12,
  },
  {
    // Date Rendered
    ...baseText,
    color: gray,
    text: moment().format("MMM DD, YYYY"),
    y: 389.5,
    x: 568,
    size: 12,
  },
  {
    // Diet Type
    ...baseText,
    x: dietPrefTitleXPos(userInput.dietPreference as DietPreference),
    text: dietPrefText[userInput.dietPreference as DietPreference],
    y: 310,
  },
  {
    // Protiens
    ...baseText,
    x: 256.5,
    text: `${results.macro.protein * 100}`,
  },
  {
    // Carbs
    ...baseText,
    x: 353,
    text: `${results.macro.carbs * 100}`,
  },
  {
    // Fats
    ...baseText,
    x: 448,
    text: `${results.macro.fats * 100}`,
  },
];

const modifyMyDietType = (
  page: PDFPage,
  userInput: MealMasteryFormState | MetabolicMasteryFormState,
  results: MealMasteryCalculatorResult | MetabolicMasteryCalculatorResult,
  font: FontType
) => {
  console.log("userInput", userInput.dietPreference);
  texts(userInput, results).forEach((text: Text) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 13,
      font: font.bold,
      color: text.color,
    });
  });
};

export default modifyMyDietType;
