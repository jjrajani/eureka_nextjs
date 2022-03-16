import { driveClient } from "api/utils/google/apis";

const listFiles = async () => {
  const drive = driveClient();
  try {
    const res = await drive.files.list();
    console.log("files", res.data.files);
    return res.data.files;
  } catch (error) {
    if (error?.mesage) {
      console.log("error", error?.message);
    } else {
      console.log("error", error);
    }
  }
};

export default listFiles;
