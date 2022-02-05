import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { red } from "../colors";
import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";

// col width = 150
// small row height = 22
// tall row height = 28
const protienTrackerCountPos = { x: 146, y: 60 },
  protienFoodListCountPos = { x: 176, y: 222 },
  listPage = 4;

const modifyProtein = (
  pages: PDFPage[],
  servingSize: number,
  font: FontType
) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    protienTrackerCountPos,
    protienFoodListCountPos,
    red
  );
  // pages[2].drawRectangle({
  //   borderColor: red,
  //   borderWidth: 1,
  //   height: 28,
  //   width: 76,
  //   x: 112,
  //   y: 50,
  // });
  generateCheckBoxes(105, 203, red, servingSize, pages[4]);
};

export default modifyProtein;
