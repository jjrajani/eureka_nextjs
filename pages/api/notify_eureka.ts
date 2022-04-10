import type { NextApiRequest, NextApiResponse } from "next";
import { driveClient } from "api/utils/google/apis";
import sendEurekaEmail from "api/utils/google/gmail/sendEmail/sendEurekaEmail";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const drive = driveClient();
  const fileId = req.query.fileId as string;
  const userName = req.query.userName as string;
  const userEmail = req.query.userEmail as string;

  const fileRes = await drive.files.get({
    fileId,
    fields: "parents, name, webViewLink",
  });
  if (fileRes) {
    // @ts-ignore
    let parent = fileRes?.data?.parents[0] || false;
    let fileLink = fileRes?.data?.webViewLink;
    if (parent && fileLink) {
      const folderLink = `https://drive.google.com/drive/folders/${parent}`;
      await sendEurekaEmail({
        fileLink,
        folderLink,
        userEmail,
        userName,
      });
      res.status(200).json("eureka notified");
      return;
    } else {
      res.status(500).json("error notifying eureka");
      return;
    }
  } else {
    res.status(500).json("error notifying eureka");
    return;
  }
};

export default handler;
