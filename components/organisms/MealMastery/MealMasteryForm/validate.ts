import validateUserInfo from "components/organisms/UserInfoModal/utils/validateForm";
import { MealMasteryFormState } from "types/types";

const isValidNumber = (val: string) => (parseInt(val, 10) || -1) >= 0;
const isValidSelect = (val: string = "") => {
  console.log("val", val);
  return val !== "null" && val?.trim().length > 0;
};

const validate = (vals: MealMasteryFormState) => {
  const errors: { [key in keyof MealMasteryFormState]?: string } = {};
  if (!isValidNumber(vals?.age)) {
    errors.age = "Required";
  }
  if (!isValidSelect(vals?.gender)) {
    errors.gender = "Required";
  }
  if (!isValidNumber(vals?.weight)) {
    errors.weight = "Required";
  }
  if (!isValidNumber(vals?.heightFt)) {
    errors.heightFt = "Required";
  }
  if (!isValidNumber(vals?.heightIn)) {
    errors.heightIn = "Required";
  }
  if (!isValidNumber(vals?.water)) {
    errors.water = "Required";
  }
  if (!isValidSelect(vals?.activity)) {
    errors.activity = "Required";
  }
  if (!isValidSelect(vals?.goal)) {
    errors.goal = "Required";
  }
  if (!isValidSelect(vals?.dietPreference)) {
    errors.dietPreference = "Required";
  }
  if (!isValidSelect(vals?.supplementType)) {
    errors.supplementType = "Required";
  }

  return { ...errors, ...validateUserInfo(vals) };
};

export default validate;
