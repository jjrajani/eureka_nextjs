import {
  Activity,
  Gender,
  Goal,
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
  ExerciseFITT,
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

interface StressArgs {
  text: string;
  font: PDFFont;
  fontSize: number;
}
const getStressPlacement = ({ text, font, fontSize }: StressArgs) => {
  const rowHeight = 16;
  const colWidth = 117;
  const textHeight = font.heightAtSize(fontSize);
  const textBuffer = rowHeight - textHeight;
  const y = 107 + textBuffer;
  const textWidth = font.widthOfTextAtSize(text, fontSize);
  const buffer = (colWidth - textWidth) / 2;
  console.log(139 + buffer, y);
  return {
    x: 139 + buffer,
    y,
  };
  // x: 139,
  // y: 107,
  // height: 16,
  // width: 117,
  // color: red,
};

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
  font: FontType,
  page: PDFPage
): Partial<Text>[] => {
  // const protein = results.handSizes.proteinServing.palms;
  // const carbs = results.handSizes.carbsServing.palms.median;
  // const fat = results.handSizes.fatServing.palms;
  // const water = results.handSizes.waterServing;

  // const portionText = `${protein}         ${carbs}         ${fat}         ${water}`;
  console.log('results', results);
  return [
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
        text: genderText[userInput.gender],
        row: 1,
        font: font.bold,
        fontSize: 14,
      }),
      text: `${genderText[userInput.gender]}`,
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
      y: 323,
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
    // FITT
    {
      x:
        userInput.exerciseFitt === ExerciseFITT.ADVANCED
          ? 8
          : userInput.exerciseFitt === ExerciseFITT.BEGINNER
          ? 8
          : 8, // userInput.exerciseFitt === ExerciseFITT.INTERMEDIATE
      y: 330,
      text: `${fittText[userInput.exerciseFitt as ExerciseFITT]}`,
    },
    // Supplement Type
    {
      x: 8,
      y: 330,
      text: `${userInput.supplementType}`,
    },
    // Diet Type
    {
      x: 8,
      y: 330,
      text: `${userInput.dietPreference}`,
    },
    // Proteins Servings
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.proteinServing.palms}`,
    },
    // Proteins Grams
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.proteinServing.grams}`,
    },
    // Proteins Percent Intake
    {
      x: 8,
      y: 330,
      text: `${results.macro.protein}%`,
    },
    // Carbs Servings
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.carbsServing.palms}`,
    },
    // Carbs Grams
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.carbsServing.grams}`,
    },
    // Carbs Percent Intake
    {
      x: 8,
      y: 330,
      text: `${results.macro.carbs}%`,
    },
    // Fats Servings
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.fatServing.palms}`,
    },
    // Fats Grams
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.fatServing.grams}`,
    },
    // Fats Percent Intake
    {
      x: 8,
      y: 330,
      text: `${results.macro.fats}%`,
    },
    // Water Servings
    {
      x: 8,
      y: 330,
      text: `${results.handSizes.waterServing}`,
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
  texts(results, userInput, font, page).forEach((text: Partial<Text>) => {
    // page.drawRectangle({
    //   x: 139,
    //   y: 107,
    //   height: 16,
    //   width: 117,
    //   color: red,
    // });
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
