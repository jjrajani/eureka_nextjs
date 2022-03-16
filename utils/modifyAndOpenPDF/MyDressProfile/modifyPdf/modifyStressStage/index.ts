import { MyDressProfileFormState } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import { Text } from "utils/modifyAndOpenPDF/types";
import { red } from "utils/modifyAndOpenPDF/colors";
import getHeaderTexts from "utils/modifyAndOpenPDF/sharedModifiers/utils/getHeaderTexts";

const color = red,
  y = 277;

const texts = (
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
  ];
};

const modifyStressStage = ({
  page,
  font,
  userInput,
}: {
  page: PDFPage;
  font: FontType;
  userInput: MyDressProfileFormState;
}) => {
  texts(userInput, font, page).forEach((text: Partial<Text>) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 13,
      font: text?.font || font.bold,
      color: text?.color || color,
    });
  });
};

export default modifyStressStage;
