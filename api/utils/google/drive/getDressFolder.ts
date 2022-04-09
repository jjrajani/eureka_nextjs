import { driveClient } from "api/utils/google/apis";
import { DRESSResultsFolderId } from 'utils/constants';

const getDressFolder = async () => {
  const drive = driveClient();
  try {
    const dressFolder = await drive.files.get({
      fileId: DRESSResultsFolderId
    })

    return dressFolder.data;

  } catch (error) {
    if (error?.mesage) {
      console.log("error", error?.message);
    } else {
      console.log("error", error);
    }
  }
};

export default getDressFolder;
