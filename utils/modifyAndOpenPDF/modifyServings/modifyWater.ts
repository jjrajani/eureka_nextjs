import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { blue } from "../colors";
import { PDFFont, PDFPage } from "pdf-lib";

const waterTrackerCountPos = { x: 685, y: 304 },
  waterFoodListCountPos = { x: 72, y: 72 },
  listPage = 3;

const modifyWater = (
  pages: PDFPage[],
  servingSize: number,
  font: { bold: PDFFont }
) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    waterTrackerCountPos,
    waterFoodListCountPos,
    blue
  );

  generateCheckBoxes(613.5, 284, blue, servingSize, pages[1]);
};

export default modifyWater;
