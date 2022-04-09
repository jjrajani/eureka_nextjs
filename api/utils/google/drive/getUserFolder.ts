import { driveClient } from "api/utils/google/apis";
import { DRESSResultsFolderId } from 'utils/constants';

const getUserFolder = async (folderName: string) => {
  const drive = driveClient();
  try {
    let q = `mimeType = 'application/vnd.google-apps.folder' and name contains '${folderName}' and trashed = false and '${DRESSResultsFolderId}' in parents`;

    const res = await drive.files.list({ q });

    if (res?.data?.files?.length === 0) {
      return false;
    } else if (res?.data?.files?.length === 1) {
      return res?.data?.files[0];
    } else {
      console.log("more than 1 folder with that name");
      return false;
    }
  } catch (error) {
    if (error?.mesage) {
      console.log("error", error?.message);
    } else {
      console.log("error", error);
    }
  }
};

export default getUserFolder;
