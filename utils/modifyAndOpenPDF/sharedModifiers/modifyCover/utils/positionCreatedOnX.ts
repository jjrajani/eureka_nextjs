import { TextXArgs, TextXFunc } from "utils/modifyAndOpenPDF/types";
import moment from "moment";
import { CoverPage } from "utils/modifyAndOpenPDF/types";

export const positionCreatedOnX: TextXFunc = ({
  text,
  font,
  pageWidth,
}: TextXArgs): number => {
  const completeText = `${text.text} ${moment().format("MMM DD, YYYY")}`;
  const textWidth = font.bold.widthOfTextAtSize(completeText, text.size);
  const halfTextWidth = textWidth / 2;
  const pageXCenter = pageWidth / 2;
  return pageXCenter - halfTextWidth;
};

export const positionCreatedOnY = (type: CoverPage) => {
  let y = 120;
  if (type === CoverPage.METABOLIC) {
    y = 160;
  }

  return y;
};
