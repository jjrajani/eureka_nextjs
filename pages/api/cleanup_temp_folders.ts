import type { NextApiRequest, NextApiResponse } from "next";
import fs, { readdirSync } from "node:fs";
import path from "path";
import moment from "moment";
import { BASE_FILE_PATH } from "api/routes/generate_pdf/utils/createTempFile";

const getDirectories = (source: string, todaysDir: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((dir) => dir !== todaysDir);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const todaysDir = moment().format("MM_DD_YYYY");
  const tmpdir = BASE_FILE_PATH;
  const dirs = getDirectories(tmpdir, todaysDir);

  if (dirs.length > 0) {
    dirs.forEach((dir) => {
      const dirPath = path.join(tmpdir, dir);
      fs.rmdir(dirPath, { recursive: true }, (err) => {
        if (err) {
          throw err;
        }

        console.log(`${dirPath} is deleted!`);
      });
    });
    res.status(200).json(`Dirs ${dirs.join(",")} deleted`);
  } else {
    res.status(200).json(`No dirs to delete`);
  }
};

export default handler;
