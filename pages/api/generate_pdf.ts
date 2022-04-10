import type { NextApiRequest, NextApiResponse } from "next";
import modifyAndOpenMyDressProfilePDF from "utils/modifyAndOpenPDF/MyDressProfile/modifyAndOpenMyDressProfilePDF";
import {
  handleInputError,
  handleMissingFieldsError,
} from "api/routes/sendFile/utils";
import { createTempFile } from "api/routes/generate_pdf/utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const baseUrl = req.headers.referer || "http://localhost:3000";
  console.log('baseUrl', baseUrl);
  handleInputError(req, res);
  let results, userInput;
  try {
    results = JSON.parse(req.query.results as string);
    userInput = JSON.parse(req.query.userInput as string);
  } catch (error) {
    res.status(422).json(`Error parsing query params: ${error?.message}`);
    return;
  }

  handleMissingFieldsError(userInput, res);

  let file: Uint8Array;
  try {
    file = await modifyAndOpenMyDressProfilePDF({baseUrl, results, userInput});

    const filePath = await createTempFile(file);
    if (filePath) {
      res.status(200).json({ filePath });
      return;
    } else {
      res.status(500).json(`Error generating file`);
      return;
    }

    // If we don't need the file anymore we could manually call the cleanupCallback
    // But that is not necessary if we didn't pass the keep option because the library
    // will clean after itself.
    // cleanupCallback();
  } catch (error) {
    console.log('error', error)
    res.status(500).json(`Error generating pdf: ${error?.message}`);
    return;
  }
};

export default handler;
