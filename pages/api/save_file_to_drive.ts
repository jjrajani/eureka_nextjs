import type { NextApiRequest, NextApiResponse } from "next";
import uploadFile from "api/utils/google/drive/uploadFile";
import createFolder from "api/utils/google/drive/createFolder";
import moment from "moment";
import getFolder from "api/utils/google/drive/getFolder";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userName = req.query.userName as string;
  const filePath = req.query.filePath as string;
  const fileSize = req.query.fileSize as string;

  if (!userName) {
    res.status(422).json(`Error saving file to drive: userName param required`);
  }

  try {
    const date = moment().format("MM/DD/YYYY - HH:mm");
    const googleFileName = `${date} - ${userName} - DRESS Profile`;
    const dressFolder = await getFolder("DRESS Results");
    let userFolderId: string | false = false;
    if (dressFolder) {
      const userFolder = await getFolder(userName, dressFolder?.id as string);
      if (userFolder) {
        userFolderId = userFolder?.id as string;
      } else {
        const newUserFolder = await createFolder(
          userName,
          dressFolder?.id as string
        );
        userFolderId = newUserFolder;
      }
    } else {
      res.status(500).json(`Error fetching DRESS Results folder`);
    }

    if (userFolderId) {
      const fileId = await uploadFile(
        userFolderId as string,
        googleFileName,
        filePath
      );

      res.status(200).json({ fileId });
    } else {
      res.status(500).json(`Error fetching DRESS Results folder`);
    }
  } catch (error) {
    res.status(500).json(`Error uploading file to drive: ${error?.message}`);
  }
};

export default handler;
