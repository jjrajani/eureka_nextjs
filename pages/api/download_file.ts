import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = req?.query?.filePath as string;
  if (!filePath) {
    res.status(422).json("Error downloading file: filePath param required");
    return;
  }

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": stat.size,
  });

  var readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};

export default handler;
