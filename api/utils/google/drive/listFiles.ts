import { drive } from "api/utils/google/apis";

const listFiles = async () => {
  try {
    const res = await drive.files.list();
    console.log("files", res.data.files);
    return res.data.files;
  } catch (error) {
    console.log("error", error.message);
  }
};

export default listFiles;
