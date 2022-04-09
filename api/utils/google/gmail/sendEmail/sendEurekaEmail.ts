// @ts-nocheck
import { gmailClient } from "api/utils/google/apis";
import composeRawEurekaMessage from "api/utils/google/gmail/sendEmail/utils/composeRawEurekaMessage";

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
