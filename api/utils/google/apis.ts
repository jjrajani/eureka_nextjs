import { google } from "googleapis";
import path from 'path'

const scopes = [
  "https://www.googleapis.com/auth/drive",
  "https://mail.google.com/",
  "https://www.googleapis.com/auth/gmail.compose",
  "https://www.googleapis.com/auth/gmail.metadata",
  "https://www.googleapis.com/auth/gmail.modify",
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/gmail.send",
]

const jwtClient = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL as string,
  key: process.env.GOOGLE_PRIVATE_KEY as string,
  scopes,
  subject: "karen@eurekaholisticnutrition.com",
  keyId: process.env.GOOGLE_PRIVATE_KEY_ID as string
});

jwtClient.authorize(function (err, tokens) {
 if (err) {
   console.log(err);
   return;
 } else {
   console.log("Successfully connected!");
 }
});


const driveClient = () => {
  return google.drive({
    version: "v3",
    auth: jwtClient,
  })
};

const gmailClient = () =>  {
  return google.gmail({
    version: "v1",
    auth: jwtClient,
  })
};

export { driveClient, gmailClient };
