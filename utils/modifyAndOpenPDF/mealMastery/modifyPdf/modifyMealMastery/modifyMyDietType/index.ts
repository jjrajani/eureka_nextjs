import { MealMasteryCalculatorResult, MealMasteryFormState } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage, PDFFont } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { red, gray } from "utils/modifyAndOpenPDF/colors";
import moment from "moment";

const color = red,
  y = 277;

const baseText = {
  color,
  y,
  size: 18,
};

const PAGE_PAD = 4;

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

const userName = (
  font: { size: number; weight: PDFFont },
  userInput: MealMasteryFormState,
  page: PDFPage
) => {
  const height = page.getHeight();
  const userNameText = `Member Name: ${userInput.first} ${userInput.last}`;
  const textHeight = font.weight.heightAtSize(font.size);

  return {
    ...baseText,
    size: font.size,
    color: gray,
    y: height - textHeight - 1,
    x: PAGE_PAD,
    text: userNameText,
    font: font.weight,
  };
};

const date = (font: { size: number; weight: PDFFont }, page: PDFPage) => {
  const width = page.getWidth();
  const height = page.getHeight();
  const textHeight = font.weight.heightAtSize(font.size);
  const dateText = `Date: ${moment().format("MM/DD/YYYY")}`;
  const dateTextWidth = font.weight.widthOfTextAtSize(`${dateText}`, font.size);

  return {
    ...baseText,
    size: font.size,
    color: gray,
    y: height - textHeight - 1,
    x: width - dateTextWidth - PAGE_PAD,
    text: dateText,
    font: font.weight,
  };
};

const pageHeaders = (
  font: FontType,
  userInput: MealMasteryFormState,
  page: PDFPage
) => {
  const _font = {
    size: 12,
    weight: font.regular,
  };

  return [userName(_font, userInput, page), date(_font, page)];
};

const texts = (
  results: MealMasteryCalculatorResult,
  userInput: MealMasteryFormState,
  font: FontType,
  page: PDFPage
): Partial<Text>[] => {
  return [
    percentBreakdown(results, font),
    ...pageHeaders(font, userInput, page),
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
