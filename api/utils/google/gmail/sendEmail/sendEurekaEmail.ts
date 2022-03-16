// @ts-nocheck
import { gmailClient } from "../../apis";
import path from "path";
import listFiles from "../../drive/listFiles";
import MailComposer from "nodemailer/lib/mail-composer";
import composeRawEurekaMessage from "./utils/composeRawEurekaMessage";

interface SendEurekaEmailArgs {
  fileLink: string;
  folderLink: string;
  userName: string;
}

const sendEurekaEmail = async ({
  fileLink,
  folderLink,
  userName,
}: SendEurekaEmailArgs) => {
  const gmail = gmailClient();
  let message;
  try {
    message = await composeRawEurekaMessage({ fileLink, folderLink, userName });
  } catch (error) {
    console.log(`error composing email: ${error?.message}`);
  }

  try {
    const res = await gmail?.users?.messages?.send({
      userId: "me",
      requestBody: {
        raw: message,
      },
    });
    return res?.data
  } catch (error) {
    console.log(`error sending email: ${error?.message}`);
    return error
  }

};

export default sendEurekaEmail;
