import { gmail } from "../apis";
import path from "path";

const sendEmail = async () => {
  // You can use UTF-8 encoding for the subject using the method below.
  // You can also just use a plain string if you don't need anything fancy.
  const subject = "🤘 Hello.  Bananas 🤘";
  const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString("base64")}?=`;
  const messageParts = [
    "From: ME <ME@gmail.com>",
    "To: YOU <jjrajani@gmail.com>",
    "Content-Type: text/html; charset=utf-8",
    "MIME-Version: 1.0",
    `Subject: ${utf8Subject}`,
    "",
    "This is a message just to say hello.",
    "So... <b>Hello!</b>  🤘❤️😎",
  ];
  const message = messageParts.join("\n");

  // The body needs to be base64url encoded.
  const encodedMessage = Buffer.from(message)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const res = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: encodedMessage,
    },
  });
  console.log(res.data);
  return res.data;
};

export default sendEmail;
