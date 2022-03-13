import type { NextApiRequest, NextApiResponse } from "next";
import { drive } from "api/utils/google/apis";
import sendEurekaEmail from "api/utils/google/gmail/sendEmail/sendEurekaEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const fileId = req.query.fileId;
  const userName = req.query.userName;

  const fileRes = await drive.files.get({
    fileId,
    fields: "parents, name, webViewLink",
  });
  const driveFolderUrl = `https://drive.google.com/drive/folders/${fileRes.data.parents[0]}`;

  sendEurekaEmail({
    fileLink: fileRes.data.webViewLink,
    folderLink: driveFolderUrl,
    userName,
  });
  res.status(200).json("eureka notified");
};

export default handler;
