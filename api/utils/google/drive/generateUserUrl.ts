// @ts-nocheck
import { driveClient } from "api/utils/google/apis";

const generateUserUrl = async (userEmail: string, fileId: string) => {
  const drive = driveClient();

  await drive.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "user",
      emailAddress: userEmail,
    },
  });

  const res = await drive.files.get({
    fileId,
    fields: ["webViewLink", "webContentLink"],
  });

  return res.data;
};

export default generateUserUrl;
