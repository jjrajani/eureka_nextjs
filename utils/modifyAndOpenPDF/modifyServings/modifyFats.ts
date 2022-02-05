import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { yellow } from "../colors";
import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";

const fatsTrackerCountPos = { x: 320, y: 60 },
  fatsFoodListCountPos = { x: 478, y: 222 },
  listPage = 4;

const modifyFats = (pages: PDFPage[], servingSize: number, font: FontType) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    fatsTrackerCountPos,
    fatsFoodListCountPos,
    yellow
  );

  // pages[2].drawRectangle({
  //   borderColor: yellow,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 78,
  //   x: 285,
  //   y: 50,
  // });

  generateCheckBoxes(407, 203, yellow, servingSize, pages[4]);
};

export default modifyFats;
