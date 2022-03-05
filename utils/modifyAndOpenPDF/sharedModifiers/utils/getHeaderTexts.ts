import { MealMasteryFormState, MyDressProfileFormState } from "types/types";
import { PDFPage, PDFFont } from "pdf-lib";
import { gray } from "utils/modifyAndOpenPDF/colors";
import moment from "moment";

const PAGE_PAD = 4;

type Font = { size: number; weight: PDFFont };
type HeaderPad = { right: number };

const userName = ({
  font,
  page,
  userInput,
}: {
  font: { size: number; weight: PDFFont };
  userInput: MealMasteryFormState | MyDressProfileFormState;
  page: PDFPage;
}) => {
  const height = page.getHeight();
  const userNameText = `Member Name: ${userInput.first} ${userInput.last}`;
  const textHeight = font.weight.heightAtSize(font.size);

  return {
    size: font.size,
    color: gray,
    y: height - textHeight - 1,
    x: PAGE_PAD,
    text: userNameText,
    font: font.weight,
  };
};

const date = ({
  font,
  page,
  headerPad,
}: {
  font: { size: number; weight: PDFFont };
  page: PDFPage;
  headerPad?: HeaderPad;
}) => {
  const width = page.getWidth();
  const height = page.getHeight();
  const textHeight = font.weight.heightAtSize(font.size);
  const dateText = `Date: ${moment().format("MM/DD/YYYY")}`;
  const dateTextWidth = font.weight.widthOfTextAtSize(`${dateText}`, font.size);
  const pad = headerPad?.right || PAGE_PAD;

  return {
    size: font.size,
    color: gray,
    y: height - textHeight - 1,
    x: width - dateTextWidth - pad,
    text: dateText,
    font: font.weight,
  };
};

const getHeaderTexts = ({
  font,
  page,
  userInput,
  headerPad,
}: {
  font: Font;
  page: PDFPage;
  userInput: MealMasteryFormState | MyDressProfileFormState;
  headerPad?: HeaderPad;
}) => {
  return [userName({ font, page, userInput }), date({ font, page, headerPad })];
};

export default getHeaderTexts;
