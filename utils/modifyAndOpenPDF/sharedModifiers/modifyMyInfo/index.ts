// my info age block start x 104 y 412.75 height 31 width 166.5
// activity level block start x 453.5 y 412 width 314.25 height 26
import { red } from "utils/modifyAndOpenPDF/colors";
import {
  Activity,
  DietPreference,
  Gender,
  Goal,
  MealMasteryFormState,
} from "types/types";
import { FontType } from "utils/modifyAndOpenPDF/types";
import { PDFPage } from "pdf-lib";
import {
  genderText,
  activityLevelText,
  goalText,
  dietPrefText,
} from "cms/strings";

const firstRowY = 288.5,
  secondRowY = 260,
  thirdRowY = 231.5,
  fourthRowY = 203,
  color = red;

const texts = (info: MealMasteryFormState) => [
  // Age
  {
    text: info.age,
    x: 171.75,
    y: firstRowY,
  },
  // Gender
  {
    text: genderText[info.gender as Gender],
    x: () => (info.gender === Gender.FEMALE ? 151 : 160),
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
    text: activityLevelText[info.activity as Activity],
    x: () => {
      if (info.activity === Activity.LOW) {
        return 538;
      } else if (info.activity === Activity.MODERATE) {
        return 518;
      } else if (info.activity === Activity.HIGH) {
        return 532;
      } else if (info.activity === Activity.NONE) {
        return 532;
      }
    },
    y: firstRowY,
  },
  // Goal
  {
    text: goalText[info.goal as Goal],
    x: () => {
      if (info.goal === Goal.BODY_RECOMP) {
        return 475;
      } else if (info.goal === Goal.WEIGHT_LOSS) {
        return 507;
      } else if (info.goal === Goal.WEIGHT_SUSTAIN) {
        return 495;
      } else if (info.goal === Goal.WEIGHT_GAIN) {
        return 506;
      } else if (info.goal === Goal.IMPROVE_HEALTH) {
        return 495;
      }
    },
    y: secondRowY,
  },
  // Diet Preference
  {
    text: dietPrefText[info.dietPreference as DietPreference],
    x: () => {
      if (info.dietPreference === DietPreference.PROTIEN) {
        return 525;
      } else if (info.dietPreference === DietPreference.CARB) {
        return 535;
      } else if (info.dietPreference === DietPreference.MIXED) {
        return 530;
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
  info: MealMasteryFormState,
  font: FontType
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
