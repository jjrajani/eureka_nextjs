import listFiles from "api/utils/google/drive/listFiles";
import deleteFile from "api/utils/google/drive/deleteFile";

export default async (req, res) => {
  const files = await listFiles();
  files.forEach((file) => {
    deleteFile(file.id);
  });

  res.status(200).json({ success: "Files deleted" });
  // res.status(200).json({ success: "Commented out: Files not deleted" });
};
