import { Duplex } from "stream";
import modifyAndOpenMyDressProfilePDF from "utils/modifyAndOpenPDF/myDressProfile/modifyAndOpenMyDressProfilePDF";
import sendEmail from "api/utils/google/gmail/sendEmail/sendEmail";
import validator from "validator";
import uploadFile from "api/utils/google/drive/uploadFile";
import createFolder from "api/utils/google/drive/createFolder";
import { DRESS_PDF_FILE_NAME } from "utils/constants";
import moment from "moment";

const handleInputError = (req) => {
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
        `Error generating PDF - results: ${error.results}, userInput: ${errors.userInput}`
      );
  }
};

const handleMissingFieldsError = (userInput) => {
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

const handler = async (req, res) => {
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

  let file;
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
    console.log("googleFileName", googleFileName);
    const folderId = await createFolder("Mine");
    // console.log("folder", folder);
    // uploadFile(folderId, googleFileName, stream);
    uploadFile(googleFileName, stream);
  } catch (error) {
    console.log(`error uploading file to drive: ${error.message}`);
  }
  console.log("SUCCESS");
  stream.pipe(res);
};

export default handler;
