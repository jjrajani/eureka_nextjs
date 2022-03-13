import type { NextApiResponse } from "next";
import validator from "validator";
import { MyDressProfileFormState } from "types/types";

const handleMissingFieldsError = (
  userInput: MyDressProfileFormState,
  res: NextApiResponse
) => {
  if (!userInput.first && !userInput.last) {
    res.status(422).json(`Error generating PDF: Missing first and last name`);
  }
  if (!userInput.email) {
    res.status(422).json(`Error generating PDF: Missing email`);
  }
  if (!validator.isEmail(userInput.email)) {
    res
      .status(422)
      .json(`Error generating PDF: Invalid email ${userInput.email}`);
  }
};

export default handleMissingFieldsError;
