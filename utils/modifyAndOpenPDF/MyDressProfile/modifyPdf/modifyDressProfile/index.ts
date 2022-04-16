import {
  Activity,
  ExerciseFITT,
  Gender,
  Goal,
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
  DietPreference,
  RestRx,
  StressStage,
  Supplement,
} from 'types/types';
import { FontType } from 'utils/modifyAndOpenPDF/types';
import { PDFPage, PDFFont } from 'pdf-lib';
import { Text } from 'utils/modifyAndOpenPDF/types';
import { red } from 'utils/modifyAndOpenPDF/colors';
import {
  activityLevelText,
  dietPrefText,
  fittText,
  genderText,
  goalText,
  restRxText,
  stressStageText,
  supplementText,
} from 'cms/strings';
import moment from 'moment';

const color = red,
  y = 277;

interface YellowArgs {
  text: string;
  row: number;
  font: PDFFont;
  fontSize: number;
}
const getYellowBoxPlacement = ({
  text,
  row = 0,
  font,
  fontSize,
}: YellowArgs) => {
  const rowHeight = 29;
  const colWidth = 150;
  const textHeight = font.heightAtSize(fontSize);
  const textBuffer = (rowHeight - textHeight) / 2;
  const rowOffset = rowHeight * row;
  let y = 279 + textBuffer + 2 - rowOffset;
  if (row > 2) {
    y -= 1;
  }
  const textWidth = font.widthOfTextAtSize(text, fontSize);

  const buffer = (colWidth - textWidth) / 2;
  return {
    x: 111 + buffer,
    y,
  };
};

const texts = (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState,
  font: FontType
): Partial<Text>[] => {
  return [
    // Name
    {
      x: 78,
      y: 326.5,
      text: `${userInput.first} ${userInput.last}`,
    },
    // Age
    {
      ...getYellowBoxPlacement({
        text: userInput.age,
        row: 0,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${userInput.age}`,
    },
    // Gender
    {
      ...getYellowBoxPlacement({
        text: genderText[userInput.gender as Gender],
        row: 1,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${genderText[userInput.gender as Gender]}`,
    },
    // Height
    {
      ...getYellowBoxPlacement({
        text: `${userInput.heightFt}' ${userInput.heightIn}"`,
        row: 2,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${userInput.heightFt}' ${userInput.heightIn}"`,
    },
    // Weight
    {
      ...getYellowBoxPlacement({
        text: `${userInput.weight}lbs`,
        row: 3,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${userInput.weight}lbs`,
    },
    // Activity Level
    {
      ...getYellowBoxPlacement({
        text: `${activityLevelText[userInput.activity as Activity]}`,
        row: 4,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${activityLevelText[userInput.activity as Activity]}`,
    },
    // Goal
    {
      ...getYellowBoxPlacement({
        text: `${goalText[userInput.goal as Goal]}`,
        row: 5,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${goalText[userInput.goal as Goal]}`,
    },
    // Stress
    {
      x: 139,
      y: 108,
      text: `${stressStageText[userInput.stress as StressStage]}`,
      size: 14,
    },
    // Date
    {
      x: 312,
      y: 326.5,
      text: `${moment().format('MMM DD, YYYY')}`,
      size: 14,
    },
    // Rest Rx
    {
      x: 404,
      y: 286,
      text: `${restRxText[userInput.restRx as RestRx]}`,
      size: 14,
    },
    // FITT - User Input
    {
      x: 393,
      y: 225.5,
      text: fittText[userInput.exerciseFitt as ExerciseFITT],
      size: 14,
    },
    // FITT - Frequency
    {
      x: 290,
      y: 184.5,
      text: results.exerciseFitt.frequency,
      size: 12,
    },
    // FITT - Intensity
    {
      x: 290,
      y: 168,
      text: results.exerciseFitt.intensity,
      size: 12,
    },
    // FITT - Time
    {
      x: 290,
      y: 151,
      text: results.exerciseFitt.time,
      size: 12,
    },
    // FITT - Type
    {
      x: 290,
      y: 134.3,
      text: results.exerciseFitt.type,
      size: 12,
    },
    // Supplement Type
    {
      x: 420,
      y: 95.25,
      text: `${supplementText[userInput.supplementType as Supplement]}`,
    },
    // Diet Type
    {
      x: 605,
      y: 324.3,
      text: `${dietPrefText[userInput.dietPreference as DietPreference]}`,
    },
    // Proteins Servings
    {
      x: `${results.handSizes.proteinServing.palms}`.length === 1 ? 526 : 521,
      y: 273,
      text: `${results.handSizes.proteinServing.palms} servings`,
    },
    // Proteins Grams
    {
      x: `${results.handSizes.proteinServing.grams}`.length === 2 ? 632 : 636,
      y: 273,
      text: `${results.handSizes.proteinServing.grams}g`,
    },
    // Proteins Percent Intake
    {
      x: 553,
      y: 249,
      text: `${results.macro.protein * 100}% daily intake`,
    },
    // Carbs Servings
    {
      x:
        `${results.handSizes.carbsServing.palms.median}`.length === 1
          ? 526
          : 521,
      y: 202,
      text: `${results.handSizes.carbsServing.palms.median} servings`,
    },
    // Carbs Grams
    {
      x: `${results.handSizes.carbsServing.grams}`.length === 2 ? 632 : 636,
      y: 202,
      text: `${results.handSizes.carbsServing.grams.median}g`,
    },
    // Carbs Percent Intake
    {
      x: 553,
      y: 176,
      text: `${results.macro.carbs * 100}% daily intake`,
    },
    // Fats Servings
    {
      x: `${results.handSizes.fatServing.palms}`.length === 1 ? 526 : 521,
      y: 129,
      text: `${results.handSizes.fatServing.palms} servings`,
    },
    // Fats Grams
    {
      x: `${results.handSizes.fatServing.grams}`.length === 2 ? 641 : 638,
      y: 129,
      text: `${results.handSizes.fatServing.grams}g`,
    },
    // Fats Percent Intake
    {
      x: 553,
      y: 105,
      text: `${results.macro.fats * 100}% daily intake`,
    },
    // Water Servings
    {
      x: `${results.handSizes.waterServing}`.length !== 1 ? 576 : 571,
      y: 58,
      text: `1${results.handSizes.waterServing} servings`,
    },
  ];
};

const modifyDressProfile = ({
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
  texts(results, userInput, font).forEach((text: Partial<Text>) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 14,
      font: text?.font || font.bold,
      color: text?.color || color,
    });
  });
};

export default modifyDressProfile;
