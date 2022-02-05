import generateCheckBoxes from "../generateCheckBoxes";
import modifyServings from "./";
import { blue } from "../colors";
import { PDFPage } from "pdf-lib";
import { FontType } from "utils/modifyAndOpenPDF/types";

const waterTrackerCountPos = { x: 615, y: 60 },
  waterFoodListCountPos = { x: 630, y: 222 },
  listPage = 4;

const modifyWater = (pages: PDFPage[], servingSize: number, font: FontType) => {
  modifyServings(
    pages,
    listPage,
    servingSize,
    font,
    waterTrackerCountPos,
    waterFoodListCountPos,
    blue
  );

  generateCheckBoxes(560, 203, blue, 14, pages[4]);
};

export default modifyWater;
