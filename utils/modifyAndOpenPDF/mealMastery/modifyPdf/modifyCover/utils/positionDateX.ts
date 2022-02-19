import { TextXArgs, TextXFunc } from "utils/modifyAndOpenPDF/types";

const positionDateX: TextXFunc = ({
  text,
  font,
  pageWidth,
}: TextXArgs): number => {
  const startText = "Created On ";
  const startTextWidth = font.bold.widthOfTextAtSize(startText, text.size);
  const completeText = `${startText} ${text.text}`;
  const completeTextWidth = font.bold.widthOfTextAtSize(
    completeText,
    text.size
  );
  const halfTextWidth = completeTextWidth / 2;
  const pageXCenter = pageWidth / 2;
  return pageXCenter - halfTextWidth + startTextWidth;
};

export default positionDateX;
