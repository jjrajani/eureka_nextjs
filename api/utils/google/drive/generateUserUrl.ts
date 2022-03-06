import { drive } from "api/utils/google/apis";

const generateUserUrl = async (userEmail: string, fileId: string) => {
  await drive.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "user",
      emailAddress: userEmail,
    },
  });

  // @ts-ignore
  const res = await drive.files.get({
    fileId,
    fields: ["webViewLink", "webContentLink"],
  });

  // @ts-ignore
  return res.data;
};

export default generateUserUrl;
