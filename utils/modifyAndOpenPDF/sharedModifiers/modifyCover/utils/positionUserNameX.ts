import { TextXArgs, TextXFunc } from "utils/modifyAndOpenPDF/types";
import { CoverPage } from "utils/modifyAndOpenPDF/types";

export const positionUserNameX: TextXFunc = ({
  text,
  font,
  pageWidth,
}: TextXArgs): number => {
  const textWidth = font.bold.widthOfTextAtSize(text.text, text.size);
  const halfTextWidth = textWidth / 2;
  const pageXCenter = pageWidth / 2;
  return pageXCenter - halfTextWidth;
};

export const positionUserNameY = (type: CoverPage) => {
  let y = 155;
  if (type === CoverPage.METABOLIC) {
    y = 195;
  }

  return y;
};
