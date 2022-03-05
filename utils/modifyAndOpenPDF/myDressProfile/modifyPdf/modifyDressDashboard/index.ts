import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
  ExerciseFITT,
  DietPreference,
  StressStage,
  Supplement,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { red } from "utils/modifyAndOpenPDF/colors";
import {
  dietPrefText,
  fittText,
  stressStageText,
  supplementText,
} from "cms/strings";

const color = red,
  y = 277;

const texts = (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState,
  font: FontType,
  page: PDFPage
): Partial<Text>[] => {
  const protein = results.handSizes.proteinServing.palms;
  const carbs = results.handSizes.carbsServing.palms.median;
  const fat = results.handSizes.fatServing.palms;
  const water = results.handSizes.waterServing;

  const portionText = `${protein}         ${carbs}         ${fat}         ${water}`;

  return [
    {
      // Diet Type
      x: 8,
      y: 330,
      text: `${dietPrefText[userInput.dietPreference as DietPreference]}`,
    },
    {
      // Daily Portions
      x: 132,
      y: 330,
      text: portionText,
    },
    {
      // Supplement Type
      x: 290,
      y: 330,
      text: `${supplementText[userInput.supplementType as Supplement]}`,
    },
    {
      // Exercise FITT
      x: 408,
      y: 330,
      text: `${fittText[userInput.exerciseFitt as ExerciseFITT]}`,
    },
    {
      // Stress
      x: 500,
      y: 330,
      text: `${stressStageText[userInput.stress as StressStage]}`,
    },
  ];
};

const modifyExerciseFITT = ({
  page,
  results,
  font,
  userInput,
}: {
  page: PDFPage;
  results: MyDressProfileCalculatorResult;
  font: FontType;
  userInput: MyDressProfileFormState;
}) => {
  texts(results, userInput, font, page).forEach((text: Partial<Text>) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 13,
      font: text?.font || font.bold,
      color: text?.color || color,
    });
  });
};

export default modifyExerciseFITT;
