import { google } from "googleapis";
import path from "path";
import auth from "./auth";

// const auth = new google.auth.GoogleAuth({
//   // Scopes can be specified either as an array or as a single, space-delimited string.
//   keyFilename: path.join(__dirname, "../../../../google_docs_key.json"),
//   scopes: [
//     "https://mail.google.com/",
//     "https://www.googleapis.com/auth/gmail.compose",
//     "https://www.googleapis.com/auth/gmail.metadata",
//     "https://www.googleapis.com/auth/gmail.modify",
//     "https://www.googleapis.com/auth/gmail.readonly",
//   ],
// });
//
// const initGoogleAuth = async () => {
//   // Acquire an auth client, and bind it to all future calls
//   const authClient = await auth.getClient();
//   google.options({ auth: authClient });
// };

const drive = google.drive({
  version: "v3",
  auth,
});

const gmail = google.gmail({
  version: "v1",
  auth,
});

export { drive, gmail };
