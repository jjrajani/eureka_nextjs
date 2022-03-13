import type { NextApiRequest, NextApiResponse } from "next";
import { Duplex } from "stream";
import modifyAndOpenMyDressProfilePDF from "utils/modifyAndOpenPDF/myDressProfile/modifyAndOpenMyDressProfilePDF";
import sendEmail from "api/utils/google/gmail/sendEmail/sendEmail";
import validator from "validator";
import uploadFile from "api/utils/google/drive/uploadFile";
import createFolder from "api/utils/google/drive/createFolder";
import { DRESS_PDF_FILE_NAME } from "utils/constants";
import moment from "moment";
import {
  handleInputError,
  handleMissingFieldsError,
} from "api/routes/sendFile/utils";
import getFolder from "api/utils/google/drive/getFolder";

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
  try {
    file = await modifyAndOpenMyDressProfilePDF(results, userInput);
  } catch (error) {
    res.status(500).json(`Error generating pdf: ${error.message}`);
  }

  try {
    await sendEmail({
      fileName: DRESS_PDF_FILE_NAME,
      file,
      to: { name, email: `${userInput.email}` },
    });
  } catch (error) {
    console.log(`error sending email ${error.message}`);
  }

  let stream = new Duplex();
  stream.push(file);
  stream.push(null);
  try {
    const date = moment().format("MM/DD/YYYY - HH:mm");
    const googleFileName = `${date} - ${name} - DRESS Profile`;
    const dressFolder = await getFolder("DRESS Results");
    let userFolderId: string;
    if (dressFolder) {
      const userFolder = await getFolder(name, dressFolder.id);
      if (userFolder) {
        userFolderId = userFolder.id;
      } else {
        const newUserFolder = await createFolder(name, dressFolder.id);
        userFolderId = newUserFolder;
      }
    } else {
      res
        .status(500)
        .json(`Error fetching DRESS Results folder: ${error.message}`);
    }
    console.log("googleFileName", googleFileName);
    console.log("userFolderId", userFolderId);

    uploadFile(userFolderId, googleFileName, stream);
  } catch (error) {
    console.log(`error uploading file to drive: ${error.message}`);
  }
  // console.log("SUCCESS");
  stream.pipe(res);
  res.status(200).json({ success: "Yay" });
};

export default handler;
