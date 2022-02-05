import { red, white } from "utils/modifyAndOpenPDF/colors";
import { MealMasteryFormState, Supplement } from "types/types";
import { PDFPage } from "pdf-lib";
import { supplementText } from "cms/strings";
import { FontType } from "utils/modifyAndOpenPDF/types";

const baseText = {
  y: 373,
  size: 25,
};

const modifyMySupplementType = (
  page: PDFPage,
  userInput: MealMasteryFormState,
  font: FontType
) => {
  const title = "My Supplement - ";
  const supplementTypeText =
    supplementText[userInput.supplementType as Supplement];
  const fullText = `${title}${supplementTypeText}`;
  const pageWidth = page.getSize().width;
  const fullTextWidth = font.regular.widthOfTextAtSize(fullText, 24);
  const titleTextWidth = font.regular.widthOfTextAtSize(title, 24);
  const leftMarginWidth = (pageWidth - fullTextWidth) / 2;

  page.drawText(title, {
    ...baseText,
    x: leftMarginWidth,
    font: font.regular,
    color: white,
  });

  page.drawText(supplementTypeText, {
    ...baseText,
    x: leftMarginWidth + titleTextWidth + 5, //5 for whitespace
    font: font.regular,
    color: red,
  });
};

export default modifyMySupplementType;
