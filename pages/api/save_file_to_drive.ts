import type { NextApiRequest, NextApiResponse } from "next";
import uploadFile from "api/utils/google/drive/uploadFile";
import createFolder from "api/utils/google/drive/createFolder";
import moment from "moment";
import getDressFolder from "api/utils/google/drive/getDressFolder";
import getUserFolder from "api/utils/google/drive/getUserFolder";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const userName = req.query.userName as string;
  const email = req.query.email as string;
  const filePath = req.query.filePath as string;

  if (!userName) {
    res.status(422).json(`Error saving file to drive: userName param required`);
    return;
  }

  try {
    const date = moment().format("MM/DD/YYYY - HH:mm");
    const googleFileName = `${date} - ${userName} - DRESS Profile`;
    const dressFolder = await getDressFolder();
    let userFolderId: string | false = false;
    if (dressFolder) {
      const userFolderName = `${userName} ${email}`
      const userFolder = await getUserFolder(userFolderName);
      if (userFolder) {
        userFolderId = userFolder?.id as string;
      } else {
        const newUserFolder = await createFolder(
          userFolderName,
        );
        userFolderId = newUserFolder;
      }
    } else {
      res.status(500).json(`Error fetching DRESS Results folder`);
      return;
    }

    if (userFolderId) {
      const fileId = await uploadFile(
        userFolderId as string,
        googleFileName,
        filePath
      );

      res.status(200).json({ fileId });
      return;
    } else {
      res.status(500).json(`Error fetching DRESS Results folder`);
      return;
    }
  } catch (error) {
    res.status(500).json(`Error uploading file to drive: ${error?.message}`);
    return;
  }
};

export default handler;
