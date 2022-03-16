// @ts-nocheck
import { gmailClient } from "../../apis";
import path from "path";
import listFiles from "../../drive/listFiles";
import MailComposer from "nodemailer/lib/mail-composer";
import composeRawUserMessage from "./utils/composeRawUserMessage";

interface SendUserEmailArgs {
  file: Uint8Array;
  fileName: string;
  to: {
    name: string;
    email: string;
  };
}

const sendUserEmail = async ({ file, fileName, to }: SendUserEmailArgs) => {
  const gmail = gmailClient();
  let message;
  try {
    message = await composeRawUserMessage({ file, fileName, to });
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
    if (error?.message) {
      console.log(`error sending email: ${error?.message}`);
    } else {
      console.log(`error sending email: ${error}`);
    }
    return error
  }

};

export default sendUserEmail;
