import { TextXArgs, TextXFunc } from "utils/modifyAndOpenPDF/types";

const positionUserNameX: TextXFunc = ({
  text,
  font,
  pageWidth,
}: TextXArgs): number => {
  const textWidth = font.bold.widthOfTextAtSize(text.text, text.size);
  const halfTextWidth = textWidth / 2;
  const pageXCenter = pageWidth / 2;
  return pageXCenter - halfTextWidth;
};

export default positionUserNameX;
