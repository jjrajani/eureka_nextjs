import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { green } from "../colors";
import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";

const carbsTrackerCountPos = { x: 493, y: 60 };
const carbsFoodListCountPos = { x: 326, y: 222 };
const listPage = 4;

const modifyCarbs = (pages: PDFPage[], servingSize: number, font: FontType) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    carbsTrackerCountPos,
    carbsFoodListCountPos,
    green
  );

  // pages[2].drawRectangle({
  //   borderColor: green,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 82,
  //   x: 455,
  //   y: 50,
  // });

  generateCheckBoxes(257, 203, green, servingSize, pages[4]);
};

export default modifyCarbs;
