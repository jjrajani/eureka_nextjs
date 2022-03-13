import MailComposer from "nodemailer/lib/mail-composer";
import { DRESS_PDF_FILE_NAME } from "utils/constants";

export interface composeRawUserMessageArgs {
  fileName: string;
  file: Uint8Array;
  to: {
    name: string;
    email: string;
  };
}

const composeRawUserMessage = async ({
  fileName,
  file,
  to,
}: composeRawUserMessageArgs) => {
  const mail = new MailComposer({
    from: "Eureka! Holistic Nutrition <eurekanutrition@gmail.com>",
    to: `${to.name} <${to.email}>`,
    text: "Lorem ipsum...",
    subject: `🤘 ${DRESS_PDF_FILE_NAME} 🤘`,
    textEncoding: "base64",
    attachments: [
      {
        // encoded string as an attachment
        filename: fileName,
        content: file,
        encoding: "base64",
      },
    ],
  });

  const message = await new Promise((resolve, reject) => {
    return mail.compile().build(async (error, msg) => {
      if (error) {
        console.log("error", error.message);
        reject(error);
      } else {
        const encodedMessage = Buffer.from(msg)
          .toString("base64")
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
        resolve(encodedMessage);
      }
    });
  });

  return message;
};

export default composeRawUserMessage;
