import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { red } from "utils/modifyAndOpenPDF/colors";
import getHeaderTexts from "utils/modifyAndOpenPDF/sharedModifiers/utils/getHeaderTexts";

const color = red,
  y = 277;

const baseText = {
  color,
  y,
  size: 18,
};

const percentBreakdown = (
  results: MealMasteryCalculatorResult,
  font: FontType
) => {
  let { carbs, fats, protein } = results.macro;
  carbs = carbs * 100;
  fats = fats * 100;
  protein = protein * 100;

  const text = `P  ${protein}%         C  ${carbs}%         F  ${fats}%`;
  const textWidth = font.bold.widthOfTextAtSize(text, 18);
  const boxWidth = 302;
  const boxX = 202;
  const pad = (boxWidth - textWidth) / 2;
  const x = boxX + pad;

  return {
    // Protien %
    ...baseText,
    x,
    // x: 245,
    text,
    font: font.bold,
  };
};

const texts = (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState,
  font: FontType,
  page: PDFPage
): Partial<Text>[] => {
  return [
    percentBreakdown(results, font),
    ...getHeaderTexts({
      font: { size: 12, weight: font.regular },
      userInput,
      page,
    }),
  ];
};

const modifyMyDietType = ({
  page,
  results,
  font,
  userInput,
}: {
  page: PDFPage;
  results: MealMasteryCalculatorResult;
  font: FontType;
  userInput: MealMasteryFormState;
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

export default modifyMyDietType;
