import { MetabolicMasteryFormState } from "types/types";
import validateUserInfo from "components/organisms/UserInfoModal/utils/validateForm";

const isValidNumber = (val: string) => (parseInt(val, 10) || -1) >= 0;
const isValidSelect = (val: string = "") =>
  val !== "none" && val?.trim().length > 0;

const validate = (vals: MetabolicMasteryFormState) => {
  const errors: { [key in keyof MetabolicMasteryFormState]?: string } = {};
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
  if (!isValidSelect(vals?.restRx)) {
    errors.restRx = "Required";
  }
  if (!isValidSelect(vals?.exerciseFitt)) {
    errors.exerciseFitt = "Required";
  }
  if (!isValidSelect(vals?.rhr)) {
    errors.rhr = "Required";
  }
  if (!isValidSelect(vals?.stress)) {
    errors.stress = "Required";
  }

  return { ...errors, ...validateUserInfo(vals) };
};

export default validate;
