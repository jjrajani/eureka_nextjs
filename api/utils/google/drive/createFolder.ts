// @ts-nocheck
import fs from "fs";
import readline from "readline";
import { driveClient } from "api/utils/google/apis";
import {DRESSResultsFolderId} from 'utils/constants';

const filePath = "public/pdfs/Conclusion_Slides.pdf";
const fileSize = fs.statSync(filePath).size;

const createFolder = async (folderName: string) => {
  const drive = driveClient();

  try {
    const res = await drive.files.create(
      {
        resource: {
          name: folderName,
          mimeType: "application/vnd.google-apps.folder",
          parents: [DRESSResultsFolderId],
        },
      },
      {
        // Use the `onUploadProgress` event from Axios to track the
        // number of bytes uploaded to this point.
        onUploadProgress: (evt: any) => {
          const progress = (evt.bytesRead / fileSize) * 100;
          readline.clearLine(process.stdout, 0);
          readline.cursorTo(process.stdout, 0);
          process.stdout.write(`${Math.round(progress)}% complete`);
        },
      }
    );
    return res?.data?.id;
  } catch (error) {
    if (error?.mesage) {
      console.log("error", error?.message);
    } else {
      console.log("error", error);
    }
  }
};

export default createFolder;
