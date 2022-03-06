import { google, drive_v3, gmail_v1 } from "googleapis";
import path from "path";
import auth from "./auth";

const drive: drive_v3.Drive = google.drive({
  version: "v3",
  auth,
});

const gmail: gmail_v1.Gmail = google.gmail({
  version: "v1",
  auth,
});

export { drive, gmail };
