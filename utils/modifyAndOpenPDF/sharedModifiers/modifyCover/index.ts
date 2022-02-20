import { PDFPage } from "pdf-lib";
import { MealMasteryFormState } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { red, white } from "utils/modifyAndOpenPDF/colors";
import moment from "moment";
import { Text } from "utils/modifyAndOpenPDF/types";
import {
  positionUserNameX,
  positionUserNameY,
} from "./utils/positionUserNameX";
import {
  positionCreatedOnX,
  positionCreatedOnY,
} from "./utils/positionCreatedOnX";
import { positionDateX, positionDateY } from "./utils/positionDateX";
import { CoverPage } from "utils/modifyAndOpenPDF/types";

interface ModifyCoverPageArgs {
  pages: PDFPage[];
  formState: MealMasteryFormState;
  font: FontType;
  type: CoverPage;
}

const texts = (formState: MealMasteryFormState, type: CoverPage): Text[] => [
  {
    text: `${formState.first} ${formState.last}`,
    x: positionUserNameX,
    y: positionUserNameY(type),
    // y: 155,
    color: red,
    size: 34,
  },
  {
    text: "Created on",
    x: positionCreatedOnX,
    y: positionCreatedOnY(type),
    // y: 120,
    color: white,
    size: 20,
  },
  {
    text: moment().format("MMM DD, YYYY"),
    x: positionDateX,
    y: positionDateY(type),
    // y: 120,
    color: red,
    size: 20,
  },
];

const modifyCoverPage = ({
  pages,
  formState,
  font,
  type,
}: ModifyCoverPageArgs) => {
  const coverPage = pages[0];
  const size = coverPage.getSize();

  // draw first name

  texts(formState, type).forEach((text) => {
    coverPage.drawText(`${text.text}`, {
      x:
        typeof text.x === "number"
          ? text.x
          : text.x({
              text,
              font,
              pageWidth: size.width,
            }),
      y: text.y,
      size: text.size,
      font: font.bold,
      color: text.color,
    });
  });
};

export default modifyCoverPage;
