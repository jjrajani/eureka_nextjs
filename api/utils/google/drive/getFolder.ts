import fs from "fs";
import readline from "readline";
import { drive } from "api/utils/google/apis";

const filePath = "public/pdfs/Conclusion_Slides.pdf";
const fileSize = fs.statSync(filePath).size;

const getFolder = async (folderName: string, parentId?: string) => {
  try {
    let q = `mimeType = 'application/vnd.google-apps.folder' and name contains '${folderName}' and trashed = false`;
    if (parentId) {
      q = `${q} and '${parentId}' in parents`;
    }
    const res = await drive.files.list({ q });
    if (res.data.files.length === 0) {
      return false;
    } else if (res.data.files.length === 1) {
      return res.data.files[0];
    } else {
      console.log("more than 1 folder with that name");
      return false;
    }
    return res.data.id;
  } catch (error) {
    console.log("error", error.message);
  }
};

export default getFolder;
