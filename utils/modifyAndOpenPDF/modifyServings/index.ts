import { RGB } from "pdf-lib";
import modifyCarbs from "./modifyCarbs";
import modifyFats from "./modifyFats";
import modifyProtein from "./modifyProtein";
import modifyWater from "./modifyWater";
import { PDFFont, PDFPage } from "pdf-lib";

const modifyServings = (
  pages: PDFPage[],
  listPage: number,
  servingSize: number,
  font: {
    bold: PDFFont;
  },
  trackerPos: { x: number; y: number },
  listPos: { x: number; y: number },
  color: RGB
) => {
  pages[1].drawText("" + servingSize, {
    ...trackerPos,
    size: 11,
    font: font.bold,
    color,
  });

  pages[listPage].drawText("" + servingSize, {
    ...listPos,
    size: 28,
    font: font.bold,
    color,
  });
};

export default modifyServings;
export { modifyCarbs, modifyFats, modifyProtein, modifyWater };
