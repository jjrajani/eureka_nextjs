import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = req.query.filePath;

  try {
    fs.unlinkSync(`${filePath}`);
    res.status(200).json(`File deleted: ${filePath}`);
    return;
    //file removed
  } catch (err) {
    console.error(err);
    res.status(500).json(`Error deleting file: ${err}`);
    return;
  }
};

export default handler;
