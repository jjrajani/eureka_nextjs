import { RGB } from "pdf-lib";

const servingTrackerSectionHeight = 28,
  servingTrackerSectionWidth = 150, // 156
  boxHeight = 10,
  boxWidth = 10,
  boxSpacing = 6,
  boxBorderWidth = 1,
  tableBoderWidth = 0.25;

const generateSingleLineCheckBoxes = (
  startX: number,
  startY: number,
  color: RGB,
  boxCount: number,
  page: any,
  offsetCount?: number
) => {
  offsetCount = offsetCount === undefined ? boxCount : offsetCount;
  let boxesWidth = (boxWidth + boxSpacing) * offsetCount;
  let sideMargin = servingTrackerSectionWidth - boxesWidth;
  let x = startX; // + sideMargin;
  let y = (-1 * (servingTrackerSectionHeight - boxHeight)) / 2 + startY;
  sideMargin = sideMargin / 2;

  for (let day = 0; day < 7; day++) {
    if (day !== 0) {
      y -= servingTrackerSectionHeight + tableBoderWidth;
    }

    for (let box = 0; box < boxCount; box++) {
      if (box !== 0) {
        x += boxSpacing + boxWidth;
      } else {
        x = startX + sideMargin;
      }

      page.drawRectangle({
        borderColor: color,
        borderWidth: boxBorderWidth,
        height: boxHeight,
        width: boxWidth,
        x,
        y,
      });
    }
  }
};

const generateMultilineCheckBoxes = (
  startX: number,
  startY: number,
  color: RGB,
  boxCount: number,
  page: any
) => {
  let secondGroupCount = boxCount - 8;
  let firstGroupCount = boxCount - secondGroupCount;
  let firstStartY = servingTrackerSectionHeight / 2 - 7.75 + startY;
  let secondStartY = -servingTrackerSectionHeight / 2 + 7.75 + startY;
  generateSingleLineCheckBoxes(
    startX,
    firstStartY,
    color,
    firstGroupCount,
    page,
    firstGroupCount
  );
  generateSingleLineCheckBoxes(
    startX,
    secondStartY,
    color,
    secondGroupCount,
    page,
    firstGroupCount
  );
};

const generateCheckBoxes = (
  startX: number,
  startY: number,
  color: RGB,
  boxCount: number,
  page: any
) => {
  if (boxCount > 10) {
    generateMultilineCheckBoxes(startX, startY, color, boxCount, page);
  } else {
    generateSingleLineCheckBoxes(startX, startY, color, boxCount, page);
  }
};

export default generateCheckBoxes;
