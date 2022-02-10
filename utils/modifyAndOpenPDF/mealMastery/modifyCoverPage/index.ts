import { PDFPage } from "pdf-lib";
import { MealMasteryFormState } from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { red, white } from "../../colors";
import moment from "moment";
import { Text } from "../../types";
import positionUserNameX from "./utils/positionUserNameX";
import positionCreatedOnX from "./utils/positionCreatedOnX";
import positionDateX from "./utils/positionDateX";

interface ModifyCoverPageArgs {
  pages: PDFPage[];
  formState: MealMasteryFormState;
  font: FontType;
}

const texts = (formState: MealMasteryFormState): Text[] => [
  {
    text: `${formState.first} ${formState.last}`,
    x: positionUserNameX,
    y: 155,
    color: red,
    size: 34,
  },
  {
    text: "Created on",
    x: positionCreatedOnX,
    y: 120,
    color: white,
    size: 20,
  },
  {
    text: moment().format("MMM DD, YYYY"),
    x: positionDateX,
    y: 120,
    color: red,
    size: 20,
  },
];

const modifyCoverPage = ({ pages, formState, font }: ModifyCoverPageArgs) => {
  const coverPage = pages[0];
  const size = coverPage.getSize();

  // draw first name

  texts(formState).forEach((text) => {
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
