// @ts-nocheck
import { drive } from "api/utils/google/apis";
import listFiles from "api/utils/google/drive/listFiles";

const deleteFile = async (fileId: string) => {
  try {
    const res = await drive?.files?.delete({
      fileId,
    });

    console.log("deleted", res?.data, res?.status);
  } catch (error) {
    if (error?.mesage) {
      console.log("error", error?.message);
    } else {
      console.log("error", error);
    }
  }
};

export const deleteAllFiles = async () => {
  const files = await listFiles();
  if (files) {
    files.forEach((file) => {
      drive?.files?.delete({
        fileId: file?.id,
      });
    });
  }
};

export default deleteFile;
