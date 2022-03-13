import fs from "fs";
import readline from "readline";
import { drive } from "api/utils/google/apis";

const filePath = "public/pdfs/Conclusion_Slides.pdf";
const fileSize = fs.statSync(filePath).size;

const createFolder = async (folderName: string, parentId?: string) => {
  try {
    const res = await drive.files.create(
      {
        resource: {
          name: folderName,
          mimeType: "application/vnd.google-apps.folder",
          ...(parentId ? { parents: [parentId] } : {}),
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
    // console.log("res", res.data);
    return res.data.id;
  } catch (error) {
    console.log("error", error.message);
  }
};

export default createFolder;
