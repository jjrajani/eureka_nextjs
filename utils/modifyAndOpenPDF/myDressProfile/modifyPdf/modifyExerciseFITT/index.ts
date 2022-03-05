import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { red } from "utils/modifyAndOpenPDF/colors";
import getHeaderTexts from "utils/modifyAndOpenPDF/sharedModifiers/utils/getHeaderTexts";

const color = red,
  y = 277;

const texts = (
  results: MyDressProfileCalculatorResult,
  userInput: MyDressProfileFormState,
  font: FontType,
  page: PDFPage
): Partial<Text>[] => {
  return [
    ...getHeaderTexts({
      font: { size: 12, weight: font.regular },
      userInput,
      page,
      headerPad: {
        right: 65,
      },
    }),
    {
      // Target Heart Rate
      x: 112,
      y: 165,
      text: `${results.targetHeartRate}`,
    },
    {
      // Strength Percent
      x: 18,
      y: 144,
      text: `${results.exerciseFitt.strength.percent}`,
    },
    {
      // Strength Duration
      x: 100,
      y: 144,
      text: `${results.exerciseFitt.strength.duration}`,
    },
    {
      // Endurance Percent
      x: 18,
      y: 118,
      text: `${results.exerciseFitt.endurance.percent}`,
    },
    {
      // Endurance Duration
      x: `${results.exerciseFitt.endurance.duration}`.length === 2 ? 109 : 113,
      y: 117.5,
      text: `${results.exerciseFitt.endurance.duration}`,
    },
    {
      // Flexibility Percent
      x: 18,
      y: 92,
      text: `${results.exerciseFitt.flexibility.percent}`,
    },
    {
      // Flexibility Duration
      x:
        `${results.exerciseFitt.flexibility.duration}`.length === 1 ? 104 : 101,
      y: 91,
      text: `${results.exerciseFitt.flexibility.duration}`,
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
