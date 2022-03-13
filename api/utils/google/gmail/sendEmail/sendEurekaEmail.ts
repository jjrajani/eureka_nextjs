import { gmail } from "../../apis";
import path from "path";
import listFiles from "../../drive/listFiles";
import MailComposer, {
  composeRawMessageArgs,
} from "nodemailer/lib/mail-composer";
import composeRawEurekaMessage from "./utils/composeRawEurekaMessage";

interface SendEurekaEmailArgs extends composeRawMessageArgs {
  fileLink: string;
  folderLink: string;
  userName: string;
}

const sendEurekaEmail = async ({
  fileLink,
  folderLink,
  userName,
}: SendEurekaEmailArgs) => {
  let message;
  try {
    message = await composeRawEurekaMessage({ fileLink, folderLink, userName });
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

export default sendEurekaEmail;
