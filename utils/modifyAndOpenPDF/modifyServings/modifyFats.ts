import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { yellow } from "../colors";
import { PDFFont, PDFPage } from "pdf-lib";

const fatsTrackerCountPos = { x: 525, y: 304 },
  fatsFoodListCountPos = { x: 72, y: 330 },
  listPage = 3;

const modifyFats = (
  pages: PDFPage[],
  servingSize: number,
  font: { bold: PDFFont }
) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    fatsTrackerCountPos,
    fatsFoodListCountPos,
    yellow
  );
  generateCheckBoxes(448.5, 284, yellow, servingSize, pages[1]);
};

export default modifyFats;
