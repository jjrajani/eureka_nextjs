import { RGB } from "pdf-lib";
import modifyCarbs from "./modifyCarbs";
import modifyFats from "./modifyFats";
import modifyProtein from "./modifyProtein";
import modifyWater from "./modifyWater";
import { PDFPage } from "pdf-lib";
import { red } from "../colors";
import { FontType } from "utils/modifyAndOpenPDF/types";

const modifyServings = (
  pages: PDFPage[],
  listPage: number,
  servingSize: number,
  font: FontType,
  trackerPos: { x: number; y: number },
  listPos: { x: number; y: number },
  color: RGB
) => {
  // pages[2].drawText("" + servingSize, {
  //   ...trackerPos,
  //   size: 14,
  //   font: font.bold,
  //   color: red,
  // });

  pages[listPage].drawText("" + servingSize, {
    ...listPos,
    size: 11,
    font: font.bold,
    color,
  });
};

export default modifyServings;
export { modifyCarbs, modifyFats, modifyProtein, modifyWater };
