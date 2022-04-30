import { MyDressProfileCalculatorResult } from 'types/types';
import { FontType } from 'utils/modifyAndOpenPDF/types';
import { PDFPage, PDFFont } from 'pdf-lib';
import { Text } from 'utils/modifyAndOpenPDF/types';
import { red } from 'utils/modifyAndOpenPDF/colors';

const color = red,
  y = 277;

interface YellowArgs {
  text: string;
  row: number;
  font: PDFFont;
  fontSize: number;
}
// const getYellowBoxPlacement = ({
//   text,
//   row = 0,
//   font,
//   fontSize,
// }: YellowArgs) => {
//   const rowHeight = 29;
//   const colWidth = 150;
//   const textHeight = font.heightAtSize(fontSize);
//   const textBuffer = (rowHeight - textHeight) / 2;
//   const rowOffset = rowHeight * row;
//   let y = 279 + textBuffer + 2 - rowOffset;
//   if (row > 2) {
//     y -= 1;
//   }
//   const textWidth = font.widthOfTextAtSize(text, fontSize);
//
//   const buffer = (colWidth - textWidth) / 2;
//   return {
//     x: 111 + buffer,
//     y,
//   };
// };

const texts = (results: MyDressProfileCalculatorResult): Partial<Text>[] => {
  const totalDuration = results.exerciseFitt.duration;
  const { percent: strengthPercent, duration: strengthDuration } =
    results.exerciseFitt.strength;
  const { percent: endurancePercent, duration: enduranceDuration } =
    results.exerciseFitt.endurance;
  const { percent: flexibilityPercent, duration: flexibilityDuration } =
    results.exerciseFitt.flexibility;

  return [
    // Strength
    {
      x: 518,
      y: 304,
      text: `${strengthPercent}%    Strength`,
    },
    // Strength mins
    {
      x: 602,
      y: 304,
      text: `(${strengthDuration} min / ${totalDuration} min)`,
      size: 10,
    },
    // Endurance
    {
      x: 518,
      y: 289,
      text: `${endurancePercent}%    Endurance`,
    },
    // Endurance mins
    {
      x: 613,
      y: 289,
      text: `(${enduranceDuration} min / ${totalDuration} min)`,
      size: 10,
    },
    // Flexibility
    {
      x: 518,
      y: 274,
      text: `${flexibilityPercent}%    Flexibility`,
    },
    // Flexibility mins
    {
      x: 609,
      y: 274,
      text: `(${flexibilityDuration} min / ${totalDuration} min)`,
      size: 10,
    },
  ];
};

const modifyDressProfile = ({
  page,
  results,
  font,
}: {
  page: PDFPage;
  results: MyDressProfileCalculatorResult;
  font: FontType;
}) => {
  texts(results).forEach((text: Partial<Text>) => {
    page.drawText(`${text.text}`, {
      x: text.x as number,
      y: text?.y || y,
      size: text?.size || 12,
      font: text?.font || font.regular,
      color: text?.color || color,
    });
  });
};

export default modifyDressProfile;
