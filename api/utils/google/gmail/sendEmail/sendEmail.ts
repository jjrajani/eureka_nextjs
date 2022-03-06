import { gmail } from "../../apis";
import path from "path";
import listFiles from "../../drive/listFiles";
import MailComposer, {
  ComposeRawMessageArgs,
} from "nodemailer/lib/mail-composer";
import composeRawMessage from "./utils/composeRawMessage";

interface SendEmailArgs extends ComposeRawMessageArgs {}

const sendEmail = async ({ file, fileName, to }: SendEmailArgs) => {
  let message;
  try {
    message = await composeRawMessage({ file, fileName, to });
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

export default sendEmail;
