import readline from "readline";
import { drive } from "api/utils/google/apis";
import { Duplex } from "stream";
import fs from "node:fs";

const uploadFile = async (
  folderId: string,
  googleFileName: string,
  filePath: string
) => {
  try {
    const fileSize = fs.statSync(filePath).size;
    const res = await drive.files.create(
      {
        requestBody: {
          name: googleFileName,
          mimeType: "application/pdf",
          parents: [folderId],
        },
        media: {
          mimeType: "application/pdf",
          body: fs.createReadStream(filePath),
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
    console.log("res", res.data);
    return res.data.id;
  } catch (error) {
    console.log("error", error.message);
  }
};

export default uploadFile;
