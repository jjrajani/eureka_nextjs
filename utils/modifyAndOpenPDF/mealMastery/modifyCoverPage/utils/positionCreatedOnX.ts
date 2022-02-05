import { TextXArgs, TextXFunc } from "utils/modifyAndOpenPDF/types";
import moment from "moment";

const positionCreatedOnX: TextXFunc = ({
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

export default positionCreatedOnX;
