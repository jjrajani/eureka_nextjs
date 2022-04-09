import MailComposer from "nodemailer/lib/mail-composer";
import userEmailTemplate from '../templates/userEmailTemplate';

export interface composeRawUserMessageArgs {
  fileName: string;
  file: Buffer;
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
    from: "Eureka! Holistic Nutrition <connect@eurekaholisticnutrition.com>",
    to: `${to.name} <${to.email}>`,
    html: userEmailTemplate,
    subject: `My D.R.E.S.S. Profile Results`,
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
    return mail.compile().build(async (error: any, msg: any) => {
      if (error) {
        if (error?.mesage) {
          console.log("error", error?.message);
        } else {
          console.log("error", error);
        }
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
