import type { NextApiRequest, NextApiResponse } from "next";
import uploadFile from "api/utils/google/drive/uploadFile";
import createFolder from "api/utils/google/drive/createFolder";
import moment from "moment";
import getFolder from "api/utils/google/drive/getFolder";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userName = req.query.userName;
  const filePath = req.query.filePath;
  const fileSize = req.query.fileSize;

  if (!userName) {
    res.status(422).json(`Error saving file to drive: userName param required`);
  }

  try {
    const date = moment().format("MM/DD/YYYY - HH:mm");
    const googleFileName = `${date} - ${userName} - DRESS Profile`;
    const dressFolder = await getFolder("DRESS Results");
    let userFolderId: string;
    if (dressFolder) {
      const userFolder = await getFolder(userName, dressFolder.id);
      if (userFolder) {
        userFolderId = userFolder.id;
      } else {
        const newUserFolder = await createFolder(userName, dressFolder.id);
        userFolderId = newUserFolder;
      }
    } else {
      res
        .status(500)
        .json(`Error fetching DRESS Results folder: ${error.message}`);
    }

    const fileId = await uploadFile(
      userFolderId,
      googleFileName,
      filePath,
      fileSize
    );

    res.status(200).json({ fileId });
  } catch (error) {
    res.status(500).json(`Error uploading file to drive: ${error.message}`);
  }
};

export default handler;
