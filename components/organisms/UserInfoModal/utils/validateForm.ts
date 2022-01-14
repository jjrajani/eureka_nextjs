import { UserFormState } from "types/types";
import isEmail from "validator/lib/isEmail";

const validate = (vals: UserFormState) => {
  const errors: Partial<UserFormState> = {};
  if (!vals?.first || vals?.first?.trim()?.length === 0) {
    errors.first = "Required";
  }
  if (!vals?.last || vals?.last?.trim()?.length === 0) {
    errors.last = "Required";
  }
  if (!vals?.email || vals?.email?.trim()?.length === 0) {
    errors.email = "Required";
  } else if (!isEmail(vals?.email)) {
    errors.email = "Please enter a valid email";
  }

  return errors;
};

export default validate;
