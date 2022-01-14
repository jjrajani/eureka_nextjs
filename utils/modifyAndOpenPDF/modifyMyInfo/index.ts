// my info age block start x 104 y 412.75 height 31 width 166.5
// activity level block start x 453.5 y 412 width 314.25 height 26
import { red } from "../colors";
import {
  Activity,
  DietPreference,
  Gender,
  Goal,
  MealMasteryFormState,
  MetabolicMasteryFormState,
} from "types/types";
import { PDFFont, PDFPage } from "pdf-lib";

type FormState = MealMasteryFormState | MetabolicMasteryFormState;

const firstRowY = 394,
  secondRowY = 361.5,
  thirdRowY = 328.5,
  fourthRowY = 295.5,
  color = red;

const texts = (info: FormState) => [
  // Age
  {
    text: info.age,
    x: 171.75,
    y: firstRowY,
  },
  // Gender
  {
    text: info.gender,
    x: () => (info.gender === Gender.FEMALE ? 151.5 : 160.5),
    y: secondRowY,
  },
  // Height
  {
    text: `${info.heightFt}’ ${info.heightIn}”`,
    x: () => (`${info.heightIn}`.length === 1 ? 164 : 160),
    y: thirdRowY,
  },
  // Weight
  {
    text: `${info.weight} lbs`,
    x: () => (`${info.weight}`.length === 3 ? 153 : 158),
    y: fourthRowY,
  },
  // Activity Level
  {
    text: info.activity,
    x: () => {
      if (info.activity === Activity.MODERATE) {
        return 566.25;
      } else if (info.activity === Activity.LOW) {
        return 592;
      } else if (info.activity === Activity.HIGH) {
        return 588;
      }
    },
    y: firstRowY,
  },
  // Goal
  {
    text: info.goal,
    x: () => {
      if (info.goal === Goal.BODY_RECOMP) {
        return 523.5;
      } else if (info.goal === Goal.WEIGHT_LOSS) {
        return 561;
      } else if (info.goal === Goal.IMPROVE_HEALTH) {
        return 548;
      }
    },
    y: secondRowY,
  },
  // Diet Preference
  {
    text: info.dietPreference,
    x: () => {
      if (info.dietPreference === DietPreference.KETO) {
        return 548;
      } else if (info.dietPreference === DietPreference.VEGETARIAN) {
        return 566;
      } else if (info.dietPreference === DietPreference.VEGAN) {
        return 579;
      } else if (info.dietPreference === DietPreference.ANYTHING) {
        return 572;
      } else if (info.dietPreference === DietPreference.PESCATARIAN) {
        return 562;
      } else if (info.dietPreference === DietPreference.LOW_CARB) {
        return 570;
      } else if (info.dietPreference === DietPreference.GLUTEN_FREE) {
        return 561;
      } else if (info.dietPreference === DietPreference.ETHNIC_SPECIFIC) {
        return 549;
      }
    },
    y: thirdRowY,
  },
  // Water
  {
    text: info.water,
    x: () => (`${info.water}`.length === 1 ? 550.75 : 545.75),
    y: fourthRowY,
  },
];

const modifyMyInfo = (
  page: PDFPage,
  info: FormState,
  font: { bold: PDFFont }
) => {
  texts(info).forEach((text) => {
    page.drawText(`${text.text}`, {
      x: typeof text.x === "function" ? text.x() : text.x,
      y: text.y,
      size: 18,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyInfo;
