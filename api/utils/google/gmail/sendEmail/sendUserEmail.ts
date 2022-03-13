import { gmail } from "../../apis";
import path from "path";
import listFiles from "../../drive/listFiles";
import MailComposer, {
  composeRawMessageArgs,
} from "nodemailer/lib/mail-composer";
import composeRawUserMessage from "./utils/composeRawUserMessage";

interface SendUserEmailArgs extends composeRawMessageArgs {
  file: Uint8Array;
  fileName: string;
  to: string;
}

const sendUserEmail = async ({ file, fileName, to }: SendUserEmailArgs) => {
  let message;
  try {
    message = await composeRawUserMessage({ file, fileName, to });
  } catch (error) {
    console.log(`error composing email: ${error.message}`);
  }

  let res;
  try {
    res = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: message,
      },
    });
  } catch (error) {
    console.log(`error sending email: ${error.message}`);
  }

  return res.data;
};

export default sendUserEmail;
