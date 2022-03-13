import type { NextApiRequest, NextApiResponse } from "next";

const handleInputError = (req: NextApiRequest, res: NextApiResponse) => {
  const resultsString = req.query.results;
  const userInputString = req.query.userInput;
  if (!resultsString || !userInputString) {
    let error = {
      results: "No Error",
      userInput: "No Error",
    };
    if (!resultsString) {
      error.results = "Form results required";
    }
    if (!userInputString) {
      error.userInput = "Form input required";
    }

    res
      .status(422)
      .json(
        `Error generating PDF - results: ${error.results}, userInput: ${error.userInput}`
      );
  }
};

export default handleInputError;
