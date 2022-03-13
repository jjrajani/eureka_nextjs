import type { NextApiRequest, NextApiResponse } from "next";
import modifyAndOpenMyDressProfilePDF from "utils/modifyAndOpenPDF/myDressProfile/modifyAndOpenMyDressProfilePDF";
import {
  handleInputError,
  handleMissingFieldsError,
} from "api/routes/sendFile/utils";
import { createTempFile } from "api/routes/generate_pdf/utils";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  handleInputError(req);
  let results, userInput;
  try {
    results = JSON.parse(req.query.results);
    userInput = JSON.parse(req.query.userInput);
  } catch (error) {
    res.status(422).json(`Error parsing query params: ${error.message}`);
  }

  handleMissingFieldsError(userInput);
  const name = `${userInput.first} ${userInput.last}`.trim();

  let file: Uint8Array;
  let filePath;
  try {
    file = await modifyAndOpenMyDressProfilePDF(results, userInput);

    const filePath = await createTempFile(file);
    if (filePath) {
      res.status(200).json({ filePath });
    } else {
      res.status(500).json(`Error generating file: ${error.message}`);
    }

    // If we don't need the file anymore we could manually call the cleanupCallback
    // But that is not necessary if we didn't pass the keep option because the library
    // will clean after itself.
    // cleanupCallback();
  } catch (error) {
    res.status(500).json(`Error generating pdf: ${error.message}`);
  }
};

export default handler;
